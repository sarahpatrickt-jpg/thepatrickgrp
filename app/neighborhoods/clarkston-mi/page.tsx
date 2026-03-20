import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clarkston MI Real Estate | The Patrick Group",
  description:
    "Clarkston, Michigan real estate guide — village character, lake access, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/clarkston-mi" },
};

export default function ClarkstonPage() {
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
            Clarkston, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Clarkston</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The Clarkston area encompasses the Village of Clarkston — one of the smallest incorporated communities in Michigan by land area — as well as the surrounding Independence Township. Together, they form the broader Clarkston community with a population of approximately 30,000–35,000 across the township.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Village of Clarkston has a well-regarded historic downtown with a small collection of locally owned restaurants and shops, and is listed on the National Register of Historic Places. The area also includes Pine Knob Music Theatre, a major regional entertainment venue. Clarkston offers a distinctly different character from the more urbanized communities to the south — more rural, with larger lots and significant lake and recreational access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $1.5M+" },
              { label: "Common Property Types", value: "Single-family, lakefront, acreage" },
              { label: "School District", value: "Clarkston Community Schools" },
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
              The Clarkston real estate market includes a wide range of property types. Lakefront and lake-access homes on Deer Lake, Whipple Lake, Cranberry Lake, and others command premium pricing. Inland properties range from modest subdivisions to acreage parcels with significant square footage. The area has seen growing buyer interest from buyers relocating out of more densely developed communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              New construction exists but at a more limited pace than communities closer to Detroit&apos;s major corridors. Well-maintained existing homes in desirable locations tend to move quickly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located in northern Oakland County, approximately 40 miles north of Detroit</li>
              <li>• Primary highway access via I-75 (Exit 89, Sashabaw Road)</li>
              <li>• Adjacent to Waterford Township, Lake Orion, and Springfield Township</li>
              <li>• Pine Knob Music Theatre located within Independence Township</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School District</h2>
            <p className="text-gray-600 leading-relaxed">
              The Clarkston area is primarily served by <strong>Clarkston Community Schools</strong>, which includes Clarkston High School. The district covers Independence Township and portions of adjacent townships. As with any purchase decision, verify the specific school assignment for a property directly with the district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Looking in Clarkston?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We work throughout northern Oakland County including the Clarkston area. Call us to discuss what is available and what the market looks like today.
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
            {["/neighborhoods/lake-orion-mi", "/neighborhoods/rochester-hills-mi", "/neighborhoods/west-bloomfield-mi"].map((href) => (
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
