import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rochester MI Real Estate | The Patrick Group",
  description:
    "Rochester, Michigan real estate guide — downtown, Paint Creek Trail, home prices, school district, and market info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/rochester-mi" },
};

export default function RochesterPage() {
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
            Rochester, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Rochester</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Rochester is a small city of approximately 13,000 residents in northern Oakland County, situated along the Clinton River. It is home to a well-regarded downtown with independent retailers, restaurants, and seasonal events, as well as access to the Paint Creek Trail — a 9-mile non-motorized trail connecting Rochester to Lake Orion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Oakland University is located adjacent to Rochester in Rochester Hills, adding a university presence to the broader community. The Patrick Group is headquartered in Rochester at 408 East Street, and we know this market exceptionally well.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$350K – $900K" },
              { label: "Common Property Types", value: "Single-family, condos, townhomes" },
              { label: "School District", value: "Rochester Community Schools" },
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
              Rochester&apos;s housing stock includes a mix of older colonials and ranches near the downtown core, mid-century builds on larger lots, and newer construction on the city&apos;s edges. Condominiums and townhomes — often in walkable proximity to Main Street — are also a consistent segment of the market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Rochester is a popular choice among buyers who prioritize walkability and downtown access without the pricing of Birmingham or Bloomfield Hills. Homes in well-maintained condition in desirable locations tend to move quickly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 30 miles north of downtown Detroit</li>
              <li>• Access to M-59, I-75 (via Rochester Road), and M-24</li>
              <li>• Adjacent to Rochester Hills, Auburn Hills, and Orion Township</li>
              <li>• Paint Creek Trail connects Rochester to Lake Orion (approx. 9 miles)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Rochester is served by <strong>Rochester Community Schools</strong>, one of the larger school districts in Oakland County, which includes multiple elementary and middle schools and two high schools — Rochester High School and Adams High School. The district also serves portions of Rochester Hills and Oakland Township. Verify the specific school assignment for any property directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Buying or selling in Rochester?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">We&apos;re Here</h2>
            <p className="text-white/70 text-sm mb-5">
              Our office is in Rochester. We know every street, every subdivision, and the current state of the market. Call or stop by.
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
            {["/neighborhoods/rochester-hills-mi", "/neighborhoods/lake-orion-mi", "/neighborhoods/oxford-mi"].map((href) => (
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
