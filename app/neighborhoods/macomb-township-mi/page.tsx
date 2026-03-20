import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Macomb Township MI Real Estate | The Patrick Group",
  description:
    "Macomb Township, Michigan real estate guide — new construction, growing community, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/macomb-township-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Macomb Township, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Macomb Township is one of the fastest-growing communities in Michigan, known for new construction and expanding residential development in northern Macomb County.",
};

export default function MacombTownshipPage() {
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
            Macomb Township, MI
          </h1>
          <p className="text-white/70 text-lg">Macomb County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Macomb Township</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Macomb Township has been one of the fastest-growing communities in Michigan over the past two decades, with a current population of approximately 90,000 and a large amount of developable land still attracting new construction. Located in north-central Macomb County, the township covers approximately 36 square miles and has undergone significant residential expansion since the early 2000s.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike many of the more established communities in Southeast Michigan, Macomb Township&apos;s housing stock skews newer — a large percentage of homes were built after 2000, and active new construction subdivisions continue to add inventory. This makes it a frequent choice for buyers seeking newer homes with updated floor plans and finishes at competitive price points.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $700K+" },
              { label: "Common Property Types", value: "New construction, colonial, ranch" },
              { label: "School District", value: "New Haven Community Schools, Utica" },
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
              Macomb Township&apos;s real estate market is characterized by a high proportion of newer builds — open floor plans, larger square footage, and updated finishes are common relative to older communities in the region. Many subdivisions were developed in phases over the 2000s and 2010s, resulting in neighborhoods with relatively uniform age and style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The township attracts buyers who prioritize newer construction, larger lot sizes, and more space for the price compared to communities closer to Detroit. Active builder communities continue to offer new construction options across multiple price points. As with any new construction purchase, buyers should review builder contracts carefully and consider independent representation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Located in northern Macomb County, approximately 30 miles north of downtown Detroit</li>
              <li>• Primary access via M-59 (Hall Road), Romeo Plank Road, and Card Road</li>
              <li>• Borders Shelby Township, Clinton Township, Washington Township, and Ray Township</li>
              <li>• Stony Creek Metropark is accessible from the township&apos;s western edge</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              Macomb Township falls primarily within <strong>New Haven Community Schools</strong> and <strong>Utica Community Schools</strong>, with portions also served by other adjacent districts depending on exact location. School boundaries in a growing township can shift over time as new developments are absorbed. Verify the specific school assignment for any address directly with the relevant district.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Looking in Macomb Township?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              Whether you&apos;re considering new construction or an established resale, we can help you navigate the Macomb Township market and protect your interests in the transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2487553545" className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center">
                Call 248.755.3545
              </a>
              <Link href="/buying" className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center">
                How We Help Buyers →
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["/neighborhoods/shelby-township-mi", "/neighborhoods/clinton-township-mi", "/neighborhoods/sterling-heights-mi"].map((href) => (
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
