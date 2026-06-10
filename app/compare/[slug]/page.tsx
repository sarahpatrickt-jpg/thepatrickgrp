import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import {
  comparisons,
  getComparisonBySlug,
  getAllComparisonSlugs,
} from "@/data/comparisons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    alternates: {
      canonical: `https://thepatrickgrp.com/compare/${comparison.slug}`,
    },
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url: `https://thepatrickgrp.com/compare/${comparison.slug}`,
    },
  };
}

function formatPrice(n: number): string {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${n}`;
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const cityA = getCityBySlug(comparison.cityASlug);
  const cityB = getCityBySlug(comparison.cityBSlug);
  if (!cityA || !cityB) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const yoyA = cityA.marketStats.medianPriceChange;
  const yoyB = cityB.marketStats.medianPriceChange;
  const yoySignA = yoyA >= 0 ? "+" : "";
  const yoySignB = yoyB >= 0 ? "+" : "";

  const otherComparisons = comparisons.filter(
    (c) =>
      c.slug !== comparison.slug &&
      (c.cityASlug === comparison.cityASlug ||
        c.cityBSlug === comparison.cityBSlug ||
        c.cityASlug === comparison.cityBSlug ||
        c.cityBSlug === comparison.cityASlug),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background:
            "var(--ink)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/neighborhoods"
            className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono hover:underline"
          >
            ← Neighborhood Guides
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-4 leading-tight">
            {comparison.headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            {comparison.intro}
          </p>
        </div>
      </section>

      {/* ── Side-by-Side Stats ─────────────────────────────────────────────────── */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-6">
            Market Data Comparison
          </p>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--line)]">
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold w-1/3">
                    Metric
                  </th>
                  <th className="py-3 px-4 text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold w-1/3">
                    <Link
                      href={`/neighborhoods/${cityA.slug}`}
                      className="text-[var(--red)] hover:underline"
                    >
                      {cityA.name}
                    </Link>
                  </th>
                  <th className="py-3 pl-4 text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold w-1/3">
                    <Link
                      href={`/neighborhoods/${cityB.slug}`}
                      className="text-[var(--red)] hover:underline"
                    >
                      {cityB.name}
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--ink)]">
                <tr className="border-b border-[var(--line)]">
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">Median Price</td>
                  <td className="py-3 px-4 font-bold text-lg">
                    {formatPrice(cityA.marketStats.medianPrice)}
                  </td>
                  <td className="py-3 pl-4 font-bold text-lg">
                    {formatPrice(cityB.marketStats.medianPrice)}
                  </td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">YoY Change</td>
                  <td className="py-3 px-4 font-bold text-lg">
                    {yoySignA}{yoyA}%
                  </td>
                  <td className="py-3 pl-4 font-bold text-lg">
                    {yoySignB}{yoyB}%
                  </td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">Days on Market</td>
                  <td className="py-3 px-4 font-bold text-lg">
                    {cityA.marketStats.daysOnMarket}
                  </td>
                  <td className="py-3 pl-4 font-bold text-lg">
                    {cityB.marketStats.daysOnMarket}
                  </td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">Price / Sq Ft</td>
                  <td className="py-3 px-4 font-bold text-lg">
                    ${cityA.marketStats.pricePerSqft}
                  </td>
                  <td className="py-3 pl-4 font-bold text-lg">
                    ${cityB.marketStats.pricePerSqft}
                  </td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">School District</td>
                  <td className="py-3 px-4 text-sm">
                    {cityA.schoolDistrict}
                  </td>
                  <td className="py-3 pl-4 text-sm">
                    {cityB.schoolDistrict}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-sm text-[var(--ink-3)]">
                    Commute to Detroit
                  </td>
                  <td className="py-3 px-4 text-sm">~{cityA.commuteToDetroit}</td>
                  <td className="py-3 pl-4 text-sm">~{cityB.commuteToDetroit}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden grid grid-cols-2 gap-3">
            {[
              { city: cityA, yoySign: yoySignA, yoy: yoyA },
              { city: cityB, yoySign: yoySignB, yoy: yoyB },
            ].map(({ city, yoySign, yoy }) => (
              <div key={city.slug} className="space-y-3">
                <Link
                  href={`/neighborhoods/${city.slug}`}
                  className="block text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono hover:underline"
                >
                  {city.name}
                </Link>
                <div className="bg-[var(--paper-2)] border border-[var(--line)] p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-1">
                    Median
                  </p>
                  <p className="font-bold text-base">
                    {formatPrice(city.marketStats.medianPrice)}
                  </p>
                </div>
                <div className="bg-[var(--paper-2)] border border-[var(--line)] p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-1">
                    YoY
                  </p>
                  <p className="font-bold text-base">
                    {yoySign}{yoy}%
                  </p>
                </div>
                <div className="bg-[var(--paper-2)] border border-[var(--line)] p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-1">
                    DOM
                  </p>
                  <p className="font-bold text-base">
                    {city.marketStats.daysOnMarket}
                  </p>
                </div>
                <div className="bg-[var(--paper-2)] border border-[var(--line)] p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-1">
                    $/sqft
                  </p>
                  <p className="font-bold text-base">
                    ${city.marketStats.pricePerSqft}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-3xl mx-auto space-y-14">
          {/* Character: City A */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">
              Living in {cityA.name}
            </h2>
            {comparison.characterA.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[var(--ink-2)] leading-relaxed mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
            <Link
              href={`/neighborhoods/${cityA.slug}`}
              className="inline-block mt-4 text-[var(--red)] text-sm font-medium hover:underline"
            >
              Full {cityA.name} guide →
            </Link>
          </div>

          {/* Character: City B */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">
              Living in {cityB.name}
            </h2>
            {comparison.characterB.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[var(--ink-2)] leading-relaxed mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
            <Link
              href={`/neighborhoods/${cityB.slug}`}
              className="inline-block mt-4 text-[var(--red)] text-sm font-medium hover:underline"
            >
              Full {cityB.name} guide →
            </Link>
          </div>

          {/* Commute */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">
              Commute and Access
            </h2>
            {comparison.commuteComparison.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[var(--ink-2)] leading-relaxed mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* School Districts */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">
              School Districts
            </h2>
            {comparison.schoolNote.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[var(--ink-2)] leading-relaxed mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Who Each Is Right For */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-6">
              Who Each Is Right For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                  {cityA.name} fits buyers who...
                </h3>
                <ul className="space-y-2">
                  {comparison.rightForA.map((item, i) => (
                    <li
                      key={i}
                      className="text-[var(--ink-2)] text-sm leading-relaxed pl-4 border-l-2 border-[var(--line)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                  {cityB.name} fits buyers who...
                </h3>
                <ul className="space-y-2">
                  {comparison.rightForB.map((item, i) => (
                    <li
                      key={i}
                      className="text-[var(--ink-2)] text-sm leading-relaxed pl-4 border-l-2 border-[var(--line)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-[var(--ink-2)] leading-relaxed border-t border-[var(--line)] pt-6">
              {comparison.bottomLine}
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-6">
              Common Questions
            </h2>
            <div className="space-y-6">
              {comparison.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={
                    i < comparison.faqs.length - 1
                      ? "pb-6 border-b border-[var(--line)]"
                      : ""
                  }
                >
                  <h3 className="font-display text-lg text-[var(--ink)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[var(--ink-2)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Comparisons */}
          {otherComparisons.length > 0 && (
            <div className="bg-[var(--paper)] p-8 border border-[var(--line)]">
              <h2 className="font-display text-2xl text-[var(--ink)] mb-4">
                More Comparisons
              </h2>
              <div className="space-y-3">
                {otherComparisons.map((c) => {
                  const a = getCityBySlug(c.cityASlug);
                  const b = getCityBySlug(c.cityBSlug);
                  if (!a || !b) return null;
                  return (
                    <Link
                      key={c.slug}
                      href={`/compare/${c.slug}`}
                      className="block p-4 bg-[var(--paper-2)] border border-[var(--line)] hover:border-[#c70000]/30 transition-colors"
                    >
                      <p className="font-display text-[var(--ink)]">
                        {a.name} vs. {b.name}
                      </p>
                      <p className="text-[var(--ink-3)] text-sm mt-1">
                        {formatPrice(a.marketStats.medianPrice)} median vs{" "}
                        {formatPrice(b.marketStats.medianPrice)} median
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            className="p-8 text-center"
            style={{
              background:
                "var(--ink)",
            }}
          >
            <h2 className="font-display text-2xl text-white mb-3">
              Can&rsquo;t Decide? Let&rsquo;s Talk.
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              We show homes in {cityA.name} and {cityB.name} regularly. One
              conversation about your priorities will narrow it down, and we
              can tour both in a single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2487553545"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium uppercase tracking-wider"
                style={{
                  backgroundColor: "#c70000",
                  color: "#FDFBF7",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.12em",
                }}
              >
                Call 248.755.3545
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium uppercase tracking-wider border border-white/30 text-white hover:bg-[var(--paper)]/10 transition-colors"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.12em",
                }}
              >
                Send a Message →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
