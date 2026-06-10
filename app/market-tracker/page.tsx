/**
 * /market-tracker — SE Michigan Market Tracker
 *
 * The only nightly-updated, city-level inventory and price tracker published
 * for these markets. Data: data/market-analysis.ts (current) +
 * data/market-history.json (snapshots, written by the nightly sync).
 * Week-over-week change appears automatically once 7+ days of history exist.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { getAllMarketAnalysis } from "@/data/market-analysis";
import { getCityBySlug } from "@/data/cities";
import history from "@/data/market-history.json";

export const metadata: Metadata = {
  title: "SE Michigan Market Tracker: Live Inventory & Prices by City",
  description:
    "Nightly-updated housing inventory and median list prices for Birmingham, Rochester Hills, Troy, Northville, and more. Compiled from MLS data by The Patrick Group.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-tracker" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/market-tracker",
    title: "SE Michigan Market Tracker",
    description:
      "Nightly-updated housing inventory and median prices, city by city. The only tracker of its kind for Southeast Michigan.",
    siteName: "The Patrick Group",
  },
};

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

type Snapshot = { date: string; cities: Record<string, { a: number; m: number }> };

function fmtPrice(n: number) {
  return "$" + n.toLocaleString("en-US");
}

/** Find the snapshot closest to `daysAgo` days back, if one exists at least that old. */
function snapshotFrom(daysAgo: number): Snapshot | null {
  const hist = history as Snapshot[];
  if (hist.length < 2) return null;
  const target = new Date();
  target.setDate(target.getDate() - daysAgo);
  const targetStr = target.toISOString().slice(0, 10);
  const eligible = hist.filter((h) => h.date <= targetStr);
  return eligible.length > 0 ? eligible[eligible.length - 1] : null;
}

export default function MarketTrackerPage() {
  const analysis = getAllMarketAnalysis();
  const weekAgo = snapshotFrom(7);

  const rows = Object.entries(analysis)
    .map(([slug, a]) => {
      const city = getCityBySlug(slug);
      const prev = weekAgo?.cities[slug];
      const invChange = prev && prev.a > 0 ? a.activeCount - prev.a : null;
      const priceChange = prev && prev.m > 0 ? a.medianPrice - prev.m : null;
      return {
        slug,
        name: city?.name ?? slug,
        county: city?.county ?? "",
        active: a.activeCount,
        median: a.medianPrice,
        invChange,
        priceChange,
        updated: a.lastUpdated,
      };
    })
    .filter((r) => r.active >= 3)
    .sort((a, b) => b.median - a.median);

  const updatedDate = rows[0]
    ? new Date(rows[0].updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";
  const totalActive = rows.reduce((s, r) => s + r.active, 0);
  const hasWow = rows.some((r) => r.invChange !== null);

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Southeast Michigan Housing Market Tracker",
    description:
      "Nightly-updated active listing counts and median list prices for Southeast Michigan cities, compiled from MLS data.",
    url: "https://www.thepatrickgrp.com/market-tracker",
    creator: {
      "@type": "Organization",
      name: "The Patrick Group | Oak and Stone Real Estate",
      url: "https://www.thepatrickgrp.com",
    },
    temporalCoverage: `${(history as Snapshot[])[0]?.date}/..`,
    spatialCoverage: "Southeast Michigan, USA",
  };

  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-14 px-4 sm:px-6" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>
            Updated Nightly From the MLS
          </p>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: "0.95", letterSpacing: "-0.02em", color: "#FDFBF7" }}
          >
            SE Michigan
            <br />
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>Market Tracker.</em>
          </h1>
          <p className="font-editorial italic mt-6" style={{ fontSize: "18px", color: "rgba(253,251,247,0.55)", maxWidth: 560 }}>
            Live inventory and median list prices for the markets we serve, refreshed every night.
            No other tracker publishes this for Southeast Michigan.
          </p>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.3)", fontFamily: "var(--font-mono, monospace)" }}>
            Last updated {updatedDate} · {totalActive.toLocaleString()} active listings tracked
          </p>
        </div>
      </section>

      {/* Tracker table */}
      <section className="px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--ink)", color: "#FDFBF7" }}>
                  <th className={eyebrow} style={{ padding: "14px 16px", textAlign: "left", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>City</th>
                  <th className={eyebrow} style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>Active Listings</th>
                  {hasWow && (
                    <th className={eyebrow} style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>vs Last Week</th>
                  )}
                  <th className={eyebrow} style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>Median List Price</th>
                  <th className={eyebrow} style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>Guide</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.slug} style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)", borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "14px 16px" }}>
                      <span className="font-display" style={{ fontSize: "16px" }}>{r.name}</span>
                      <span className="ml-2 text-xs" style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>{r.county}</span>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)" }}>{r.active.toLocaleString()}</td>
                    {hasWow && (
                      <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: r.invChange === null ? "var(--ink-3)" : r.invChange >= 0 ? "#166534" : "#991b1b" }}>
                        {r.invChange === null ? "n/a" : `${r.invChange >= 0 ? "+" : ""}${r.invChange}`}
                      </td>
                    )}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)" }}>{fmtPrice(r.median)}</td>
                    <td style={{ padding: "14px 16px", textAlign: "right" }}>
                      <Link href={`/neighborhoods/${r.slug}`} className="text-xs hover:underline" style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", textUnderlineOffset: "3px" }}>
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs" style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Counts include active, contingent, and coming-soon listings across MichRIC, RealComp, and MiRealSource.
            Median is the median list price of tracked inventory. {!hasWow && "Week-over-week change appears after the first week of tracking."}
          </p>
        </div>
      </section>

      {/* Broker note */}
      <section className="py-14 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-3xl mx-auto">
          <p className={eyebrow} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            How to read this
          </p>
          <p className="font-editorial italic mt-4" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: "1.55", color: "var(--ink)" }}>
            &ldquo;Inventory is the market&apos;s tell. When a city&apos;s count climbs week after week, sellers
            there are losing leverage; when it falls, buyers are. Prices follow inventory with a lag,
            which is exactly why we track it nightly instead of waiting for the monthly reports.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div style={{ width: 1, height: 32, backgroundColor: "var(--red)" }} />
            <div>
              <p className="font-display" style={{ fontSize: "15px" }}>Sarah Patrick</p>
              <p className={eyebrow} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>Principal Broker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links + CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { href: "/market-updates", title: "Monthly Market Reports", desc: "County-level medians, price per sqft, and days on market from Realcomp." },
            { href: "/compare/rochester-hills-vs-troy", title: "City vs. City Comparisons", desc: "Side-by-side breakdowns of the matchups buyers actually weigh." },
            { href: "/home-valuation", title: "What's My Home Worth?", desc: "Free valuation grounded in the same data this tracker runs on." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group block p-7" style={{ border: "1px solid var(--line)", backgroundColor: "var(--paper)" }}>
              <h3 className="font-display group-hover:underline" style={{ fontSize: "19px", textUnderlineOffset: "3px" }}>{c.title}</h3>
              <p className="text-sm mt-2" style={{ color: "var(--ink-3)" }}>{c.desc}</p>
              <p className={eyebrow + " mt-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.12em" }}>Open →</p>
            </Link>
          ))}
        </div>
        <p className="max-w-7xl mx-auto mt-10 text-xs" style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
          Listing data sourced from MichRIC® Broker Reciprocity (IDX). Cite as: The Patrick Group SE Michigan Market Tracker, thepatrickgrp.com/market-tracker.
        </p>
      </section>
    </div>
  );
}
