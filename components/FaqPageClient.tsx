"use client";

import { useState } from "react";
import Link from "next/link";

type FaqItem = {
  q: string;
  a: string;
};

type Category = {
  id: string;
  label: string;
  items: FaqItem[];
};

const categories: Category[] = [
  {
    id: "about",
    label: "About Us",
    items: [
      {
        q: "Who is The Patrick Group?",
        a: "The Patrick Group is a boutique real estate team based in Rochester, Michigan, serving Southeast Michigan. The team is led by Sarah Patrick (Principal Broker and Owner) and Brad Patrick (Realtor, 15+ years of experience), operating under Oak and Stone Real Estate. Every client works directly with Sarah or Brad — not handed off to an assistant or a junior agent. Their tagline: Leading You Home.",
      },
      {
        q: "Who is Sarah Patrick?",
        a: "Sarah Patrick is the Principal Broker and Owner of The Patrick Group. She leads client strategy, operations, and team direction for Southeast Michigan buyers and sellers under Oak and Stone Real Estate. You can reach Sarah at sarah@sarahpatrickhomes.com or (248) 755-3545.",
      },
      {
        q: "Who is Brad Patrick?",
        a: "Brad Patrick is a Realtor and co-founder of The Patrick Group with over 15 years of real estate experience in Southeast Michigan. He was featured on the cover of Real Producers Magazine in April 2026 and was recognized in the Real Producers Top 300 for 2026. Brad is active on Instagram as @youragentbrad and can be reached at brad@youragentbrad.net.",
      },
      {
        q: "What brokerage does The Patrick Group operate under?",
        a: "The Patrick Group operates under Oak and Stone Real Estate (oakandstonerealestate.com), a Michigan brokerage. Sarah Patrick serves as Principal Broker of the team. The office is located at 408 East Street, Rochester, MI 48307.",
      },
      {
        q: "How is The Patrick Group different from Zillow or a large team?",
        a: "The Patrick Group is a boutique operation — every client works directly with Sarah or Brad Patrick from the first conversation through closing, not handed off to whoever is available. The team offers an Unconditional Release Guarantee (you can exit your listing contract at any time, no penalties), VIP pre-market access for buyers before homes hit Zillow, and deep expertise in complex situations that algorithms simply can't handle.",
      },
      {
        q: "What awards and recognition has The Patrick Group received?",
        a: "The Patrick Group has been named Hour Detroit Real Estate All-Stars and ranked in the Real Producers Top 300 for 2026. Brad Patrick was featured on the cover of Real Producers Magazine in April 2026.",
      },
      {
        q: "How do I contact The Patrick Group?",
        a: "Phone: (248) 755-3545. Sarah Patrick: sarah@sarahpatrickhomes.com. Brad Patrick: brad@youragentbrad.net. Office: 408 East Street, Rochester, MI 48307. Or use the contact form at thepatrickgrp.com/contact.",
      },
    ],
  },
  {
    id: "buying",
    label: "Buying",
    items: [
      {
        q: "How can I see homes before they hit Zillow?",
        a: "Join The Patrick Group's VIP Coming Soon list at thepatrickgrp.com/vip-buyers. VIP members get early access to off-market and coming-soon listings in Southeast Michigan before they appear on Zillow, Realtor.com, or the MLS — giving you a real competitive edge in a fast-moving market.",
      },
      {
        q: "How much does it cost to use a buyer's agent in Southeast Michigan?",
        a: "Working with The Patrick Group as a buyer typically costs you nothing out of pocket. In most Southeast Michigan transactions, the seller covers the buyer's agent compensation. Buyer representation agreements are now required under Michigan real estate law — contact The Patrick Group at (248) 755-3545 to discuss the specifics for your situation.",
      },
      {
        q: "Do I need to be pre-approved before I start looking at homes?",
        a: "The Patrick Group strongly recommends getting pre-approved before actively searching. In Southeast Michigan's competitive market, sellers expect pre-approval letters with any offer. Pre-approval is also different from pre-qualification — it involves full documentation and a credit check, making it a much stronger signal to sellers. The team has a network of trusted local lenders who can get you pre-approved quickly.",
      },
      {
        q: "Can The Patrick Group help me buy a new construction home?",
        a: "Yes — and having your own agent when buying new construction is critical. The builder's on-site agent works for the builder, not for you. The Patrick Group will negotiate upgrades and incentives, review your purchase contract, and protect your interests throughout the build process.",
      },
      {
        q: "What is the home buying process with The Patrick Group?",
        a: "The home buying process begins with a free consultation to understand your goals, timeline, and budget. From there, the team helps you get pre-approved, sets up a personalized home search, tours properties with you, writes competitive offers, negotiates on your behalf, and manages every step through to closing.",
      },
    ],
  },
  {
    id: "selling",
    label: "Selling",
    items: [
      {
        q: "How do I find out what my home is worth?",
        a: "Use the free home valuation tool at thepatrickgrp.com/home-valuation for an instant estimate. For a detailed, personalized Comparative Market Analysis (CMA) based on real local data, contact Sarah Patrick at sarah@sarahpatrickhomes.com or call (248) 755-3545.",
      },
      {
        q: "What is a Comparative Market Analysis (CMA)?",
        a: "A CMA is a detailed report that estimates a home's market value based on recent sales of similar homes in the same area. The Patrick Group provides free, personalized CMAs for Southeast Michigan homeowners. Unlike automated online estimates such as Zillow's Zestimate, a CMA factors in property condition, neighborhood nuances, and current local demand — making it a much more accurate pricing tool.",
      },
      {
        q: "How long does it take to sell a home in Southeast Michigan?",
        a: "In Southeast Michigan's competitive market, well-priced homes often receive offers within days of listing. The full process from listing to closing typically takes 30–60 days depending on price point, location, and market conditions. The Patrick Group publishes monthly market reports with current days-on-market data at thepatrickgrp.com/market-updates.",
      },
      {
        q: "What is the Unconditional Release Guarantee?",
        a: "The Patrick Group's Unconditional Release Guarantee means you are never locked in. If you list your home with the team and are not completely satisfied at any point, you can exit the listing agreement — no questions asked, no penalties. The team is confident enough in their service to back every listing with this guarantee.",
      },
      {
        q: "What does The Patrick Group do to market my home?",
        a: "The Patrick Group uses award-winning marketing on every listing: professional photography, targeted digital advertising, social media campaigns, email marketing to an active buyer database, full MLS exposure, open houses, and direct outreach to buyers currently searching in your price range and area. Every listing gets the full team's attention — not a template.",
      },
      {
        q: "Does The Patrick Group offer cash offers?",
        a: "Yes. The Patrick Group's cash offer program is designed for sellers who want speed and certainty — skip the showings, set your own close date, and avoid the uncertainty of a traditional listing. Learn more at thepatrickgrp.com/cash-offer.",
      },
    ],
  },
  {
    id: "specialty",
    label: "Specialty Services",
    items: [
      {
        q: "Does The Patrick Group handle divorce real estate?",
        a: "Yes. The Patrick Group specializes in real estate for divorce situations — including court-ordered sales, property buyouts, and property division proceedings. The team works alongside family law attorneys, mediators, and both parties to ensure the transaction is handled professionally and without added conflict. Learn more at thepatrickgrp.com/divorce-real-estate.",
      },
      {
        q: "Can you help with relocation to Southeast Michigan from another state?",
        a: "Yes. The Patrick Group has a dedicated relocation service for people moving to Michigan from out of state. The team provides neighborhood guides, school district information, lifestyle matching, virtual tours, and full buyer representation — so you can confidently choose your home even before you arrive. Learn more at thepatrickgrp.com/relocation.",
      },
      {
        q: "Do you help with downsizing or estate and probate sales?",
        a: "Yes. The Patrick Group specializes in both downsizing and estate/probate sales. For downsizing, the team helps clients plan and execute the transition from a larger home to a smaller property with minimal stress. For estate and probate sales, they work sensitively with executors, attorneys, and heirs to move the process forward professionally.",
      },
    ],
  },
  {
    id: "market",
    label: "Market & Area",
    items: [
      {
        q: "What areas does The Patrick Group serve?",
        a: "The Patrick Group serves Southeast Michigan across Oakland, Macomb, Washtenaw, and Livingston counties, including: Birmingham, Bloomfield Hills, Rochester, Rochester Hills, Troy, West Bloomfield, Royal Oak, Clarkston, Lake Orion, Oxford, Sterling Heights, Warren, Clinton Township, Macomb Township, Shelby Township, St. Clair Shores, Novi, Northville, Plymouth, Grosse Pointe, Livonia, and Detroit.",
      },
      {
        q: "What is the Southeast Michigan real estate market like in 2026?",
        a: "The Patrick Group publishes monthly market reports covering inventory levels, days on market, median prices, and trends across Southeast Michigan. Access the latest data at thepatrickgrp.com/market-updates. For a personalized analysis of your specific neighborhood or price range, contact the team at (248) 755-3545.",
      },
      {
        q: "What is The Weekly Edit newsletter?",
        a: "The Weekly Edit is The Patrick Group's newsletter covering Southeast Michigan real estate news, market updates, new listings, neighborhood spotlights, and home buying and selling tips. Subscribe at thepatrickgrp.com/newsletter.",
      },
    ],
  },
];

