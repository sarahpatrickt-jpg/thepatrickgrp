import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Neighborhoods | The Patrick Group",
  description:
    "Explore Oakland County and Macomb County communities. Home price ranges, property types, school districts, and local insights — to help you find the right fit.",
  alternates: { canonical: "https://thepatrickgrp.com/neighborhoods" },
};

const oaklandNeighborhoods = [
  {
    href: "/neighborhoods/birmingham-mi",
    name: "Birmingham",
    county: "Oakland County",
    tagline: "Walkable downtown, distinguished architecture, strong resale history.",
    priceRange: "$500K – $2M+",
    propertyTypes: "Single-family, condos, new construction",
  },
  {
    href: "/neighborhoods/bloomfield-hills-mi",
    name: "Bloomfield Hills",
    county: "Oakland County",
    tagline: "Estate properties, wooded lots, and one of Michigan's most prestigious addresses.",
    priceRange: "$600K – $3M+",
    propertyTypes: "Estate homes, large single-family",
  },
  {
    href: "/neighborhoods/bloomfield-township-mi",
    name: "Bloomfield Township",
    county: "Oakland County",
    tagline: "Expansive lots, lake properties, and established neighborhoods throughout.",
    priceRange: "$400K – $2M+",
    propertyTypes: "Single-family, lakefront, ranch",
  },
  {
    href: "/neighborhoods/rochester-mi",
    name: "Rochester",
    county: "Oakland County",
    tagline: "Charming downtown, Paint Creek Trail access, and a tight-knit community.",
    priceRange: "$350K – $900K",
    propertyTypes: "Single-family, condos, townhomes",
  },
  {
    href: "/neighborhoods/rochester-hills-mi",
    name: "Rochester Hills",
    county: "Oakland County",
    tagline: "Diverse housing stock, convenient access to major corridors, established neighborhoods.",
    priceRange: "$300K – $800K",
    propertyTypes: "Single-family, condos, new construction",
  },
  {
    href: "/neighborhoods/troy-mi",
    name: "Troy",
    county: "Oakland County",
    tagline: "One of Michigan's largest cities by population, strong market fundamentals, diverse inventory.",
    priceRange: "$300K – $1M+",
    propertyTypes: "Single-family, condos, executive homes",
  },
  {
    href: "/neighborhoods/west-bloomfield-mi",
    name: "West Bloomfield",
    county: "Oakland County",
    tagline: "Lake communities, established subdivisions, and a wide range of price points.",
    priceRange: "$300K – $1.5M+",
    propertyTypes: "Single-family, lakefront, condos",
  },
  {
    href: "/neighborhoods/royal-oak-mi",
    name: "Royal Oak",
    county: "Oakland County",
    tagline: "Vibrant downtown corridor, bungalows and new builds side by side, strong buyer demand.",
    priceRange: "$250K – $700K",
    propertyTypes: "Bungalows, new construction, condos",
  },
  {
    href: "/neighborhoods/clarkston-mi",
    name: "Clarkston",
    county: "Oakland County",
    tagline: "Rural character, lake access, and one of Oakland County's most beloved village downtowns.",
    priceRange: "$300K – $1.5M+",
    propertyTypes: "Single-family, lakefront, acreage",
  },
  {
    href: "/neighborhoods/lake-orion-mi",
    name: "Lake Orion",
    county: "Oakland County",
    tagline: "Waterfront living, strong recreational appeal, and competitive price-per-square-foot.",
    priceRange: "$250K – $1.2M+",
    propertyTypes: "Lakefront, single-family, cottages",
  },
  {
    href: "/neighborhoods/oxford-mi",
    name: "Oxford",
    county: "Oakland County",
    tagline: "Historic village feel, rural acreage options, and growing buyer interest.",
    priceRange: "$250K – $900K",
    propertyTypes: "Single-family, acreage, new construction",
  },
  {
    href: "/neighborhoods/novi-mi",
    name: "Novi",
    county: "Oakland County",
    tagline: "Diverse housing stock, new construction, lake communities, and a major I-96 corridor location.",
    priceRange: "$300K – $1M+",
    propertyTypes: "Single-family, new construction, lakefront, condo",
  },
];

const wayneNeighborhoods = [
  {
    href: "/neighborhoods/grosse-pointe-mi",
    name: "Grosse Pointe",
    county: "Wayne County",
    tagline: "Five distinct lakefront communities with historic architecture and strong market values.",
    priceRange: "$300K – $2M+",
    propertyTypes: "Tudor, colonial, estate, lakefront",
  },
  {
    href: "/neighborhoods/northville-mi",
    name: "Northville",
    county: "Wayne / Oakland County",
    tagline: "Historic downtown village, strong school district, straddles the Wayne/Oakland county line.",
    priceRange: "$350K – $1M+",
    propertyTypes: "Single-family, colonial, new construction",
  },
  {
    href: "/neighborhoods/plymouth-mi",
    name: "Plymouth",
    county: "Wayne County",
    tagline: "Walkable historic downtown village, Kellogg Park, and a strong mix of city and township housing.",
    priceRange: "$300K – $900K+",
    propertyTypes: "Single-family, colonial, bungalow, condo",
  },
  {
    href: "/neighborhoods/livonia-mi",
    name: "Livonia",
    county: "Wayne County",
    tagline: "One of Michigan's largest cities — well-maintained brick ranches and colonials at accessible price points.",
    priceRange: "$225K – $600K+",
    propertyTypes: "Brick ranch, colonial, tri-level, condo",
  },
  {
    href: "/neighborhoods/detroit-mi",
    name: "Detroit",
    county: "Wayne County",
    tagline: "Michigan's largest city with dozens of distinct neighborhoods spanning a wide range of price points.",
    priceRange: "$50K – $800K+",
    propertyTypes: "Single-family, historic, condo, new construction",
  },
  {
    href: "/neighborhoods/romulus-mi",
    name: "Romulus",
    county: "Wayne County",
    tagline: "Accessible price points in southern Wayne County, near DTW and major I-94 / I-275 corridors.",
    priceRange: "$150K – $400K",
    propertyTypes: "Single-family, ranch, colonial",
  },
];

