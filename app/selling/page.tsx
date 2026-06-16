import type { Metadata } from "next";
import Link from "next/link";
import TikTokVideoEmbed from "@/components/TikTokVideoEmbed";

// TikTok listing-tour videos shown on the selling page. Add more here to fill
// the row (3 across on desktop, centered for any count).
const LISTING_VIDEOS = [
  {
    id: "7569008654024740110",
    title: "Listing tour: Birmingham, MI",
  },
  {
    id: "7544117008367996173",
    title: "Listing tour: Southfield, MI",
  },
  {
    id: "7615326756723002637",
    title: "Listing tour: Northville, MI",
  },
];

export const metadata: Metadata = {
  title: "Sell Your Home in Southeast Michigan",
  description:
    "Sell your Southeast Michigan home with The Patrick Group. Award-winning marketing, Unconditional Release Guarantee. Free consultation.",
  alternates: { canonical: "https://www.thepatrickgrp.com/selling" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/selling",
    title: "Sell Your Home in Southeast Michigan",
    description:
      "Sell your Southeast Michigan home with The Patrick Group. Award-winning marketing, Unconditional Release Guarantee. Free consultation.",
    siteName: "The Patrick Group",
  },
};

const sellingFaqs = [
  {
    q: "How long does it take to sell a home in Southeast Michigan?",
    a: "In March 2026, average days on market ranged from 15 days in Washtenaw County to 18 days in Macomb County. Well-priced, well-prepared homes in strong condition continue to sell quickly. The Patrick Group's listings have consistently performed at or above county averages due to pre-market agent outreach and professional marketing.",
  },
  {
    q: "What does it cost to sell a home in Southeast Michigan?",
    a: "Sellers in Michigan typically pay 7–9% of the sale price at closing, which includes real estate commissions, Michigan state transfer tax ($7.50 per $1,000), county transfer tax (varies by county), and any buyer concessions negotiated in the offer. Title insurance is customarily paid by the seller in Michigan. We provide a full net proceeds estimate at your listing consultation.",
  },
  {
    q: "What is the Unconditional Release Guarantee?",
    a: "If at any point during our listing agreement you are unhappy with our service, you may notify us in writing and we will release you from the listing contract, no fees, no penalties. This applies to active listings only; once an offer has been accepted, the agreement can no longer be withdrawn.",
  },
  {
    q: "How do you market a home differently than other agents?",
    a: "Every Patrick Group listing receives professional photography, a custom property website, full video walkthrough on YouTube, and a broker preview sent to approximately 300 agents who have recently sold in your area before the home hits the public MLS. This pre-market exposure creates competition before most buyers even know the home exists.",
  },
  {
    q: "Should I make repairs before listing my home?",
    a: "Fix anything a buyer's inspector is likely to flag, deferred maintenance creates perceived risk and weakens your negotiating position. Cosmetic updates like fresh paint, landscaping, and decluttering almost always return dollar-for-dollar or better. Major renovations rarely pay back fully in a sale context. We walk through a prioritized prep list during your listing consultation.",
  },
  {
    q: "What is the median home sale price in Southeast Michigan right now?",
    a: "As of March 2026, median sale prices by county are: Washtenaw County $420,000 (+2.4% YoY), Livingston County $404,000 (+2.3%), Oakland County $367,000 (+4.2%), Macomb County $270,000 (+4.7%), and Wayne County $202,000 (+6.2%). Data sourced from Realcomp MLS.",
  },
];

const sellingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sellingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const marketingToolkit = [
  {
    icon: "📸",
    title: "Award-Winning Photography",
    desc: "Nationwide professional photographers, not the listing agent with an iPhone. Buyers decide in 3 seconds whether to click.",
  },
  {
    icon: "🎬",
    title: "Video Marketing",
    desc: "Full video walk-through on YouTube, Vimeo, and Viddler. Buyers can experience the layout and flow before they ever request a showing.",
  },
  {
    icon: "🌐",
    title: "Custom Property Website",
    desc: "Every listing gets its own website with high-res photos, detailed highlights, and virtual tour links.",
  },
  {
    icon: "👥",
    title: "300-Agent Network Preview",
    desc: "We pull ~300 realtors who have recently sold in your area and give them a broker \"heads up\" before your home hits the market. More buyers, faster.",
  },
  {
    icon: "📮",
    title: "Targeted Postcard Campaign",
    desc: "Direct mail to your neighbors, they know people who want to live near them. Word-of-mouth is still the most powerful channel in real estate.",
  },
  {
    icon: "🔊",
    title: "15-Platform Syndication",
    desc: "Realtor.com, Zillow, Trulia, Homes.com, Redfin, and 10+ more, your home is everywhere buyers are looking.",
  },
  {
    icon: "💬",
    title: "Buyer Feedback Loop",
    desc: "Regular reporting of showing feedback so you can make informed decisions, not guesses, throughout the process.",
  },
  {
    icon: "🏷️",
    title: "Luxury Signage",
    desc: "Premium sign and post that enhances, not detracts from, your curb appeal. First impressions start at the street.",
  },
];

