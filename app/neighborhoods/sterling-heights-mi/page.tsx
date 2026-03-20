import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sterling Heights MI Real Estate | The Patrick Group",
  description:
    "Sterling Heights, Michigan real estate guide — home price ranges, property types, school district, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/sterling-heights-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sterling Heights, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Sterling Heights is the largest city in Macomb County and one of the largest in Michigan, known for its diverse housing stock and strong market fundamentals.",
};

export default function SterlingHeightsPage() {
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
            Sterling Heights, MI
          </h1>
          <p className="text-white/70 text-lg">Macomb County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Sterling Heights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Sterling Heights is the largest city in Macomb County and the fourth-largest city in Michigan by population, with approximately 134,000 residents. It covers roughly 36 square miles in southern Macomb County and borders Warren to the south, Utica to the north, and Clinton Township to the east.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city has a substantial manufacturing and technology employment base, and its residential market reflects decades of steady development. Housing stock ranges from smaller ranches and bungalows in the city&apos;s southern sections to larger colonial and split-level homes in the northern areas. Sterling Heights consistently draws buyers looking for value relative to Oakland County communities at comparable lot sizes and square footage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$200K – $550K" },
              { label: "Common Property Types", value: "Single-family, ranch, colonial, condos" },
              { label: "School Districts", value: "Utica Community Schools, Warren Con." },
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
              Sterling Heights offers some of the most accessible entry-level price points in Southeast Michigan for detached single-family homes. The city developed primarily from the 1950s through the 1980s, and a significant portion of the housing stock consists of brick ranches and colonial-style homes on modest lots. Renovation and reinvestment activity has been steady throughout the city.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The northern sections of Sterling Heights — near the Utica and Shelby Township borders — generally command higher price points and include larger homes on more substantial lots. Condominium and attached housing options are also prevalent throughout the city.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 20 miles north of downtown Detroit</li>
              <li>• Major highway access: I-696, M-53 (Van Dyke), and M-59 (Hall Road)</li>
              <li>• Borders Warren, Clinton Township, Utica, and Shelby Township</li>
              <li>• Partridge Creek Mall and major retail corridors along Hall Road and Van Dyke</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              Sterling Heights spans multiple school district boundaries. Most of the city falls within <strong>Utica Community Schools</strong> or <strong>Warren Consolidated Schools</strong>, depending on location within the city. A small portion may also be served by other adjacent districts. Always verify the school assignment for a specific address directly with the relevant district before making a purchase decision based on school boundaries.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Sterling Heights?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We serve Macomb County alongside Oakland County. Call us to discuss the current Sterling Heights market and what fits your priorities.
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
            {["/neighborhoods/shelby-township-mi", "/neighborhoods/macomb-township-mi", "/neighborhoods/clinton-township-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district boundaries should be verified directly with the relevant district. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
