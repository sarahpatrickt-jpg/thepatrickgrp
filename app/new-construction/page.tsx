import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Construction Homes Southeast Michigan | The Patrick Group",
  description:
    "Buying new construction in Southeast Michigan? You need your own agent — the builder's rep works for the builder. The Patrick Group guides buyers through every step at no extra cost.",
  keywords:
    "new construction homes Southeast Michigan, new builds Oakland County, new construction buyer agent Michigan, new homes Macomb Township, new construction Plymouth Northville Novi Canton",
  alternates: { canonical: "https://thepatrickgrp.com/new-construction" },
};

const markets = [
  {
    area: "Macomb Township",
    county: "Macomb County",
    note: "One of Michigan's fastest-growing communities. Active builder market with a wide range of price points and floor plans.",
    priceRange: "$350K – $700K+",
  },
  {
    area: "Shelby Township",
    county: "Macomb County",
    note: "Established and newer communities side by side. Strong demand near the Oakland/Macomb county line.",
    priceRange: "$350K – $800K+",
  },
  {
    area: "Plymouth Township",
    county: "Wayne County",
    note: "Planned communities and subdivisions with proximity to historic Plymouth village. Plymouth-Canton school district.",
    priceRange: "$400K – $900K+",
  },
  {
    area: "Northville Township",
    county: "Wayne County",
    note: "Consistently sought-after new construction close to Northville's historic downtown. Northville Public Schools.",
    priceRange: "$450K – $1M+",
  },
  {
    area: "Novi",
    county: "Oakland County",
    note: "Sustained new construction activity across multiple communities. Novi Community School District.",
    priceRange: "$350K – $1M+",
  },
  {
    area: "Washington Township",
    county: "Macomb County",
    note: "Larger lots, acreage options, and newer communities further north. Room to build custom.",
    priceRange: "$400K – $800K+",
  },
];

const process = [
  {
    title: "Get Representation Before You Visit a Model Home",
    desc: "The moment you walk into a builder's sales office unrepresented, you may lose your ability to have your own agent. Register with your agent's name on your first visit — this protects your right to independent representation at no cost to you.",
  },
  {
    title: "Understand What's Actually Included",
    desc: "Builder base prices rarely reflect what you see in the model. Lot premiums, structural options, and design center upgrades can add 20–40% to the starting price. We help you decode what's standard, what's worth upgrading, and what you can add yourself after closing for less.",
  },
  {
    title: "Review the Purchase Agreement Carefully",
    desc: "Builder contracts are written by the builder's attorneys to protect the builder. They dictate timelines, your rights if delays occur, what happens to your deposit, and what you can and can't negotiate. We review these contracts with you before you sign.",
  },
  {
    title: "Understand Builder Financing Incentives",
    desc: "Many builders offer rate buydowns or closing cost credits tied to using their preferred lender. These incentives can be valuable — but they may also come with trade-offs. We encourage buyers to get quotes from multiple lenders and compare the full picture before committing.",
  },
  {
    title: "Schedule Independent Inspections",
    desc: "New construction is not immune to defects. We strongly recommend independent inspections at framing, rough-in, and final walkthrough — before the walls are closed and before your closing date. Catching issues during construction is far easier than after move-in.",
  },
  {
    title: "The Pre-Closing Walkthrough and Punch List",
    desc: "Before closing, you'll do a walkthrough with the builder to create a punch list of incomplete or deficient items. We attend this walkthrough with you to ensure nothing is missed and to document what the builder has committed to completing.",
  },
];

