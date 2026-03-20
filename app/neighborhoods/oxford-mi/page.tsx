import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oxford MI Real Estate | The Patrick Group",
  description:
    "Oxford, Michigan real estate guide — historic village, acreage properties, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/oxford-mi" },
};

export default function OxfordPage() {
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
            Oxford, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Oxford</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Oxford refers to the Village of Oxford and surrounding Oxford Township in northern Oakland County. The village has a historic character with a small downtown along Washington Street and a longstanding community identity that distinguishes it from the more suburban communities to the south.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Oxford Township is one of the larger townships in Oakland County by land area and includes a significant amount of rural and agricultural land alongside subdivisions and lakefront properties. Buyers seeking more space, larger lots, or acreage at Oakland County price points often look to Oxford.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$250K – $900K" },
              { label: "Common Property Types", value: "Single-family, acreage, new construction" },
              { label: "School District", value: "Oxford Community Schools" },
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
              Oxford&apos;s market includes a broad spectrum — from entry-level homes in established village neighborhoods to larger new construction on township parcels to acreage properties suited to buyers seeking land alongside a residence. Price-per-square-foot in Oxford generally runs below comparable communities farther south in Oakland County.
            </p>
            <p className="text-gray-600 leading-relaxed">
              New construction activity has increased in Oxford Township in recent years as buyers from more densely developed areas seek larger lot sizes. Buyers should be attentive to well and septic status on rural parcels and factor in appropriate inspections.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located in northern Oakland County, approximately 40 miles north of Detroit</li>
              <li>• Primary access via M-24 (Lapeer Road) and M-59</li>
              <li>• Adjacent to Lake Orion, Addison Township, and Brandon Township</li>
              <li>• Oxford Village sits along Stony Creek, a tributary of the Clinton River</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              Oxford is served by <strong>Oxford Community Schools</strong>, which includes Oxford High School. The district serves the village and township. Verify the school assignment for any specific property directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Interested in Oxford?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout northern Oakland County. Call us to discuss the Oxford market and what fits your priorities.
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
            {["/neighborhoods/lake-orion-mi", "/neighborhoods/clarkston-mi", "/neighborhoods/rochester-mi"].map((href) => (
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
