import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate Market Report — April 2026",
  description:
    "April 2026 Southeast Michigan market report — median sale price, price per sq ft, and days on market across five counties.",
  alternates: { canonical: "https://www.thepatrickgrp.com/market-updates/april-2026" },
};

const counties = [
  {
    name: "Washtenaw County",
    medianPrice: 425000,
    priceYoY: 3.6,
    pricePerSqFt: 268,
    pricePerSqFtYoY: -2.2,
    domAvg: 27,
    domYoY: 3.8,
  },
  {
    name: "Livingston County",
    medianPrice: 458478,
    priceYoY: 2.0,
    pricePerSqFt: 227,
    pricePerSqFtYoY: -1.3,
    domAvg: 9,
    domYoY: -10.0,
  },
  {
    name: "Oakland County",
    medianPrice: 369000,
    priceYoY: 4.0,
    pricePerSqFt: 240,
    pricePerSqFtYoY: 1.7,
    domAvg: 10,
    domYoY: 11.1,
  },
  {
    name: "Macomb County",
    medianPrice: 270000,
    priceYoY: 3.8,
    pricePerSqFt: 191,
    pricePerSqFtYoY: 2.1,
    domAvg: 15,
    domYoY: 50.0,
  },
  {
    name: "Wayne County",
    medianPrice: 210000,
    priceYoY: 7.7,
    pricePerSqFt: 166,
    pricePerSqFtYoY: 5.1,
    domAvg: 15,
    domYoY: 25.0,
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Southeast Michigan Real Estate Market Report — April 2026",
  description:
    "April 2026 real estate market data for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — median sale price, price per square foot, days on market, and year-over-year trends from Realcomp MLS.",
  datePublished: "2026-04-01",
  dateModified: "2026-05-22",
  author: {
    "@type": "Person",
    name: "Sarah Patrick",
    jobTitle: "Principal Broker",
    worksFor: {
      "@type": "Organization",
      name: "The Patrick Group | Oak and Stone Real Estate",
      url: "https://www.thepatrickgrp.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "The Patrick Group | Oak and Stone Real Estate",
    url: "https://www.thepatrickgrp.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.thepatrickgrp.com/market-updates/april-2026",
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

export default function AprilReport() {
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
            &larr; Market Reports
          </Link>
          <p className="text-white/50 text-sm mt-4 mb-2 uppercase tracking-widest">Southeast Michigan</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Market Report — April 2026
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Oakland &middot; Macomb &middot; Wayne &middot; Washtenaw &middot; Livingston counties. Data sourced from Realcomp.
          </p>
          <p className="text-white/40 text-xs mt-4">
            Last updated: May 22, 2026 &nbsp;&middot;&nbsp; Source: Realcomp MLS &nbsp;&middot;&nbsp; Compiled by Sarah Patrick, Principal Broker
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Key Takeaways */}
          <div className="bg-[#faf9f7] border-l-4 border-[#c70000] p-6 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">Key Takeaways</p>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>&bull; <strong>Prices continue climbing</strong> — median sale prices rose year-over-year in all five counties, led by Wayne County (+7.7%) and Oakland County (+4.0%).</li>
              <li>&bull; <strong>Livingston County leads on median price</strong> at $458,478, surpassing Washtenaw ($425,000) for the first time in this report series.</li>
              <li>&bull; <strong>Days on market are splitting</strong> — Macomb (+50.0%) and Wayne (+25.0%) are slowing significantly, while Livingston is actually moving faster (-10.0%). Oakland remains the fastest-moving market at just 10 days.</li>
              <li>&bull; <strong>Price per square foot is rising</strong> in most counties, with Wayne leading at +5.1% YoY. Washtenaw is the only county where $/sqft dipped (-2.2%).</li>
            </ul>
          </div>

          {/* County-by-county */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2">County-by-County Breakdown</h2>
            <p className="text-gray-500 text-sm mb-8">All figures reflect countywide activity for April 2026 vs. April 2025. YoY = year-over-year change.</p>

            <div className="space-y-4">
              {counties.map((c) => (
                <div key={c.name} className="border border-gray-100 rounded-sm overflow-hidden">
                  <div className="bg-[#1a1a1a] px-6 py-3">
                    <h3 className="font-serif text-lg font-bold text-white">{c.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    {/* Median Sale Price */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Median Sale Price</p>
                      <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">{formatPrice(c.medianPrice)}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          &uarr; {c.priceYoY}% YoY
                        </span>
                      </div>
                    </div>

                    {/* Price per Sq Ft */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Avg Price / Sq Ft</p>
                      {c.pricePerSqFt ? (
                        <>
                          <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">${c.pricePerSqFt}</p>
                          <div className="flex items-center gap-1.5">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                              c.pricePerSqFtYoY! >= 0
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-red-50 text-red-700"
                            }`}>
                              {c.pricePerSqFtYoY! >= 0 ? "↑" : "↓"} {Math.abs(c.pricePerSqFtYoY!)}% YoY
                            </span>
                          </div>
                        </>
                      ) : (
                        <p className="font-serif text-3xl font-bold text-gray-300 mb-1">&mdash;</p>
                      )}
                    </div>

                    {/* Days on Market */}
                    <div className="px-6 py-5">
                      <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Avg Days on Market</p>
                      <p className="font-serif text-3xl font-bold text-[#1a1a1a] mb-1">{c.domAvg} <span className="text-base font-normal text-gray-400">days</span></p>
                      <div className="flex items-center gap-1.5">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                          c.domYoY <= 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          {c.domYoY >= 0 ? "↑" : "↓"} {Math.abs(c.domYoY)}% vs last year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Comparison Table */}
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
                      <td className={`px-4 py-3 text-right font-semibold ${c.domYoY <= 0 ? "text-emerald-600" : "text-amber-600"}`}>
                        {c.domYoY >= 0 ? "+" : ""}{c.domYoY}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400">&uarr; Days on market increasing = homes are taking longer to sell vs. this time last year.</p>
          </div>

          {/* What it means */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">For Buyers</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Markets like Macomb and Wayne are giving buyers more breathing room with longer days on market — but prices are still rising. Oakland County at 10 days average means well-priced homes there still move fast. Get pre-approved and be ready to act, especially in Oakland and Livingston.
              </p>
            </div>
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">For Sellers</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Prices are up across every county, but the pace of sales is uneven. If you&apos;re in Oakland or Livingston, properly priced homes are selling in under two weeks. In Macomb and Wayne, expect a longer runway and invest in presentation — the days of every listing getting multiple offers in a weekend are behind us in those markets.
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
                Free Home Valuation &rarr;
              </Link>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Data sourced from Realcomp for April 2026. Statistics reflect countywide residential activity and are provided for general informational purposes only. Individual property values vary based on location, condition, and other factors. The Patrick Group | Oak &amp; Stone Real Estate. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
