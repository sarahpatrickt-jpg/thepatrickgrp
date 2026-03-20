import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birmingham MI Real Estate | The Patrick Group",
  description:
    "Birmingham, Michigan real estate guide — home price ranges, property types, school district, and market overview from The Patrick Group, Southeast Michigan specialists.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/birmingham-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Birmingham, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Birmingham is a city in Oakland County, Michigan known for its walkable downtown, established neighborhoods, and strong real estate market.",
};

export default function BirminghamPage() {
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
            Birmingham, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Birmingham</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Birmingham is one of Oakland County&apos;s most established cities, known for its walkable downtown along Merrill Street and Old Woodward Avenue, a dense concentration of independent restaurants, boutiques, and galleries. The city sits at approximately 4.7 square miles and borders Bloomfield Township to the north and Beverly Hills to the west.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Real estate in Birmingham spans a wide range — from historic bungalows on tree-lined streets to modern new construction and luxury condominiums. The city has consistently maintained strong buyer demand and competitive days-on-market figures across market cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$500K – $2M+" },
              { label: "Common Property Types", value: "Single-family, condos, new construction" },
              { label: "School District", value: "Birmingham City School District" },
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
              Birmingham&apos;s housing stock includes a mix of Tudor revivals and colonials from the 1920s–1950s, alongside significant new construction activity in recent years. Lots tend to be smaller in the downtown core and larger toward the city&apos;s edges. Entry-level homes in Birmingham typically begin in the mid-$400s, while renovated or new-construction properties regularly exceed $1.5M.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The condominium market is active, with several well-maintained buildings in and around the downtown area offering lock-and-leave convenience. Inventory in Birmingham tends to move quickly — well-priced homes often see multiple offers within the first week of listing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 20 miles north of downtown Detroit via Woodward Avenue (M-1)</li>
              <li>• Quick access to I-696 and US-24 (Telegraph Road)</li>
              <li>• Adjacent to Bloomfield Township, Beverly Hills, and Royal Oak</li>
              <li>• Downtown Birmingham is walkable from most residential streets within the city core</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Birmingham is served by the <strong>Birmingham City School District</strong>, which includes Seaholm High School and Groves High School at the secondary level, along with several elementary and middle school buildings. Boundary lines determine school assignments — we recommend verifying which school a specific property feeds into directly with the district. Some properties on the city&apos;s edge may fall within adjacent districts.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Thinking about Birmingham?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We have helped buyers and sellers navigate the Birmingham market across every price point. Call us for a no-pressure conversation about what the current market looks like.
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
            {["/neighborhoods/bloomfield-hills-mi", "/neighborhoods/royal-oak-mi", "/neighborhoods/bloomfield-township-mi"].map((href) => (
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
