/**
 * Listings Data Module
 *
 * Static TypeScript object for cached IDX listings from Spark API.
 * Synced nightly via scripts/update-listings-nightly.ts
 * Keyed by city slug for fast lookups.
 *
 * Compliance: No raw-data export possible (static JS objects).
 * All listings link to approved oakandstonerealestate.com interface.
 */

/* ── Listing interfaces ── */

export interface Listing {
  /** Unique Spark API listing ID */
  id: string;

  /** MLS Number (e.g., "12345678") */
  mlsNumber: string;

  /** Street address (e.g., "123 Main St") */
  address: string;

  /** City name */
  city: string;

  /** City slug (e.g., "birmingham-mi") — used for grouping by city */
  slug: string;

  /** ZIP code */
  zip: string;

  /** Listing price (numeric, e.g., 450000) */
  listPrice: number;

  /** Number of bedrooms (integer) */
  beds: number;

  /** Number of bathrooms (decimal, e.g., 2.5) */
  baths: number;

  /** Square footage (numeric) */
  sqft: number;

  /** Days on market (integer) */
  daysOnMarket: number;

  /** Listing status: active, pending, or sold */
  status: "active" | "pending" | "sold";

  /** Property type (e.g., "Single-Family", "Condo", "Townhouse", "Multi-Family") */
  propertyType: string;

  /** Image URL from Spark API (one hero image per listing) */
  imageUrl: string;

  /** Optional agent notes/remarks */
  agentNotes?: string;

  /** Featured flag: true if Oak & Stone property or top 3 most expensive */
  isFeatured: boolean;

  /** Spark API listing ID reference (same as id, for clarity) */
  sparkListingId: string;

  /** ISO timestamp of last sync (e.g., "2026-06-03T23:00:00Z") */
  lastUpdated: string;
}

/* ── Listings by city ── */

export type ListingsByCity = Record<string, Listing[]>;

export const listingsByCity: ListingsByCity = {
  // ─── OAKLAND COUNTY ───────────────────────────────────────────────────────

  "birmingham-mi": [],
  "bloomfield-hills-mi": [],
  "bloomfield-township-mi": [],
  "clarkston-mi": [],
  "lake-orion-mi": [],
  "orchard-lake-mi": [],
  "royal-oak-mi": [],
  "troy-mi": [],
  "west-bloomfield-mi": [],

  // ─── LIVINGSTON COUNTY ────────────────────────────────────────────────────

  "brighton-mi": [],
  "howell-mi": [],
  "northville-mi": [],
  "plymouth-mi": [],

  // ─── MACOMB COUNTY ────────────────────────────────────────────────────────

  "macomb-township-mi": [],
  "st-clair-shores-mi": [],
  "warren-mi": [],

  // ─── WASHTENAW COUNTY ────────────────────────────────────────────────────

  "ann-arbor-mi": [],
  "saline-mi": [],

  // ─── WAYNE COUNTY ────────────────────────────────────────────────────────

  "detroit-mi": [],
  "grosse-pointe-mi": [],
  "grosse-pointe-woods-mi": [],

  // ─── GENESEE COUNTY ──────────────────────────────────────────────────────

  "flint-mi": [],
};

/**
 * Helper to get all listings across all cities (flattened)
 * @returns Array of all listings
 */
export function getAllListings(): Listing[] {
  return Object.values(listingsByCity).flat();
}

/**
 * Helper to get a single listing by its ID
 * @param id Listing ID
 * @returns Listing if found, undefined otherwise
 */
export function getListingById(id: string): Listing | undefined {
  return getAllListings().find((listing) => listing.id === id);
}

/**
 * Helper to get listings by city slug
 * @param slug City slug (e.g., "birmingham-mi")
 * @returns Array of listings for that city, or empty if not found
 */
export function getListingsByCity(slug: string): Listing[] {
  return listingsByCity[slug] || [];
}

/**
 * Helper to get featured listings (limit optional)
 * @param limit Maximum number of results (default: 6)
 * @returns Array of featured listings, sorted by price descending
 */
export function getFeaturedListings(limit: number = 6): Listing[] {
  return getAllListings()
    .filter((listing) => listing.isFeatured)
    .sort((a, b) => b.listPrice - a.listPrice)
    .slice(0, limit);
}

/**
 * Helper to search listings by criteria
 * @param criteria Search filters (all optional)
 * @returns Array of matching listings
 */
export interface ListingSearchCriteria {
  slug?: string; // City slug filter
  minPrice?: number;
  maxPrice?: number;
  beds?: number; // Minimum beds
  baths?: number; // Minimum baths
  status?: "active" | "pending" | "sold";
  propertyType?: string;
  limit?: number; // Max results
  offset?: number; // Pagination offset
}

export function searchListings(criteria: ListingSearchCriteria): Listing[] {
  let results = getAllListings();

  // Filter by city
  if (criteria.slug) {
    results = results.filter((l) => l.slug === criteria.slug);
  }

  // Filter by price range
  if (criteria.minPrice !== undefined) {
    results = results.filter((l) => l.listPrice >= criteria.minPrice!);
  }
  if (criteria.maxPrice !== undefined) {
    results = results.filter((l) => l.listPrice <= criteria.maxPrice!);
  }

  // Filter by beds (minimum)
  if (criteria.beds !== undefined) {
    results = results.filter((l) => l.beds >= criteria.beds!);
  }

  // Filter by baths (minimum)
  if (criteria.baths !== undefined) {
    results = results.filter((l) => l.baths >= criteria.baths!);
  }

  // Filter by status
  if (criteria.status) {
    results = results.filter((l) => l.status === criteria.status);
  }

  // Filter by property type
  if (criteria.propertyType) {
    results = results.filter((l) => l.propertyType === criteria.propertyType);
  }

  // Pagination
  const offset = criteria.offset || 0;
  const limit = criteria.limit || 20;
  return results.slice(offset, offset + limit);
}

/**
 * Helper to count active listings by city
 * @returns Object keyed by city slug with active count
 */
export function getActiveCountByCity(): Record<string, number> {
  const counts: Record<string, number> = {};
  Object.keys(listingsByCity).forEach((slug) => {
    counts[slug] = listingsByCity[slug].filter((l) => l.status === "active").length;
  });
  return counts;
}