const syndication = [
  "Realtor.com", "Zillow", "Trulia", "Homes.com", "Redfin", "Homesnap",
  "Movoto", "HomeFinder", "Estately", "Craigslist", "Google", "Remine",
  "MLive", "Dave Ramsey", "Ownerly",
];

const timeline = [
  { phase: "Week 1", title: "Listing Consultation", desc: "We come to your home, walk through it, price it strategically, and explain every step of the process." },
  { phase: "Week 1–2", title: "Pre-Market Prep", desc: "Professional photography, video shoot, custom website creation, and 300-agent broker outreach." },
  { phase: "Launch", title: "Go Live + Open House", desc: "Simultaneous syndication to 15+ platforms, targeted postcards, and neighborhood outreach on day one." },
  { phase: "Ongoing", title: "Active Management", desc: "Showings scheduled, feedback collected and reported, pricing strategy reviewed weekly." },
  { phase: "Offer", title: "Negotiation & Acceptance", desc: "We analyze every offer in detail, not just price, but terms, contingencies, and timeline." },
  { phase: "Close", title: "To the Closing Table", desc: "Coordinated with your lender and title company. We manage every detail so nothing falls through." },
];

export default function SellingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--ink)] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            For Sellers
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-5">
            Your Home Deserves{" "}
            <span className="text-[var(--red)]">Better</span> Than the
            Average Listing.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Most agents take 20 photos and put your home on the MLS. We build a
            full marketing campaign, because your home is worth it, and so is
            your equity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation"
              className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors"
            >
              Get My Free Home Valuation
            </Link>
            <a
              href="tel:2487553545"
              className="border border-white/30 text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors text-center"
            >
              Call 248.755.3545
            </a>
          </div>
        </div>
      </section>

      {/* Listing marketing videos */}
      <section className="px-4 sm:px-6 py-14" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
            Listing Tours
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)] mb-3">
            See Our Marketing in Action
          </h2>
          <p className="text-[var(--ink-3)] max-w-xl mx-auto mb-8">
            Short-form video is one of the ways we get your home in front of
            buyers. A few from our team.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {LISTING_VIDEOS.map((v) => (
              <div key={v.id} className="w-full max-w-[300px]">
                <TikTokVideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
          <p
            className="mt-5 text-xs"
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            <a
              href="https://www.tiktok.com/@.christianbrown"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--ink)]"
            >
              See more on TikTok · @.christianbrown
            </a>
          </p>
        </div>
      </section>


      {/* MARKETING TOOLKIT */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              The difference
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              What We Do for Every Listing
            </h2>
            <p className="mt-4 text-[var(--ink-3)] max-w-xl mx-auto">
              Every seller gets the full toolkit, not just the sellers whose homes
              are over a certain price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingToolkit.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--paper-2)] border border-[var(--line)] p-6"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[var(--ink)] mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--ink-3)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO. SEE OUR MARKETING */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              See the difference
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              Our Marketing in Action
            </h2>
            <p className="mt-4 text-[var(--ink-3)] max-w-xl mx-auto">
              Every Patrick Group listing gets a full video walkthrough, not a
              slideshow with music. Here&apos;s a recent example.
            </p>
          </div>
          <div className="relative w-full overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/cgcc_wQIbGw"
              title="Patrick Group Listing Video, 1021 Clear Creek Dr"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs text-[var(--ink-3)] mt-4">
            1021 Clear Creek Dr. Full property tour produced by The Patrick Group
          </p>
        </div>
      </section>

      {/* VS. AVERAGE AGENT COMPARISON */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--ink)] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              The honest comparison
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Most Agents vs. The Patrick Group
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm">
              The average listing agent in Southeast Michigan follows the same
              playbook: price it, photograph it, post it, wait. We don&apos;t wait.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-8 text-white/40 font-normal text-xs uppercase tracking-widest w-2/5">
                    What most agents do
                  </th>
                  <th className="text-left py-3 text-white/40 font-normal text-xs uppercase tracking-widest w-1/5 text-center">
                    Typical agent
                  </th>
                  <th className="text-left py-3 pl-8 text-[var(--red)] font-semibold text-xs uppercase tracking-widest w-1/5 text-center">
                    The Patrick Group
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Photography", "Agent with a smartphone", "Nationwide professional photographer"],
                  ["Video", "None", "Full walkthrough on YouTube + Vimeo"],
                  ["Property website", "MLS page only", "Custom property website, every listing"],
                  ["Agent outreach before launch", "None", "~300 local agents notified before going live"],
                  ["Direct mail", "Rarely", "Targeted postcards to your neighbors"],
                  ["Platform syndication", "Zillow + Realtor.com", "15+ platforms simultaneously"],
                  ["Buyer feedback", "Rarely shared", "Regular showing feedback reports"],
                  ["Listing contract exit", "Locked in", "Unconditional Release Guarantee*"],
                ].map(([feature, them, us]) => (
                  <tr key={feature}>
                    <td className="py-4 pr-8 text-white/50 text-xs font-medium uppercase tracking-wide">
                      {feature}
                    </td>
                    <td className="py-4 text-white/40 text-sm text-center">
                      {them}
                    </td>
                    <td className="py-4 pl-8 text-white font-semibold text-sm text-center">
                      {us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/home-valuation"
              className="inline-block bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors"
            >
              Get My Free Home Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* SYNDICATION */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--ink-3)] text-xs uppercase tracking-widest font-semibold mb-4">
            Your listing appears on all of these platforms
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {syndication.map((s) => (
              <span
                key={s}
                className="bg-[var(--paper)] border border-[var(--line)] text-sm text-[var(--ink-2)] px-4 py-2"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              The process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              From Consultation to Close
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--red)] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs text-[var(--red)] font-semibold uppercase tracking-wider mb-1">
                    {t.phase}
                  </p>
                  <h3 className="font-semibold text-[var(--ink)] mb-1">{t.title}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--ink)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            Zero risk
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">
            The Unconditional Release Guarantee*
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            &ldquo;If at any time you are unhappy with our service, simply provide
            written notice and we will unconditionally release you from your
            listing contract.&rdquo;
          </p>
          <p className="text-white/50 text-sm">
            No high-volume team. No national portal agent. No discount brokerage.
            <br />
            None of them can make this offer credibly. We can.
          </p>
          <p className="text-white/30 text-xs mt-6">
            * Applies to active listings only. Once an offer has been accepted, the listing agreement can no longer be withdrawn.
          </p>
          <div className="mt-8">
            <Link
              href="/home-valuation"
              className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors"
            >
              Schedule My Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SELLER TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-8 text-center">
            What Our Sellers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                q: "Sold in 18 hours.",
                name: "Linda Christoff",
                type: "Seller",
              },
              {
                q: "Brad was very professional, helpful and efficient in getting the house sold.",
                name: "Verified Client",
                type: "Seller",
              },
              {
                q: "Friendly, professional and effective service. A pleasure to work with.",
                name: "Gerald Poisson",
                type: "Seller & Buyer",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[var(--paper-2)] p-6 border border-[var(--line)]">
                <p className="text-base font-medium text-[var(--ink)] mb-3">
                  &ldquo;{t.q}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                <p className="text-xs text-[var(--red)] uppercase tracking-wider">{t.type}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/reviews" className="text-sm text-[var(--red)] font-semibold hover:underline">
              See all client reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellingFaqSchema) }}
      />
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {sellingFaqs.map((faq, i) => (
              <details key={i} className="bg-[var(--paper)] border border-[var(--line)] group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-[var(--ink)] list-none flex justify-between items-center hover:text-[var(--red)] transition-colors">
                  {faq.q}
                  <span className="text-[var(--red)] ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-[var(--ink-2)] leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--red)] text-white text-center">
        <h2 className="font-display text-2xl sm:text-3xl mb-3">
          Ready to Find Out What Your Home Is Worth?
        </h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto text-sm">
          Start with a free valuation. We&apos;ll take it from there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home-valuation"
            className="bg-[var(--paper)] text-[var(--red)] font-bold px-8 py-4 hover:bg-[var(--paper)]/90 transition-colors"
          >
            Get My Free Home Valuation
          </Link>
          <a
            href="tel:2487553545"
            className="border border-white text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors"
          >
            Call 248.755.3545
          </a>
        </div>
        <p className="text-white/70 text-xs mt-6">
          Want to know what the market is doing right now?{" "}
          <Link href="/market-updates" className="underline hover:text-white transition-colors">
            See our latest market report →
          </Link>
          {" · "}
          <Link href="/cash-offer" className="underline hover:text-white transition-colors">
            Need to sell fast? See our cash offer program →
          </Link>
        </p>
      </section>
    </>
  );
}
