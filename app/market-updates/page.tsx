import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Market Reports | The Patrick Group",
  description:
    "Monthly real estate market reports for Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — median sales price, price per square foot, and days on market from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/market-updates" },
};

const reports = [
  {
    href: "/market-updates/march-2026",
    month: "March 2026",
    label: "Latest Report",
    summary: "Median prices up across all five counties. Days on market rising year-over-year — buyers have slightly more time, but well-priced homes continue to move.",
  },
];

export default function MarketUpdatesPage() {
  return (
    <>
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">Southeast Michigan</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Market Reports
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Monthly data on median sales price, price per square foot, and days on market across Oakland, Macomb, Wayne, Washtenaw, and Livingston counties. Pulled from Realcomp.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Latest */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">Latest Report</h2>
            {reports.slice(0, 1).map((r) => (
              <Link key={r.href} href={r.href} className="group block border border-gray-100 rounded-sm p-8 hover:shadow-lg hover:border-[#c70000]/30 transition-all bg-white">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">{r.label}</p>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c70000] transition-colors">{r.month}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.summary}</p>
                <span className="text-[#c70000] text-sm font-semibold group-hover:underline">View full report →</span>
              </Link>
            ))}
          </div>

          {/* Archive — grows over time */}
          {reports.length > 1 && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">Past Reports</h2>
              <div className="space-y-3">
                {reports.slice(1).map((r) => (
                  <Link key={r.href} href={r.href} className="group flex items-center justify-between border border-gray-100 rounded-sm px-6 py-4 hover:border-[#c70000]/30 hover:shadow-sm transition-all">
                    <span className="font-semibold text-[#1a1a1a] group-hover:text-[#c70000] transition-colors">{r.month}</span>
                    <span className="text-[#c70000] text-sm font-semibold group-hover:underline">View →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Questions about the market?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk Through the Numbers</h2>
            <p className="text-white/70 text-sm mb-5">
              Market data tells part of the story. What it means for your specific situation — timing, pricing, strategy — is where we come in.
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

          <p className="mt-8 text-xs text-gray-400 leading-relaxed">
            Market data sourced from Realcomp. Statistics reflect countywide activity and are provided for general informational purposes only. Individual property values may vary. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
