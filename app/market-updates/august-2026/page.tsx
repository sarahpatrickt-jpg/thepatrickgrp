import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report: August 2026",
  description:
    "August 2026 Southeast Michigan market report: median sale price, price per sq ft, average days on market, and months of supply across Oakland, Macomb, Wayne, Livingston, Genesee, and St. Clair counties. Data from Realcomp/InfoSparks.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates/august-2026" },
  openGraph: {
    type: "article",
    url: "https://www.thepatrickgrp.com/market-updates/august-2026",
    title: "Southeast Michigan Real Estate Market Report: August 2026",
    description:
      "August 2026 market data across six SE Michigan counties: median price, price per sq ft, average days on market, and months of supply from Realcomp/InfoSparks.",
    siteName: "The Patrick Group",
  },
};

// August 2026 closings vs August 2025. Realcomp InfoSparks, pulled 2026-09-08.
// All price ranges, property types, finance codes, garage types, sizes, bedrooms.
// $/SqFt and DOM are AVERAGES (prior reports used medians; not comparable).
const counties = [
  { name: "Livingston", medianPrice: 439000, priceYoY: 12.3, ppsf: 251, ppsfYoY: 2.9, dom: 27, domYoY: -10.0, supply: 2.5, supplyYoY: -3.8, pctList: "100.0%" },
  { name: "Oakland",    medianPrice: 395000, priceYoY:  2.6, ppsf: 245, ppsfYoY: 1.2, dom: 25, domYoY:   0.0, supply: 3.0, supplyYoY: 20.0, pctList: "100.0%" },
  { name: "St. Clair",  medianPrice: 283500, priceYoY: 16.9, ppsf: 193, ppsfYoY: 6.0, dom: 35, domYoY:  -5.4, supply: 3.1, supplyYoY:  3.3, pctList: "100.0%" },
  { name: "Macomb",     medianPrice: 281000, priceYoY:  1.3, ppsf: 196, ppsfYoY: 3.2, dom: 29, domYoY:  -3.3, supply: 2.8, supplyYoY: 21.7, pctList: "100.0%" },
  { name: "Genesee",    medianPrice: 239900, priceYoY:  6.6, ppsf: 165, ppsfYoY: 8.6, dom: 34, domYoY:  -2.9, supply: 3.3, supplyYoY: 10.0, pctList: "100.0%" },
  { name: "Wayne",      medianPrice: 230000, priceYoY:  7.0, ppsf: 175, ppsfYoY: 6.7, dom: 31, domYoY:   6.9, supply: 3.9, supplyYoY: 11.4, pctList: "100.0%" },
];

const region = [
  { label: "Regional Median Price", value: "$300,000", note: "+5.3% vs last August" },
  { label: "Avg Price / Sq Ft", value: "$219", note: "+4.3% vs last August" },
  { label: "Avg Days on Market", value: "34", note: "Flat vs last August" },
  { label: "Months of Supply", value: "3.4", note: "+21.4% vs last August" },
  { label: "Sale-to-List Price", value: "100%", note: "Every county" },
];

