import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Market Reports",
  description:
    "Monthly Southeast Michigan market reports — median price, price per sq ft, and days on market for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties. Pulled from Realcomp.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/market-updates",
    title: "Southeast Michigan Market Reports",
    description:
      "Monthly Southeast Michigan market reports — median price, price per sq ft, and days on market across five SE Michigan counties.",
    siteName: "The Patrick Group",
  },
};

// ── Latest data snapshot (April 2026) ────────────────────────────────────────
const LATEST = {
  label: "April 2026",
  href: "/market-updates/april-2026",
  headline: "Prices up across all five counties. Wayne leads YoY at +7.7%. Oakland fastest market at 10 days.",
  counties: [
    { name: "Oakland",    medianPrice: 369000, priceYoY: 4.0,  dom: 10, domYoY: 11.1  },
    { name: "Macomb",     medianPrice: 270000, priceYoY: 3.8,  dom: 15, domYoY: 50.0  },
    { name: "Wayne",      medianPrice: 210000, priceYoY: 7.7,  dom: 15, domYoY: 25.0  },
    { name: "Washtenaw",  medianPrice: 425000, priceYoY: 3.6,  dom: 27, domYoY: 3.8   },
    { name: "Livingston", medianPrice: 458478, priceYoY: 2.0,  dom: 9,  domYoY: -10.0 },
  ],
};

const PAST_REPORTS = [
  {
    href: "/market-updates/march-2026",
    month: "March 2026",
    summary: "Median prices up county-wide. DOM rising YoY — buyers have more time, but well-priced homes still move.",
  },
];

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

function formatPrice(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;
}

function Trend({ val }: { val: number }) {
  const up = val >= 0;
  return (
    <span
      style={{
        color: up ? "#166534" : "#991b1b",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "11px",
      }}
    >
      {up ? "▲" : "▼"} {Math.abs(val).toFixed(1)}% YoY
    </span>
  );
}

export default function MarketUpdatesPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>

      {/* ── Hero ── */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className={eyebrow}
            style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Southeast Michigan · Realcomp Data
          </p>
          <h1
            className="font-display mt-4"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
              color: "#FDFBF7",
            }}
          >
            Market
            <br />
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>Reports.</em>
          </h1>
          <p
            className="font-editorial italic mt-6"
            style={{ fontSize: "18px", color: "rgba(253,251,247,0.55)", maxWidth: 520 }}
          >
            Monthly median price, price per sqft, and days on market across
            Oakland, Macomb, Wayne, Washtenaw, and Livingston counties.
          </p>
        </div>
      </section>

      {/* ── Latest report data ── */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "var(--paper)", borderBottom: "1px solid var(--line)" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p
                className={eyebrow}
                style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}
              >
                Latest · {LATEST.label}
              </p>
              <h2
                className="font-display mt-2"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1", letterSpacing: "-0.01em" }}
              >
                Five-county snapshot
              </h2>
              <p
                className="font-editorial italic mt-2"
                style={{ fontSize: "16px", color: "var(--ink-2)", maxWidth: 560 }}
              >
                {LATEST.headline}
              </p>
            </div>
            <Link
              href={LATEST.href}
              className="text-sm font-medium whitespace-nowrap hover:underline shrink-0"
              style={{
                color: "var(--red)",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.1em",
                textUnderlineOffset: "3px",
              }}
            >
              Full report →
            </Link>
          </div>

          {/* County stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {LATEST.counties.map((c, i) => (
              <div
                key={c.name}
                className="p-6"
                style={{
                  borderTop: "2px solid var(--red)",
                  borderLeft: i > 0 ? "1px solid var(--line)" : "none",
                  backgroundColor: "var(--paper-2)",
                }}
              >
                <p
                  className={eyebrow + " mb-5"}
                  style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}
                >
                  {c.name} County
                </p>

                {/* Median price */}
                <div className="mb-4">
                  <p
                    className="font-display"
                    style={{ fontSize: "clamp(24px, 2.5vw, 32px)", color: "var(--ink)", lineHeight: "1" }}
                  >
                    {formatPrice(c.medianPrice)}
                  </p>
                  <p
                    className={eyebrow + " mt-1"}
                    style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}
                  >
                    Median Price
                  </p>
                  <div className="mt-1">
                    <Trend val={c.priceYoY} />
                  </div>
                </div>

                {/* DOM */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <p
                    className="font-display"
                    style={{ fontSize: "22px", color: "var(--ink)", lineHeight: "1" }}
                  >
                    {c.dom} <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>days</span>
                  </p>
                  <p
                    className={eyebrow + " mt-1"}
                    style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}
                  >
                    Days on Market
                  </p>
                  <div className="mt-1">
                    <Trend val={c.domYoY} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-4 text-xs"
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Source: Realcomp MLS · {LATEST.label} · Countywide residential activity
          </p>
        </div>
      </section>

      {/* ── Sarah's read ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className={eyebrow}
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            From the Broker
          </p>
          <blockquote
            className="font-editorial italic mt-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: "1.5", color: "var(--ink)" }}
          >
            &ldquo;Prices are up, but the story county-to-county is very different. Macomb DOM is up 50% YoY — that market is shifting.
            Sellers pricing to 2024 comps are sitting. Oakland is still tight. Know your county.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 mt-5">
            <div style={{ width: 1, height: 32, backgroundColor: "var(--red)" }} />
            <div>
              <p className="font-display" style={{ fontSize: "15px" }}>Sarah Patrick</p>
              <p className={eyebrow} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
                Principal Broker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Past reports ── */}
      {PAST_REPORTS.length > 0 && (
        <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper)", borderTop: "1px solid var(--line)" }}>
          <div className="max-w-7xl mx-auto">
            <p
              className={eyebrow + " mb-6"}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Archive
            </p>
            <div className="space-y-0">
              {PAST_REPORTS.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-3 transition-colors"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <div>
                    <p className="font-display group-hover:underline" style={{ fontSize: "20px", textUnderlineOffset: "3px" }}>
                      {r.month}
                    </p>
                    <p className="text-sm mt-1" style={{ color: "var(--ink-3)" }}>{r.summary}</p>
                  </div>
                  <p
                    className={eyebrow + " shrink-0 group-hover:underline"}
                    style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", textUnderlineOffset: "3px" }}
                  >
                    View report →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Questions about the market?
            </p>
            <h2
              className="font-display mt-3"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.05", color: "#FDFBF7", letterSpacing: "-0.01em" }}
            >
              Data tells part of the story.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>Strategy is the rest.</em>
            </h2>
            <p
              className="font-editorial italic mt-4"
              style={{ fontSize: "17px", color: "rgba(253,251,247,0.5)", maxWidth: 480 }}
            >
              What county trends mean for your pricing, timing, or offer — that&apos;s where we come in.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="tel:2487553545"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Call 248.755.3545
            </a>
            <Link
              href="/home-valuation"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap transition-colors"
              style={{
                border: "1px solid rgba(253,251,247,0.25)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Free Home Valuation →
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8" style={{ borderTop: "1px solid rgba(253,251,247,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Market data sourced from Realcomp. Statistics reflect countywide residential activity and are provided for general informational purposes only. Individual property values may vary. Equal Housing Opportunity.
          </p>
        </div>
      </section>

    </div>
  );
}
