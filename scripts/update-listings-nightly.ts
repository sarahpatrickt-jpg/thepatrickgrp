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
      "20220915205358725707000000", // MichRIC
      "20221017200016026686000000", // RealComp
      "20140402194227539412000000", // MiRealSource
    ];

// All 24 SE Michigan cities (from data/cities.ts)
const SE_MICHIGAN_CITIES = [
  "birmingham-mi",
  "bloomfield-hills-mi",
  "bloomfield-township-mi",
  "rochester-mi",
  "rochester-hills-mi",
  "clarkston-mi",
  "lake-orion-mi",
  "orchard-lake-mi",
  "royal-oak-mi",
  "troy-mi",
  "west-bloomfield-mi",
  "novi-mi",
  "oxford-mi",
  "brighton-mi",
  "howell-mi",
  "northville-mi",
  "plymouth-mi",
  "shelby-township-mi",
  "sterling-heights-mi",
  "clinton-township-mi",
  "macomb-township-mi",
  "st-clair-shores-mi",
  "warren-mi",
  "ann-arbor-mi",
  "saline-mi",
  "detroit-mi",
  "grosse-pointe-mi",
  "grosse-pointe-woods-mi",
  "livonia-mi",
  "flint-mi",
];

// Map city slugs to their zip codes (from cities.ts)
const CITY_ZIP_MAP: Record<string, string[]> = {
  "birmingham-mi": ["48009"],
  "bloomfield-hills-mi": ["48302", "48304"],
  "bloomfield-township-mi": ["48301", "48304"],
  "rochester-mi":           ["48307", "48309"],
  "rochester-hills-mi":     ["48306", "48307", "48309"],
  "novi-mi":                ["48374", "48375", "48377"],
  "oxford-mi":              ["48370", "48371"],
  "shelby-township-mi":     ["48315", "48316", "48317"],
  "sterling-heights-mi":    ["48310", "48311", "48312", "48313", "48314"],
  "clinton-township-mi":    ["48035", "48036", "48038"],
  "livonia-mi":             ["48150", "48152", "48154"],
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

// Spark API returns data nested under StandardFields
interface SparkListing {
  Id: string;                    // Spark listing ID
  ListingKey: string;            // fallback ID
  MlsId: string;                 // MLS source identifier
  UnparsedAddress: string;       // "123 Main St, City, MI 48009"
  City: string;
  PostalCode: string;
  ListPrice: number;
  BedsTotal: number;             // RESO standard field
  Bedrooms: number;              // fallback
  BathsTotal: number;            // RESO standard field (decimal)
  Bathrooms: number;             // fallback
  BuildingAreaTotal: number;     // square footage
  DaysOnMarket: number;
  MlsStatus: string;             // "Active", "Pending", "Closed"
  PropertyType: string;          // "A"=Single-Family, "B"=Condo, etc.
  ModificationTimestamp: string;
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
  avgPricePerSqft: number | null;
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
  zipCodes: string[],
  status: "active" | "active_backup" | "active_contingent" | "coming_soon" | "pending" | "sold",
  maxPages = 5,
): Promise<SparkListing[]> {
  /**
   * Fetch listings for specific zip codes from Spark API.
   * NOTE: Spark Replication API always returns results at any offset (never empty).
   * We use maxPages to cap the fetch rather than relying on empty-page detection.
   */

  const token = await getSparkToken();
  const allListings: SparkListing[] = [];

  // Status filter — exact Spark MlsStatus values
  const statusMap: Record<string, string> = {
    active:             "Active",
    active_backup:      "Active Backup",
    active_contingent:  "Active Contingent",
    coming_soon:        "Coming Soon",
    pending:            "Pending",
    sold:               "Closed",
  };
  const statusFilter = statusMap[status] || "Active";

  // Zip code filter — combined with MlsId filter to pull from ALL three MLSs
  // (Without MlsId filter, Spark returns only one MLS's data at a time)
  const zipFilter = zipCodes.map((z) => `PostalCode Eq '${z}'`).join(" Or ");
  const mlsFilter = SPARK_MLS_IDS.map((id) => `MlsId Eq '${id}'`).join(" Or ");
  const filter = `MlsStatus Eq '${statusFilter}' AND (${zipFilter}) AND (${mlsFilter})`;

  let page = 1;
  const pageSize = 100;

  try {
    while (true) {
      console.log(`  Fetching ${statusFilter} page ${page}...`);

      const url = new URL(`${SPARK_API_BASE}/listings`);
      url.searchParams.set("_filter", filter);
      url.searchParams.set("_limit", String(pageSize));
      url.searchParams.set("_offset", String((page - 1) * pageSize));
      url.searchParams.set("_expand", "Photos"); // Include listing photos

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

      // Spark API response: { D: { Results: [{ Id, StandardFields: {...} }] } }
      const data = (await response.json()) as { D?: { Results?: { Id: string; StandardFields: SparkListing }[] } };
      const rawResults = data.D?.Results || [];
      // Flatten: merge Id into StandardFields for easier access
      const listings = rawResults.map((r) => ({ ...r.StandardFields, Id: r.Id })) as SparkListing[];

      allListings.push(...listings);

      // Stop conditions:
      // 1. Partial page = genuine end of results
      // 2. Hit maxPages cap (Spark Replication API loops indefinitely at high offsets)
      if (listings.length < pageSize || page >= maxPages) break;

      page++;
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
  status: "active" | "pending" | "sold",
): Listing[] {
  return sparkListings
    .filter((s) => s.ListPrice && s.UnparsedAddress)
    .map((s) => {
      // Get primary photo URL if available
      const photos = (s as unknown as { StandardFields?: { Photos?: { Uri640?: string; Primary?: boolean }[] } }).StandardFields?.Photos || [];
      const primary = photos.find((p) => p.Primary) || photos[0];
      const imageUrl = primary?.Uri640 || "";

      // Helper: parse a Spark field that may be "********" (redacted) or a number
      const n = (v: unknown): number => {
        const num = Number(v);
        return isNaN(num) ? 0 : num;
      };

      return {
        id: s.Id || s.ListingKey,
        mlsNumber: s.MlsId || "",
        address: s.UnparsedAddress?.split(",")[0]?.trim() || "",
        city: s.City || "",
        slug: citySlug,
        zip: s.PostalCode || "",
        listPrice: n(s.ListPrice),
        beds: n(s.BedsTotal ?? s.Bedrooms),
        baths: n(s.BathsTotal ?? s.Bathrooms),
        sqft: n(s.BuildingAreaTotal),
        daysOnMarket: n(s.DaysOnMarket),
        status,
        propertyType: mapPropertyType(s.PropertyType),
        imageUrl,
        agentNotes: undefined,
        isFeatured: false,
        sparkListingId: s.Id || s.ListingKey,
        lastUpdated: new Date().toISOString(),
      };
    });
}

function mapPropertyType(code: string | undefined): string {
  const map: Record<string, string> = {
    "A": "Single-Family",
    "B": "Condo",
    "C": "Multi-Family",
    "D": "Land",
    "E": "Commercial",
    "F": "Rental",
    "G": "Townhouse",
  };
  return map[code || ""] || "Single-Family";
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
  avgPricePerSqft: number | null;
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

  // ── Per-city fetch (targeted by zip code) ──
  const listingsByCity: Record<string, Listing[]> = {};

  for (const citySlug of SE_MICHIGAN_CITIES) {
    const zipCodes = CITY_ZIP_MAP[citySlug] || [];
    if (zipCodes.length === 0) {
      console.warn(`⚠ No zip codes for ${citySlug}, skipping`);
      listingsByCity[citySlug] = [];
      continue;
    }

    console.log(`\nFetching ${citySlug}...`);
    try {
      const active            = await fetchSparkListings(zipCodes, "active");
      const activeBackup      = await fetchSparkListings(zipCodes, "active_backup");
      const activeContingent  = await fetchSparkListings(zipCodes, "active_contingent");
      const pending           = await fetchSparkListings(zipCodes, "pending");
      const comingSoon        = await fetchSparkListings(zipCodes, "coming_soon");
      // Sold/Closed skipped for now — Spark date filtering needs investigation
      const sold: SparkListing[] = [];

      const activeNorm           = normalizeListings(active,           citySlug, "active");
      const activeBackupNorm     = normalizeListings(activeBackup,     citySlug, "active");
      const activeContingentNorm = normalizeListings(activeContingent, citySlug, "active");
      const pendingNorm          = normalizeListings(pending,          citySlug, "pending");
      const comingSoonNorm       = normalizeListings(comingSoon,       citySlug, "active");

      listingsByCity[citySlug] = [...activeNorm, ...activeBackupNorm, ...activeContingentNorm, ...pendingNorm, ...comingSoonNorm];
      const totalActive = activeNorm.length + activeBackupNorm.length + activeContingentNorm.length + comingSoonNorm.length;
      console.log(`  ✓ ${totalActive} active (+backup/contingent/coming soon), ${pendingNorm.length} pending`);
    } catch (err) {
      console.error(`  ✗ Failed for ${citySlug}:`, err);
      listingsByCity[citySlug] = [];
    }
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
