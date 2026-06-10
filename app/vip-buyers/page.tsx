import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VipSignupForm from "@/components/VipSignupForm";

export const metadata: Metadata = {
  title: "VIP Buyer List. Coming Soon Listings",
  description:
    "Get first access to Coming Soon listings in Southeast Michigan before they hit Zillow. Join The Patrick Group VIP Buyer List, free, no obligation.",
  alternates: { canonical: "https://www.thepatrickgrp.com/vip-buyers" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/vip-buyers",
    title: "VIP Buyer List. Coming Soon Listings",
    description:
      "Get first access to Coming Soon listings in Southeast Michigan before they hit Zillow. Join The Patrick Group VIP Buyer List, free, no obligation.",
    siteName: "The Patrick Group",
  },
};

const howItWorks = [
  {
    n: "01",
    title: "You Tell Us What You're Looking For",
    desc: "Area, price range, bedrooms, as specific or broad as you want. Takes 60 seconds.",
  },
  {
    n: "02",
    title: "We Match You to the MLS",
    desc: "Your criteria get set up as a live saved search tied to the Southeast Michigan MLS. The moment a matching property hits Coming Soon status, you get it.",
  },
  {
    n: "03",
    title: "You Hear About It First",
    desc: "Coming Soon listings are typically 3–10 days before active status, and completely off Zillow and Realtor.com during that window.",
  },
  {
    n: "04",
    title: "We Schedule a Private Preview",
    desc: "See a home before anyone else can schedule a showing. In a competitive market, that's how you win, without a bidding war.",
  },
];

const whyItMatters = [
  {
    icon: "⏱",
    title: "Days before Zillow",
    desc: "Coming Soon listings are off the public portals until active. VIP members see them the moment they enter the MLS.",
  },
  {
    icon: "🔑",
    title: "Private previews",
    desc: "See the home before it's officially available for showings. First look = first offer = better negotiating position.",
  },
  {
    icon: "🤝",
    title: "No bidding wars",
    desc: "Getting in before the open house crowd means fewer competing offers. In Southeast Michigan's market, that matters.",
  },
  {
    icon: "📱",
    title: "Instant alerts",
    desc: "MLS-powered notifications, not delayed Zillow scrapes. When a match hits, you hear about it in real time.",
  },
];

export default function VipBuyersPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-white pt-32 pb-20 px-4 sm:px-6"
        style={{
          background:
            "var(--ink)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            VIP Buyer Access
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight">
            See Homes Before{" "}
            <span className="text-[var(--red)]">They Hit Zillow.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Join The Patrick Group VIP Buyer List and get Coming Soon listings
            sent directly to you, days before they&apos;re publicly available.
            Free. No obligation. Just first access.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-8">
            <span>✓ MLS-powered, real-time alerts</span>
            <span>✓ Coming Soon listings only</span>
            <span>✓ Private previews available</span>
            <span>✓ No spam, ever</span>
          </div>
          <a
            href="https://bradpatrick.oakandstonerealestate.com/coming-soon-properties/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 text-white/80 text-sm font-medium px-6 py-3 hover:bg-[var(--paper)]/10 transition-colors"
          >
            Browse Current Coming Soon Listings →
          </a>
        </div>
      </section>


      {/* SIGNUP + WHY IT MATTERS */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Form */}
            <div className="bg-[var(--paper)] border border-[var(--line)] shadow-sm p-8">
              <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-2">
                Join free, takes 60 seconds
              </p>
              <h2 className="font-display text-2xl text-[var(--ink)] mb-1">
                Get Your Coming Soon Alerts
              </h2>
              <p className="text-[var(--ink-3)] text-sm mb-6">
                Tell us what you&apos;re looking for and we&apos;ll set up your
                personalized MLS search. You&apos;ll hear about matches the
                moment they enter Coming Soon status.
              </p>
              <VipSignupForm />
            </div>

            {/* Why it matters */}
            <div>
              <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                Why it matters
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-6">
                Coming Soon Is the Most Valuable Window in Real Estate.
              </h2>
              <p className="text-[var(--ink-2)] leading-relaxed mb-8">
                In Southeast Michigan, the best homes, especially in the
                $400k–$800k range, often receive multiple offers within 24
                hours of going active. The buyers who win are rarely the ones
                who found the listing on Zillow. They&apos;re the ones who knew
                about it first.
              </p>
              <div className="space-y-5">
                {whyItMatters.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--red)]/10 text-[var(--red)] text-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--ink)] mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-sm text-[var(--ink-3)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Simple process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              How the VIP List Works
            </h2>
          </div>
          <div className="space-y-0">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--red)] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {step.n}
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-[var(--ink)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAND */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[var(--paper)] p-6 border border-[var(--line)] shadow-sm">
              <p className="text-base font-medium text-[var(--ink)] mb-3">
                &ldquo;Brad was not just our realtor, but our partner throughout
                the entire process. He went to bat for us, and we secured our
                dream home.&rdquo;
              </p>
              <p className="text-sm font-semibold text-[var(--ink)]">
                Verified Client
              </p>
              <p className="text-xs text-[var(--red)] uppercase tracking-wider">
                Buyer &amp; Seller
              </p>
            </div>
            <div className="bg-[var(--paper)] p-6 border border-[var(--line)] shadow-sm">
              <p className="text-base font-medium text-[var(--ink)] mb-3">
                &ldquo;Sarah and Brad helped us find our HOME. They are amazing
                to work with, fun, knowledgeable and easy. I will work with
                them again.&rdquo;
              </p>
              <p className="text-sm font-semibold text-[var(--ink)]">
                Tracey Williams
              </p>
              <p className="text-xs text-[var(--red)] uppercase tracking-wider">
                Buyer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--ink)] text-white text-center">
        <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
          Ready to search actively?
        </p>
        <h2 className="font-display text-2xl sm:text-3xl mb-4">
          Want More Than Alerts?
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          The VIP list gets you first access. A buyer consultation with Brad
          gets you a full strategy: financing, search criteria, and a plan to
          win in any market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buying"
            className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors"
          >
            Work With a Buyer&apos;s Agent →
          </Link>
          <a
            href="tel:2487553545"
            className="border border-white/30 text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors"
          >
            Call Brad: 248.755.3545
          </a>
        </div>
      </section>
    </>
  );
}
