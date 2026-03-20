import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livonia MI Real Estate | The Patrick Group",
  description:
    "Livonia, Michigan real estate guide — established Wayne County community, diverse housing stock, price ranges, school districts, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/livonia-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Livonia, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Livonia is a city in Wayne County, Michigan, one of the largest cities in the state by population, known for its well-maintained residential neighborhoods, strong infrastructure, and accessible price points.",
};

export default function LivoniaPage() {
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
            Livonia, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Livonia</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Livonia is one of the largest cities in Michigan by population, situated in the northwestern corner of Wayne County. It is a predominantly residential community with well-established neighborhoods developed largely during the postwar era through the 1970s and 80s. Livonia has a reputation as a stable, well-maintained community with strong municipal services and consistent property values over time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city&apos;s housing stock is primarily single-family, with a mix of brick ranches, colonials, and tri-levels on established streets with mature tree cover. Livonia is frequently evaluated alongside Westland, Northville Township, and Plymouth by buyers seeking accessible Wayne County options with proximity to major employment corridors and freeways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$225K – $600K+" },
              { label: "Common Property Types", value: "Brick ranch, colonial, tri-level, condo" },
              { label: "School Districts", value: "Livonia Public Schools, Clarenceville, Stevenson" },
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
              Livonia&apos;s market is characterized by consistent demand for its well-maintained brick ranch and colonial inventory. Homes with updated kitchens, bathrooms, and mechanicals in established neighborhoods tend to move quickly. Entry-level buyers find more accessible price points than in adjacent Plymouth or Northville, while still benefiting from Livonia&apos;s infrastructure and location.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city has a limited supply of new construction, as it is largely built out. Buyers focused on newer construction typically consider Canton Township, Plymouth Township, or communities further west. Condominiums and attached housing are available in several areas of the city for buyers seeking lower-maintenance options.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 20 miles west of downtown Detroit</li>
              <li>• Major freeway access: I-96, I-275, M-14, and Six Mile Road</li>
              <li>• Borders Plymouth Township, Northville Township, Farmington Hills, Redford, Dearborn Heights, and Westland</li>
              <li>• Proximity to Schoolcraft College and major retail/commercial corridors along Plymouth Road and Seven Mile Road</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Livonia is served by <strong>Livonia Public Schools</strong>. Portions of the city — primarily near its edges — may fall within <strong>Clarenceville School District</strong> or be adjacent to other district boundaries. Always verify the school assignment for a specific property address directly with the relevant district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Livonia?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We cover western Wayne County and know the Livonia market well. Call us to discuss current inventory, pricing, and what neighborhoods within the city match your priorities.
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
            {["/neighborhoods/plymouth-mi", "/neighborhoods/northville-mi", "/neighborhoods/detroit-mi"].map((href) => (
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
