import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs, type ContentBlock } from "@/data/posts";

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
    alternates: { canonical: `https://thepatrickgrp.com/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://thepatrickgrp.com/insights/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: "The Patrick Group",
      publishedTime: post.date,
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
  "Team News": "bg-gray-100 text-gray-600",
};

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-gray-700 text-base leading-relaxed">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="font-serif text-2xl font-bold text-[#1a1a1a] mt-2">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-serif text-xl font-bold text-[#1a1a1a]">
          {block.text}
        </h3>
      );
    case "callout":
      return (
        <div key={i} className="bg-[#faf9f7] border-l-4 border-[#c70000] px-6 py-5 rounded-sm">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
            {block.label}
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "bullets":
      return (
        <ul key={i} className="space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700 text-base leading-relaxed">
              <span className="text-[#c70000] font-bold mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "stat-row":
      return (
        <div key={i} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {block.stats.map((stat, j) => (
            <div key={j} className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className="font-serif text-xl font-bold text-[#1a1a1a]">{stat.value}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">{stat.note}</p>
            </div>
          ))}
        </div>
      );
    case "two-col":
      return (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-sm p-5">
            <p className="text-emerald-700 text-xs uppercase tracking-widest font-semibold mb-2">
              {block.left.label}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{block.left.text}</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-sm p-5">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              {block.right.label}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{block.right.text}</p>
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
        url: "https://thepatrickgrp.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "The Patrick Group | Oak and Stone Real Estate",
      url: "https://thepatrickgrp.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thepatrickgrp.com/insights/${post.slug}`,
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
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="text-[#c70000] text-xs uppercase tracking-widest font-semibold hover:underline"
          >
            ← Insights
          </Link>
          <div className="flex items-center gap-3 mt-5 mb-4">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}
            >
              {post.category}
            </span>
            <span className="text-white/40 text-xs">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
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

      {/* Article body */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt / lede */}
          <p className="text-lg text-gray-600 leading-relaxed border-b border-gray-100 pb-8 mb-8">
            {post.excerpt}
          </p>

          {/* Content blocks */}
          <div className="space-y-6">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Author bio */}
          <div className="mt-14 border-t border-gray-100 pt-10 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-serif font-bold text-lg">
                {post.author === "Sarah" ? "SP" : "BP"}
              </span>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">
                {post.author === "Sarah" ? "Sarah Patrick" : "Brad Patrick"}
              </p>
              <p className="text-[#c70000] text-xs uppercase tracking-wider font-semibold mb-2">
                {post.author === "Sarah" ? "Principal Broker & Owner" : "Realtor®"}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.author === "Sarah"
                  ? "Sarah Patrick leads The Patrick Group and has been helping Southeast Michigan buyers and sellers navigate the market since 2000. She brings a long-view, data-grounded perspective to every client relationship."
                  : "Brad Patrick is a Realtor and co-founder of The Patrick Group with over 15 years of experience in Southeast Michigan real estate. He specializes in buyer strategy, competitive offer situations, and new construction."}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#c70000] text-white rounded-sm p-10 text-center">
            <h2 className="font-serif text-2xl font-bold mb-2">
              Questions about the market?
            </h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
              Every situation is different. Call or email Sarah or Brad directly
              — no forms, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:2487553545"
                className="bg-white text-[#c70000] font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
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

          <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
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
