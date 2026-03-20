import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bloomfield Hills MI Real Estate | The Patrick Group",
  description:
    "Bloomfield Hills, Michigan real estate guide — estate properties, wooded lots, school district, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/bloomfield-hills-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Bloomfield Hills, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Bloomfield Hills is a city in Oakland County, Michigan known for estate properties, wooded lots, and one of the state's most prestigious residential addresses.",
};

export default function BloomfieldHillsPage() {
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
            Bloomfield Hills, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Bloomfield Hills</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Bloomfield Hills is a small, incorporated city of approximately 3,900 residents set within Bloomfield Township in Oakland County. It is consistently ranked among Michigan&apos;s most affluent communities and is known for its large wooded lots, winding private roads, and substantial estate-style homes — many of which sit on one to several acres.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city is home to the Cranbrook Educational Community, a nationally recognized campus of schools, museums, and cultural institutions. Architecture in Bloomfield Hills ranges from mid-century modern to traditional colonial estates and contemporary new construction on existing lots.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$600K – $3M+" },
              { label: "Common Property Types", value: "Estate homes, large single-family" },
              { label: "School District", value: "Bloomfield Hills School District" },
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
              Bloomfield Hills properties are predominantly single-family estates. Lots of one acre or more are common, and many homes feature significant architectural detail, mature landscaping, and private settings. Entry price points in the city typically begin around $600,000, with many transactions well above $1M.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The market here is relationship-driven — a meaningful number of transactions occur off-market or through agent networks before hitting the MLS. Working with an experienced local agent is especially valuable in Bloomfield Hills.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Bordered by Bloomfield Township on all sides</li>
              <li>• Approximately 25 miles north of downtown Detroit</li>
              <li>• Access via Woodward Avenue (M-1), Lone Pine Road, and Quarton Road</li>
              <li>• Close proximity to Birmingham, Troy, and West Bloomfield</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Bloomfield Hills is served by the <strong>Bloomfield Hills School District</strong>, which includes Bloomfield Hills High School. The Cranbrook Schools — an independent K–12 institution — are also located within the city. School assignments depend on property location; verify directly with the district when evaluating specific addresses.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Interested in Bloomfield Hills?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We know the Bloomfield Hills market well, including properties that never reach the open market. Contact us to discuss what is currently available.
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
            {["/neighborhoods/birmingham-mi", "/neighborhoods/bloomfield-township-mi", "/neighborhoods/west-bloomfield-mi"].map((href) => (
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
