/**
 * Fetches listings from Spark API (MichRIC, RealComp, MiRealSource)
 * and updates data/listings.ts and data/market-analysis.ts with fresh data.
 *
 * Usage:  npx tsx scripts/update-listings-nightly.ts
 * Or:     npm run sync-listings
 *
 * Requires: SPARK_API_KEY environment variable (from Vercel or .env.local)
 *
 * Scope:
 * - Active and pending listings in SE Michigan (24 cities)
 * - Past 90 days of sold listings
 * - Enriches with featured flags (O&S properties + top 3 by price)
 * - Computes market-analysis aggregates (count, median price, DOM, price/sqft, sold)
 * - Commits + pushes to GitHub (if git is available and branch is dirty)
 *
 * MichRIC® Compliance:
 * - No raw-data export (static JS objects)
 * - Aggregates only in market-analysis API
 * - All listings link to approved oakandstonerealestate.com interface
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// ── Configuration ────────────────────────────────────────────────────────────

const SPARK_API_BASE = "https://replication.sparkapi.com/v1";
const SPARK_API_KEY = process.env.SPARK_API_KEY;

// MLS IDs from MichRIC IDX sharing agreement (MichRIC + RealComp + MiRealSource).
// These are the _filter values Evelyn Wheaton / MichRIC provided.
// Override via SPARK_MLS_IDS env var (comma-separated) if they change.
const SPARK_MLS_IDS: string[] = process.env.SPARK_MLS_IDS
  ? process.env.SPARK_MLS_IDS.split(",").map((s) => s.trim())
  : [
      "20220915205347338491000000", // MichRIC
      "20221017200016026686000000", // RealComp
      "20140402194227539417000000", // MiRealSource
    ];

// All 24 SE Michigan cities (from data/cities.ts)
const SE_MICHIGAN_CITIES = [
  "birmingham-mi",
  "bloomfield-hills-mi",
  "bloomfield-township-mi",
  "clarkston-mi",
  "lake-orion-mi",
  "orchard-lake-mi",
  "royal-oak-mi",
  "troy-mi",
  "west-bloomfield-mi",
  "brighton-mi",
  "howell-mi",
  "northville-mi",
  "plymouth-mi",
  "macomb-township-mi",
  "st-clair-shores-mi",
  "warren-mi",
  "ann-arbor-mi",
  "saline-mi",
  "detroit-mi",
  "grosse-pointe-mi",
  "grosse-pointe-woods-mi",
  "flint-mi",
];

// Map city slugs to their zip codes (from cities.ts)
const CITY_ZIP_MAP: Record<string, string[]> = {
  "birmingham-mi": ["48009"],
  "bloomfield-hills-mi": ["48302", "48304"],
  "bloomfield-township-mi": ["48301", "48304"],
  "clarkston-mi": ["48346"],
  "lake-orion-mi": ["48361"],
  "orchard-lake-mi": ["48323"],
  "royal-oak-mi": ["48067", "48068"],
  "troy-mi": ["48084", "48083"],
  "west-bloomfield-mi": ["48322", "48323"],
  "brighton-mi": ["48116"],
  "howell-mi": ["48843"],
  "northville-mi": ["48167"],
  "plymouth-mi": ["48170"],
  "macomb-township-mi": ["48044"],
  "st-clair-shores-mi": ["48080"],
  "warren-mi": ["48089", "48090", "48091"],
  "ann-arbor-mi": ["48103", "48104", "48108"],
  "saline-mi": ["48176"],
  "detroit-mi": ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210", "48211", "48212", "48213", "48214", "48215", "48216", "48217", "48218", "48219", "48220", "48221", "48222", "48223", "48224", "48225", "48226", "48227", "48228", "48229", "48230", "48231", "48232", "48233", "48234", "48235", "48236", "48237", "48238", "48239"],
  "grosse-pointe-mi": ["48230"],
  "grosse-pointe-woods-mi": ["48236"],
  "flint-mi": ["48502", "48503", "48504", "48505", "48506"],
};

// OAuth credentials (would come from Vercel env in production)
const OAUTH_CLIENT_ID = process.env.SPARK_OAUTH_CLIENT_ID || "demo";
const OAUTH_CLIENT_SECRET = process.env.SPARK_OAUTH_CLIENT_SECRET || "demo";

// ── Types ────────────────────────────────────────────────────────────────────

interface SparkListing {
  ListingKey: string;
  MlsId: string;
  StreetAddress: string;
  City: string;
  PostalCode: string;
  ListPrice: number;
  Bedrooms: number;
  Bathrooms: number;
  BuildingAreaTotal: number;
  DaysOnMarket: number;
  ListingStatus: string; // "Active", "Pending", "Sold"
  PropertyType: string; // "Single Family Attached", "Condo", "Townhouse", etc.
  ListingLastModified: string; // ISO timestamp
}

interface Listing {
  id: string;
  mlsNumber: string;
  address: string;
  city: string;
  slug: string;
  zip: string;
  listPrice: number;
  beds: number;
  baths: number;
  sqft: number;
  daysOnMarket: number;
  status: "active" | "pending" | "sold";
  propertyType: string;
  imageUrl: string;
  agentNotes?: string;
  isFeatured: boolean;
  sparkListingId: string;
  lastUpdated: string;
}

interface MarketAnalysis {
  activeCount: number;
  medianPrice: number;
  medianDOM: number;
  avgPricePerSqft: number;
  soldCount30d: number;
  soldMedianPrice: number;
  lastUpdated: string;
}

// ── Spark API Fetch ──────────────────────────────────────────────────────────

async function getSparkToken(): Promise<string> {
  /**
   * In production, this would use OAuth.
   * For MVP, SPARK_API_KEY is passed as the auth token.
   * See Spark API docs: https://sparkapi.com/docs/authentication/
   */
  if (!SPARK_API_KEY) {
    throw new Error(
      "SPARK_API_KEY environment variable not set. Set it in Vercel or .env.local",
    );
  }
  return SPARK_API_KEY;
}

