import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bloomfield Township MI Real Estate | The Patrick Group",
  description:
    "Bloomfield Township, Michigan real estate guide — lake properties, established neighborhoods, price ranges, and school district info from The Patrick Group.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods/bloomfield-township-mi" },
};

export default function BloomfieldTownshipPage() {
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
            Bloomfield Township, MI
          </h1>
          <p className="text-white/70 text-lg">Oakland County · Southeast Michigan</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">About Bloomfield Township</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Bloomfield Township is a charter township in Oakland County encompassing approximately 26 square miles. It surrounds the City of Bloomfield Hills and includes portions of Birmingham and Pontiac within its boundaries. The township is characterized by its many inland lakes, mature tree cover, and a broad mix of housing from ranch-style homes of the 1950s and 60s to contemporary new construction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With dozens of named lakes and ponds throughout the township, waterfront and lake-access properties are a significant segment of the market. Bloomfield Township has no downtown of its own but benefits from its proximity to Birmingham, Troy, and Pontiac for shopping, dining, and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Typical Price Range", value: "$400K – $2M+" },
              { label: "Common Property Types", value: "Single-family, lakefront, ranch" },
              { label: "School Districts", value: "Bloomfield Hills, Birmingham, Pontiac" },
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
              Bloomfield Township offers one of the widest price ranges in Oakland County. Modest ranches and split-levels from mid-century construction can be found in the $400–600K range, while renovated or waterfront properties frequently exceed $1M. Premium lakefront lots command significant premiums and often represent once-in-a-generation buying opportunities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The township&apos;s size means that location within Bloomfield Township varies considerably — some areas sit within walking distance of Birmingham&apos;s downtown, while others are more rural in character.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">Location &amp; Access</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Central Oakland County location with access to M-1, I-75, and US-24</li>
              <li>• Borders Birmingham, Troy, West Bloomfield, and Pontiac</li>
              <li>• Approximately 25–30 miles north of downtown Detroit</li>
              <li>• Multiple lakes throughout, including Lone Pine Lake, Upper and Lower Long Lake, and others</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">School Districts</h2>
            <p className="text-gray-600 leading-relaxed">
              Bloomfield Township spans multiple school district boundaries. Depending on the specific property address, students may attend <strong>Bloomfield Hills School District</strong>, <strong>Birmingham City School District</strong>, or <strong>Pontiac School District</strong>. Always verify school assignments directly with the relevant district when evaluating a specific property.
            </p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">Interested in Bloomfield Township?</p>
            <h2 className="font-serif text-2xl font-bold mb-3">Let&apos;s Talk</h2>
            <p className="text-white/70 text-sm mb-5">
              We have sold and helped buyers purchase throughout Bloomfield Township — from lakefront estates to starter homes. Let us know what you are looking for.
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
            {["/neighborhoods/bloomfield-hills-mi", "/neighborhoods/birmingham-mi", "/neighborhoods/west-bloomfield-mi"].map((href) => (
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
