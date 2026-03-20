import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "West Bloomfield MI Real Estate | The Patrick Group",
  description:
    "West Bloomfield, Michigan real estate guide — lake communities, established subdivisions, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/west-bloomfield-mi" },
};

export default function WestBloomfieldPage() {
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
            West Bloomfield, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About West Bloomfield</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              West Bloomfield Township is a charter township in western Oakland County with a population of approximately 65,000. It is known throughout Southeast Michigan for its abundance of inland lakes — more than 30 named lakes and ponds are located within the township — which create significant lakefront and lake-access inventory.
            </p>
            <p className="text-gray-600 leading-relaxed">
              West Bloomfield has a well-developed commercial corridor along Orchard Lake Road and offers a range of price points from accessible starter homes to luxury lakefront estates. The township is entirely residential in character, with no traditional downtown.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$300K – $1.5M+" },
              { label: "Common Property Types", value: "Single-family, lakefront, condos" },
              { label: "School Districts", value: "West Bloomfield, Walled Lake, Bloomfield Hills" },
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
              West Bloomfield&apos;s lakefront properties are among the most sought-after in Oakland County. Private lake-access lots and direct waterfront homes command significant premiums and tend to hold value well across market cycles. Non-waterfront homes in the township span a broad range — from modest subdivisions with smaller lots to executive-level properties on larger parcels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The condominium market is active, particularly among buyers seeking maintenance-free living. New construction activity in West Bloomfield is more limited compared to areas like Rochester Hills or Troy, making well-maintained existing homes particularly desirable.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Access via Orchard Lake Road, M-5 (also known as Halsted Road), and US-24 (Telegraph)</li>
              <li>• Adjacent to Bloomfield Township, Farmington Hills, Commerce Township, and Waterford</li>
              <li>• Approximately 25–30 miles northwest of downtown Detroit</li>
              <li>• Multiple lakes including Orchard Lake, Pine Lake, Cass Lake, and others throughout the township</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              West Bloomfield Township spans several school district boundaries. Properties may fall within the <strong>West Bloomfield School District</strong>, <strong>Walled Lake Consolidated School District</strong>, or the <strong>Bloomfield Hills School District</strong> depending on location. Always verify school assignment directly with the relevant district when evaluating a specific property.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Interested in West Bloomfield?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              From lakefront properties to established subdivisions, we know the West Bloomfield market. Call us to discuss what is currently available.
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
            {["/neighborhoods/bloomfield-township-mi", "/neighborhoods/bloomfield-hills-mi", "/neighborhoods/clarkston-mi"].map((href) => (
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
