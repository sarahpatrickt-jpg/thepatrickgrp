/**
 * Fetches latest Redfin city-level market data for SE Michigan
 * and updates data/cities.ts with fresh median price, DOM, and price/sqft.
 *
 * Usage:  npx tsx scripts/update-market-data.ts
 * Or:     npm run update-market-data
 *
 * Uses a 3-month rolling average to smooth volatility in small markets.
 * Redfin data is free, public, and requires no API key.
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// ── Map our city slugs → Redfin city names ──────────────────────────────────

const CITY_MAP: Record<string, string> = {
  "birmingham-mi": "Birmingham",
  "bloomfield-hills-mi": "Bloomfield Hills",
  "rochester-mi": "Rochester",
  "rochester-hills-mi": "Rochester Hills",
  "troy-mi": "Troy",
  "royal-oak-mi": "Royal Oak",
  "lake-orion-mi": "Lake Orion",
  "oxford-mi": "Oxford",
  "novi-mi": "Novi",
  "sterling-heights-mi": "Sterling Heights",
  "st-clair-shores-mi": "St. Clair Shores",
  "warren-mi": "Warren",
  "grosse-pointe-mi": "Grosse Pointe",
  "northville-mi": "Northville",
  "plymouth-mi": "Plymouth",
  "livonia-mi": "Livonia",
  "detroit-mi": "Detroit",
  "romulus-mi": "Romulus",
};

// These townships don't appear in Redfin city-level data.
// They need Flex MLS or manual updates.
const MANUAL_CITIES = [
  "bloomfield-township-mi",
  "west-bloomfield-mi",
  "clarkston-mi",
  "shelby-township-mi",
  "clinton-township-mi",
  "macomb-township-mi",
];

const REDFIN_URL =
  "https://redfin-public-data.s3.us-west-2.amazonaws.com/redfin_market_tracker/city_market_tracker.tsv000.gz";

// ── Types ────────────────────────────────────────────────────────────────────

interface RedfinRow {
  periodBegin: string;
  city: string;
  medianSalePrice: number;
  medianSalePriceYoy: number;
  medianPpsf: number;
  medianDom: number;
  inventory: number;
}

interface CityStats {
  medianPrice: number;
  medianPriceChange: number;
  daysOnMarket: number;
  pricePerSqft: number;
  monthsUsed: string[];
  inventory?: number;
}

// ── Fetch and parse ──────────────────────────────────────────────────────────

function fetchRedfinData(): RedfinRow[] {
  console.log("Downloading Redfin city market data (~1 GB compressed)...");
  console.log("This takes 30–60 seconds depending on your connection.\n");

  const redfinCities = new Set(Object.values(CITY_MAP));

  // Stream download → gunzip → grep Michigan lines only (filter in Node.js)
  const cmd = `curl -s "${REDFIN_URL}" | gunzip | grep -i "Michigan"`;

  let raw: string;
  try {
    raw = execSync(cmd, {
      encoding: "utf-8",
      maxBuffer: 200 * 1024 * 1024,
      timeout: 180_000,
    });
  } catch (e) {
    console.error("Failed to download Redfin data. Check your internet connection.");
    process.exit(1);
  }

  const rows: RedfinRow[] = [];
  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    const cols = line.split("\t").map((c) => c.replace(/"/g, ""));

    // Filter: All Residential, recent months only
    if (cols[11] !== "All Residential") continue;
    const period = cols[0];
    if (!period.startsWith("2026-") && !period.startsWith("2025-1")) continue;

    const city = cols[8];
    if (!redfinCities.has(city)) continue;

    const medianSalePrice = parseFloat(cols[13]);
    if (!medianSalePrice || isNaN(medianSalePrice)) continue;

    rows.push({
      periodBegin: cols[0],
      city,
      medianSalePrice,
      medianSalePriceYoy: parseFloat(cols[15]) || 0,
      medianPpsf: parseFloat(cols[19]) || 0,
      medianDom: parseFloat(cols[40]) || 0,
      inventory: parseFloat(cols[34]) || 0,
    });
  }

  return rows;
}

// ── Compute 3-month rolling averages ─────────────────────────────────────────

function computeStats(rows: RedfinRow[]): Map<string, CityStats> {
  // Group by city
  const byCity = new Map<string, RedfinRow[]>();
  for (const row of rows) {
    const existing = byCity.get(row.city) || [];
    existing.push(row);
    byCity.set(row.city, existing);
  }

  const result = new Map<string, CityStats>();

  for (const [city, cityRows] of byCity) {
    // Sort by date descending, take most recent 3 months
    cityRows.sort((a, b) => b.periodBegin.localeCompare(a.periodBegin));
    const recent = cityRows.slice(0, 3);

    if (recent.length === 0) continue;

    const avgPrice = Math.round(
      recent.reduce((s, r) => s + r.medianSalePrice, 0) / recent.length
    );
    const avgPpsf = Math.round(
      recent.reduce((s, r) => s + r.medianPpsf, 0) / recent.length
    );
    const avgDom = Math.round(
      recent.reduce((s, r) => s + r.medianDom, 0) / recent.length
    );

    // YOY: use the most recent month's YOY (already computed by Redfin)
    // but cap it to ±30% to filter outliers from small sample sizes
    let yoy = recent[0].medianSalePriceYoy * 100;
    yoy = Math.max(-30, Math.min(30, yoy));
    yoy = Math.round(yoy * 10) / 10;

    const latestInventory = recent[0].inventory;

    result.set(city, {
      medianPrice: avgPrice,
      medianPriceChange: yoy,
      daysOnMarket: avgDom,
      pricePerSqft: avgPpsf,
      monthsUsed: recent.map((r) => r.periodBegin),
      inventory: latestInventory,
    });
  }

  return result;
}

// ── Update cities.ts ─────────────────────────────────────────────────────────

function updateCitiesFile(stats: Map<string, CityStats>): number {
  const citiesPath = path.join(__dirname, "..", "data", "cities.ts");
  let content = fs.readFileSync(citiesPath, "utf-8");

  let updated = 0;

  for (const [slug, redfinName] of Object.entries(CITY_MAP)) {
    const cityStats = stats.get(redfinName);
    if (!cityStats) {
      console.log(`  ⚠  ${redfinName} — no data found in Redfin`);
      continue;
    }

    // Find the marketStats block for this city using its slug as anchor
    const slugPattern = new RegExp(
      `slug: "${slug}",[\\s\\S]*?marketStats:\\s*\\{[\\s\\S]*?\\}`,
    );
    const match = content.match(slugPattern);
    if (!match) {
      console.log(`  ⚠  ${slug} — could not find marketStats block in cities.ts`);
      continue;
    }

    const oldBlock = match[0];

    // Extract and replace just the marketStats object
    const statsPattern =
      /marketStats:\s*\{\s*medianPrice:\s*\d+,\s*medianPriceChange:\s*[-\d.]+,\s*daysOnMarket:\s*\d+,\s*pricePerSqft:\s*\d+,?\s*\}/;
    const statsMatch = oldBlock.match(statsPattern);
    if (!statsMatch) {
      console.log(`  ⚠  ${slug} — marketStats pattern mismatch`);
      continue;
    }

    const newStatsBlock = `marketStats: {\n      medianPrice: ${cityStats.medianPrice},\n      medianPriceChange: ${cityStats.medianPriceChange},\n      daysOnMarket: ${cityStats.daysOnMarket},\n      pricePerSqft: ${cityStats.pricePerSqft},\n    }`;

    content = content.replace(statsMatch[0], newStatsBlock);
    updated++;

    console.log(
      `  ✓  ${redfinName.padEnd(20)} $${cityStats.medianPrice.toLocaleString().padStart(10)}  ${(cityStats.medianPriceChange >= 0 ? "+" : "") + cityStats.medianPriceChange + "%"}  ${cityStats.daysOnMarket} DOM  $${cityStats.pricePerSqft}/sqft  (${cityStats.monthsUsed.length}mo avg)`,
    );
  }

  fs.writeFileSync(citiesPath, content, "utf-8");
  return updated;
}

// ── Generate market report summary ───────────────────────────────────────────

function printMarketReport(stats: Map<string, CityStats>): void {
  console.log("\n═══════════════════════════════════════════════════════");
  console.log("  SOUTHEAST MICHIGAN MARKET SUMMARY");
  console.log("  3-Month Rolling Average (Redfin Public Data)");
  console.log("═══════════════════════════════════════════════════════\n");

  const sortedEntries = [...stats.entries()].sort(
    (a, b) => b[1].medianPrice - a[1].medianPrice,
  );

  console.log(
    "City".padEnd(22) +
      "Median Price".padStart(14) +
      "YOY".padStart(8) +
      "$/sqft".padStart(9) +
      "DOM".padStart(6) +
      "Inv.".padStart(7),
  );
  console.log("─".repeat(66));

  for (const [city, s] of sortedEntries) {
    const yoyStr = (s.medianPriceChange >= 0 ? "+" : "") + s.medianPriceChange + "%";
    console.log(
      city.padEnd(22) +
        ("$" + s.medianPrice.toLocaleString()).padStart(14) +
        yoyStr.padStart(8) +
        ("$" + s.pricePerSqft).padStart(9) +
        String(s.daysOnMarket).padStart(6) +
        String(s.inventory ?? "—").padStart(7),
    );
  }
  console.log("");
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Redfin Market Data → cities.ts updater         ║");
  console.log("║  Source: redfin.com/news/data-center (public)   ║");
  console.log("╚══════════════════════════════════════════════════╝\n");

  const rows = fetchRedfinData();
  console.log(`Found ${rows.length} Michigan rows across recent months.\n`);

  const stats = computeStats(rows);
  printMarketReport(stats);

  console.log("Updating data/cities.ts...\n");
  const count = updateCitiesFile(stats);

  console.log(`\n✓ Updated ${count} of ${Object.keys(CITY_MAP).length} cities.`);

  if (MANUAL_CITIES.length > 0) {
    console.log(`\n⚠ ${MANUAL_CITIES.length} townships need manual update (not in Redfin city data):`);
    for (const slug of MANUAL_CITIES) {
      console.log(`   - ${slug}`);
    }
    console.log("   → Use Flex MLS or update these manually in data/cities.ts\n");
  }

  console.log("Next steps:");
  console.log("  1. Review the changes:  git diff data/cities.ts");
  console.log("  2. Build and verify:    npm run build");
  console.log("  3. Commit and push:     git add data/cities.ts && git commit && git push\n");
}

main().catch(console.error);
