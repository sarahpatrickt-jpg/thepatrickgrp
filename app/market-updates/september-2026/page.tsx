import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report: September 2026",
  description:
    "September 2026 Southeast Michigan market report: median sale price, price per sq ft, average days on market, months of supply, and sale-to-list price across Oakland, Macomb, Wayne, Livingston, Genesee, and Washtenaw counties. Data from Realcomp/InfoSparks.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates/september-2026" },
  openGraph: {
    type: "article",
    url: "https://www.thepatrickgrp.com/market-updates/september-2026",
    title: "Southeast Michigan Real Estate Market Report: September 2026",
    description:
      "September 2026 market data across six SE Michigan counties: inventory at a three-year high, sale-to-list slipping below 100%, and the fall shift arriving on schedule. Realcomp/InfoSparks.",
    siteName: "The Patrick Group",
  },
};

// September 2026 closings vs September 2025. Realcomp InfoSparks, monthly view, pulled 2026-10-06.
// All price ranges, property types, finance codes, garage types, sizes, bedrooms.
// Median price, MEDIAN $/SqFt, AVERAGE DOM, months supply, median % of last list price.
// August's report used AVERAGE $/SqFt, so $/SqFt is not comparable month to month.
// Washtenaw replaces St. Clair this month.
const counties = [
  { name: "Livingston", medianPrice: 418610, priceYoY:  3.4, ppsf: 242, ppsfYoY:  5.7, dom: 26, domYoY: -31.6, supply: 2.9, supplyYoY: 20.8, pctList: "100.0%" },
  { name: "Washtenaw",  medianPrice: 405000, priceYoY: -8.0, ppsf: 241, ppsfYoY: -0.8, dom: 48, domYoY:   6.7, supply: 4.0, supplyYoY: 42.9, pctList: "99.4%" },
  { name: "Oakland",    medianPrice: 380000, priceYoY:  1.3, ppsf: 228, ppsfYoY:  2.7, dom: 28, domYoY:   7.7, supply: 3.2, supplyYoY: 23.1, pctList: "99.5%" },
  { name: "Macomb",     medianPrice: 281000, priceYoY:  3.3, ppsf: 195, ppsfYoY:  1.6, dom: 30, domYoY:   3.4, supply: 3.0, supplyYoY: 25.0, pctList: "100.0%" },
  { name: "Genesee",    medianPrice: 234500, priceYoY:  2.0, ppsf: 164, ppsfYoY:  1.9, dom: 32, domYoY:  -3.0, supply: 3.4, supplyYoY: 13.3, pctList: "100.0%" },
  { name: "Wayne",      medianPrice: 218000, priceYoY:  3.8, ppsf: 169, ppsfYoY:  4.3, dom: 33, domYoY:  10.0, supply: 4.0, supplyYoY:  8.1, pctList: "100.0%" },
];

const region = [
  { label: "Regional Median Price", value: "$295,000", note: "+4.3% vs last September" },
  { label: "Median Price / Sq Ft", value: "$202", note: "+2.0% vs last September" },
  { label: "Avg Days on Market", value: "37", note: "+2.8% vs last September" },
  { label: "Months of Supply", value: "3.5", note: "+20.7% vs last September" },
  { label: "Sale-to-List Price", value: "99.5%", note: "Down from 100% in August" },
];