const seasonal = [
  { name: "Oakland", aug: 25, jan: 43 },
  { name: "Macomb", aug: 29, jan: 42 },
  { name: "Wayne", aug: 31, jan: 44 },
  { name: "Region overall", aug: 34, jan: 51 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report: August 2026",
  description:
    "August 2026 real estate market data for Oakland, Macomb, Wayne, Livingston, Genesee, and St. Clair counties: median sale price, average price per square foot, average days on market, months of supply, and year-over-year trends from Realcomp/InfoSparks.",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: { "@type": "Person", name: "Sarah Patrick", jobTitle: "Principal Broker", worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" } },
  publisher: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.thepatrickgrp.com/market-updates/august-2026" },
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

export default function AugustReport() {
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
            Southeast Michigan · Realcomp/InfoSparks · August 2026
          </p>
          <h1 className="font-display mt-3" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#FDFBF7" }}>
            Market Report:{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>August 2026</em>
          </h1>
          <p className="font-editorial italic mt-4" style={{ fontSize: "17px", color: "rgba(253,251,247,0.5)", maxWidth: 560 }}>
            Prices up in all six counties and sellers got full asking price everywhere. Homes now average about a month to sell, and the seasonal slowdown is ahead.
          </p>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Published September 8, 2026 · Source: Realcomp/InfoSparks · Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      {/* ── Regional topline ── */}
      <section className="px-4 sm:px-6 pt-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow + " mb-6"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Region at a Glance (Entire MLS) · August 2026 vs. August 2025
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
            {region.map((r, i) => (
              <div key={r.label} className="p-6" style={{ borderTop: "2px solid var(--red)", borderLeft: i > 0 ? "1px solid var(--line)" : "none", backgroundColor: "var(--paper-2)" }}>
                <p className="font-display" style={{ fontSize: "clamp(22px, 2.2vw, 32px)", color: "var(--ink)", lineHeight: "1" }}>{r.value}</p>
                <p className={eyebrow + " mt-2"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>{r.label}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--ink-2)" }}>{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── County stat cards ── */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow + " mb-8"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Six-County Snapshot · August 2026 vs. August 2025
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--line)" }}>
            {counties.map((c) => (
              <div key={c.name} className="p-6" style={{ borderTop: "2px solid var(--red)", backgroundColor: "var(--paper-2)" }}>
                <p className={eyebrow + " mb-5"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
                  {c.name} County
                </p>

                <div className="mb-4">
                  <p className="font-display" style={{ fontSize: "clamp(24px, 2.4vw, 32px)", color: "var(--ink)", lineHeight: "1" }}>
                    {fmt(c.medianPrice)}
                  </p>
                  <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Median Price</p>
                  <div className="mt-1"><Trend val={c.priceYoY} /></div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                  <div>
                    <p className="font-display" style={{ fontSize: "17px", color: "var(--ink)", lineHeight: "1" }}>${c.ppsf}</p>
                    <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Avg $/SqFt</p>
                    <div className="mt-1"><Trend val={c.ppsfYoY} /></div>
                  </div>
                  <div>
                    <p className="font-display" style={{ fontSize: "17px", color: "var(--ink)", lineHeight: "1" }}>
                      {c.dom}<span style={{ fontSize: "11px", color: "var(--ink-3)" }}>d</span>
                    </p>
                    <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Avg DOM</p>
                    <div className="mt-1"><Trend val={c.domYoY} invert /></div>
                  </div>
                  <div>
                    <p className="font-display" style={{ fontSize: "17px", color: "var(--ink)", lineHeight: "1" }}>{c.supply.toFixed(1)}</p>
                    <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Mo. Supply</p>
                    <p className="mt-1" style={{ color: "var(--ink-2)", fontFamily: "var(--font-mono, monospace)", fontSize: "11px" }}>
                      {c.supplyYoY >= 0 ? "+" : ""}{c.supplyYoY.toFixed(1)}% YoY
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Master table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: 860 }}>
              <thead>
                <tr style={{ backgroundColor: "var(--ink)", color: "#FDFBF7" }}>
                  {["County", "Median Price", "YoY", "Avg $/SqFt", "YoY", "Avg DOM", "YoY", "Mo. Supply", "YoY", "% of Last List"].map((h, i) => (
                    <th key={h + i} className={eyebrow} style={{ padding: "12px 14px", textAlign: i === 0 ? "left" : "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {counties.map((c, i) => (
                  <tr key={c.name} style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)" }}>
                    <td className="font-display" style={{ padding: "12px 14px", fontSize: "14px" }}>{c.name}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{fmt(c.medianPrice)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+{c.priceYoY}%</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>${c.ppsf}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+{c.ppsfYoY}%</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.dom}d</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: c.domYoY <= 0 ? "#166534" : "#92400e", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>
                      {c.domYoY >= 0 ? "+" : ""}{c.domYoY}%
                    </td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.supply.toFixed(1)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "var(--ink-2)", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>
                      {c.supplyYoY >= 0 ? "+" : ""}{c.supplyYoY}%
                    </td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.pctList}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "var(--paper-3)", fontWeight: 600 }}>
                  <td className="font-display" style={{ padding: "12px 14px", fontSize: "14px" }}>Entire MLS</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>$300,000</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+5.3%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>$219</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+4.3%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>34d</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>0.0%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>3.4</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "var(--ink-2)", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+21.4%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
            All price ranges and property types · $/SqFt and DOM are averages this month (prior reports used medians; not directly comparable) · Source: Realcomp/InfoSparks, pulled Sept 8, 2026
          </p>
        </div>
      </section>

      {/* ── Seasonal slowdown ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>The Number to Watch</p>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: "1.1", color: "var(--ink)" }}>
              August is one of the fastest months of the year.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>January is the slowest.</em>
            </h2>
            <p className="mt-4" style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              Every autumn the market slows, and every January it reaches its slowest point. That has happened three years running. Homes took roughly 50% to 70% longer to sell this past January than they do right now, and sellers accepted about 98.5% of asking rather than the flat 100% we saw in August. A home listed in early September closes around late October. A home listed at the end of October is judged by December and January buyers.
            </p>
            <p className="mt-4" style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              The full analysis is in this month&apos;s journal:{" "}
              <Link href="/insights/august-2026-southeast-michigan-market-update" className="underline" style={{ color: "var(--red)", textUnderlineOffset: "3px" }}>
                How Long It Really Takes to Sell a Home Right Now
              </Link>.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--ink)", color: "#FDFBF7" }}>
                  {["County", "August 2026", "January 2026"].map((h, i) => (
                    <th key={h} className={eyebrow} style={{ padding: "12px 16px", textAlign: i === 0 ? "left" : "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasonal.map((r, i) => {
                  const emphasized = r.name === "Region overall";
                  return (
                    <tr key={r.name} style={{ backgroundColor: emphasized ? "var(--paper-3)" : i % 2 === 0 ? "var(--paper)" : "var(--paper-2)", fontWeight: emphasized ? 600 : 400 }}>
                      <td className="font-display" style={{ padding: "12px 16px", fontSize: "14px" }}>{r.name}</td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{r.aug} days</td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#92400e" }}>{r.jan} days</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
              Average days from listing to accepted offer
            </p>
          </div>
        </div>
      </section>

      {/* ── Key takeaways + Sarah's quote ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>Key Takeaways</p>
              <div className="space-y-4">
                {[
                  { bold: "Supply decides price growth.", body: "Livingston, the only county where months of supply fell (-3.8%), led the region at +12.3%. Oakland (+20.0% supply) and Macomb (+21.7%) absorbed the most new competition and posted the smallest price gains at +2.6% and +1.3%." },
                  { bold: "The accessible markets keep outperforming.", body: "St. Clair (+16.9%), Wayne (+7.0%), and Genesee (+6.6%) again grew fastest as buyers chase affordability, and their price per square foot gains (+6.0%, +6.7%, +8.6%) confirm it is real appreciation, not a mix shift." },
                  { bold: "A month to sell is the new normal.", body: "Region average is 34 days from listing to accepted offer, flat versus last year. Most counties actually got slightly faster; only Wayne slowed (+6.9%). Add 30 to 45 days from offer to keys." },
                  { bold: "Full asking price, with an asterisk.", body: "Every county closed at 100% of the last list price. That measures the most recent asking price, not the original. Homes that reduce and then sell still count as 100%. Pricing right the first time is what the statistic quietly rewards." },
                ].map((t) => (
                  <div key={t.bold} className="flex gap-4">
                    <div style={{ width: 2, minWidth: 2, backgroundColor: "var(--red)", marginTop: 4 }} />
                    <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.6" }}>
                      <strong style={{ color: "var(--ink)" }}>{t.bold}</strong> {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ backgroundColor: "var(--paper-2)", border: "1px solid var(--line)" }}>
              <p className={eyebrow + " mb-4"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>From the Broker</p>
              <blockquote className="font-editorial italic" style={{ fontSize: "18px", lineHeight: "1.55", color: "var(--ink)" }}>
                &ldquo;Buyers finally have choices, and choices are what slow a market down. You will almost certainly get your asking price this fall. The only question is which asking price, and that gets decided before the sign goes in the yard.&rdquo;
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
              Oakland and Macomb are handing you the best conditions in several years: about 20% more supply and sellers who can see the competition around them. Move-up buyers within Oakland get a bonus, flat appreciation means the gap to the next home has stopped widening. Livingston and St. Clair are the opposite: appreciating fast, so waiting there has a real cost.
            </p>
          </div>
          <div className="p-8">
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>For Sellers</p>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              You will very likely get your asking price. The question is which one: the first, or the one after two reductions and a lost month. Price to the last ninety days of closed sales, prepare the home before it lists, and mind the calendar. Listing in early September means closing before the January slowdown. Waiting until late October means selling into it.
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
            Data sourced from Realcomp/InfoSparks, August 2026 closings, pulled September 8, 2026. All price ranges and property types; price per square foot and days-on-market figures are averages. General informational purposes only. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  );
}
