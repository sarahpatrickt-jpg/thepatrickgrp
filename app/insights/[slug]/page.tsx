import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs, posts, type ContentBlock } from "@/data/posts";
import { getCityBySlug } from "@/data/cities";
import { getComparisonsForCity } from "@/data/comparisons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | The Patrick Group`,
    description: post.excerpt,
    alternates: { canonical: `https://www.thepatrickgrp.com/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://www.thepatrickgrp.com/insights/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: "The Patrick Group",
      publishedTime: post.date,
      ...(post.image ? { images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt ?? post.title }] } : {}),
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Market Update": "bg-blue-50 text-blue-700",
  "Buyer Tips": "bg-emerald-50 text-emerald-700",
  "Seller Tips": "bg-amber-50 text-amber-700",
  "Neighborhood": "bg-purple-50 text-purple-700",
  "Team News": "bg-gray-100 text-[var(--ink-2)]",
};

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-[var(--ink-2)] text-base leading-relaxed">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="font-display text-2xl text-[var(--ink)] mt-2">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-display text-xl text-[var(--ink)]">
          {block.text}
        </h3>
      );
    case "callout":
      return (
        <div key={i} className="bg-[var(--paper-2)] border-l-4 border-[#c70000] px-6 py-5">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-2">
            {block.label}
          </p>
          <p className="text-[var(--ink-2)] text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "bullets":
      return (
        <ul key={i} className="space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-[var(--ink-2)] text-base leading-relaxed">
              <span className="text-[var(--red)] font-bold mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "stat-row":
      return (
        <div key={i} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {block.stats.map((stat, j) => (
            <div key={j} className="bg-[var(--paper-2)] border border-[var(--line)] p-4 text-center">
              <p className="text-xs text-[var(--ink-3)] mb-1">{stat.label}</p>
              <p className="font-display text-xl text-[var(--ink)]">{stat.value}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">{stat.note}</p>
            </div>
          ))}
        </div>
      );
    case "two-col":
      return (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 p-5">
            <p className="text-emerald-700 text-xs uppercase tracking-widest font-semibold mb-2">
              {block.left.label}
            </p>
            <p className="text-[var(--ink-2)] text-sm leading-relaxed">{block.left.text}</p>
          </div>
          <div className="bg-red-50 border border-red-100 p-5">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-2">
              {block.right.label}
            </p>
            <p className="text-[var(--ink-2)] text-sm leading-relaxed">{block.right.text}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function InsightPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author === "Sarah" ? "Sarah Patrick" : "Brad Patrick",
      jobTitle: post.author === "Sarah" ? "Principal Broker" : "Realtor",
      worksFor: {
        "@type": "Organization",
        name: "The Patrick Group | Oak and Stone Real Estate",
        url: "https://www.thepatrickgrp.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "The Patrick Group | Oak and Stone Real Estate",
      url: "https://www.thepatrickgrp.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.thepatrickgrp.com/insights/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-14 px-4 sm:px-6"
        style={{
          background: "var(--ink)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono hover:underline"
          >
            ← Insights
          </Link>
          <div className="flex items-center gap-3 mt-5 mb-4">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-[var(--ink-2)]"}`}
            >
              {post.category}
            </span>
            <span className="text-white/40 text-xs">{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/60 text-sm">
            By{" "}
            <span className="text-white/80 font-semibold">
              {post.author === "Sarah"
                ? "Sarah Patrick, Principal Broker"
                : "Brad Patrick, Realtor®"}
            </span>{" "}
            · {formatDate(post.date)}
          </p>
        </div>
      </section>

      {/* Hero image */}
      {post.image && (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="aspect-[2.2/1] overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="py-14 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt / lede */}
          <p className="text-lg text-[var(--ink-2)] leading-relaxed border-b border-[var(--line)] pb-8 mb-8">
            {post.excerpt}
          </p>

          {/* Content blocks */}
          <div className="space-y-6">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Author bio */}
          <div className="mt-14 border-t border-[var(--line)] pt-10 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[var(--ink)] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display text-lg">
                {post.author === "Sarah" ? "SP" : "BP"}
              </span>
            </div>
            <div>
              <p className="font-semibold text-[var(--ink)]">
                {post.author === "Sarah" ? "Sarah Patrick" : "Brad Patrick"}
              </p>
              <p className="text-[var(--red)] text-xs uppercase tracking-wider font-semibold mb-2">
                {post.author === "Sarah" ? "Principal Broker & Owner" : "Realtor®"}
              </p>
              <p className="text-[var(--ink-3)] text-sm leading-relaxed">
                {post.author === "Sarah"
                  ? "Sarah Patrick leads The Patrick Group and has been helping Southeast Michigan buyers and sellers navigate the market since 2000. She brings a long-view, data-g perspective to every client relationship."
                  : "Brad Patrick is a Realtor and co-founder of The Patrick Group with over 15 years of experience in Southeast Michigan real estate. He specializes in buyer strategy, competitive offer situations, and new construction."}
              </p>
            </div>
          </div>

          {/* Related articles */}
          {post.relatedSlugs.length > 0 && (() => {
            const related = post.relatedSlugs
              .map((s) => posts.find((p) => p.slug === s))
              .filter(Boolean) as typeof posts;
            return related.length > 0 ? (
              <div className="mt-14 border-t border-[var(--line)] pt-10">
                <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
                  Keep Reading
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/insights/${r.slug}`}
                      className="group border border-[var(--line)] p-5 hover:border-gray-300 transition-colors"
                    >
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[r.category] ?? "bg-gray-100 text-[var(--ink-2)]"}`}
                      >
                        {r.category}
                      </span>
                      <p className="font-semibold text-[var(--ink)] text-sm mt-3 leading-snug group-hover:text-[var(--red)] transition-colors">
                        {r.title}
                      </p>
                      <p className="text-xs text-[var(--ink-3)] mt-2">{r.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null;
          })()}

          {/* Related city pages */}
          {post.relatedCitySlugs.length > 0 && (() => {
            const cityItems = post.relatedCitySlugs
              .map((s) => {
                const city = getCityBySlug(s);
                return city ? { slug: s, name: city.name } : null;
              })
              .filter(Boolean) as { slug: string; name: string }[];
            const compLinks = post.relatedCitySlugs
              .flatMap((s) => getComparisonsForCity(s))
              .filter((v, i, a) => a.findIndex((c) => c.slug === v.slug) === i)
              .slice(0, 3);
            return cityItems.length > 0 ? (
              <div className="mt-10 border-t border-[var(--line)] pt-8">
                <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                  Explore These Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {cityItems.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/neighborhoods/${c.slug}`}
                      className="text-sm border border-[var(--line)] rounded-full px-4 py-1.5 text-[var(--ink-2)] hover:border-[#c70000] hover:text-[var(--red)] transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                  {compLinks.map((comp) => (
                    <Link
                      key={comp.slug}
                      href={`/compare/${comp.slug}`}
                      className="text-sm border border-[var(--line)] rounded-full px-4 py-1.5 text-[var(--ink-2)] hover:border-[#c70000] hover:text-[var(--red)] transition-colors"
                    >
                      {comp.headline}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null;
          })()}

          {/* CTA */}
          <div className="mt-12 bg-[var(--red)] text-white p-10 text-center">
            <h2 className="font-display text-2xl mb-2">
              Questions about the market?
            </h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
              Every situation is different. Call or email Sarah or Brad directly
, no forms, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:2487553545"
                className="bg-[var(--paper)] text-[var(--red)] font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
              >
                Call (248) 755-3545
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/60 text-white font-semibold px-6 py-3 text-sm hover:border-white transition-colors"
              >
                Send a Message →
              </Link>
            </div>
          </div>

          <p className="mt-8 text-xs text-[var(--ink-3)] text-center leading-relaxed">
            The Patrick Group | Oak &amp; Stone Real Estate. Equal Housing
            Opportunity. Information is provided for general informational
            purposes only and should not be construed as financial or legal
            advice.
          </p>
        </div>
      </section>
    </>
  );
}
