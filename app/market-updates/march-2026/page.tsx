import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report — March 2026 | The Patrick Group",
  description:
    "March 2026 real estate market report for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — median sale price, price per square foot, and average days on market.",
  alternates: { canonical: "https://thepatrickgrp.com/market-updates/march-2026" },
};

const counties = [
  {
    name: "Washtenaw County",
    medianPrice: 420000,
    priceYoY: 2.4,
    pricePerSqFt: null,
    domAvg: 15,
    domYoY: 6.3,
  },
  {
    name: "Livingston County",
    medianPrice: 404000,
    priceYoY: 2.3,
    pricePerSqFt: 188,
    domAvg: 17,
    domYoY: 21.4,
  },
  {
    name: "Oakland County",
    medianPrice: 367000,
    priceYoY: 4.2,
    pricePerSqFt: 184,
    domAvg: 16,
    domYoY: 14.3,
  },
  {
    name: "Macomb County",
    medianPrice: 270000,
    priceYoY: 4.7,
    pricePerSqFt: 161,
    domAvg: 18,
    domYoY: 28.6,
  },
  {
    name: "Wayne County",
    medianPrice: 202000,
    priceYoY: 6.2,
    pricePerSqFt: 134,
    domAvg: 17,
    domYoY: 13.3,
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report — March 2026",
  description:
    "March 2026 real estate market data for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — median sale price, price per square foot, days on market, and year-over-year trends from Realcomp MLS.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-20",
  author: {
    "@type": "Person",
    name: "Sarah Patrick",
    jobTitle: "Principal Broker",
    worksFor: {
      "@type": "Organization",
      name: "The Patrick Group | Oak and Stone Real Estate",
      url: "https://thepatrickgrp.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "The Patrick Group | Oak and Stone Real Estate",
    url: "https://thepatrickgrp.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://thepatrickgrp.com/market-updates/march-2026",
  },
  about: [
    { "@type": "Place", name: "Oakland County", containedInPlace: "Michigan" },
    { "@type": "Place", name: "Macomb County", containedInPlace: "Michigan" },
    { "@type": "Place", name: "Wayne County", containedInPlace: "Michigan" },
    { "@type": "Place", name: "Washtenaw County", containedInPlace: "Michigan" },
    { "@type": "Place", name: "Livingston County", containedInPlace: "Michigan" },
  ],
  citation: {
    "@type": "CreativeWork",
    name: "Realcomp MLS",
    url: "https://www.realcomp.com",
  },
};

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function MarchReport() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/market-updates" className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline">
            ← Market Reports
          </Link>
          <p className="text-white/50 text-sm mt-4 mb-2 uppercase tracking-widest">Southeast Michigan</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Market Report — March 2026
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Oakland · Macomb · Wayne · Washtenaw · Livingston counties. Data sourced from Realcomp.
          </p>
          <p className="text-white/40 text-xs mt-4">
            Last updated: March 20, 2026 &nbsp;·&nbsp; Source: Realcomp MLS &nbsp;·&nbsp; Compiled by Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Key Takeaways */}
          <div className="bg-[#faf9f7] border-l-4 border-[#c70000] p-6 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">Key Takeaways</p>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• <strong>Prices are up across the board</strong> — median sale prices rose year-over-year in all five counties, led by Wayne County (+6.2%) and Macomb County (+4.7%).</li>
              <li>• <strong>Days on market are increasing</strong> — homes are taking longer to sell compared to March 2025 in every county, most notably Macomb (+28.6%) and Livingston (+21.4%). Buyers have more breathing room than a year ago.</li>
              <li>• <strong>Washtenaw leads on median price</strong> at $420,000, followed closely by Livingston at $404,000. Wayne County remains the most accessible at $202,000.</li>
            </ul>
          </div>

          {/* Column headers explanation */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2">County-by-County Breakdown</h2>
            <p className="text-gray-500 text-sm mb-8">All figures reflect countywide activity for March 2026 vs. March 2025. YoY = year-over-year change.</p>

            <div className="space-y-4">
              {counties.map((c) => (
                <div key={c.name} className="border border-gray-100 rounded-sm overflow-hidden">
                  {/* County header */}
                  <div className="bg-[#1a1a1a] px-6 py-3">
                    <h3 className="font-serif text-lg font-bold text-white">{c.name}</h3>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

                    {/* Median Sale Price */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Median Sale Price</p>
                      <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">{formatPrice(c.medianPrice)}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          ↑ {c.priceYoY}% YoY
                        </span>
                      </div>
                    </div>

                    {/* Price per Sq Ft */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Avg Price / Sq Ft</p>
                      {c.pricePerSqFt ? (
                        <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">${c.pricePerSqFt}</p>
                      ) : (
                        <p className="font-serif text-3xl font-bold text-gray-300 mb-1">—</p>
                      )}
                      <p className="text-xs text-gray-400">per square foot</p>
                    </div>

                    {/* Days on Market */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Avg Days on Market</p>
                      <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">{c.domAvg} <span className="text-base font-normal text-gray-400">days</span></p>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          ↑ {c.domYoY}% vs last year
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary table — quick scan view */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] text-white">
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">County</th>
                    <th className="text-right px-4 py-3 font-semibold text-xs uppercase tracking-wider">Median Price</th>
                    <th className="text-right px-4 py-3 font-semibold text-xs uppercase tracking-wider">YoY</th>
                    <th className="text-right px-4 py-3 font-semibold text-xs uppercase tracking-wider">$/SqFt</th>
                    <th className="text-right px-4 py-3 font-semibold text-xs uppercase tracking-wider">Avg DOM</th>
                    <th className="text-right px-4 py-3 font-semibold text-xs uppercase tracking-wider">DOM YoY</th>
                  </tr>
                </thead>
                <tbody>
                  {counties.map((c, i) => (
                    <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}>
                      <td className="px-4 py-3 font-semibold text-[#1a1a1a]">{c.name}</td>
                      <td className="px-4 py-3 text-right text-[#1a1a1a]">{formatPrice(c.medianPrice)}</td>
                      <td className="px-4 py-3 text-right text-emerald-600 font-semibold">+{c.priceYoY}%</td>
                      <td className="px-4 py-3 text-right text-[#1a1a1a]">{c.pricePerSqFt ? `$${c.pricePerSqFt}` : "—"}</td>
                      <td className="px-4 py-3 text-right text-[#1a1a1a]">{c.domAvg} days</td>
                      <td className="px-4 py-3 text-right text-amber-600 font-semibold">+{c.domYoY}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400">↑ Days on market increasing = homes are taking longer to sell vs. this time last year.</p>
          </div>

          {/* What it means */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">For Buyers</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rising days on market means you may have more time to evaluate properties without the extreme pressure of previous years — but prices are still moving up. Getting pre-approved and working with a knowledgeable agent remains critical to move quickly when the right home appears.
              </p>
            </div>
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">For Sellers</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Values are up year-over-year across all five counties, but longer market times signal that accurate pricing and strong presentation matter more than they did in 2024–2025. Overpriced homes are sitting. Well-prepared, well-priced listings continue to attract serious buyers.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">What does this mean for you?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk Strategy</h2>
            <p className="text-white/70 text-sm mb-5">
              County-level data is a starting point. Your neighborhood, your price point, and your timeline all affect the picture significantly. Call us to talk through what the current market means for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2487553545" className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center">
                Call 248.755.3545
              </a>
              <Link href="/home-valuation" className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center">
                Free Home Valuation →
              </Link>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Data sourced from Realcomp for March 2026. Statistics reflect countywide residential activity and are provided for general informational purposes only. Individual property values vary based on location, condition, and other factors. The Patrick Group | Oak &amp; Stone Real Estate. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
