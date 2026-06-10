import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Property Southeast Michigan. Buyer's Agent for Investors",
  description:
    "Investment property in Southeast Michigan: buy-and-hold, BRRRR, fix-and-flip, and 1031 exchanges. The Patrick Group is your buyer's agent.",
  keywords:
    "investment property Southeast Michigan, rental property Oakland County, buy and hold real estate Michigan, fix and flip Southeast Michigan, 1031 exchange Michigan, real estate investor agent Michigan",
  alternates: { canonical: "https://www.thepatrickgrp.com/real-estate-investors" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/real-estate-investors",
    title: "Investment Property Southeast Michigan",
    description:
      "Investment property in Southeast Michigan: buy-and-hold, BRRRR, fix-and-flip, and 1031 exchanges. The Patrick Group is your buyer's agent.",
    siteName: "The Patrick Group",
  },
};

const investorTypes = [
  {
    title: "Buy-and-Hold Rental",
    desc: "Single-family and small multi-family rentals with long-term tenants. We know which neighborhoods have strong rental demand and which properties pencil, and which ones don't.",
  },
  {
    title: "BRRRR Strategy",
    desc: "Buy, Rehab, Rent, Refinance, Repeat. We source distressed properties, connect you with reliable local contractors, and understand the post-rehab refinance timeline. Speed and condition assessment matter here.",
  },
  {
    title: "Fix and Flip",
    desc: "Finding undervalued properties with the right ARV upside requires neighborhood-level pricing knowledge. We know what renovated homes are selling for in each submarket, and we move quickly.",
  },
  {
    title: "1031 Exchange",
    desc: "Exchanging out of another investment and into Southeast Michigan? We understand the 45-day identification and 180-day close timeline and can help you find qualifying replacement property at pace.",
  },
  {
    title: "First-Time Investor",
    desc: "Starting your first rental property is different from buying a primary home. We'll walk you through the numbers: purchase price, estimated rent, expenses, vacancy, before you make an offer.",
  },
  {
    title: "Portfolio Expansion",
    desc: "Adding a second or fifth property to an existing portfolio. You know how to run the analysis, we bring the inventory, the off-market access, and the speed to compete.",
  },
];

const ourEdge = [
  {
    title: "Off-Market Access Through Our Cash Offer Program",
    desc: "We run a cash offer program that puts us in front of motivated sellers before they list. That means opportunities that never hit Zillow: distressed properties, landlords who are done, estates that want a quiet sale. Investors who work with us get first look.",
  },
  {
    title: "Neighborhood-Level Rental Market Knowledge",
    desc: "Not every zip code in Oakland and Macomb County has the same rental demand, tenant quality, or rent-to-price ratio. We know which areas attract long-term tenants, which are oversupplied, and which are underpriced relative to demand.",
  },
  {
    title: "Honest Condition Assessment",
    desc: "An investor who overpays for rehab scope loses the deal before the first nail goes in. We walk properties with an investor's eye: structural concerns, mechanical systems, deferred maintenance, and give you a realistic picture of what you're actually buying.",
  },
  {
    title: "Speed",
    desc: "Good investment properties don't sit. We return calls the same day, write offers fast, and don't fumble the inspection timeline. If you need to move, we move.",
  },
  {
    title: "Contractor and PM Connections",
    desc: "We have relationships with local contractors, property managers, and lenders who work with investors. We can introduce you to the people you'll need to actually operate what you buy.",
  },
];

const investorProcess = [
  {
    title: "Investment Criteria Conversation",
    desc: "We start by understanding your strategy: buy-and-hold or flip, your price range, your financing, and your target return thresholds. We need to know what a good deal looks like to you before we can find one.",
  },
  {
    title: "Market and Submarket Education",
    desc: "If you're new to Southeast Michigan, we'll walk you through the submarkets, which areas have strong rental demand, which have strong resale values for flips, and where the best value is relative to your criteria.",
  },
  {
    title: "Active Property Search. On and Off Market",
    desc: "We search MLS inventory and pull from our off-market pipeline. When something fits your criteria, you hear about it immediately, before it's been sitting for three days.",
  },
  {
    title: "Walk the Property Together",
    desc: "We attend showings with an investor's perspective, not a homebuyer's. We're looking at condition, rehab scope, layout efficiency for rental, and neighborhood comp trajectory, not finishes and paint colors.",
  },
  {
    title: "Run the Numbers Before You Offer",
    desc: "Before you write an offer, we look at comparable sales, comparable rentals, estimated rehab scope, and holding costs. Not a guarantee of returns, but an honest view of what the deal actually looks like.",
  },
  {
    title: "Negotiate, Close, and Connect You",
    desc: "We negotiate hard on price and terms. At closing, we connect you with property managers, contractors, or lenders if you need them. The relationship doesn't end at the closing table.",
  },
];

