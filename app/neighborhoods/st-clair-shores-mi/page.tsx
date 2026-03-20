import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "St. Clair Shores MI Real Estate | The Patrick Group",
  description:
    "St. Clair Shores, Michigan real estate guide — Lake St. Clair waterfront and canal properties, price ranges, school district, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/st-clair-shores-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "St. Clair Shores, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "St. Clair Shores is a city in Macomb County, Michigan, known for its extensive Lake St. Clair waterfront, canal communities, and established residential neighborhoods.",
};

export default function StClairShoresPage() {
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
            St. Clair Shores, MI
          </h1>
          <p className="text-white/70 text-lg">Macomb County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About St. Clair Shores</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              St. Clair Shores is a city of approximately 58,000 residents situated along the western shore of Lake St. Clair in southern Macomb County. The city is known throughout Southeast Michigan for its extensive canal system — more than 25 miles of canals flow through residential neighborhoods, giving a significant number of homes private boat access directly to Lake St. Clair.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city has a well-established residential character with housing stock that spans mid-century brick ranches and bungalows through to renovated and newer waterfront properties. The Nautical Mile — a stretch of Jefferson Avenue along the Lake St. Clair shoreline — serves as the city&apos;s commercial and dining corridor. St. Clair Shores is consistently one of the more active real estate markets in Macomb County, with strong demand for both waterfront and non-waterfront inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$200K – $900K+" },
              { label: "Common Property Types", value: "Canal-front, single-family, ranch" },
              { label: "School District", value: "South Lake Schools, Lakeview Schools" },
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
              The St. Clair Shores market divides broadly into waterfront and non-waterfront segments. Canal-front homes — those with private boat slips or dock access — command significant premiums over comparable non-waterfront properties and represent some of the most sought-after inventory in Macomb County. Direct Lake St. Clair frontage along Jefferson and Lakeshore Drive is the highest-demand tier of the market.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Non-waterfront properties in St. Clair Shores offer solid value — well-maintained brick ranches on established streets are common throughout the city&apos;s interior at accessible price points. Many buyers in this market weigh St. Clair Shores against Grosse Pointe and Clinton Township waterfront options, and the city often represents a more competitive price-per-square-foot for comparable lake access.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Buyers considering canal or waterfront properties should evaluate seawall condition, water depth, and boat access carefully with appropriate inspections and disclosures. These factors materially affect value and use.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 15 miles northeast of downtown Detroit</li>
              <li>• Primary access via I-94, Jefferson Avenue, and Gratiot Avenue (M-3)</li>
              <li>• Borders Detroit, Roseville, Clinton Township, and Grosse Pointe Woods</li>
              <li>• Lake St. Clair waterfront along the city&apos;s entire eastern boundary</li>
              <li>• The Nautical Mile (Jefferson Avenue) runs along the lakefront with marina and dining access</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              St. Clair Shores spans two school district boundaries. The northern portion of the city falls within <strong>South Lake Schools</strong>, while the southern portion is served by <strong>Lakeview Public Schools</strong>. The dividing line between the two districts runs through the city. Always verify the school assignment for a specific property directly with the relevant district — do not rely on general location within the city as a guide.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in St. Clair Shores?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Waterfront and canal transactions involve additional considerations — seawall, depth, dock rights, and flood zone status among them. We have experience guiding buyers and sellers through these complexities. Call us to discuss the current market.
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
            {["/neighborhoods/clinton-township-mi", "/neighborhoods/warren-mi", "/neighborhoods/sterling-heights-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district boundaries should be verified directly with the relevant district. Waterfront property characteristics including seawall condition, water depth, dock rights, and flood zone designation should be independently verified. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