const faqs = [
  {
    q: "Do I need my own agent when buying new construction?",
    a: "Yes — and it costs you nothing extra. The builder pays the buyer's agent commission as part of the transaction. The builder's on-site agent represents the builder's interests, not yours. Having your own agent means someone is looking out for you during contract review, the options and upgrades process, inspections, and at closing.",
  },
  {
    q: "Can I negotiate with a builder?",
    a: "It depends on the builder and the market. Builders rarely move on base price, but there is often room to negotiate on lot premiums, included upgrades, closing cost contributions, or design center allowances — especially if the builder has unsold inventory or is nearing the end of a community. An experienced agent knows where builders have historically had flexibility.",
  },
  {
    q: "How long does new construction take?",
    a: "Production homes typically take 6–12 months from contract to close, though timelines vary by builder and market conditions. Custom or semi-custom builds take longer. Builder contracts typically give the builder significant flexibility on delivery dates — it's important to understand your options if a timeline extends significantly.",
  },
  {
    q: "Is a home inspection necessary on a brand new home?",
    a: "Absolutely. New construction homes can and do have defects — improper grading, HVAC issues, insulation gaps, plumbing problems, and more. An independent inspector has no relationship with the builder and will give you an objective assessment. We recommend inspections at framing, rough-in systems (before drywall), and final walkthrough at minimum.",
  },
  {
    q: "What is a new construction warranty?",
    a: "Michigan requires builders to provide statutory warranty coverage on new homes — typically 1 year on workmanship, 2 years on mechanical systems, and 10 years on structural defects. Builder warranty terms and processes vary, and it's important to understand what's covered, how to file claims, and what the builder's history is with warranty service.",
  },
  {
    q: "Can I use my own lender for new construction?",
    a: "In most cases, yes. Some builders offer incentives (rate buydowns, closing cost credits) tied to their preferred lender. These can be worthwhile, but we encourage buyers to obtain quotes from independent lenders as well so you can make an informed comparison on the total cost of financing.",
  },
];

export default function NewConstructionPage() {
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
            New Construction in Southeast Michigan.{" "}
            <span className="text-[#c70000]">You Need Your Own Agent.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-5">
            The builder&apos;s on-site agent works for the builder — not for you. Buyer representation on new construction is free to you and makes a meaningful difference at every step of the process.
          </p>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">
            From contract review and upgrade negotiation to independent inspections and punch list walkthroughs — we guide new construction buyers through a process that&apos;s more complex than most people expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Talk to Us: 248.755.3545
            </a>
            <a
              href="https://www.oakandstonerealestate.com/new-construction/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Search New Construction →
            </a>
          </div>
        </div>
      </section>

      {/* WHY YOU NEED YOUR OWN AGENT */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                heading: "It Costs You Nothing",
                body: "In new construction, the builder pays the buyer's agent commission. You get independent representation at no additional cost. There is no financial reason not to have your own agent.",
              },
              {
                heading: "The Builder's Agent Works for the Builder",
                body: "On-site sales agents are employed by the builder. Their job is to sell you on the community, the upgrades, and the contract — on the builder's terms. They cannot advise you on contract risk, inspection strategy, or negotiating against the builder.",
              },
              {
                heading: "The Contract Is Written Against You",
                body: "Builder contracts are long, detailed documents drafted by the builder's legal team. They dictate your rights, your deposits, and your remedies. An experienced buyer's agent has reviewed hundreds of these and knows what to look for.",
              },
            ].map((item) => (
              <div key={item.heading} className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">Why it matters</p>
                <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-3">{item.heading}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE MARKETS */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Where to Look
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Active New Construction Markets
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              Southeast Michigan has significant builder activity across Oakland, Macomb, and Wayne counties. These are the areas with the most consistent new construction inventory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.area} className="bg-white border border-gray-100 rounded-sm p-6">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">{m.county}</p>
                <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">{m.area}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{m.note}</p>
                <p className="text-sm font-semibold text-[#1a1a1a]">Typical range: {m.priceRange}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Price ranges are approximate and vary by builder, community, and options selected. Contact us for current builder inventory and pricing.
          </p>
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
              The New Construction Process
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              New construction has more steps — and more decisions — than a standard resale purchase. Here&apos;s what to expect.
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#c70000] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">{step.title}</h3>
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
              New Construction FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#c70000] text-white text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Looking at New Construction? Let&apos;s Talk First.
        </h2>
        <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
          Before you visit a model home, a 15-minute call can save you thousands and a lot of headaches. We&apos;ll tell you what to look for and how to get the most out of the builder process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-white text-[#c70000] font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
          >
            Call 248.755.3545
          </a>
          <a
            href="https://www.oakandstonerealestate.com/new-construction/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Search New Construction →
          </a>
        </div>
        <p className="text-white/60 text-xs mt-4">
          Sarah Patrick, Principal Broker · Oak &amp; Stone Real Estate
        </p>
      </section>

      {/* FAIR HOUSING */}
      <section className="py-6 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            Price ranges are approximate and reflect general market conditions — they are not guarantees of value or availability. Builder terms, warranty coverage, and financing incentives vary by builder and community and should be independently verified. Oak &amp; Stone Real Estate is committed to compliance with the Fair Housing Act and all applicable fair housing laws. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
