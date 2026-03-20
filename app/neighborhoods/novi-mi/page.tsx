import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Novi MI Real Estate | The Patrick Group",
  description:
    "Novi, Michigan real estate guide — diverse housing stock, new construction, lake communities, major retail corridor, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/novi-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Novi, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Novi is a city in Oakland County, Michigan, known for its diverse housing stock, active new construction market, lake communities, and proximity to major employment and retail corridors along I-96.",
};

export default function NoviPage() {
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
            Novi, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Novi</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Novi is one of Oakland County&apos;s larger and more active real estate markets, situated along the I-96 corridor in western Oakland County. The city has grown significantly over the past several decades and now contains a wide variety of housing — from established subdivisions built in the 1970s and 80s through active new construction communities. Novi is also home to several lake communities, including properties on Walled Lake and Shawood Lake.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Novi is frequently evaluated alongside Northville, Plymouth, and South Lyon by buyers in western Oakland County. Its combination of relatively accessible price points, proximity to I-96 and I-275, a strong school district, and a wide selection of housing types makes it one of the more versatile markets in the region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $1M+" },
              { label: "Common Property Types", value: "Single-family, new construction, lakefront, condo" },
              { label: "School District", value: "Novi Community School District" },
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
              Novi&apos;s market spans a broad range. Entry-level condos and smaller single-family homes offer accessible starting points, while larger executive-style homes and new construction in planned communities reach well into the seven figures. Lake properties on Walled Lake command significant premiums and represent a distinct segment of the market with its own buyer pool.
            </p>
            <p className="text-gray-600 leading-relaxed">
              New construction activity in Novi has been sustained over many years, with builder communities continuing to attract buyers seeking updated floor plans, energy efficiency, and warranty coverage. Resale inventory competes alongside new builds, making pricing and condition particularly important for sellers in established neighborhoods.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 28 miles northwest of downtown Detroit</li>
              <li>• Primary access via I-96, I-275, and Grand River Avenue</li>
              <li>• Borders Northville Township, South Lyon, Wixom, Walled Lake, and West Bloomfield</li>
              <li>• Home to Twelve Oaks Mall and a major retail/commercial corridor along Grand River and Novi Road</li>
              <li>• Walled Lake and Shawood Lake within city boundaries provide lakefront property options</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Novi is served by <strong>Novi Community School District</strong>, which includes Novi High School. A small number of properties near the city&apos;s edges may fall within adjacent districts. Always verify the school assignment for a specific address directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Novi?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout Oakland County and know the Novi market well — from established subdivisions to new construction and lakefront. Call us to discuss what&apos;s available and what fits your timeline and budget.
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
            {["/neighborhoods/northville-mi", "/neighborhoods/west-bloomfield-mi", "/neighborhoods/birmingham-mi"].map((href) => (
              <Link key={href} href={href} className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
                {href.split("/neighborhoods/")[1].replace(/-mi$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            ))}
            <Link href="/neighborhoods" className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors">
              All Neighborhoods →
            </Link>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges reflect general market conditions and are not guarantees of value. School district information should be verified directly with Novi Community School District. Waterfront property characteristics should be independently verified. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