async function fetchSparkListings(
  status: "active" | "pending" | "sold",
): Promise<SparkListing[]> {
  /**
   * Fetch from Spark API using MlsId filter (per MichRIC IDX agreement).
   * This pulls MichRIC + RealComp + MiRealSource in a single query set.
   * Rate limit: 1,500 requests per 5 minutes. Pages of 100.
   */

  const token = await getSparkToken();
  const allListings: SparkListing[] = [];

  // Status filter
  const statusFilter =
    status === "active" ? "Active" : status === "pending" ? "Pending" : "Sold";

  // MlsId filter — covers all three data sources per MichRIC sharing agreement
  const mlsFilter = SPARK_MLS_IDS.map((id) => `MlsId Eq '${id}'`).join(" Or ");

  // Date filter for sold listings (past 90 days)
  let dateFilter = "";
  if (status === "sold") {
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const dateStr = ninetyDaysAgo.toISOString().split("T")[0];
    dateFilter = ` AND ListingLastModified GE '${dateStr}'`;
  }

  // Filter to SE Michigan by state + status + MLS source
  const filter = `StateOrProvince Eq 'MI' AND ListingStatus Eq '${statusFilter}' AND (${mlsFilter})${dateFilter}`;

  let page = 1;
  const pageSize = 100;

  try {
    while (true) {
      console.log(`  Fetching ${statusFilter} page ${page}...`);

      const url = new URL(`${SPARK_API_BASE}/listings`);
      url.searchParams.set("_filter", filter);
      url.searchParams.set("_limit", String(pageSize));
      url.searchParams.set("_offset", String((page - 1) * pageSize));
      url.searchParams.set("_expand", "none"); // Don't expand related resources

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "User-Agent": "thepatrickgrp-idx-sync/1.0",
        },
      });

      if (!response.ok) {
        console.error(`Spark API error [${response.status}]: ${response.statusText}`);
        const body = await response.text();
        console.error("Response:", body);
        throw new Error(`Spark API returned ${response.status}`);
      }

      const data = (await response.json()) as { value?: SparkListing[] };
      const listings = data.value || [];

      if (listings.length === 0) break; // No more pages

      allListings.push(...listings);
      page++;

      // Rate limit safety: ~500-600 requests per nightly run is safe
      // Log progress every 5 pages
      if (page % 5 === 0) {
        console.log(`    (${allListings.length} ${statusFilter} listings so far)`);
      }
    }
  } catch (error) {
    console.error(`Failed to fetch ${statusFilter} listings:`, error);
    throw error;
  }

  return allListings;
}

