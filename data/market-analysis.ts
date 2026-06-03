/**
 * Market Analysis Data Module
 *
 * Aggregated market metrics by city, computed nightly from Spark API listings.
 * Synced via scripts/update-listings-nightly.ts
 *
 * Data includes:
 * - Active inventory count
 * - Median list price (active + pending)
 * - Median days on market (active only)
 * - Average price per square foot
 * - 30-day sold count and median sold price
 * - Last sync timestamp
 *
 * MichRIC® Compliance: Aggregates only, no individual listing data exposed.
 */

/**
 * Market analysis metrics for a single city
 */
export interface MarketAnalysis {
  /** Number of active listings */
  activeCount: number;

  /** Median list price for active listings */
  medianPrice: number;

  /** Median days on market for active listings */
  medianDOM: number;

  /** Average price per square foot for active listings */
  avgPricePerSqft: number;

  /** Number of listings sold in the past 30 days */
  soldCount30d: number;

  /** Median price for listings sold in the past 30 days */
  soldMedianPrice: number;

  /** ISO timestamp of when this data was last synced */
  lastUpdated: string;
}

/**
 * Market analysis keyed by city slug
 */
export const marketAnalysisByCity: Record<string, MarketAnalysis> = {
  // ─── OAKLAND COUNTY ───────────────────────────────────────────────────────

  "birmingham-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "bloomfield-hills-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "bloomfield-township-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "clarkston-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "lake-orion-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "orchard-lake-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "royal-oak-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "troy-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "west-bloomfield-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },

  // ─── LIVINGSTON COUNTY ────────────────────────────────────────────────────

  "brighton-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "howell-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "northville-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "plymouth-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },

  // ─── MACOMB COUNTY ────────────────────────────────────────────────────────

  "macomb-township-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "st-clair-shores-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "warren-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },

  // ─── WASHTENAW COUNTY ────────────────────────────────────────────────────

  "ann-arbor-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "saline-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },

  // ─── WAYNE COUNTY ────────────────────────────────────────────────────────

  "detroit-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "grosse-pointe-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
  "grosse-pointe-woods-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },

  // ─── GENESEE COUNTY ──────────────────────────────────────────────────────

  "flint-mi": {
    activeCount: 0,
    medianPrice: 0,
    medianDOM: 0,
    avgPricePerSqft: 0,
    soldCount30d: 0,
    soldMedianPrice: 0,
    lastUpdated: new Date().toISOString(),
  },
};

/**
 * Helper to get market analysis for a specific city
 * @param citySlug City slug (e.g., "birmingham-mi")
 * @returns Market analysis for the city, or undefined if not found
 */
export function getMarketAnalysis(citySlug: string): MarketAnalysis | undefined {
  return marketAnalysisByCity[citySlug];
}

/**
 * Helper to get all market analysis data
 * @returns All market analysis keyed by city slug
 */
export function getAllMarketAnalysis(): Record<string, MarketAnalysis> {
  return marketAnalysisByCity;
}

/**
 * Helper to get the most recent sync time across all cities
 * @returns ISO timestamp of the most recent sync
 */
export function getLastSyncTime(): string {
  const timestamps = Object.values(marketAnalysisByCity)
    .map((m) => new Date(m.lastUpdated).getTime())
    .sort((a, b) => b - a);

  if (timestamps.length === 0) return new Date().toISOString();
  return new Date(timestamps[0]).toISOString();
}
