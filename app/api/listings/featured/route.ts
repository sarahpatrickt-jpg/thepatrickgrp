/**
 * GET /api/listings/featured
 *
 * Returns featured listings (curated by isFeatured flag).
 * Featured listings are automatically marked by nightly sync:
 * - All Oak & Stone properties
 * - Top 3 most expensive active/pending listings
 *
 * Query params (all optional):
 * - city: Filter to specific city slug (e.g., "birmingham-mi")
 * - limit: Maximum number of results (default 6, max 50)
 *
 * Response:
 * {
 *   "success": true,
 *   "listings": [...],
 *   "count": 6,
 *   "city": "birmingham-mi" (if filtered)
 * }
 *
 * Caching: Cache-Control: public, max-age=3600 (1 hour)
 *
 * MichRIC® Compliance:
 * - Returns formatted cards only (no raw MLS numbers)
 * - All links point to approved oakandstonerealestate.com interface
 */

import { NextRequest, NextResponse } from "next/server";
import { getFeaturedListings, getListingsByCity } from "@/data/listings";

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

// ── GET /api/listings/featured ─────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    const city = searchParams.get("city") || undefined;
    const limitStr = searchParams.get("limit") || "6";

    // Validate limit
    const limit = Math.min(50, Math.max(1, parseInt(limitStr, 10) || 6)); // Max 50, default 6

    // Get featured listings
    let listings = getFeaturedListings(limit);

    // Filter by city if specified
    if (city) {
      const cityListings = getListingsByCity(city);
      const cityFeatured = cityListings.filter((l) => l.isFeatured);

      listings = cityFeatured.sort((a, b) => b.listPrice - a.listPrice).slice(0, limit);
    }

    // Return featured listings
    const response = {
      success: true,
      listings,
      count: listings.length,
      ...(city && { city }),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        ...getCorsHeaders(request.headers.get("origin") || undefined),
        "Cache-Control": "public, max-age=3600", // 1 hour (same as search results)
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("[/api/listings/featured] Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch featured listings",
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
