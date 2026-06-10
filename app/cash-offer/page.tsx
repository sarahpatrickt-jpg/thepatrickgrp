import type { Metadata } from "next";
import Link from "next/link";
import CashOfferForm from "@/components/CashOfferForm";

export const metadata: Metadata = {
  title: "Sell Your Home for Cash in Southeast Michigan",
  description:
    "Get a cash offer on your Southeast Michigan home. The Patrick Group represents you, not the investor. No repairs, close in as few as 14 days.",
  keywords:
    "sell house fast Southeast Michigan, cash offer Michigan, sell home to investor Michigan, sell house as-is Oakland County, fast home sale Michigan, cash buyer Southeast Michigan",
  alternates: { canonical: "https://www.thepatrickgrp.com/cash-offer" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/cash-offer",
    title: "Sell Your Home for Cash in Southeast Michigan",
    description:
      "Get a cash offer on your Southeast Michigan home. The Patrick Group represents you, not the investor. No repairs, close in as few as 14 days.",
    siteName: "The Patrick Group",
  },
};

const whoItsFor = [
  {
    icon: "📦",
    title: "Relocating Quickly",
    desc: "Job transfer, military move, or life change, you need the home sold before you leave, not 90 days later.",
  },
  {
    icon: "🏚️",
    title: "Property Needs Major Repairs",
    desc: "Roof, foundation, outdated systems, you don't have the time or money to fix it before listing. Cash investors buy as-is.",
  },
  {
    icon: "⚖️",
    title: "Divorce or Estate Settlement",
    desc: "When speed and certainty matter more than squeezing every dollar, a quick cash sale removes one massive stressor from the process.",
  },
  {
    icon: "🏠",
    title: "Inherited Property",
    desc: "You inherited a home you don't want to manage, maintain, or pay taxes on. A clean, fast close is often the best outcome.",
  },
  {
    icon: "📉",
    title: "Behind on Payments",
    desc: "Facing foreclosure or financial hardship? A cash sale can stop the clock, protect your credit, and put equity in your pocket.",
  },
  {
    icon: "🔑",
    title: "Tired Landlord",
    desc: "Done with tenants, repairs, and management headaches? Sell your rental property as-is without clearing it out or staging it.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Property",
    desc: "Call, text, or fill out our form with basic property details. No commitment required, just a conversation.",
  },
  {
    n: "02",
    title: "We Present It to Vetted Investors",
    desc: "We share your property with our network of pre-screened local cash investors who are actively buying in Southeast Michigan.",
  },
  {
    n: "03",
    title: "You Receive a No-Obligation Offer",
    desc: "Typically within 24–48 hours. We review the offer with you, explain the terms, and negotiate on your behalf, you are never on your own.",
  },
  {
    n: "04",
    title: "Close on Your Timeline",
    desc: "As quickly as 14 days, or whenever works for you. No repairs, no showings, no open houses, no waiting on a buyer's mortgage approval.",
  },
];

