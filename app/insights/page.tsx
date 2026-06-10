import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights. Southeast Michigan Real Estate",
  description:
    "Market updates, buyer and seller tips, and local real estate insights from The Patrick Group in Southeast Michigan.",
  alternates: { canonical: "https://www.thepatrickgrp.com/insights" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/insights",
    title: "Insights",
    description:
      "Market updates and real estate guidance from Sarah Patrick and Brad Patrick. Southeast Michigan's boutique real estate team.",
    siteName: "The Patrick Group",
  },
};

const categoryColors: Record<string, string> = {
  "Market Update": "bg-[var(--paper-3)] text-[var(--ink-2)]",
  "Buyer Tips": "bg-[var(--paper-3)] text-[var(--ink-2)]",
  "Seller Tips": "bg-[var(--paper-3)] text-[var(--ink-2)]",
  "Neighborhood": "bg-[var(--paper-3)] text-[var(--ink-2)]",
  "Team News": "bg-gray-100 text-[var(--ink-2)]",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background: "var(--ink)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
            The Patrick Group
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Insights
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Market updates, buying and selling guidance, and local real estate
            perspective from Sarah and Brad Patrick.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">

          {/* Featured post */}
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className="group block mb-14 border border-[var(--line)] overflow-hidden hover:border-[#c70000] transition-colors"
            >
              {featured.image && (
                <div className="aspect-[2.2/1] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt ?? featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="bg-[var(--paper-2)] px-8 py-10 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-[var(--ink-2)]"}`}>
                    {featured.category}
                  </span>
                  <span className="text-[var(--ink-3)] text-xs">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-3 group-hover:text-[var(--red)] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-[var(--ink-2)] text-base leading-relaxed mb-5 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[var(--ink-3)]">
                    <span className="font-semibold text-[var(--ink)]">
                      {featured.author === "Sarah" ? "Sarah Patrick, Principal Broker" : "Brad Patrick, Realtor®"}
                    </span>
                    {" · "}
                    {formatDate(featured.date)}
                  </div>
                  <span className="text-[var(--red)] text-sm font-semibold group-hover:underline">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block border border-[var(--line)] overflow-hidden hover:border-[#c70000] transition-colors"
                >
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-[var(--ink-2)]"}`}>
                        {post.category}
                      </span>
                      <span className="text-[var(--ink-3)] text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg text-[var(--ink)] mb-2 group-hover:text-[var(--red)] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[var(--ink-3)] text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-[var(--ink-3)]">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-[var(--ink)] text-white p-8 text-center">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-2">
              Stay informed
            </p>
            <h2 className="font-display text-2xl mb-3">
              Get The Weekly Edit
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
              Southeast Michigan market updates, new listings, and real estate
              insights, delivered to your inbox every week.
            </p>
            <Link
              href="/newsletter"
              className="inline-block bg-[var(--red)] text-white font-semibold px-8 py-3 text-sm hover:bg-[var(--red-deep)] transition-colors"
            >
              Subscribe Free →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
