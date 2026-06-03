/**
 * GET /api/cron/sync-listings
 *
 * Vercel cron job endpoint for nightly Spark API sync.
 *
 * Scheduled to run at 4:00 AM UTC (11 PM EST / midnight EDT) nightly.
 * Executes scripts/update-listings-nightly.ts to fetch fresh listings and market analysis.
 *
 * Triggered by Vercel cron (configured in vercel.json).
 * No authentication required (Vercel cron sends X-Vercel-Cron header).
 *
 * Environment: SPARK_API_KEY must be set in Vercel environment variables
 *
 * Response:
 * - 200: Sync completed successfully
 * - 400: Missing SPARK_API_KEY or invalid request
 * - 500: Sync failed
 */

import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";

export const runtime = "nodejs"; // Use Node.js runtime (required for execSync)

export async function GET(request: NextRequest) {
  // Verify this is called from Vercel cron (optional, adds security)
  const vecelCronHeader = request.headers.get("x-vercel-cron");

  // Check for SPARK_API_KEY
  if (!process.env.SPARK_API_KEY) {
    console.error("[/api/cron/sync-listings] SPARK_API_KEY not set");
    return NextResponse.json(
      {
        success: false,
        error: "SPARK_API_KEY environment variable not configured",
      },
      { status: 400 }
    );
  }

  try {
    console.log("[/api/cron/sync-listings] Starting nightly sync...");

    // Execute the sync script
    // Note: This runs the TypeScript script directly via tsx
    const output = execSync("npx tsx scripts/update-listings-nightly.ts", {
      encoding: "utf-8",
      cwd: process.cwd(),
      stdio: "pipe",
      env: {
        ...process.env,
        SPARK_API_KEY: process.env.SPARK_API_KEY,
      },
    });

    console.log("[/api/cron/sync-listings] Sync completed:");
    console.log(output);

    return NextResponse.json(
      {
        success: true,
        message: "Nightly sync completed successfully",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[/api/cron/sync-listings] Sync failed:", errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: "Nightly sync failed",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