// ── Transform Spark → Internal Format ────────────────────────────────────────

function normalizeListings(
  sparkListings: SparkListing[],
  citySlug: string,
): Listing[] {
  return sparkListings.map((s) => ({
    id: s.ListingKey,
    mlsNumber: s.MlsId,
    address: s.StreetAddress,
    city: s.City,
    slug: citySlug,
    zip: s.PostalCode,
    listPrice: s.ListPrice || 0,
    beds: s.Bedrooms || 0,
    baths: s.Bathrooms || 0,
    sqft: s.BuildingAreaTotal || 0,
    daysOnMarket: s.DaysOnMarket || 0,
    status: (
      s.ListingStatus === "Active"
        ? "active"
        : s.ListingStatus === "Pending"
          ? "pending"
          : "sold"
    ) as "active" | "pending" | "sold",
    propertyType: s.PropertyType || "Other",
    imageUrl: "", // Would be populated from MLS data or photo API
    isFeatured: false, // Set below
    sparkListingId: s.ListingKey,
    lastUpdated: new Date().toISOString(),
  }));
}

// ── Mark Featured Listings ───────────────────────────────────────────────────

function markFeatured(allListings: Listing[]): Listing[] {
  /**
   * Featured = Oak & Stone properties + top 3 most expensive by price
   *
   * For MVP, we assume O&S properties have a specific pattern or are marked.
   * This placeholder assumes all listings are marked isFeatured=false initially.
   */

  // TODO: Add logic to detect O&S properties (maybe by agent, domain, or MLS note)
  const oakAndStoneListings = allListings.filter((l) => {
    // Placeholder: check if agentNotes contains "Oak & Stone" or similar
    return l.agentNotes?.includes("Oak & Stone") || false;
  });

  // Mark O&S listings as featured
  for (const listing of oakAndStoneListings) {
    listing.isFeatured = true;
  }

  // Mark top 3 most expensive (non-sold) as featured
  const nonSoldListings = allListings
    .filter((l) => l.status !== "sold")
    .sort((a, b) => b.listPrice - a.listPrice)
    .slice(0, 3);

  for (const listing of nonSoldListings) {
    listing.isFeatured = true;
  }

  return allListings;
}

// ── Update listings.ts ───────────────────────────────────────────────────────

function updateListingsFile(listingsByCity: Record<string, Listing[]>): void {
  const listingsPath = path.join(__dirname, "..", "data", "listings.ts");

  // Read current file to get the top/bottom structure
  let template = fs.readFileSync(listingsPath, "utf-8");

  // Find the listingsByCity export and replace its contents
  const startMarker = 'export const listingsByCity: ListingsByCity = {';
  const endMarker = '};';

  const startIdx = template.indexOf(startMarker);
  const endIdx = template.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error("Could not find listingsByCity structure in data/listings.ts");
  }

  // Build new listings object
  let newListingsContent = startMarker + "\n";

  const sortedCities = SE_MICHIGAN_CITIES.sort();
  for (const citySlug of sortedCities) {
    const listings = listingsByCity[citySlug] || [];
    const listingsJson = JSON.stringify(listings, null, 2);

    newListingsContent += `\n  "${citySlug}": ${listingsJson},\n`;
  }

  newListingsContent += "\n" + endMarker;

  // Replace in template
  const updatedContent =
    template.substring(0, startIdx) +
    newListingsContent +
    template.substring(endIdx + endMarker.length);

  fs.writeFileSync(listingsPath, updatedContent, "utf-8");
  console.log(`✓ Updated ${listingsPath}`);
}