const faqs = [
  {
    q: "How is this different from M1 Home Buyers, Simply Sold RE, We Buy Houses, or similar companies?",
    a: "Those companies are the buyer, their goal is to purchase your home as cheaply as possible. That's a fundamental conflict of interest. The Patrick Group is a licensed real estate team that represents you, the seller. We connect you with vetted local cash investors, negotiate the offer on your behalf, and show you a comparative market analysis so you know exactly what you're leaving on the table (or not) before you sign anything. You get the speed of a cash sale with a licensed agent whose interests are aligned with yours, not the buyer's.",
  },
  {
    q: "Do you buy my home directly?",
    a: "No. The Patrick Group is a licensed real estate team, we represent you as a seller and connect you with our network of vetted, pre-screened cash investors. We do not purchase properties ourselves. This means our interests are aligned with yours: we want you to get the best possible offer.",
  },
  {
    q: "Will I need to make repairs or clean the home?",
    a: "No. Cash investors purchase homes as-is. You don't need to fix anything, clean out the property, or stage it for showings. The offer you receive reflects the home in its current condition.",
  },
  {
    q: "How fast can we close?",
    a: "Closings can happen in as few as 14 days. The timeline is flexible, if you need more time to move or coordinate, that's fine too. Cash transactions are not subject to mortgage approval timelines, so the schedule is largely up to you.",
  },
  {
    q: "Is there a commission or fee for this service?",
    a: "Our professional service fees are structured into the transaction and addressed with the investor, similar to how seller-side representation works. We'll explain all terms transparently before you make any decision. There's no obligation or cost just to talk.",
  },
  {
    q: "Are the investors legitimate?",
    a: "Yes. We only work with investors who are active in the Southeast Michigan market, have a documented track record of closing, and whose offers are verifiable. We do not send your information to mass wholesaler lists or out-of-state speculation networks.",
  },
  {
    q: "Can I still get a traditional listing if the cash offer isn't right?",
    a: "Absolutely. Our job is to help you make the best decision for your situation, not to push you into a cash sale. If we review the cash offer and it doesn't make sense, we'll tell you. Listing traditionally is always an option, and we'll give you an honest comparison.",
  },
  {
    q: "Do I have to accept an offer?",
    a: "Never. Every offer is 100% no-obligation. You can review the terms, ask questions, and walk away at any time before signing. We're here to give you options, not pressure.",
  },
  {
    q: "What makes The Patrick Group different for cash home sales in Southeast Michigan?",
    a: "Most cash buyer companies in Southeast Michigan. M1 Home Buyers, Simply Sold RE, Pluto Property Group, and others, are purchasing your home directly. They are the buyer. The Patrick Group is different: we are a licensed real estate team that represents sellers exclusively. We bring your property to our network of vetted local cash investors, negotiate competing offers, and provide a full market analysis so you can make an informed decision. You are never negotiating alone against a company whose profit depends on paying you less.",
  },
  {
    q: "Can you help if my home has liens, back taxes, or other legal complications?",
    a: "Yes. Many of the cash investors in our network are experienced with complex title situations, including liens, judgments, back taxes, estate properties, and no-equity scenarios. These situations require experienced local buyers who know how to close despite complications. We'll be upfront about whether a cash sale is the right path or whether the situation calls for a different approach.",
  },
];