// Months of supply each September. 2023 from InfoSparks values; 2025 derived from
// September 2026 values and their year-over-year change.
const supplyHistory = [
  { name: "Oakland", y2023: 2.0, y2025: 2.6, y2026: 3.2 },
  { name: "Macomb", y2023: 1.6, y2025: 2.4, y2026: 3.0 },
  { name: "Wayne", y2023: 2.9, y2025: 3.7, y2026: 4.0 },
  { name: "Region overall", y2023: 2.3, y2025: 2.9, y2026: 3.5 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report: September 2026",
  description:
    "September 2026 real estate market data for Oakland, Macomb, Wayne, Livingston, Genesee, and Washtenaw counties: median sale price, median price per square foot, average days on market, months of supply, sale-to-list price, and year-over-year trends from Realcomp/InfoSparks.",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: { "@type": "Person", name: "Sarah Patrick", jobTitle: "Principal Broker", worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" } },
  publisher: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate", url: "https://www.thepatrickgrp.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.thepatrickgrp.com/market-updates/september-2026" },
};

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

function fmt(n: number) { return "$" + n.toLocaleString("en-US"); }
function signed(n: number) { return (n >= 0 ? "+" : "") + n.toFixed(1) + "%"; }

function Trend({ val, invert = false }: { val: number; invert?: boolean }) {
  const positive = invert ? val <= 0 : val >= 0;
  return (
    <span style={{ color: positive ? "#166534" : "#991b1b", fontFamily: "var(--font-mono, monospace)", fontSize: "11px" }}>
      {val >= 0 ? "▲" : "▼"} {Math.abs(val).toFixed(1)}% YoY
    </span>
  );
}

export default function SeptemberReport() {
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
            Southeast Michigan · Realcomp/InfoSparks · September 2026
          </p>
          <h1 className="font-display mt-3" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#FDFBF7" }}>
            Market Report:{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>September 2026</em>
          </h1>
          <p className="font-editorial italic mt-4" style={{ fontSize: "17px", color: "rgba(253,251,247,0.5)", maxWidth: 560 }}>
            Homes for sale reached a three-year high in every county, and sellers started giving a little on price. The fall shift arrived on schedule.
          </p>
          <p className={eyebrow + " mt-6"} style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)" }}>
            Published October 6, 2026 · Source: Realcomp/InfoSparks · Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      {/* ── Regional topline ── */}
      <section className="px-4 sm:px-6 pt-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className={eyebrow + " mb-6"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}>
            Region at a Glance (Entire MLS) · September 2026 vs. September 2025
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
            Six-County Snapshot · September 2026 vs. September 2025
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
                    <p className={eyebrow + " mt-1"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "8px" }}>Med $/SqFt</p>
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
                      {signed(c.supplyYoY)} YoY
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
                  {["County", "Median Price", "YoY", "Med $/SqFt", "YoY", "Avg DOM", "YoY", "Mo. Supply", "YoY", "% of Last List"].map((h, i) => (
                    <th key={h + i} className={eyebrow} style={{ padding: "12px 14px", textAlign: i === 0 ? "left" : "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {counties.map((c, i) => (
                  <tr key={c.name} style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)" }}>
                    <td className="font-display" style={{ padding: "12px 14px", fontSize: "14px" }}>{c.name}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{fmt(c.medianPrice)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: c.priceYoY >= 0 ? "#166534" : "#991b1b", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>{signed(c.priceYoY)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>${c.ppsf}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: c.ppsfYoY >= 0 ? "#166534" : "#991b1b", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>{signed(c.ppsfYoY)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.dom}d</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: c.domYoY <= 0 ? "#166534" : "#92400e", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>{signed(c.domYoY)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.supply.toFixed(1)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "var(--ink-2)", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>{signed(c.supplyYoY)}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{c.pctList}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "var(--paper-3)", fontWeight: 600 }}>
                  <td className="font-display" style={{ padding: "12px 14px", fontSize: "14px" }}>Entire MLS</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>$295,000</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+4.3%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>$202</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#166534", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+2.0%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>37d</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "#92400e", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+2.8%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>3.5</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", color: "var(--ink-2)", fontFamily: "var(--font-mono, monospace)", fontSize: "12px" }}>+20.7%</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>99.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
            All price ranges and property types · $/SqFt is a median this month (August used averages; not directly comparable) · DOM is an average · Washtenaw replaces St. Clair this month · Source: Realcomp/InfoSparks, pulled Oct 6, 2026
          </p>
        </div>
      </section>

      {/* ── Inventory: the number to watch ── */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>The Number to Watch</p>
            <h2 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: "1.1", color: "var(--ink)" }}>
              More homes for sale than any September in three years.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>Still not a buyer&apos;s market.</em>
            </h2>
            <p className="mt-4" style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              Months of supply is how long it would take to sell every home currently listed if nothing new came on the market. Region-wide it reached 3.5 months in September, up from 2.9 a year ago and 2.3 two years ago, and every county we follow is at its highest level since at least early 2023. A market is generally considered balanced at around five to six months, so sellers still hold the advantage. It is a smaller advantage than at any point in the last three years, and it showed up in September&apos;s sale prices.
            </p>
            <p className="mt-4" style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              The full analysis is in this month&apos;s journal:{" "}
              <Link href="/insights/september-2026-southeast-michigan-market-update" className="underline" style={{ color: "var(--red)", textUnderlineOffset: "3px" }}>
                The Fall Shift Arrived on Schedule
              </Link>.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--ink)", color: "#FDFBF7" }}>
                  {["County", "Sept 2023", "Sept 2025", "Sept 2026"].map((h, i) => (
                    <th key={h} className={eyebrow} style={{ padding: "12px 16px", textAlign: i === 0 ? "left" : "right", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {supplyHistory.map((r, i) => {
                  const emphasized = r.name === "Region overall";
                  return (
                    <tr key={r.name} style={{ backgroundColor: emphasized ? "var(--paper-3)" : i % 2 === 0 ? "var(--paper)" : "var(--paper-2)", fontWeight: emphasized ? 600 : 400 }}>
                      <td className="font-display" style={{ padding: "12px 16px", fontSize: "14px" }}>{r.name}</td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{r.y2023.toFixed(1)}</td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px" }}>{r.y2025.toFixed(1)}</td>
                      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#92400e" }}>{r.y2026.toFixed(1)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className={eyebrow + " mt-3"} style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}>
              Months of supply in September of each year
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
                  { bold: "Sellers started negotiating.", body: "In August every county closed at 100% of the last list price. In September the region slipped to 99.5%, along with Oakland (99.5%) and Washtenaw (99.4%). Region-wide, last September still closed at 100%, so the give arrived a little earlier this year. On a $380,000 Oakland home, half a percent is about $1,900." },
                  { bold: "Supply still decides price.", body: "Washtenaw took the biggest jump in supply (+42.9%) and was the only county where the median price fell (-8.0%), with homes averaging 48 days to an accepted offer. Livingston had the tightest supply at 2.9 months and was the fastest market at 26 days, with price per square foot up 5.7%." },
                  { bold: "Year over year, prices are still rising.", body: "Five of six counties and the region (+4.3%) are above last September. The dip from August (Oakland went from $395,000 to $380,000) is the normal seasonal pattern, not a reversal. Wayne kept its footing best, up 3.8% on price and 4.3% on price per square foot." },
                  { bold: "Homes are taking longer, as expected.", body: "Region average rose to 37 days from 34 in August. Oakland went from 25 to 28 and Wayne from 31 to 33. Last January the region averaged 51 days, and the calendar is heading there now." },
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
                &ldquo;Nothing in September surprised me, and that is the point. The fall slowdown shows up every year. What changed is that buyers now have more homes to compare than at any time in three years, and they are starting to use that when they write offers.&rdquo;
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
              This is the most choice you have had in three autumns, and the first month since spring that sellers in Oakland and Washtenaw have closed below their asking price. In Washtenaw, where homes average 48 days and prices are down from a year ago, there is room to negotiate. Livingston is the exception: homes there are selling in under four weeks, so a strong first offer still matters.
            </p>
          </div>
          <div className="p-8">
            <p className={eyebrow + " mb-4"} style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)" }}>For Sellers</p>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: "1.7" }}>
              A home listed now that sells at its county average and takes the usual 30 to 45 days from offer to keys closes in early to mid December. Your competition is the largest it has been in three years, and buyers are comparing. Price to the last ninety days of closed sales, not to spring, and prepare the home before it lists. The homes that sit this fall will be shown in January, the slowest stretch of the year.
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
            Data sourced from Realcomp/InfoSparks, September 2026 closings, pulled October 6, 2026. All price ranges and property types. Days on market are averages; price per square foot is a median. September 2025 months-of-supply figures are derived from InfoSparks year-over-year changes. General informational purposes only. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  );
}