// ── Compute Market Analysis ──────────────────────────────────────────────────

function computeMarketAnalysis(
  listingsByCity: Record<string, Listing[]>,
): Record<string, MarketAnalysis> {
  const analysis: Record<string, MarketAnalysis> = {};

  for (const citySlug of SE_MICHIGAN_CITIES) {
    const listings = listingsByCity[citySlug] || [];

    const activeListing = listings.filter((l) => l.status === "active");
    const soldListings = listings.filter(
      (l) =>
        l.status === "sold" &&
        new Date(l.lastUpdated).getTime() >
          Date.now() - 30 * 24 * 60 * 60 * 1000, // Last 30 days
    );

    const medianPrice =
      activeListing.length > 0
        ? activeListing
            .map((l) => l.listPrice)
            .sort((a, b) => a - b)[Math.floor(activeListing.length / 2)]
        : 0;

    const medianDOM =
      activeListing.length > 0
        ? activeListing
            .map((l) => l.daysOnMarket)
            .sort((a, b) => a - b)[Math.floor(activeListing.length / 2)]
        : 0;

    const avgPricePerSqft =
      activeListing.length > 0
        ? Math.round(
            activeListing.reduce((sum, l) => sum + (l.listPrice / l.sqft || 0), 0) /
              activeListing.length,
          )
        : 0;

    const soldMedianPrice =
      soldListings.length > 0
        ? soldListings
            .map((l) => l.listPrice)
            .sort((a, b) => a - b)[Math.floor(soldListings.length / 2)]
        : 0;

    analysis[citySlug] = {
      activeCount: activeListing.length,
      medianPrice,
      medianDOM,
      avgPricePerSqft,
      soldCount30d: soldListings.length,
      soldMedianPrice,
      lastUpdated: new Date().toISOString(),
    };
  }

  return analysis;
}

function updateMarketAnalysisFile(
  analysis: Record<string, MarketAnalysis>,
): void {
  const analysisPath = path.join(__dirname, "..", "data", "market-analysis.ts");

  const content = `/**
 * Market Analysis Data
 *
 * Auto-generated by scripts/update-listings-nightly.ts
 * Synced nightly from Spark API
 *
 * Includes: active inventory, median price, median DOM, price/sqft, 30-day sold activity
 */

export interface MarketAnalysis {
  activeCount: number;
  medianPrice: number;
  medianDOM: number;
  avgPricePerSqft: number;
  soldCount30d: number;
  soldMedianPrice: number;
  lastUpdated: string;
}

export const marketAnalysisByCity: Record<string, MarketAnalysis> = ${JSON.stringify(analysis, null, 2)};

/**
 * Helper to get market analysis for a specific city
 */
export function getMarketAnalysis(citySlug: string): MarketAnalysis | undefined {
  return marketAnalysisByCity[citySlug];
}

/**
 * Helper to get all market analysis data
 */
export function getAllMarketAnalysis(): Record<string, MarketAnalysis> {
  return marketAnalysisByCity;
}
`;

  fs.writeFileSync(analysisPath, content, "utf-8");
  console.log(`✓ Updated ${analysisPath}`);
}

// ── Git Commit & Push ────────────────────────────────────────────────────────

