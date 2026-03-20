import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rochester Hills MI Real Estate | The Patrick Group",
  description:
    "Rochester Hills, Michigan real estate guide — established neighborhoods, price ranges, school districts, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/rochester-hills-mi" },
};

export default function RochesterHillsPage() {
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
            Rochester Hills, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Rochester Hills</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Rochester Hills is a city of approximately 75,000 residents in northern Oakland County. It is one of the larger cities in the county by population and covers a broad geographic area with a diverse mix of subdivisions, commercial corridors, and natural features including the Paint Creek Trail and several parks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Oakland University — a public university with approximately 18,000 students — is located in Rochester Hills, contributing to the area&apos;s character and rental market. The city offers a range of housing price points that make it accessible to a wider range of buyers than neighboring Birmingham or Bloomfield Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $800K" },
              { label: "Common Property Types", value: "Single-family, condos, new construction" },
              { label: "School Districts", value: "Rochester Community Schools, Avondale" },
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
              Rochester Hills contains a large number of established subdivisions built from the 1970s through the 2000s, many with mature landscaping and larger lot sizes. New construction activity continues in areas near the city&apos;s northern and eastern edges. Condominium communities are also prevalent, particularly near major commercial corridors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The city&apos;s size means that location within Rochester Hills matters considerably — neighborhoods closer to Rochester&apos;s downtown or the Paint Creek Trail tend to command premium pricing relative to areas farther south near Auburn Hills.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Access to M-59 (Hall Road), I-75, and M-24 (Lapeer Road)</li>
              <li>• Adjacent to Rochester, Auburn Hills, and Pontiac</li>
              <li>• Approximately 30 miles north of downtown Detroit</li>
              <li>• Paint Creek Trail accessible from multiple trailheads within the city</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              Most of Rochester Hills falls within <strong>Rochester Community Schools</strong>. A small portion of the city falls within the <strong>Avondale School District</strong>. Always verify the school assignment for a specific address directly with the relevant district before making a purchase decision based on school boundaries.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Looking in Rochester Hills?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work in Rochester Hills regularly and can help you identify the right subdivision, price range, and school district for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2487553545" className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center">
                Call 248.755.3545
              </a>
              <Link href="/vip-buyers" className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center">
                Join VIP Buyers List →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["/neighborhoods/rochester-mi", "/neighborhoods/troy-mi", "/neighborhoods/clarkston-mi"].map((href) => (
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
