import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights | The Patrick Group | Southeast Michigan Real Estate",
  description:
    "Market updates, buyer and seller tips, and local real estate insights from The Patrick Group — serving Southeast Michigan across Oakland, Macomb, Washtenaw, and Livingston counties.",
  alternates: { canonical: "https://thepatrickgrp.com/insights" },
  openGraph: {
    type: "website",
    url: "https://thepatrickgrp.com/insights",
    title: "Insights | The Patrick Group",
    description:
      "Market updates and real estate guidance from Sarah Patrick and Brad Patrick — Southeast Michigan's boutique real estate team.",
    siteName: "The Patrick Group",
  },
};

const categoryColors: Record<string, string> = {
  "Market Update": "bg-blue-50 text-blue-700",
  "Buyer Tips": "bg-emerald-50 text-emerald-700",
  "Seller Tips": "bg-amber-50 text-amber-700",
  "Neighborhood": "bg-purple-50 text-purple-700",
  "Team News": "bg-gray-100 text-gray-600",
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
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            The Patrick Group
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Insights
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Market updates, buying and selling guidance, and local real estate
            perspective from Sarah and Brad Patrick.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* Featured post */}
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className="group block mb-14 border border-gray-100 rounded-sm overflow-hidden hover:border-[#c70000] transition-colors"
            >
              <div className="bg-[#faf9f7] px-8 py-10 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {featured.category}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c70000] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-5 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span className="font-semibold text-[#1a1a1a]">
                      {featured.author === "Sarah" ? "Sarah Patrick, Principal Broker" : "Brad Patrick, Realtor®"}
                    </span>
                    {" · "}
                    {formatDate(featured.date)}
                  </div>
                  <span className="text-[#c70000] text-sm font-semibold group-hover:underline">
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
                  className="group block border border-gray-100 rounded-sm p-6 hover:border-[#c70000] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#c70000] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatDate(post.date)}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-[#1a1a1a] text-white p-8 rounded-sm text-center">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              Stay informed
            </p>
            <h2 className="font-serif text-2xl font-bold mb-3">
              Get The Weekly Edit
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
              Southeast Michigan market updates, new listings, and real estate
              insights — delivered to your inbox every week.
            </p>
            <Link
              href="/newsletter"
              className="inline-block bg-[#c70000] text-white font-semibold px-8 py-3 text-sm hover:bg-[#a30000] transition-colors"
            >
              Subscribe Free →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
