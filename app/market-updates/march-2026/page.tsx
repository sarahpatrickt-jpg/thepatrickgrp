import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report — March 2026",
  description:
    "March 2026 Southeast Michigan market report — median sale price, price per sq ft, and days on market across Oakland, Macomb, Wayne, Washtenaw, and Livingston counties.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates/march-2026" },
};

const counties = [
  { name: "Oakland",    medianPrice: 367000, priceYoY: 4.2, pricePerSqFt: 184,  dom: 16, domYoY: 14.3 },
  { name: "Macomb",     medianPrice: 270000, priceYoY: 4.7, pricePerSqFt: 161,  dom: 18, domYoY: 28.6 },
  { name: "Wayne",      medianPrice: 202000, priceYoY: 6.2, pricePerSqFt: 134,  dom: 17, domYoY: 13.3 },
  { name: "Washtenaw",  medianPrice: 420000, priceYoY: 2.4, pricePerSqFt: null, dom: 15, domYoY:  6.3 },
  { name: "Livingston", medianPrice: 404000, priceYoY: 2.3, pricePerSqFt: 188,  dom: 17, domYoY: 21.4 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report — March 2026",
  description: "March 2026 real estate market data for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-20",
  author: { "@type": "Person", name: "Sarah Patrick", jobTitle: "Principal Broker", worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" } },
  publisher: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.thepatrickgrp.com/market-updates/march-2026" },
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

export default function MarchReport() {
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
            Southeast Michigan · Realcomp · March 2026
          </p>
          <h1 className="font-display mt-3" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#FDFBF7" }}>
            Market Report —{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>March 2026</em>
          </h1>
          <p className="font-editorial italic mt-4" style={{ fontSize: "17px", color: "rgba(253,251,247,0.5)", maxWidth: 520 }}>
            Prices up across all five counties. Days on market rising — buyers have more time, but well-priced homes still move.
          </p>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Last updated March 20, 2026 · Source: Realcomp MLS · Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      {/* ── County stat cards ── */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow + " mb-8"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Five-County Snapshot · March 2026 vs. March 2025
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
                    {c.pricePerSqFt ? `$${c.pricePerSqFt}` : <span style={{ color: "var(--ink-3)" }}>—</span>}
                  </p>
                  <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Price / Sq Ft</p>
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
                  {["County", "Median Price", "YoY", "$/SqFt", "Avg DOM", "DOM YoY"].map((h, i) => (
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
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.pricePerSqFt ? `$${c.pricePerSqFt}` : "—"}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.dom}d</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: "#92400e", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+{c.domYoY}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
            DOM increasing = homes taking longer to sell vs. prior year
          </p>
        </div>
      </section>

      {/* ── Key takeaways ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2">
              <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>Key Takeaways</p>
              <div className="space-y-4">
                {[
                  { bold: "Prices up across all five counties", body: "led by Wayne (+6.2%) and Macomb (+4.7%). Every market is appreciating year-over-year." },
                  { bold: "Days on market rising everywhere", body: "most notably Macomb (+28.6%) and Livingston (+21.4%). Buyers have more room than a year ago." },
                  { bold: "Washtenaw leads on median price", body: "at $420,000 — followed by Livingston at $404,000. Wayne remains the most accessible entry point at $202,000." },
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

            {/* Sarah's take */}
            <div className="p-8" style={{ backgroundColor: "var(--paper)", border: "1px solid var(--line)" }}>
              <p className={eyebrow + " mb-4"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>From the Broker</p>
              <blockquote className="font-editorial italic" style={{ fontSize: "18px", lineHeight: "1.55", color: "var(--ink)" }}>
                &ldquo;DOM is up in every county — but prices haven&apos;t followed. Sellers still have leverage. The window to list at peak pricing is open, but it won&apos;t be for long in markets like Macomb.&rdquo;
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
              Rising days on market gives you more room to evaluate — but prices are still climbing. Getting pre-approved and having a clear strategy before you start looking is still essential. The right home still goes fast.
            </p>
          </div>
          <div className="p-8">
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>For Sellers</p>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              Values are up year-over-year across every county, but longer market times mean accurate pricing and strong presentation matter more than they did in 2024–2025. Overpriced homes are sitting. Well-prepared listings are still selling.
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
            Data sourced from Realcomp, March 2026. Countywide residential activity. General informational purposes only. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  );
}