const macombNeighborhoods = [
  {
    href: "/neighborhoods/sterling-heights-mi",
    name: "Sterling Heights",
    county: "Macomb County",
    tagline: "Largest city in Macomb County — diverse housing stock at accessible price points.",
    priceRange: "$200K – $550K",
    propertyTypes: "Single-family, ranch, colonial, condos",
  },
  {
    href: "/neighborhoods/warren-mi",
    name: "Warren",
    county: "Macomb County",
    tagline: "Major employment corridor, brick ranch character, and some of the most affordable detached homes in Southeast Michigan.",
    priceRange: "$150K – $400K",
    propertyTypes: "Single-family, ranch, brick bungalow",
  },
  {
    href: "/neighborhoods/clinton-township-mi",
    name: "Clinton Township",
    county: "Macomb County",
    tagline: "Lake St. Clair waterfront access, broad price range, and one of Michigan's largest community colleges.",
    priceRange: "$200K – $700K+",
    propertyTypes: "Single-family, waterfront, condos",
  },
  {
    href: "/neighborhoods/macomb-township-mi",
    name: "Macomb Township",
    county: "Macomb County",
    tagline: "One of Michigan's fastest-growing communities — newer construction, larger lots, active builder market.",
    priceRange: "$300K – $700K+",
    propertyTypes: "New construction, colonial, ranch",
  },
  {
    href: "/neighborhoods/shelby-township-mi",
    name: "Shelby Township",
    county: "Macomb County",
    tagline: "Established and newer homes, Stony Creek Metropark access, and strong demand at the Oakland/Macomb county line.",
    priceRange: "$300K – $800K+",
    propertyTypes: "Single-family, colonial, ranch, new construction",
  },
  {
    href: "/neighborhoods/st-clair-shores-mi",
    name: "St. Clair Shores",
    county: "Macomb County",
    tagline: "25+ miles of canals, Lake St. Clair waterfront access, and one of Macomb County's most active real estate markets.",
    priceRange: "$200K – $900K+",
    propertyTypes: "Canal-front, single-family, ranch",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Southeast Michigan
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Neighborhood Guides
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Objective information about the communities we serve across Oakland
            and Macomb counties — home price ranges, property types, school
            districts, and what makes each area distinct.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Oakland County */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] shrink-0">Oakland County</h2>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {oaklandNeighborhoods.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:border-[#c70000]/30 transition-all bg-white block"
                >
                  <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                    {n.county}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#c70000] transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{n.tagline}</p>
                  <div className="border-t border-gray-100 pt-4 space-y-1">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Typical range:</span>{" "}
                      {n.priceRange}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Property types:</span>{" "}
                      {n.propertyTypes}
                    </p>
                  </div>
                  <span className="mt-4 inline-block text-[#c70000] text-sm font-semibold group-hover:underline">
                    View guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Macomb County */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] shrink-0">Macomb County</h2>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {macombNeighborhoods.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:border-[#c70000]/30 transition-all bg-white block"
                >
                  <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                    {n.county}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#c70000] transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{n.tagline}</p>
                  <div className="border-t border-gray-100 pt-4 space-y-1">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Typical range:</span>{" "}
                      {n.priceRange}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Property types:</span>{" "}
                      {n.propertyTypes}
                    </p>
                  </div>
                  <span className="mt-4 inline-block text-[#c70000] text-sm font-semibold group-hover:underline">
                    View guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Wayne County */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] shrink-0">Wayne County</h2>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wayneNeighborhoods.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:border-[#c70000]/30 transition-all bg-white block"
                >
                  <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                    {n.county}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#c70000] transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{n.tagline}</p>
                  <div className="border-t border-gray-100 pt-4 space-y-1">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Typical range:</span>{" "}
                      {n.priceRange}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#1a1a1a]">Property types:</span>{" "}
                      {n.propertyTypes}
                    </p>
                  </div>
                  <span className="mt-4 inline-block text-[#c70000] text-sm font-semibold group-hover:underline">
                    View guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm text-center">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              Not sure where to start?
            </p>
            <h2 className="font-serif text-2xl font-bold mb-3">
              Let&apos;s Talk About What Matters to You
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Commute, school district, lot size, price range — we help you
              figure out which communities match your priorities. No pressure,
              no obligation.
            </p>
            <a
              href="tel:2487553545"
              className="inline-block bg-[#c70000] text-white font-semibold px-8 py-3 text-sm hover:bg-[#a30000] transition-colors"
            >
              Call 248.755.3545
            </a>
          </div>

          {/* Fair Housing Notice */}
          <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
            All neighborhood information is provided for general reference only.
            Price ranges reflect general market trends and are not guarantees of
            value. The Patrick Group | Oak &amp; Stone Real Estate is committed to
            compliance with the Fair Housing Act and all applicable fair housing
            laws. Equal Housing Opportunity. We do not discriminate on the basis
            of race, color, religion, sex, national origin, disability, familial
            status, or any other protected class.
          </p>
        </div>
      </section>
    </>
  );
}
