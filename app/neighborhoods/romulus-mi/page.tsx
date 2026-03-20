import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romulus MI Real Estate | The Patrick Group",
  description:
    "Romulus, Michigan real estate guide — Wayne County community near DTW airport, accessible price points, property types, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/romulus-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Romulus, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Romulus is a city in Wayne County, Michigan, located adjacent to Detroit Metropolitan Wayne County Airport (DTW), with accessible residential price points and proximity to major transportation corridors.",
};

export default function RomulusPage() {
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
            Romulus, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Romulus</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Romulus is a city in southern Wayne County, best known as the location of Detroit Metropolitan Wayne County Airport (DTW), one of the busiest airports in the Midwest. Beyond the airport, Romulus has an established residential community with neighborhoods primarily developed from the 1960s through the 1990s.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city offers some of the most accessible price points in Wayne County for detached single-family homes. Its position along major interstate corridors — I-94 and I-275 — provides straightforward access to Detroit, Ann Arbor, and the broader Metro Detroit area. Romulus is often considered by buyers prioritizing price-per-square-foot and freeway proximity over proximity to suburban downtown areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$150K – $400K" },
              { label: "Common Property Types", value: "Single-family, ranch, colonial" },
              { label: "School District", value: "Romulus Community Schools" },
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
              Romulus offers buyers an opportunity to purchase detached single-family homes at price points well below the regional Metro Detroit average. The housing stock is primarily ranches and colonials on established streets. Buyers focused on value and square footage relative to cost often compare Romulus alongside other southern Wayne County communities such as Westland, Taylor, and Inkster.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Proximity to DTW is relevant for buyers with travel-intensive careers or roles in airport-adjacent industries. Buyers sensitive to aircraft noise should evaluate specific properties in relation to flight patterns. This factor is worth discussing with your agent when narrowing down specific neighborhoods within the city.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 20 miles southwest of downtown Detroit</li>
              <li>• Major freeway access: I-94 and I-275</li>
              <li>• Home to Detroit Metropolitan Wayne County Airport (DTW)</li>
              <li>• Borders Belleville, Van Buren Township, Huron Township, Taylor, and Inkster</li>
              <li>• Proximity to Ford Motor Company and supplier facilities along the I-94 corridor</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Romulus is served by <strong>Romulus Community Schools</strong>. As with any community, always verify the school assignment for a specific property address directly with the district, as boundary lines can vary.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Romulus?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout Wayne County and can help you evaluate Romulus alongside other communities that match your priorities. Call us to discuss what&apos;s currently available.
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
            {["/neighborhoods/livonia-mi", "/neighborhoods/plymouth-mi", "/neighborhoods/detroit-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. Buyers should independently evaluate factors including aircraft noise for properties near DTW. School district information should be verified directly with Romulus Community Schools. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