function commitAndPush(): void {
  try {
    // Check if git is available and there are changes
    const status = execSync("git status --porcelain", { encoding: "utf-8" });

    if (!status.trim()) {
      console.log("✓ No changes to commit");
      return;
    }

    // Stage the files
    execSync("git add data/listings.ts data/market-analysis.ts", {
      stdio: "inherit",
    });

    // Commit with timestamp
    const timestamp = new Date().toISOString().split("T")[0];
    execSync(
      `git commit -m "Update listings and market analysis (${timestamp})"`,
      { stdio: "inherit" },
    );

    // Push to origin
    execSync("git push origin HEAD", { stdio: "inherit" });

    console.log("✓ Committed and pushed to GitHub");
  } catch (error) {
    // Git may not be available in all environments (e.g., serverless functions)
    // This is OK — data is still updated locally
    console.warn(
      "⚠ Could not commit/push (git may not be available in this environment):",
      error instanceof Error ? error.message : error,
    );
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔═══════════════════════════════════════════════════════╗");
  console.log("║  Spark API Listings Sync → data/listings.ts          ║");
  console.log("║  MichRIC® | RealComp | MiRealSource                 ║");
  console.log("╚═══════════════════════════════════════════════════════╝\n");

  // ── Single bulk fetch (MlsId filter covers MichRIC + RealComp + MiRealSource) ──
  // Per MichRIC IDX agreement: filter by MlsId, not by zip/city.
  // We then distribute results into city buckets by PostalCode.

  console.log("Fetching active listings from all MLS sources...");
  const rawActive  = await fetchSparkListings("active");
  console.log(`  → ${rawActive.length} active`);

  console.log("Fetching pending listings...");
  const rawPending = await fetchSparkListings("pending");
  console.log(`  → ${rawPending.length} pending`);

  console.log("Fetching sold listings (past 90 days)...");
  const rawSold    = await fetchSparkListings("sold");
  console.log(`  → ${rawSold.length} sold`);

  // Build a zip → city-slug lookup from CITY_ZIP_MAP
  const zipToCitySlug: Record<string, string> = {};
  for (const [slug, zips] of Object.entries(CITY_ZIP_MAP)) {
    for (const zip of zips) {
      zipToCitySlug[zip] = slug;
    }
  }

  // Distribute raw listings into city buckets
  const listingsByCity: Record<string, Listing[]> = {};
  for (const citySlug of SE_MICHIGAN_CITIES) {
    listingsByCity[citySlug] = [];
  }

  for (const raw of [...rawActive, ...rawPending, ...rawSold]) {
    const citySlug = zipToCitySlug[raw.PostalCode];
    if (!citySlug) continue; // Outside our service area — skip
    const status: "active" | "pending" | "sold" =
      rawActive.includes(raw) ? "active" :
      rawPending.includes(raw) ? "pending" : "sold";
    const normalized = normalizeListings([raw], citySlug);
    if (normalized.length > 0) {
      listingsByCity[citySlug].push(...normalized);
    }
  }

  // Log city breakdown
  console.log("\nCity breakdown:");
  for (const slug of SE_MICHIGAN_CITIES) {
    const count = listingsByCity[slug]?.length ?? 0;
    if (count > 0) console.log(`  ${slug}: ${count}`);
  }

  // Mark featured listings
  const allListings = Object.values(listingsByCity).flat();
  markFeatured(allListings);

  // Update files
  console.log("\nUpdating data files...");
  updateListingsFile(listingsByCity);

  const analysis = computeMarketAnalysis(listingsByCity);
  updateMarketAnalysisFile(analysis);

  // Commit and push
  console.log("\nCommitting changes...");
  commitAndPush();

  // Print summary
  console.log("\n═══════════════════════════════════════════════════════");
  console.log("  SYNC COMPLETE");
  console.log("═══════════════════════════════════════════════════════");
  console.log(`Total listings fetched: ${allListings.length}`);
  console.log(`Active: ${allListings.filter((l) => l.status === "active").length}`);
  console.log(`Pending: ${allListings.filter((l) => l.status === "pending").length}`);
  console.log(`Sold (90d): ${allListings.filter((l) => l.status === "sold").length}`);
  console.log(`Featured: ${allListings.filter((l) => l.isFeatured).length}\n`);
}

main().catch((error) => {
  console.error("FATAL ERROR:", error);
  process.exit(1);
});
