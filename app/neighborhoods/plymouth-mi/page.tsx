import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plymouth MI Real Estate | The Patrick Group",
  description:
    "Plymouth, Michigan real estate guide — historic downtown village, diverse housing stock, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/plymouth-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Plymouth, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Plymouth is a city and township in Wayne County, Michigan, known for its walkable historic downtown, Kellogg Park, and established residential neighborhoods.",
};

export default function PlymouthPage() {
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
            Plymouth, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Plymouth</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Plymouth encompasses the City of Plymouth and Plymouth Township. The city is centered on Kellogg Park, a well-preserved historic downtown village square surrounded by independent shops, restaurants, and year-round community events. The compact, walkable city proper is one of the most distinctive in Southeast Michigan, with a genuine small-town character that attracts significant buyer interest.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Plymouth Township surrounds the city and contains the majority of the area&apos;s residential subdivisions and newer construction. The combined Plymouth market draws buyers from both Wayne and western Oakland County, frequently compared alongside Northville and Canton for buyers evaluating communities in this corridor of western Wayne County.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $900K+" },
              { label: "Common Property Types", value: "Single-family, colonial, bungalow, condo" },
              { label: "School District", value: "Plymouth-Canton Community Schools" },
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
              Homes within the City of Plymouth — particularly those within walking distance of Kellogg Park and the downtown corridor — carry a notable premium relative to comparable properties elsewhere in the township. The city&apos;s older housing stock includes bungalows, Tudors, and colonials on tree-lined streets. Properties in the city proper tend to have smaller lot sizes than township counterparts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Plymouth Township offers a broader range of options, from established subdivisions built through the 1980s and 90s to more recent construction in planned communities. Entry-level inventory in the township is generally more accessible than in the city. The Plymouth market overall sees consistent demand and tends to move quickly for well-priced, well-maintained homes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 25 miles west of downtown Detroit</li>
              <li>• Primary access via I-275, M-14, and Ann Arbor Road</li>
              <li>• Borders Northville, Canton Township, Livonia, and Westland</li>
              <li>• Ann Arbor Trail connects Plymouth to adjacent communities to the east and west</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Plymouth and Plymouth Township is served by <strong>Plymouth-Canton Community Schools</strong>, which includes Plymouth Canton High School (P-CEP). A small number of properties on the periphery may fall within adjacent districts. Always verify the school assignment for a specific address directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Plymouth?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout western Wayne County and know the Plymouth market — city and township. Call us to discuss current inventory and what fits your priorities and budget.
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
            {["/neighborhoods/northville-mi", "/neighborhoods/livonia-mi", "/neighborhoods/canton-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district information should be verified directly with Plymouth-Canton Community Schools. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
