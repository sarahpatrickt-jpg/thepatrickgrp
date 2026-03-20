import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shelby Township MI Real Estate | The Patrick Group",
  description:
    "Shelby Township, Michigan real estate guide — established and new construction homes, Stony Creek Metropark access, price ranges, and school districts from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/shelby-township-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Shelby Township, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Shelby Township is a charter township in Macomb County known for its mix of established neighborhoods and newer construction, with strong market demand and access to Stony Creek Metropark.",
};

export default function ShelbyTownshipPage() {
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
            Shelby Township, MI
          </h1>
          <p className="text-white/70 text-lg">Macomb County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Shelby Township</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Shelby Township is a charter township in northern Macomb County with a population of approximately 75,000 and a land area of roughly 35 square miles. It sits at the intersection of Macomb and Oakland counties — bordering Rochester Hills to the west — and has been a consistently sought-after address in the region for both its residential character and access to recreational amenities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Stony Creek Metropark, one of the most popular parks in the Huron-Clinton Metroparks system, sits along Shelby Township&apos;s northern and western borders, offering 4,400+ acres of recreational space including Stony Creek Lake. The township offers a mix of established subdivisions from the 1980s and 1990s alongside newer construction that continues in select areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $800K+" },
              { label: "Common Property Types", value: "Single-family, colonial, ranch, new construction" },
              { label: "School Districts", value: "Utica Community Schools" },
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
              Shelby Township is one of the stronger residential markets in Macomb County. Well-maintained colonials and ranch homes in established subdivisions — many built between 1980 and 2005 — make up the core of the housing stock. Larger executive-style homes on deeper lots are also common, particularly in the township&apos;s northern sections.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Shelby Township tends to attract buyers who are considering both Oakland and Macomb County options, particularly those who prioritize newer construction, larger lots, and access to recreational space while remaining within a competitive price range. Homes in desirable subdivisions move quickly when priced correctly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located in northern Macomb County, approximately 30 miles north of downtown Detroit</li>
              <li>• Major access via M-53 (Van Dyke), M-59 (Hall Road), and 23 Mile Road</li>
              <li>• Borders Rochester Hills (Oakland County), Sterling Heights, Macomb Township, and Utica</li>
              <li>• Stony Creek Metropark — 4,400+ acres including Stony Creek Lake — borders the township</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Shelby Township is served by <strong>Utica Community Schools</strong>, one of the larger school districts in Macomb County, which includes Eisenhower, Shelby, and Utica high schools at the secondary level. Small portions of the township near the Oakland County border may fall within adjacent districts. Always verify the school assignment for a specific property directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Shelby Township?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Shelby Township sits right at the Macomb/Oakland county line — an area we know well from both sides. Call us to discuss the current market and what fits your situation.
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
            {["/neighborhoods/macomb-township-mi", "/neighborhoods/sterling-heights-mi", "/neighborhoods/rochester-hills-mi"].map((href) => (
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
