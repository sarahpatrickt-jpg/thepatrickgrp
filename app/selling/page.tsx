import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Your Home in Southeast Michigan | The Patrick Group",
  description:
    "Sell your Southeast Michigan home with The Patrick Group. 26 years of experience, award-winning marketing, Unconditional Release Guarantee. Free listing consultation.",
  alternates: { canonical: "https://thepatrickgrp.com/selling" },
};

const marketingToolkit = [
  {
    icon: "📸",
    title: "Award-Winning Photography",
    desc: "Nationwide professional photographers — not the listing agent with an iPhone. Buyers decide in 3 seconds whether to click.",
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
    desc: "Direct mail to your neighbors — they know people who want to live near them. Word-of-mouth is still the most powerful channel in real estate.",
  },
  {
    icon: "🔊",
    title: "15-Platform Syndication",
    desc: "Realtor.com, Zillow, Trulia, Homes.com, Redfin, and 10+ more — your home is everywhere buyers are looking.",
  },
  {
    icon: "💬",
    title: "Buyer Feedback Loop",
    desc: "Regular reporting of showing feedback so you can make informed decisions — not guesses — throughout the process.",
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
  { phase: "Offer", title: "Negotiation & Acceptance", desc: "We analyze every offer in detail — not just price, but terms, contingencies, and timeline." },
  { phase: "Close", title: "To the Closing Table", desc: "Coordinated with your lender and title company. We manage every detail so nothing falls through." },
];

export default function SellingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            For Sellers
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Your Home Deserves{" "}
            <span className="text-[#c70000]">Better</span> Than the
            Average Listing.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Most agents take 20 photos and put your home on the MLS. We build a
            full marketing campaign — because your home is worth it, and so is
            your equity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
            >
              Get My Free Home Valuation
            </Link>
            <a
              href="tel:2487553545"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Call 248.755.3545
            </a>
          </div>
        </div>
      </section>

      {/* MARKETING TOOLKIT */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              The difference
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              What We Do for Every Listing
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Every seller gets the full toolkit — not just the sellers whose homes
              are over a certain price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingToolkit.map((item) => (
              <div
                key={item.title}
                className="bg-[#faf9f7] border border-gray-100 p-6 rounded-sm"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNDICATION */}
      <section className="py-12 px-4 sm:px-6 bg-[#faf9f7] border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">
            Your listing appears on all of these platforms
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {syndication.map((s) => (
              <span
                key={s}
                className="bg-white border border-gray-200 text-sm text-gray-600 px-4 py-2 rounded-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              The process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              From Consultation to Close
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#c70000] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs text-[#c70000] font-semibold uppercase tracking-wider mb-1">
                    {t.phase}
                  </p>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Zero risk
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            The Unconditional Release Guarantee
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
          <div className="mt-8">
            <Link
              href="/home-valuation"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
            >
              Schedule My Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SELLER TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
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
              <div key={i} className="bg-[#faf9f7] p-6 border border-gray-100 rounded-sm">
                <p className="text-base font-medium text-[#1a1a1a] mb-3">
                  &ldquo;{t.q}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#1a1a1a]">{t.name}</p>
                <p className="text-xs text-[#c70000] uppercase tracking-wider">{t.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#c70000] text-white text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
          Ready to Find Out What Your Home Is Worth?
        </h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto text-sm">
          Start with a free valuation. We&apos;ll take it from there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home-valuation"
            className="bg-white text-[#c70000] font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
          >
            Get My Free Home Valuation
          </Link>
          <a
            href="tel:2487553545"
            className="border border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Call 248.755.3545
          </a>
        </div>
      </section>
    </>
  );
}
