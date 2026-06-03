import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report — May 2026",
  description:
    "May 2026 Southeast Michigan market report — median sale price, price per sq ft, and days on market across Oakland, Macomb, Wayne, Washtenaw, and Livingston counties. Data from Realcomp.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates/may-2026" },
  openGraph: {
    type: "article",
    url: "https://www.thepatrickgrp.com/market-updates/may-2026",
    title: "Southeast Michigan Real Estate Market Report — May 2026",
    description: "May 2026 market data across five SE Michigan counties — median price, $/sqft, and days on market from Realcomp.",
    siteName: "The Patrick Group",
  },
};

const counties = [
  { name: "Oakland",    medianPrice: 368000, priceYoY: 3.7, pricePerSqFt: 223, pricePerSqFtYoY:  2.3, dom: 13, domYoY:  18.2 },
  { name: "Macomb",     medianPrice: 270000, priceYoY: 3.8, pricePerSqFt: 191, pricePerSqFtYoY:  2.7, dom: 16, domYoY:  23.1 },
  { name: "Wayne",      medianPrice: 206000, priceYoY: 6.2, pricePerSqFt: 165, pricePerSqFtYoY:  4.4, dom: 35, domYoY:   6.1 },
  { name: "Washtenaw",  medianPrice: 420000, priceYoY: 2.7, pricePerSqFt: 244, pricePerSqFtYoY:  0.4, dom: 33, domYoY:   6.5 },
  { name: "Livingston", medianPrice: 400000, priceYoY: 1.4, pricePerSqFt: 230, pricePerSqFtYoY:  3.6, dom: 36, domYoY:  -2.7 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report — May 2026",
  description: "May 2026 real estate market data for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — median sale price, price per square foot, days on market, and year-over-year trends from Realcomp MLS.",
  datePublished: "2026-05-01",
  dateModified: "2026-06-03",
  author: { "@type": "Person", name: "Sarah Patrick", jobTitle: "Principal Broker", worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" } },
  publisher: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.thepatrickgrp.com/market-updates/may-2026" },
};

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

function fmt(n: number) { return "$" + n.toLocaleString("en-US"); }

function Trend({ val, invert = false }: { val: number; invert?: boolean }) {
  const positive = invert ? val <= 0 : val >= 0;
  return (
    <span style={{ color: positive ? "#166534" : "#991b1b", fontFamily: "var(--font-mono, monospace)", fontSize: "11px" }}>
      {val >= 0 ? "▲" : "▼"} {Math.abs(val).toFixed(1)}% YoY
    </span>
  );
}

export default function MayReport() {
  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-28 pb-14 px-4 sm:px-6" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/market-updates"
            className={eyebrow + " hover:underline"}
            style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", textUnderlineOffset: "3px" }}
          >
            ← Market Reports
          </Link>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.35)", fontFamily: "var(--font-mono, monospace)" }}>
            Southeast Michigan · Realcomp · May 2026
          </p>
          <h1 className="font-display mt-3" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#FDFBF7" }}>
            Market Report —{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>May 2026</em>
          </h1>
          <p className="font-editorial italic mt-4" style={{ fontSize: "17px", color: "rgba(253,251,247,0.5)", maxWidth: 540 }}>
            Prices up across all five counties. Wayne leads YoY at +6.2%. Livingston is the only county where DOM dropped — moving faster, not slower.
          </p>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Published June 3, 2026 · Source: Realcomp MLS · Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      {/* ── County stat cards ── */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow + " mb-8"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Five-County Snapshot · May 2026 vs. May 2025
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {counties.map((c, i) => (
              <div key={c.name} className="p-6" style={{ borderTop: "2px solid var(--red)", borderLeft: i > 0 ? "1px solid var(--line)" : "none", backgroundColor: "var(--paper-2)" }}>
                <p className={eyebrow + " mb-5"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
                  {c.name} County
                </p>

                <div className="mb-4">
                  <p className="font-display" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--ink)", lineHeight: "1" }}>
                    {fmt(c.medianPrice)}
                  </p>
                  <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Median Price</p>
                  <div className="mt-1"><Trend val={c.priceYoY} /></div>
                </div>

                <div className="py-3" style={{ borderTop: "1px solid var(--line)" }}>
                  <p className="font-display" style={{ fontSize: "18px", color: "var(--ink)", lineHeight: "1" }}>
                    ${c.pricePerSqFt}
                  </p>
                  <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Price / Sq Ft</p>
                  <div className="mt-1"><Trend val={c.pricePerSqFtYoY} /></div>
                </div>

                <div className="pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                  <p className="font-display" style={{ fontSize: "18px", color: "var(--ink)", lineHeight: "1" }}>
                    {c.dom} <span style={{ fontSize: "12px", color: "var(--ink-3)" }}>days</span>
                  </p>
                  <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Days on Market</p>
                  <div className="mt-1"><Trend val={c.domYoY} invert /></div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--ink)", color: "#FDFBF7" }}>
                  {["County", "Median Price", "YoY", "$/SqFt", "$/SqFt YoY", "DOM", "DOM YoY"].map((h, i) => (
                    <th key={h} className={eyebrow} style={{ padding: "12px 16px", textAlign: i === 0 ? "left" : "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {counties.map((c, i) => (
                  <tr key={c.name} style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)" }}>
                    <td className="font-display" style={{ padding: "12px 16px", fontSize: "14px" }}>{c.name}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{fmt(c.medianPrice)}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+{c.priceYoY}%</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>${c.pricePerSqFt}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+{c.pricePerSqFtYoY}%</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.dom}d</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: c.domYoY <= 0 ? "#166534" : "#92400e", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>
                      {c.domYoY >= 0 ? "+" : ""}{c.domYoY}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
            DOM increasing = homes taking longer to sell vs. prior year · Source: Realcomp MLS
          </p>
        </div>
      </section>

      {/* ── Key takeaways + Sarah's quote ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>Key Takeaways</p>
              <div className="space-y-4">
                {[
                  { bold: "Prices up in every county", body: "Wayne leads YoY at +6.2%, followed by Macomb at +3.8% and Oakland at +3.7%. Livingston is still appreciating but cooling slightly at +1.4%." },
                  { bold: "Livingston is the outlier on DOM", body: "it's the only county where days on market dropped (-2.7% YoY). Every other county is slowing. Oakland stays competitive at 13 days." },
                  { bold: "Macomb and Wayne DOM rising but stabilizing", body: "Macomb +23.1% and Wayne +6.1% — both still climbing, but the extreme spikes from earlier in the year are moderating." },
                  { bold: "Price per sqft rising everywhere", body: "all five counties up YoY. Wayne leads at +4.4%, Livingston at +3.6%. Washtenaw is nearly flat at +0.4% — large homes absorbing the gains." },
                ].map((t) => (
                  <div key={t.bold} className="flex gap-4">
                    <div style={{ width: 2, minWidth: 2, backgroundColor: "var(--red)", marginTop: 4 }} />
                    <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.6" }}>
                      <strong style={{ color: "var(--ink)" }}>{t.bold}</strong> — {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ backgroundColor: "var(--paper)", border: "1px solid var(--line)" }}>
              <p className={eyebrow + " mb-4"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>From the Broker</p>
              <blockquote className="font-editorial italic" style={{ fontSize: "18px", lineHeight: "1.55", color: "var(--ink)" }}>
                &ldquo;Livingston moving faster while everything else slows is worth watching. Oakland at 13 days is still a seller&apos;s market. Wayne buyers are finally getting room — but prices haven&apos;t followed DOM down. They rarely do.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6">
                <div style={{ width: 1, height: 28, backgroundColor: "var(--red)" }} />
                <div>
                  <p className="font-display" style={{ fontSize: "14px" }}>Sarah Patrick</p>
                  <p className={eyebrow} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>Principal Broker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Buyer / Seller split ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div className="p-8" style={{ borderRight: "1px solid var(--line)" }}>
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>For Buyers</p>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              Wayne and Washtenaw are giving you more time to decide — but prices are still climbing. Oakland at 13 days and Livingston actually speeding up means those markets still require quick decisions and strong offers. Get pre-approved before you start looking.
            </p>
          </div>
          <div className="p-8">
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>For Sellers</p>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              Values are up across every county, but the market is not uniform. Oakland and Livingston — price it right and it moves fast. In Wayne and Washtenaw, presentation and pricing discipline matter more than they did a year ago. Overpriced homes are sitting longer.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <p className={eyebrow} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>What does this mean for you?</p>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.05", color: "#FDFBF7", letterSpacing: "-0.01em" }}>
              County data is a starting point.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>Strategy is the rest.</em>
            </h2>
            <p className="font-editorial italic mt-4" style={{ fontSize: "16px", color: "rgba(253,251,247,0.45)", maxWidth: 460 }}>
              Your neighborhood, price point, and timeline change the picture significantly.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a href="tel:2487553545" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap" style={{ backgroundColor: "var(--red)", color: "#FDFBF7", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.12em" }}>
              Call 248.755.3545
            </a>
            <Link href="/home-valuation" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap" style={{ border: "1px solid rgba(253,251,247,0.25)", color: "#FDFBF7", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.12em" }}>
              Free Home Valuation →
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8" style={{ borderTop: "1px solid rgba(253,251,247,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Data sourced from Realcomp, May 2026. Countywide residential activity. General informational purposes only. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  );
}