const faqs = [
  {
    q: "What types of investment properties are most active in Southeast Michigan?",
    a: "Single-family rentals are the most active category in Oakland and Macomb counties, particularly in the $150K–$350K range where rent-to-price ratios tend to work better. Small multi-family (2–4 units) is less common but exists in certain pockets. Fix-and-flip activity is strong in the $100K–$250K purchase range, with higher ARV potential in suburbs like Sterling Heights, Warren, and parts of Oakland County. We can show you specific comp data for the areas you're targeting.",
  },
  {
    q: "Do you have access to off-market properties?",
    a: "Yes. We operate a cash offer program that generates motivated seller leads: landlords who are done, distressed properties, and estates that want a quiet sale. These properties often never hit MLS. Investors who work with us get early access to this pipeline. We can't guarantee volume, but it's a consistent source of deals that aren't publicly available.",
  },
  {
    q: "Can you help me run the numbers on a potential rental?",
    a: "We can pull comparable rental data, show you what similar properties are renting for, and help you think through the expense side: taxes, insurance, maintenance reserve, vacancy, and property management. We're not financial advisors and we won't project your returns for you, but we can make sure you're working with accurate market data before you make a decision.",
  },
  {
    q: "Can you help with a 1031 exchange purchase in Michigan?",
    a: "Yes. We've worked with out-of-state investors exchanging into Southeast Michigan. We understand the 45-day identification deadline and 180-day closing requirement, and we can move quickly to help you identify and close qualifying replacement property within your exchange timeline. Coordinate with your qualified intermediary early, we handle the real estate side.",
  },
  {
    q: "What financing options do investors typically use in this market?",
    a: "Conventional investment property loans (typically requiring 20–25% down), DSCR loans (debt service coverage ratio loans that qualify based on the property's rental income rather than your personal income), hard money for short-term fix-and-flip financing, and cash purchases. We can connect you with local and regional lenders who specialize in investment property financing. The right structure depends on your strategy and timeline.",
  },
  {
    q: "Do you work with out-of-state investors?",
    a: "Yes. We've helped investors from out of state buy rental property in Southeast Michigan remotely: video walk-throughs, detailed condition reports, and coordination through closing without requiring you to be here for every step. If you can visit once for a targeted showing trip, that's ideal. But we can work around your schedule.",
  },
];

export default function RealEstateInvestorsPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Specialty Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Buying Investment Property in Southeast Michigan.{" "}
            <span className="text-[#c70000]">You Need an Agent Who Knows the Numbers.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-5">
            Most agents are trained to help primary buyers find homes they love. That&apos;s not what you need. You need someone who can assess condition honestly, knows rental comps by neighborhood, and moves fast enough to compete for good inventory.
          </p>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">
            We work with buy-and-hold investors, fix-and-flip buyers, BRRRR strategy clients, and 1031 exchange purchasers across Oakland and Macomb counties. We also run a cash offer program that generates off-market inventory you won&apos;t find on Zillow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Talk Strategy: 248.755.3545
            </a>
            <Link
              href="/cash-offer"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              See Our Cash Offer Program →
            </Link>
          </div>
        </div>
      </section>

      {/* INVESTOR TYPES */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Who we work with
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Investment Strategies We Support
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              Different strategies require different things from an agent. Here&apos;s where we have direct experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorTypes.map((item) => (
              <div
                key={item.title}
                className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6"
              >
                <h3 className="font-serif text-base font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EDGE */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              What we bring
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Why Investors Work With Us
            </h2>
          </div>
          <div className="space-y-6">
            {ourEdge.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-sm p-6 flex gap-5"
              >
                <div className="w-1.5 shrink-0 bg-[#c70000] rounded-full self-stretch" />
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              How it works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              From Criteria to Closing
            </h2>
          </div>
          <div className="space-y-8">
            {investorProcess.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#c70000] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Investment Property in Southeast Michigan: FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Where we work
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
              Investment Property Across Southeast Michigan
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Sterling Heights", slug: "sterling-heights-mi" },
              { name: "Warren", slug: "warren-mi" },
              { name: "Clinton Township", slug: "clinton-township-mi" },
              { name: "Macomb Township", slug: "macomb-township-mi" },
              { name: "Shelby Township", slug: "shelby-township-mi" },
              { name: "Royal Oak", slug: "royal-oak-mi" },
              { name: "Troy", slug: "troy-mi" },
              { name: "Rochester Hills", slug: "rochester-hills-mi" },
              { name: "Livonia", slug: "livonia-mi" },
              { name: "St. Clair Shores", slug: "st-clair-shores-mi" },
              { name: "Detroit", slug: "detroit-mi" },
              { name: "Romulus", slug: "romulus-mi" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/neighborhoods/${city.slug}`}
                className="text-sm text-gray-600 hover:text-[#c70000] transition-colors py-2 px-3 bg-[#faf9f7] rounded-sm text-center"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center">
            <Link href="/new-construction" className="text-sm font-semibold text-[#c70000] hover:underline">
              New Construction →
            </Link>
            <Link href="/cash-offer" className="text-sm font-semibold text-[#c70000] hover:underline">
              Cash Offer Program →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
          Let&apos;s Find Your Next Deal
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Tell Us Your Criteria. We&apos;ll Go to Work.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          A 15-minute call is all it takes to know whether we&apos;re a fit, and to get you plugged into our off-market pipeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Call 248.755.3545
          </a>
          <Link
            href="/cash-offer"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            See Off-Market Deals →
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
          Brad Patrick, Realtor® · Southeast Michigan
        </p>
      </section>

      {/* DISCLAIMER */}
      <section className="py-6 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            Real estate investment involves risk, including the potential loss of capital. Nothing on this page constitutes financial, tax, or investment advice. Past performance of any market or property type is not a guarantee of future results. Consult a licensed financial advisor, accountant, and attorney before making investment decisions. Oak &amp; Stone Real Estate is committed to compliance with the Fair Housing Act and all applicable fair housing laws. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
