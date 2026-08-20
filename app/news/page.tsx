import type { Metadata } from "next";
import Link from "next/link";
import { getNewsItems } from "@/data/news";

export const metadata: Metadata = {
  title: { absolute: "In the News | Oak & Stone Real Estate" },
  description:
    "Press coverage, awards, and media mentions of The Patrick Group at Oak & Stone Real Estate: Hour Detroit Real Estate All-Stars, Real Producers, and news from across Southeast Michigan.",
  alternates: { canonical: "https://www.thepatrickgrp.com/news" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/news",
    title: "In the News | Oak & Stone Real Estate",
    description:
      "Press coverage, awards, and media mentions of The Patrick Group at Oak & Stone Real Estate.",
    siteName: "The Patrick Group",
  },
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-08-19" -> "August 19, 2026" without timezone drift */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${d}, ${y}`;
}

export default function NewsPage() {
  const items = getNewsItems();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Patrick Group in the News",
    itemListElement: items.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: n.headline,
        datePublished: n.date,
        url: n.url,
        publisher: {
          "@type": "Organization",
          name: n.outlet,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-14 px-4 sm:px-6" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
            Press &amp; Recognition
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            In the <em className="italic" style={{ color: "var(--red)" }}>News</em>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Coverage, awards, and mentions of The Patrick Group from around
            Southeast Michigan and beyond.
          </p>
        </div>
      </section>

      {/* Entries, newest first */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-4xl mx-auto">
          {items.length === 0 ? (
            <p className="text-[var(--ink-3)]">Press mentions are on the way.</p>
          ) : (
            <div className="space-y-10">
              {items.map((n) => (
                <article
                  key={n.url}
                  className="pb-10 border-b border-[var(--line)] last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono">
                      {n.outlet}
                    </p>
                    <p className="text-xs font-mono text-[var(--ink-3)]">
                      {formatDate(n.date)}
                    </p>
                  </div>
                  <h2 className="font-display text-2xl text-[var(--ink)] leading-snug mb-3">
                    {n.headline}
                  </h2>
                  <p className="text-[var(--ink-2)] text-base leading-relaxed max-w-3xl mb-4">
                    {n.summary}
                  </p>
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium tracking-wider uppercase font-mono text-[var(--red)] hover:underline"
                    style={{ letterSpacing: "0.15em", textUnderlineOffset: "3px" }}
                  >
                    Read at {n.outlet} ↗
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6" style={{ backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-editorial italic text-lg text-[var(--ink-2)] mb-5">
            Working with a team that gets recognized starts with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--red)] text-white font-semibold px-8 py-4 text-sm hover:bg-[var(--red-deep)] transition-colors"
          >
            Talk to The Patrick Group →
          </Link>
        </div>
      </section>
    </>
  );
}
