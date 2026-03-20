import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lake Orion MI Real Estate | The Patrick Group",
  description:
    "Lake Orion, Michigan real estate guide — waterfront living, price ranges, school district, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/lake-orion-mi" },
};

export default function LakeOrionPage() {
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
            Lake Orion, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Lake Orion</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Lake Orion refers to the Village of Lake Orion and surrounding Orion Township in northern Oakland County. The centerpiece of the community is Lake Orion itself — a 521-acre all-sports lake with significant waterfront development, seasonal cottages, and year-round residences. The Paint Creek Trail connects Lake Orion village to Rochester, approximately 9 miles to the south.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lake Orion village has a small but active downtown, and Orion Township overall is one of Oakland County&apos;s larger townships by land area. The area draws buyers seeking recreational lake access at price points generally below those of Clarkston or West Bloomfield waterfront properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$250K – $1.2M+" },
              { label: "Common Property Types", value: "Lakefront, single-family, cottages" },
              { label: "School District", value: "Lake Orion Community Schools" },
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
              Waterfront and lake-access properties on Lake Orion are the defining segment of this market. Direct frontage on the main lake commands the highest prices; homes with deeded lake access or on connected channels sit below that threshold. Non-waterfront homes in Orion Township offer some of the more affordable entry points in northern Oakland County.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Some seasonal cottages have been converted to year-round primary residences over time, while others remain seasonal in use. Buyers considering lakefront properties should evaluate well, septic, and utility status carefully with appropriate inspections.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located in northern Oakland County, approximately 35 miles north of Detroit</li>
              <li>• Access via M-24 (Lapeer Road) and I-75 to the west</li>
              <li>• Adjacent to Rochester Hills, Clarkston, and Oxford Township</li>
              <li>• Paint Creek Trail southern terminus in Rochester, northern end near the village</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The Lake Orion area is served by <strong>Lake Orion Community Schools</strong>, which includes Lake Orion High School. Verify the specific school assignment for any property with the district directly, as Orion Township&apos;s size means some addresses may fall within adjacent districts.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Looking at Lake Orion?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Waterfront transactions require additional due diligence. We have experience navigating lakefront purchases and can help you understand what questions to ask.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2487553545" className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center">
                Call 248.755.3545
              </a>
              <Link href="/contact" className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center">
                Send a Message →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["/neighborhoods/rochester-mi", "/neighborhoods/clarkston-mi", "/neighborhoods/oxford-mi"].map((href) => (
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
