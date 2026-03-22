import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAllSlugs } from "@/data/cities";
import CityFaqAccordion from "@/components/CityFaqAccordion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `${city.name}, MI Real Estate Guide | The Patrick Group`,
    description: `${city.name}, Michigan real estate — median prices, market stats, school district, and local insights from The Patrick Group. ${city.county} County specialists.`,
    alternates: {
      canonical: `https://thepatrickgrp.com/neighborhoods/${city.slug}`,
    },
    openGraph: {
      title: `${city.name} MI Real Estate | The Patrick Group`,
      description: `Home prices, market stats, school info, and Brad Patrick's take on ${city.name}, Michigan. ${city.county} County real estate specialists.`,
      url: `https://thepatrickgrp.com/neighborhoods/${city.slug}`,
    },
  };
}

function formatPrice(n: number): string {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${n}`;
}

function slugToDisplayName(slug: string): string {
  return slug
    .replace(/-mi$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = city.nearbySlugsSee
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean) as typeof cities;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: "The Patrick Group | Oak & Stone Real Estate",
    url: "https://thepatrickgrp.com",
    telephone: "+12487553545",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county} County, Michigan`,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const yoySign = city.marketStats.medianPriceChange >= 0 ? "+" : "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/neighborhoods"
            className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline"
          >
            ← Neighborhood Guides
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-3">
            {city.name}, MI Real Estate Guide
          </h1>
          <p className="text-white/70 text-lg">
            {city.county} County · Southeast Michigan
          </p>
        </div>
      </section>

      {/* ── Market Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Current Market Data · {city.county} County, MI (Realcomp, March 2026)
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                Median Price
              </p>
              <p className="font-bold text-[#1a1a1a] text-xl">
                {formatPrice(city.marketStats.medianPrice)}
              </p>
            </div>
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                YoY Change
              </p>
              <p className="font-bold text-[#1a1a1a] text-xl">
                {yoySign}{city.marketStats.medianPriceChange}%
              </p>
            </div>
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                Days on Market
              </p>
              <p className="font-bold text-[#1a1a1a] text-xl">
                {city.marketStats.daysOnMarket}
              </p>
            </div>
            <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                Price / Sq Ft
              </p>
              <p className="font-bold text-[#1a1a1a] text-xl">
                ${city.marketStats.pricePerSqft}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* About */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">
              About {city.name}
            </h2>
            {city.about.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* Real Estate Overview */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">
              Real Estate Overview
            </h2>
            {city.realEstateOverview.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* What Your Budget Buys */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">
              What Your Budget Buys in {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-5">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Entry Tier
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {city.priceRange.low}
                </p>
              </div>
              <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-5">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Mid Range
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {city.priceRange.high}
                </p>
              </div>
              <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-5">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Luxury Tier
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {city.priceRange.luxury}
                </p>
              </div>
            </div>
          </div>

          {/* Brad's Take */}
          <div
            className="rounded-sm p-8"
            style={{
              background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
            }}
          >
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
              Brad&apos;s Take
            </p>
            <blockquote className="text-white text-lg leading-relaxed font-serif italic mb-6">
              &ldquo;{city.bradQuote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white/60 text-xs font-semibold">BP</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Brad Patrick</p>
                <p className="text-white/60 text-xs">
                  Realtor®, The Patrick Group
                </p>
              </div>
            </div>
          </div>

          {/* Location & Access */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">
              Location &amp; Access
            </h2>
            <ul className="space-y-2">
              {city.locationAccess.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
                  <span className="text-[#c70000] mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>
                <span className="font-semibold text-[#1a1a1a]">County:</span>{" "}
                {city.county} County
              </span>
              <span>
                <span className="font-semibold text-[#1a1a1a]">Commute to Detroit:</span>{" "}
                {city.commuteToDetroit}
              </span>
              <span>
                <span className="font-semibold text-[#1a1a1a]">ZIP Codes:</span>{" "}
                {city.zipCodes.slice(0, 4).join(", ")}
                {city.zipCodes.length > 4 ? ` + ${city.zipCodes.length - 4} more` : ""}
              </span>
            </div>
          </div>

          {/* Schools */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">
              Schools
            </h2>
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              Primary District: {city.schoolDistrict}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">{city.schoolInfo}</p>
          </div>

          {/* FAQs */}
          <div className="bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions
            </h2>
            <CityFaqAccordion faqs={city.faqs} cityName={city.name} />
          </div>

          {/* CTA Block */}
          {city.ctaVariant === "buyer" && (
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                Buying in {city.name}?
              </p>
              <h2 className="font-serif text-2xl font-bold mb-3">
                Get VIP Access to New Listings
              </h2>
              <p className="text-white/70 text-sm mb-5">
                We send our buyer clients properties before they hit Zillow. If you&apos;re serious about {city.name}, join the VIP list and get first look at new inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/vip-buyers"
                  className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center"
                >
                  Join the VIP Buyer List →
                </Link>
                <a
                  href="tel:2487553545"
                  className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center"
                >
                  Call 248.755.3545
                </a>
              </div>
            </div>
          )}

          {city.ctaVariant === "seller" && (
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                Selling in {city.name}?
              </p>
              <h2 className="font-serif text-2xl font-bold mb-3">
                Find Out What Your Home Is Worth
              </h2>
              <p className="text-white/70 text-sm mb-5">
                {city.name}&apos;s market has been moving. Get a free, no-obligation valuation from agents who know this market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/home-valuation"
                  className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center"
                >
                  Free Home Valuation →
                </Link>
                <a
                  href="tel:2487553545"
                  className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center"
                >
                  Call 248.755.3545
                </a>
              </div>
            </div>
          )}

          {city.ctaVariant === "both" && (
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                Ready to talk {city.name}?
              </p>
              <h2 className="font-serif text-2xl font-bold mb-3">
                Let&apos;s Have a Real Conversation
              </h2>
              <p className="text-white/70 text-sm mb-5">
                Whether you&apos;re buying, selling, or just figuring out the market — we give you straight information and no pressure. Call us or explore listings now.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:2487553545"
                  className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors text-center"
                >
                  Call 248.755.3545
                </a>
                <a
                  href={city.sierraSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors text-center"
                >
                  Browse {city.name} Listings →
                </a>
              </div>
            </div>
          )}

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <div>
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
                Also Explore
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {nearbyCities.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/neighborhoods/${nearby.slug}`}
                    className="group bg-white border border-gray-100 rounded-sm p-5 hover:border-[#c70000]/30 hover:shadow-md transition-all"
                  >
                    <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                      {nearby.county} County
                    </p>
                    <p className="font-serif font-bold text-[#1a1a1a] group-hover:text-[#c70000] transition-colors">
                      {nearby.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {formatPrice(nearby.marketStats.medianPrice)} median ·{" "}
                      {nearby.marketStats.daysOnMarket} DOM
                    </p>
                    <span className="mt-3 inline-block text-[#c70000] text-xs font-semibold group-hover:underline">
                      View guide →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/neighborhoods"
                  className="text-sm border border-gray-200 px-4 py-2 rounded-sm text-gray-600 hover:border-[#c70000] hover:text-[#c70000] transition-colors inline-block"
                >
                  All Neighborhood Guides →
                </Link>
              </div>
            </div>
          )}

          {/* Legal Disclaimer */}
          <p className="text-xs text-gray-400 leading-relaxed">
            Market statistics are sourced from Realcomp MLS data for {city.county} County and reflect general market conditions as of March 2026. City-level figures are adjusted estimates based on known market positioning and may not reflect official MLS sub-market data. Price ranges are general guidance and not guarantees of value. Individual property values depend on condition, location, and current market conditions. School district information should be verified directly with the district for specific property addresses. The Patrick Group | Oak &amp; Stone Real Estate is committed to compliance with the Fair Housing Act and all applicable fair housing laws. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
