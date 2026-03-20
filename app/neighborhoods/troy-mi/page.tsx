import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Troy MI Real Estate | The Patrick Group",
  description:
    "Troy, Michigan real estate guide — home price ranges, property types, school district, and market overview from The Patrick Group, Southeast Michigan specialists.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/troy-mi" },
};

export default function TroyPage() {
  return (
    <>
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link href="/neighborhoods" className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline">
            ← Neighborhood Guides
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-3">
            Troy, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Troy</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Troy is one of the largest cities in Oakland County by both population (approximately 87,000) and geographic area. It has a substantial commercial and corporate presence — including multiple Fortune 500 companies and a major retail corridor along Big Beaver Road — alongside a large and diverse residential base.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Troy&apos;s residential market spans a significant range, from more modestly priced starter homes in its southern sections to executive-level properties in the northern parts of the city near the Birmingham and Bloomfield Hills borders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $1M+" },
              { label: "Common Property Types", value: "Single-family, condos, executive homes" },
              { label: "School Districts", value: "Troy School District, Birmingham" },
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
              Troy&apos;s housing stock is extensive and varied. The city developed primarily from the 1960s through the 1990s, and many established subdivisions have seen significant renovation and reinvestment in recent years. New construction continues in select locations. Entry-level detached homes in Troy generally begin in the low $300s, while homes along the northern border with Birmingham can approach or exceed $1M.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The condominium and attached housing market in Troy is active, particularly near I-75 corridors and retail centers. Troy&apos;s strong employment base contributes to consistent buyer demand and generally low days-on-market for well-priced properties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Major highway access: I-75, I-696, and M-59</li>
              <li>• Approximately 20 miles north of downtown Detroit</li>
              <li>• Borders Birmingham, Bloomfield Township, Rochester Hills, Sterling Heights, and Warren</li>
              <li>• Somerset Collection (regional mall) and major corporate campuses located within the city</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              The majority of Troy falls within the <strong>Troy School District</strong>, which includes Troy High School and Athens High School at the secondary level. A small portion of northern Troy is served by the <strong>Birmingham City School District</strong>. Verify the school assignment for any specific property directly with the relevant district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Troy?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout Troy regularly. Call us to discuss current inventory, pricing, and which parts of the city fit your priorities.
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
            {["/neighborhoods/birmingham-mi", "/neighborhoods/bloomfield-township-mi", "/neighborhoods/royal-oak-mi"].map((href) => (
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
