import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinton Township MI Real Estate | The Patrick Group",
  description:
    "Clinton Township, Michigan real estate guide — home price ranges, waterfront properties, school districts, and market overview from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/clinton-township-mi" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Clinton Township, Michigan",
  containedInPlace: { "@type": "State", name: "Michigan" },
  description:
    "Clinton Township is one of the largest townships in Michigan by population, located in Macomb County with access to Lake St. Clair shoreline.",
};

export default function ClintonTownshipPage() {
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
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 sm:text-5xl font-bold text-white mt-4 mb-3">
            Clinton Township, MI
          </h1>
          <p className="text-white/70 text-lg">Macomb County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Clinton Township</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Clinton Township is one of the most populous townships in Michigan, with approximately 100,000 residents spread across roughly 28 square miles in central Macomb County. Its eastern edge borders Lake St. Clair, giving the township a stretch of waterfront that generates a distinct segment of the housing market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The township offers a wide range of price points — from starter homes and condominiums along its southern and western edges to waterfront and lake-access properties along the Lake St. Clair shoreline. Macomb Community College, the largest community college in Michigan by enrollment, is located in Clinton Township, adding an institutional presence to the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$200K – $700K+" },
              { label: "Common Property Types", value: "Single-family, waterfront, condos" },
              { label: "School Districts", value: "Chippewa Valley, Mount Clemens, Fraser" },
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
              Clinton Township&apos;s housing stock is varied. The interior of the township includes well-established subdivisions with brick ranches, colonials, and split-levels built from the 1960s through the 1990s. The Lake St. Clair waterfront corridor — particularly along Jefferson Avenue — features some of the most sought-after waterfront properties in Macomb County, with private docks, canal-front lots, and direct lake access.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Condominium communities are prevalent throughout the township, offering buyers a range of options at lower price points with reduced maintenance responsibilities. New construction activity occurs primarily in the northern portions of the township near the Macomb Township border.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Approximately 18 miles northeast of downtown Detroit</li>
              <li>• Major highway access: I-94, M-59 (Hall Road), and Jefferson Avenue along the Lake St. Clair shoreline</li>
              <li>• Borders Warren, Sterling Heights, Macomb Township, and Harrison Township</li>
              <li>• Lake St. Clair waterfront along the township&apos;s eastern edge</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              Clinton Township spans several school district boundaries, including <strong>Chippewa Valley Schools</strong>, <strong>Mount Clemens Community Schools</strong>, and <strong>Fraser Public Schools</strong>, among others. The specific district serving any property depends on its location within the township. Verify school assignment directly with the relevant district when evaluating a specific address.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Interested in Clinton Township?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              From lakefront properties to established subdivisions, we know the Clinton Township market. Call us to discuss what is available and what fits your needs.
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
            {["/neighborhoods/macomb-township-mi", "/neighborhoods/sterling-heights-mi", "/neighborhoods/shelby-township-mi"].map((href) => (
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
