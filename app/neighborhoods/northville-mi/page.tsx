import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Northville MI Real Estate | The Patrick Group",
  description:
    "Northville, Michigan real estate guide — historic downtown, established neighborhoods, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/northville-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Northville, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Northville is a city and township in Wayne and Oakland counties, Michigan, known for its historic downtown, strong school district, and well-maintained residential neighborhoods.",
};

export default function NorthvillePage() {
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
            Northville, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne &amp; Oakland Counties · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Northville</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Northville encompasses the City of Northville and Northville Township. The city itself is a small, walkable community with a well-preserved historic downtown featuring independent retailers, restaurants, and seasonal events. Northville Township is larger geographically and contains the majority of the area&apos;s residential subdivisions. The community straddles the Wayne and Oakland county lines, with portions falling in each county.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Northville is consistently ranked among the most desirable communities in Southeast Michigan. Its combination of a strong school district, established neighborhoods with mature landscaping, and an active downtown make it a destination for buyers from both the Oakland and Wayne County sides of the metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$350K – $1M+" },
              { label: "Common Property Types", value: "Single-family, colonial, new construction" },
              { label: "School District", value: "Northville Public Schools" },
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
              The Northville market includes a range of housing — from smaller colonials and ranches on modest lots in the city proper to larger executive-style homes and new construction in the township&apos;s many planned communities. Homes within walking distance of downtown Northville carry a premium. New construction communities in Northville Township continue to attract buyers seeking updated floor plans and finishes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Northville consistently sees strong buyer demand and relatively low days-on-market for well-priced properties. It is frequently considered alongside Plymouth, Canton, and South Lyon by buyers evaluating western Wayne and Oakland County options.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 25 miles west of downtown Detroit</li>
              <li>• Access via I-275, M-14, and Six Mile Road</li>
              <li>• Borders Plymouth, Canton Township, South Lyon, and Novi</li>
              <li>• Straddles the Wayne/Oakland county line — properties may fall in either county</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Both the City of Northville and Northville Township are served by <strong>Northville Public Schools</strong>, which includes Northville High School. A small number of properties on the township&apos;s edges may fall within adjacent districts. Always verify the school assignment for a specific address directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Northville?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout western Wayne and Oakland County. Call us to discuss the Northville market and what fits your timeline and budget.
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
            {["/neighborhoods/plymouth-mi", "/neighborhoods/livonia-mi", "/neighborhoods/birmingham-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district information should be verified directly with the district. Properties in Northville may fall within Wayne or Oakland County — verify county designation for tax and jurisdiction purposes. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
