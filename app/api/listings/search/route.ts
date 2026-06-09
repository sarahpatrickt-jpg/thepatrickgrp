/**
 * GET /api/listings/search
 *
 * Searches cached listings with filtering and pagination.
 * Data is synced nightly from Spark API.
 *
 * Query params (all optional):
 * - city: City slug (e.g., "birmingham-mi")
 * - minPrice: Minimum list price (number)
 * - maxPrice: Maximum list price (number)
 * - beds: Minimum bedrooms (number)
 * - baths: Minimum bathrooms (number)
 * - status: Listing status ("active" | "pending" | "sold")
 * - sort: Sort order ("newest", "price-asc", "price-desc", "dom", "price-sqft")
 * - page: Page number (1-indexed, default 1)
 * - limit: Results per page (max 50, default 20)
 *
 * Response:
 * {
 *   "success": true,
 *   "listings": [...],
 *   "pagination": {
 *     "total": 123,
 *     "page": 1,
 *     "limit": 20,
 *     "pages": 7
 *   },
 *   "filters": { "city": "...", "minPrice": ..., ... }
 * }
 *
 * Caching: Cache-Control: public, max-age=3600 (1 hour)
 *
 * Analytics: Fires GA4 event "listing_search" on successful search.
 *
 * MichRIC® Compliance:
 * - Returns formatted cards only (no raw MLS numbers in query string)
 * - No CSV/bulk export (API returns paginated cards)
 * - All links point to approved oakandstonerealestate.com interface
 */

import { NextRequest, NextResponse } from "next/server";
import {
  searchListings,
  getActiveCountByCity,
  type ListingSearchCriteria,
  type Listing,
} from "@/data/listings";

// ── CORS ──────────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  "https://thepatrickgrp.com",
  "https://www.thepatrickgrp.com",
  "https://preview.thepatrickgrp.com", // Vercel preview deployments
  "http://localhost:3000", // Local dev
];

function getCorsHeaders(origin?: string) {
  const allowOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(request.headers.get("origin") || undefined),
  });
}

// ── Sorting ───────────────────────────────────────────────────────────────

type SortOption = "newest" | "price-asc" | "price-desc" | "dom" | "price-sqft";

function sortListings(listings: Listing[], sort: string): Listing[] {
  const sortKey = (sort as SortOption) || "newest";

  switch (sortKey) {
    case "price-asc":
      return listings.sort((a, b) => a.listPrice - b.listPrice);
    case "price-desc":
      return listings.sort((a, b) => b.listPrice - a.listPrice);
    case "dom":
      return listings.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
    case "price-sqft":
      return listings.sort(
        (a, b) => (a.listPrice / a.sqft || 0) - (b.listPrice / b.sqft || 0),
      );
    case "newest":
    default:
      return listings.sort(
        (a, b) =>
          new Date(b.lastUpdated).getTime() -
          new Date(a.lastUpdated).getTime(),
      );
  }
}

// ── GA4 Event Tracking ────────────────────────────────────────────────────

function fireListingSearchEvent(
  filterCount: number,
  resultCount: number,
  citySlug?: string,
): void {
  /**
   * Fire GA4 event via gtag.event() if window.gtag is available.
   * Called client-side via analytics.ts instead of server-side.
   * This function is here for documentation; actual event firing happens in browser.
   */
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "listing_search", {
      filters_applied: filterCount,
      results_found: resultCount,
      city: citySlug || "all",
    });
  }
}

// ── GET /api/listings/search ─────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;

    const city = searchParams.get("city") || undefined;
    const minPriceStr = searchParams.get("minPrice");
    const maxPriceStr = searchParams.get("maxPrice");
    const bedsStr = searchParams.get("beds");
    const bathsStr = searchParams.get("baths");
    const status = searchParams.get("status") as
      | "active"
      | "pending"
      | "sold"
      | null;
    const sort = searchParams.get("sort") || "newest";
    const pageStr = searchParams.get("page") || "1";
    const limitStr = searchParams.get("limit") || "20";

    // Validate and parse numeric parameters
    const minPrice = minPriceStr ? parseInt(minPriceStr, 10) : undefined;
    const maxPrice = maxPriceStr ? parseInt(maxPriceStr, 10) : undefined;
    const beds = bedsStr ? parseInt(bedsStr, 10) : undefined;
    const baths = bathsStr ? parseInt(bathsStr, 10) : undefined;
    const page = Math.max(1, parseInt(pageStr, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(limitStr, 10) || 20)); // Max 50 per page

    // Build search criteria — no limit so we get the true total for pagination
    const criteria: ListingSearchCriteria = {
      slug: city,
      minPrice,
      maxPrice,
      beds,
      baths,
      status: status || undefined,
    };

    // Search all matching listings, sort, then paginate
    const allResults = searchListings(criteria);
    const sorted = sortListings(allResults, sort);
    const offset = (page - 1) * limit;
    const paginatedResults = sorted.slice(offset, offset + limit);

    // Count active listings by city for sidebar/context
    const activeCountByCity = getActiveCountByCity();

    // Build response
    const response = {
      success: true,
      listings: paginatedResults,
      pagination: {
        total: sorted.length,
        page,
        limit,
        pages: Math.ceil(sorted.length / limit),
      },
      filters: {
        city: city || null,
        minPrice: minPrice || null,
        maxPrice: maxPrice || null,
        beds: beds || null,
        baths: baths || null,
        status: status || null,
        sort,
      },
      stats: {
        activeCountByCity, // Show inventory count for all cities (for sidebar)
      },
    };

    // Return with CORS headers and caching
    return NextResponse.json(response, {
      status: 200,
      headers: {
        ...getCorsHeaders(request.headers.get("origin") || undefined),
        "Cache-Control": "public, max-age=3600", // 1 hour
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("[/api/listings/search] Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to search listings",
      },
      {
        status: 500,
        headers: {
          ...getCorsHeaders(request.headers.get("origin") || undefined),
          "Content-Type": "application/json",
        },
      },
    );
  }
}
