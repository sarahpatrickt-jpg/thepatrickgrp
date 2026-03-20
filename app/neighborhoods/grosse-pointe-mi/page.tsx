import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grosse Pointe MI Real Estate | The Patrick Group",
  description:
    "Grosse Pointe, Michigan real estate guide — five distinct communities on Lake St. Clair, home price ranges, property types, and school district from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/grosse-pointe-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Grosse Pointe, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "The Grosse Pointes are five distinct communities on the Lake St. Clair shoreline in Wayne County, Michigan, known for historic architecture and a strong real estate market.",
};

export default function GrossePoinatePage() {
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
            Grosse Pointe, MI
          </h1>
          <p className="text-white/70 text-lg">Wayne County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About the Grosse Pointes</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              &ldquo;Grosse Pointe&rdquo; refers to five distinct municipalities along the Lake St. Clair shoreline in Wayne County: Grosse Pointe City, Grosse Pointe Park, Grosse Pointe Shores, Grosse Pointe Woods, and Grosse Pointe Farms. Each has its own municipal government, tax structure, and character, though they share a common school district and a unified sense of place.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Grosse Pointes are known for their architectural diversity — from Tudor revivals and colonial estates to mid-century colonials and newer construction infill. Many properties sit on generously sized lots with mature landscaping. Lake St. Clair frontage and access is a defining feature of the area, with several lakefront parks and private club access throughout the five communities.
            </p>
          </div>

          {/* Five communities breakdown */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">The Five Communities</h2>
            <div className="space-y-3">
              {[
                { name: "Grosse Pointe City", note: "The smallest of the five by area; dense, walkable, and closest to Detroit." },
                { name: "Grosse Pointe Park", note: "Largest by population; borders Detroit and offers some of the most accessible price points in the Pointes." },
                { name: "Grosse Pointe Farms", note: "Known for larger lots and estate-style homes; one of the more exclusive addresses." },
                { name: "Grosse Pointe Woods", note: "Primarily residential with a strong inventory of well-maintained colonials and ranches." },
                { name: "Grosse Pointe Shores", note: "Straddles the Wayne/Macomb county line; features some of the largest parcels and most significant lakefront properties." },
              ].map((c) => (
                <div key={c.name} className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
                  <p className="font-semibold text-[#1a1a1a] text-sm mb-1">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $2M+" },
              { label: "Common Property Types", value: "Tudor, colonial, estate, lakefront" },
              { label: "School District", value: "Grosse Pointe Public Schools" },
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
              The Grosse Pointe market spans a wide price range depending on which community, the size and condition of the home, and proximity to the lake. Entry-level homes in Grosse Pointe Park can be found in the low $300s, while significant estates in Grosse Pointe Farms or Shores regularly exceed $1.5M. The most sought-after properties — direct lakefront and landmark historic homes — command significant premiums.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Grosse Pointes have historically maintained strong values relative to surrounding communities. Inventory moves at varying speeds depending on price point and specific community. Working with an agent familiar with the distinctions between the five communities is particularly valuable here, as tax rates, municipal services, and lot characteristics vary meaningfully.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 10–15 miles east of downtown Detroit via Jefferson Avenue or I-94</li>
              <li>• Eastern boundary along Lake St. Clair; western border with Detroit and Harper Woods</li>
              <li>• Grosse Pointe Shores straddles the Wayne/Macomb county line</li>
              <li>• Jefferson Avenue (US-25) runs the length of the Pointes along the lakefront</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              All five Grosse Pointe communities are served by <strong>Grosse Pointe Public Schools</strong>, one district covering the entire area. The district includes Grosse Pointe North and Grosse Pointe South high schools. Grosse Pointe Shores properties north of the county line may be subject to additional considerations — verify assignment directly with the district for any specific address.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in the Grosse Pointes?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Navigating the five communities requires local expertise. Call us to discuss the current market and which community fits your priorities and budget.
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
            {["/neighborhoods/st-clair-shores-mi", "/neighborhoods/detroit-mi", "/neighborhoods/livonia-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions across all five Grosse Pointe communities and are not guarantees of value. Municipal tax rates and services vary by community. School district information should be verified directly with Grosse Pointe Public Schools. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