const decisionChecklist = [
  {
    title: "Do you need to close within 30 days?",
    desc: "Cash sales typically close in 7-21 days. If your timeline is flexible and you can wait 60-90 days, a traditional listing will almost always net more money.",
  },
  {
    title: "Does your home need significant repairs?",
    desc: "Cash investors buy as-is. If your home needs a new roof, foundation work, or major system updates you can't afford to fix, a cash offer removes that obstacle.",
  },
  {
    title: "Are you comfortable leaving money on the table?",
    desc: "Cash offers are typically below full market value. You're trading maximum price for speed, certainty, and convenience. Make sure you understand the gap before deciding.",
  },
  {
    title: "Is your situation time-sensitive?",
    desc: "Relocation, divorce, foreclosure risk, estate settlement, these situations often make speed and certainty more valuable than an extra 10-15% on the sale price.",
  },
  {
    title: "Have you seen a comparative market analysis?",
    desc: "Before accepting any cash offer, you should know what your home would sell for on the open market. We provide this analysis at no cost so you can make an informed decision.",
  },
  {
    title: "Do you want to avoid showings entirely?",
    desc: "Cash sales mean zero open houses, zero strangers walking through your home, and zero weekend disruptions. For some sellers, this alone makes it worthwhile.",
  },
  {
    title: "Is the property vacant or tenant-occupied?",
    desc: "Vacant homes cost money every month they sit. Tenant-occupied properties can be harder to show to traditional buyers. Cash investors handle both situations routinely.",
  },
  {
    title: "Are there title or legal complications?",
    desc: "Liens, back taxes, estate probate, or ownership disputes can complicate traditional sales. Experienced cash investors navigate these issues regularly.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function CashOfferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Is a Cash Offer Right for You? A Seller's Checklist",
            description:
              "A cash sale isn't the right move for everyone. Walk through these questions to determine whether it makes sense for your situation.",
            step: decisionChecklist.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[var(--ink)] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            Cash Offer Program
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-5">
            Need to Sell Fast?{" "}
            <span className="text-[var(--red)]">Get a Cash Offer in 48 Hours.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            We connect Southeast Michigan homeowners with vetted local cash
            investors. No repairs. No showings. No waiting on a buyer&apos;s
            mortgage. Close in as few as 14 days, with a licensed agent
            representing your interests throughout.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/60 mb-8">
            <span>✓ No repairs required</span>
            <span>✓ Sell as-is</span>
            <span>✓ Close in 14 days</span>
            <span>✓ Agent-represented</span>
            <span>✓ No obligation</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors text-center"
            >
              Call for a Free Cash Offer Consultation
            </a>
            <Link
              href="/home-valuation"
              className="border border-white/30 text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors text-center"
            >
              What&apos;s My Home Worth?
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION. TRUST */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--red)] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-bold text-lg mb-1">We Represent You</p>
              <p className="text-white/80 text-sm">A licensed agent negotiates on your behalf, not the investor&apos;s.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Local, Vetted Investors</p>
              <p className="text-white/80 text-sm">Pre-screened buyers who know the Southeast Michigan market and close on time.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Zero Pressure</p>
              <p className="text-white/80 text-sm">No obligation to accept. If the offer doesn&apos;t make sense, we&apos;ll tell you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Is this right for you?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              Situations Where a Cash Sale Makes Sense
            </h2>
            <p className="mt-4 text-[var(--ink-3)] max-w-xl mx-auto text-sm">
              A cash offer isn&apos;t right for everyone, but for these situations, it&apos;s often the smartest move.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItsFor.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--paper-2)] border border-[var(--line)] p-6"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[var(--ink)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--ink-3)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Simple process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              How the Cash Offer Program Works
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--red)] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-[var(--ink)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Know your options
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)]">
              Cash Offer vs. Your Other Options
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--ink)] text-white">
                  <th className="text-left p-4 font-semibold rounded-tl-sm"></th>
                  <th className="text-center p-4 font-semibold text-[var(--red)]">
                    Cash Offer<br /><span className="text-white/60 font-normal text-xs">via The Patrick Group</span>
                  </th>
                  <th className="text-center p-4 font-semibold">
                    iBuyer<br /><span className="text-white/60 font-normal text-xs">Opendoor, Offerpad</span>
                  </th>
                  <th className="text-center p-4 font-semibold rounded-tr-sm">
                    Traditional<br /><span className="text-white/60 font-normal text-xs">List on MLS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Timeline to Close", "7–21 days", "14–60 days", "30–90+ days"],
                  ["Repairs Required", "None", "None", "Usually yes"],
                  ["Showings / Open Houses", "None", "None", "Yes"],
                  ["Offer Price", "Competitive", "60–80% of market", "Market value"],
                  ["Agent in Your Corner", "✓ Yes", "✗ No", "✓ Yes"],
                  ["Certainty of Sale", "High", "High", "Variable"],
                  ["Financing Contingency Risk", "None", "None", "Yes"],
                ].map(([label, col1, col2, col3], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[var(--paper-2)]" : "bg-[var(--paper)]"}
                  >
                    <td className="p-4 font-medium text-[var(--ink)] border-b border-[var(--line)]">{label}</td>
                    <td className="p-4 text-center text-[var(--red)] font-semibold border-b border-[var(--line)]">{col1}</td>
                    <td className="p-4 text-center text-[var(--ink-3)] border-b border-[var(--line)]">{col2}</td>
                    <td className="p-4 text-center text-[var(--ink-3)] border-b border-[var(--line)]">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--ink-3)] mt-3 text-center">
            Timelines and offer prices are estimates and vary by property, condition, and market conditions. All cash offers are no-obligation.
          </p>
        </div>
      </section>

      {/* WHY NOT LIST TRADITIONALLY. HONEST SECTION */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                Honest advice
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-4">
                When a Traditional Listing Is the Better Choice
              </h2>
              <p className="text-[var(--ink-2)] leading-relaxed mb-4 text-sm">
                We won&apos;t push you toward a cash sale if it&apos;s not right for your
                situation. If your home is in good condition, you&apos;re not in a
                rush, and the market is strong, a traditional listing will
                almost always net you more money.
              </p>
              <p className="text-[var(--ink-2)] leading-relaxed text-sm">
                Our job is to help you understand both options, give you the
                numbers, and let you decide. If a cash offer comes in at a
                significant discount from market value and you don&apos;t have
                a pressing reason to accept it, we&apos;ll tell you to list
                traditionally instead. That&apos;s what it means to have an agent
                who represents your interests.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[var(--paper)] border border-[var(--line)] p-5 shadow-sm">
                <p className="font-semibold text-[var(--ink)] mb-1 text-sm">Cash offer may be best when:</p>
                <ul className="space-y-1 text-sm text-[var(--ink-3)]">
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>Speed is a priority (relocation, foreclosure, divorce)</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>Property needs significant repairs you can&apos;t fund</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>You want certainty over maximum price</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>You&apos;re managing an inherited or vacant property from a distance</li>
                </ul>
              </div>
              <div className="bg-[var(--ink)] text-white p-5">
                <p className="font-semibold mb-1 text-sm">Traditional listing may be best when:</p>
                <ul className="space-y-1 text-sm text-white/70">
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>Home is in good condition with strong market appeal</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>You have 60–90 days and want to maximize proceeds</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>Market inventory is low, sellers have leverage right now</li>
                  <li className="flex gap-2"><span className="text-[var(--red)] shrink-0">·</span>The gap between cash offer and market value is significant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION CHECKLIST */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Decision guide
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              Is a Cash Offer Right for You? A Seller&apos;s Checklist
            </h2>
            <p className="text-[var(--ink-3)] text-sm mt-3 max-w-xl mx-auto">
              A cash sale isn&apos;t the right move for everyone. Walk through these
              questions to determine whether it makes sense for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {decisionChecklist.map((item, i) => (
              <div key={i} className="bg-[var(--paper)] border border-[var(--line)] p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#c70000] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[var(--red)] text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-[var(--ink-3)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[var(--ink)] text-white p-6 text-center">
            <p className="font-semibold mb-2">Still not sure?</p>
            <p className="text-white/70 text-sm leading-relaxed max-w-lg mx-auto">
              Call Brad Patrick at{" "}
              <a href="tel:2487553545" className="text-[var(--red)] font-semibold hover:underline">
                248.755.3545
              </a>{" "}
, he&apos;ll give you an honest comparison of your cash offer options vs. a traditional
              listing so you can decide with real numbers, not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            Related specialty services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/divorce-real-estate" className="group bg-[var(--paper-2)] border border-[var(--line)] p-5 hover:border-gray-300 transition-colors">
              <p className="font-semibold text-[var(--ink)] text-sm group-hover:text-[var(--red)] transition-colors">Divorce Real Estate</p>
              <p className="text-xs text-[var(--ink-3)] mt-1">Selling during a divorce? We provide neutral, court-compliant representation for both parties.</p>
            </Link>
            <Link href="/estate-sales" className="group bg-[var(--paper-2)] border border-[var(--line)] p-5 hover:border-gray-300 transition-colors">
              <p className="font-semibold text-[var(--ink)] text-sm group-hover:text-[var(--red)] transition-colors">Estate &amp; Probate Sales</p>
              <p className="text-xs text-[var(--ink-3)] mt-1">Inherited a property? We coordinate with executors and attorneys to handle the sale.</p>
            </Link>
            <Link href="/insights/cash-offer-home-michigan-is-it-right-for-you" className="group bg-[var(--paper-2)] border border-[var(--line)] p-5 hover:border-gray-300 transition-colors">
              <p className="font-semibold text-[var(--ink)] text-sm group-hover:text-[var(--red)] transition-colors">Is a Cash Offer Right for You?</p>
              <p className="text-xs text-[var(--ink-3)] mt-1">Our in-depth guide to deciding whether a cash sale or traditional listing is the better move.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Common questions
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)]">
              Cash Offer FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[var(--line)] pb-6">
                <h3 className="font-semibold text-[var(--ink)] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Where we work
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
              Cash Offers Across Southeast Michigan
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Birmingham", slug: "birmingham-mi" },
              { name: "Bloomfield Township", slug: "bloomfield-township-mi" },
              { name: "Rochester", slug: "rochester-mi" },
              { name: "Rochester Hills", slug: "rochester-hills-mi" },
              { name: "Troy", slug: "troy-mi" },
              { name: "West Bloomfield", slug: "west-bloomfield-mi" },
              { name: "Royal Oak", slug: "royal-oak-mi" },
              { name: "Sterling Heights", slug: "sterling-heights-mi" },
              { name: "Warren", slug: "warren-mi" },
              { name: "Clinton Township", slug: "clinton-township-mi" },
              { name: "Macomb Township", slug: "macomb-township-mi" },
              { name: "Shelby Township", slug: "shelby-township-mi" },
              { name: "Livonia", slug: "livonia-mi" },
              { name: "Plymouth", slug: "plymouth-mi" },
              { name: "Novi", slug: "novi-mi" },
              { name: "Detroit", slug: "detroit-mi" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/neighborhoods/${city.slug}`}
                className="text-sm text-[var(--ink-2)] hover:text-[var(--red)] transition-colors py-2 px-3 bg-[var(--paper-2)] text-center"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-wrap gap-4 justify-center">
            <Link href="/selling" className="text-sm font-semibold text-[var(--red)] hover:underline">
              Full-Service Selling →
            </Link>
            <Link href="/divorce-real-estate" className="text-sm font-semibold text-[var(--red)] hover:underline">
              Divorce Real Estate →
            </Link>
            <Link href="/estate-sales" className="text-sm font-semibold text-[var(--red)] hover:underline">
              Estate &amp; Probate Sales →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--ink)] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left, copy */}
            <div>
              <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                No obligation. No pressure.
              </p>
              <h2 className="font-display text-2xl sm:text-3xl mb-4">
                Find Out What a Cash Offer Looks Like for Your Home.
              </h2>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Fill out the form and we&apos;ll reach out within one business day.
                Or call Brad directly, a 15-minute conversation is all it takes
                to understand your options.
              </p>
              <a
                href="tel:2487553545"
                className="inline-block bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors mb-6"
              >
                Call Brad: 248.755.3545
              </a>
              <div className="space-y-2 text-sm text-white/50">
                <p>✓ No repairs required &nbsp;·&nbsp; Sell as-is</p>
                <p>✓ Close in as few as 14 days</p>
                <p>✓ Licensed agent represents your interests</p>
                <p>✓ Zero obligation to accept any offer</p>
              </div>
              <p className="text-white/30 text-xs mt-8">
                Need a traditional listing instead?{" "}
                <Link href="/selling" className="underline hover:text-white/60 transition-colors">
                  Seller marketing program →
                </Link>
                {" · "}
                <Link href="/divorce-real-estate" className="underline hover:text-white/60 transition-colors">
                  Divorce real estate →
                </Link>
                {" · "}
                <Link href="/estate-sales" className="underline hover:text-white/60 transition-colors">
                  Estate sales →
                </Link>
                {" · "}
                <Link href="/downsizing" className="underline hover:text-white/60 transition-colors">
                  Downsizing →
                </Link>
              </p>
            </div>

            {/* Right, form */}
            <div className="bg-[var(--paper)]/5 border border-white/10 p-8">
              <p className="text-white font-semibold text-lg mb-1">Request a Cash Offer</p>
              <p className="text-white/50 text-sm mb-6">We&apos;ll respond within one business day.</p>
              <CashOfferForm />
            </div>

          </div>
          <p className="text-white/20 text-xs mt-10 text-center">
            The Patrick Group · Oak &amp; Stone Real Estate · Sarah Patrick, Principal Broker · Licensed in Michigan ·
            We connect sellers with vetted investors. We do not purchase properties directly. All offers are no-obligation.
          </p>
        </div>
      </section>
    </>
  );
}
