/**
 * GET /api/listings/market-analysis
 *
 * Returns aggregated market data by city (inventory count, median price, median DOM, etc.)
 * Data is synced nightly from Spark API and pre-computed in data/market-analysis.ts
 *
 * Query params (all optional):
 * - cities: Comma-separated city slugs (e.g., "birmingham-mi,troy-mi")
 *           If omitted, returns all cities
 * - period: Time period filter ("30days", "90days", "12months")
 *           Currently returns fixed 30-day sold data; period param reserved for future
 *
 * Response:
 * {
 *   "success": true,
 *   "data": {
 *     "birmingham-mi": {
 *       "activeCount": 45,
 *       "medianPrice": 485000,
 *       "medianDOM": 28,
 *       "avgPricePerSqft": 185,
 *       "soldCount30d": 12,
 *       "soldMedianPrice": 495000,
 *       "lastUpdated": "2026-06-03T23:00:00Z"
 *     },
 *     ...
 *   },
 *   "cities": ["birmingham-mi", "troy-mi", ...],
 *   "period": "30days",
 *   "lastSyncTime": "2026-06-03T23:00:00Z"
 * }
 *
 * Caching: Cache-Control: public, max-age=21600 (6 hours)
 * Aggregates are less volatile than individual listings, so longer TTL is safe.
 *
 * Analytics: Fires GA4 event "listing_market_analysis_viewed" on successful request.
 *
 * MichRIC® Compliance:
 * - Returns aggregates only (no individual listing data)
 * - Safe for display in public API (no raw MLS numbers)
 * - Complies with aggregates-only restriction in license
 */

import { NextRequest, NextResponse } from "next/server";
import { marketAnalysisByCity, type MarketAnalysis } from "@/data/market-analysis";

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

// ── GET /api/listings/market-analysis ──────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    const citiesParam = searchParams.get("cities") || "";
    const period = searchParams.get("period") || "30days";

    // Parse cities list
    let requestedCities: string[] = [];
    if (citiesParam) {
      requestedCities = citiesParam
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s);
    } else {
      // Return all cities if none specified
      requestedCities = Object.keys(marketAnalysisByCity).sort();
    }

    // Validate that requested cities exist in data
    const validCities = requestedCities.filter((city) =>
      marketAnalysisByCity.hasOwnProperty(city),
    );

    if (validCities.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `No valid cities found. Valid cities: ${Object.keys(marketAnalysisByCity).join(", ")}`,
        },
        {
          status: 400,
          headers: {
            ...getCorsHeaders(request.headers.get("origin") || undefined),
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Build response data
    const data: Record<string, MarketAnalysis> = {};
    let lastSyncTime = "";

    for (const city of validCities) {
      const analysis = marketAnalysisByCity[city];
      if (analysis) {
        data[city] = analysis;
        // Use the most recent sync time across all requested cities
        if (
          !lastSyncTime ||
          new Date(analysis.lastUpdated) > new Date(lastSyncTime)
        ) {
          lastSyncTime = analysis.lastUpdated;
        }
      }
    }

    // Return aggregated data
    const response = {
      success: true,
      data,
      cities: Object.keys(data).sort(),
      period,
      lastSyncTime,
      meta: {
        dataSource: "Spark API (MichRIC, RealComp, MiRealSource)",
        syncFrequency: "Nightly at 11:00 PM ET",
        licenseType: "MichRIC® Broker Reciprocity (IDX)",
      },
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        ...getCorsHeaders(request.headers.get("origin") || undefined),
        "Cache-Control": "public, max-age=21600", // 6 hours for aggregates
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("[/api/listings/market-analysis] Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch market analysis",
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
