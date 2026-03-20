import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Royal Oak MI Real Estate | The Patrick Group",
  description:
    "Royal Oak, Michigan real estate guide — bungalows, new construction, downtown proximity, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/royal-oak-mi" },
};

export default function RoyalOakPage() {
  return (
    <>
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline">
            ← Neighborhood Guides
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-3">
            Royal Oak, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Royal Oak</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Royal Oak is a city of approximately 60,000 residents in southeastern Oakland County, situated directly north of Detroit along Woodward Avenue. It has a well-established and active downtown with a high density of restaurants, bars, and retail — one of the more walkable commercial districts in Southeast Michigan outside of Birmingham.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city is also home to the Detroit Zoo, which sits along I-696 at the Royal Oak/Berkley border. Royal Oak&apos;s residential streets are a mix of bungalows and colonial homes from the 1920s–1940s alongside significant new construction infill that has accelerated over the past decade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$250K – $700K" },
              { label: "Common Property Types", value: "Bungalows, new construction, condos" },
              { label: "School District", value: "Royal Oak School District" },
            ].map((item) => (
              <div key={item.label} className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">{item.label}</p>
                <p className="font-semibold text-[#1a1a1a] text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Real Estate Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Royal Oak offers some of the most accessible price points in Oakland County for buyers seeking a walkable, established city feel. Classic bungalows — typically 900–1,400 sq ft — have been the backbone of the housing stock for decades, though many have been significantly renovated. New construction is increasingly common, with builders replacing older structures on in-fill lots.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Buyer demand in Royal Oak is consistently strong, particularly for homes within walking distance of the downtown corridor. Properties here frequently receive multiple offers and move within days of listing when priced correctly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 12 miles north of downtown Detroit via Woodward Avenue (M-1)</li>
              <li>• Direct access to I-696</li>
              <li>• Adjacent to Berkley, Ferndale, Birmingham, and Troy</li>
              <li>• Downtown Royal Oak walkable from large portions of the city&apos;s residential streets</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Royal Oak is served by the <strong>Royal Oak School District</strong>, which includes Royal Oak High School and a number of elementary and middle schools throughout the city. Verify the school assignment for any specific property directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Royal Oak?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              The Royal Oak market moves fast. If you are ready to buy or considering selling, let&apos;s have a conversation about timing and strategy.
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

          <div className="flex flex-wrap gap-2">
            {["/neighborhoods/birmingham-mi", "/neighborhoods/troy-mi", "/neighborhoods/bloomfield-township-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district information should be verified directly with the district. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
