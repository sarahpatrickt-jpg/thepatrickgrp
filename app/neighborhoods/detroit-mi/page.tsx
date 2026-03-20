import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Detroit MI Real Estate | The Patrick Group",
  description:
    "Detroit, Michigan real estate guide — diverse neighborhoods, price ranges, property types, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/detroit-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Detroit, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Detroit is the largest city in Michigan and Wayne County, with a diverse range of residential neighborhoods spanning a wide spectrum of price points and property types.",
};

export default function DetroitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline">
            ← Neighborhood Guides
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-3">
            Detroit, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Detroit</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Detroit is Michigan&apos;s largest city and a major metropolitan center in the Great Lakes region. The city covers approximately 143 square miles and contains dozens of distinct residential neighborhoods — from historic districts with architecturally significant homes to newer infill development and rehabilitated properties across a wide range of conditions and price points.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Detroit&apos;s residential real estate market is highly location-specific. Property values, condition, and activity levels vary significantly from neighborhood to neighborhood and even block to block. Buyers and sellers working in Detroit benefit from working with an agent with direct familiarity with the specific areas they are considering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$50K – $800K+" },
              { label: "Common Property Types", value: "Single-family, historic, condo, new construction" },
              { label: "School District", value: "Detroit Public Schools Community District" },
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
              Detroit&apos;s real estate market spans an unusually wide range. Entry-level inventory can be found well below the regional average, while architecturally significant homes in established historic areas, renovated properties in revitalizing corridors, and new construction developments command prices competitive with surrounding suburbs. The market rewards buyers and sellers who understand neighborhood-level dynamics.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Buyers considering Detroit should conduct thorough due diligence — title review, property condition assessment, neighborhood context, and tax status are all important considerations that vary widely across the city. Working with an agent experienced in Detroit transactions is particularly valuable for navigating these factors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Detroit also has a growing condo and loft market in and around the greater downtown core, including Midtown and adjacent areas, attracting buyers seeking urban living with proximity to the city&apos;s cultural, dining, and entertainment assets.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located along the Detroit River, directly across from Windsor, Ontario</li>
              <li>• Major freeway corridors: I-94, I-75, I-96, M-10 (Lodge), and the Chrysler Freeway</li>
              <li>• Borders Hamtramck, Highland Park, Dearborn, Grosse Pointe communities, and numerous other Wayne County municipalities</li>
              <li>• Detroit Metropolitan Wayne County Airport (DTW) approximately 20 miles southwest</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Detroit is served by <strong>Detroit Public Schools Community District (DPSCD)</strong>. Detroit also has a significant number of charter schools operating within city boundaries. School options and assignments vary by address. Always verify school information for a specific property directly with the relevant school or district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Detroit?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Detroit transactions require neighborhood-specific knowledge and careful due diligence. We can help buyers and sellers navigate the market with confidence. Call us to discuss your situation.
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
            {["/neighborhoods/grosse-pointe-mi", "/neighborhoods/livonia-mi", "/neighborhoods/warren-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions across Detroit&apos;s many distinct neighborhoods and are not guarantees of value. Property conditions, title status, and neighborhood context vary widely — independent due diligence is strongly recommended. School information should be verified directly with the relevant school or district. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