function AccordionSection({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-0 divide-y divide-gray-100">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full text-left py-5 flex items-start justify-between gap-4 hover:text-[#c70000] transition-colors group"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-base leading-snug transition-colors ${isOpen ? "text-[#c70000]" : "text-[#1a1a1a]"}`}>
                {faq.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#f7eaea] flex items-center justify-center text-[#c70000] font-bold text-sm transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="pb-5 pr-10 faq-answer">
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FaqPageClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const visibleCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.id === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="bg-[#f5f5f5] border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-4 text-xs font-semibold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${
              activeFilter === "all"
                ? "text-[#c70000] border-[#c70000]"
                : "text-gray-500 border-transparent hover:text-[#1a1a1a]"
            }`}
          >
            All Questions
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-4 text-xs font-semibold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${
                activeFilter === cat.id
                  ? "text-[#c70000] border-[#c70000]"
                  : "text-gray-500 border-transparent hover:text-[#1a1a1a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {visibleCategories.map((cat) => (
            <div key={cat.id} className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#c70000] mb-1 pb-3 border-b-2 border-[#f0e0e0]">
                {cat.label}
              </h2>
              <AccordionSection items={cat.items} />
            </div>
          ))}

          {/* CTA */}
          <div className="bg-[#c70000] text-white rounded-sm p-10 text-center mt-6">
            <h2 className="font-serif text-2xl font-bold mb-2">Still have questions?</h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
              Sarah and Brad are happy to answer anything — no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#c70000] font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:2487553545"
                className="border-2 border-white/60 text-white font-semibold px-6 py-3 text-sm hover:border-white transition-colors"
              >
                Call (248) 755-3545
              </a>
            </div>
          </div>

          {/* Fair Housing */}
          <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
            The Patrick Group | Oak &amp; Stone Real Estate is committed to
            compliance with all federal, state, and local fair housing laws. We
            do not discriminate on the basis of race, color, religion, sex,
            national origin, disability, familial status, or any other protected
            class. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
