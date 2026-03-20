import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate FAQ | The Patrick Group",
  description:
    "Answers to the most common questions about buying and selling a home in Southeast Michigan. From the offer process to closing costs — we cover it all.",
  alternates: { canonical: "https://thepatrickgrp.com/faq" },
};

const buyerFaqs = [
  {
    q: "Do I need a buyer's agent to purchase a home?",
    a: "You are not required to use a buyer's agent, but it is strongly in your interest to do so. A buyer's agent represents you — not the seller — and is legally obligated to act in your best interest. They help you evaluate properties, write competitive offers, negotiate terms, navigate inspections, and manage the transaction through closing. In Michigan, buyer's agent compensation is negotiated as part of the transaction and is disclosed upfront.",
  },
  {
    q: "What is the home-buying process in Michigan?",
    a: "The process generally follows these steps: (1) Get pre-approved for a mortgage so you know your budget; (2) Work with your buyer's agent to identify and tour homes; (3) Submit a written purchase offer when you find the right home; (4) Negotiate any counteroffers with the seller; (5) Complete a home inspection during the inspection period; (6) Finalize your mortgage with your lender; (7) Conduct a final walkthrough of the property; (8) Sign closing documents and take possession. The full process typically takes 30–60 days from accepted offer to closing, depending on financing and other factors.",
  },
  {
    q: "What is a mortgage pre-approval and why do I need one?",
    a: "A mortgage pre-approval is a written commitment from a lender stating how much they are willing to lend you, based on a review of your income, assets, credit, and debt. Sellers in competitive markets will typically not consider an offer without one. Pre-approval is different from pre-qualification — pre-approval involves full documentation and a credit check, making it a much stronger signal to sellers. We can connect you with trusted local lenders; contact us for our list of recommended service providers.",
  },
  {
    q: "How long does it take to find and close on a home?",
    a: "The search phase varies widely — some buyers find the right home in a weekend, others take several months. The closing period after an accepted offer is typically 30–45 days for financed purchases, or as few as 10–14 days for cash buyers. Your timeline also depends on current market inventory and how quickly you are ready to move when the right home appears.",
  },
  {
    q: "What are closing costs for buyers in Michigan?",
    a: "Buyers in Michigan typically pay closing costs of roughly 2–4% of the purchase price, in addition to their down payment. These costs include lender fees (origination, appraisal, credit report), title insurance, escrow fees, prepaid property taxes, and homeowner's insurance. Your lender is required by law to provide a Loan Estimate within three business days of your application so you can see all anticipated costs before committing.",
  },
  {
    q: "What is the VIP Coming Soon List?",
    a: "Our VIP Coming Soon List gives registered buyers early access to properties before they are listed publicly on the MLS. Sellers sometimes allow pre-market showings to qualified buyers, which can mean less competition and more time to make a thoughtful decision. You can join the list at no cost or obligation — we simply need to know your criteria.",
  },
  {
    q: "What is earnest money and how much do I need?",
    a: "Earnest money is a good-faith deposit submitted with your purchase offer to demonstrate to the seller that you are a serious buyer. In Southeast Michigan, earnest money is typically 1–3% of the purchase price, though it varies. If the transaction closes, your earnest money is credited toward your down payment or closing costs. If the transaction falls through due to a contingency in the contract (such as a failed inspection or financing issue), your earnest money is generally refundable under those terms.",
  },
];

const sellerFaqs = [
  {
    q: "How do you determine what my home is worth?",
    a: "We prepare a Comparative Market Analysis (CMA) — an in-depth review of recently sold homes in your area that are similar to yours in size, condition, and features. We look at active listings (your competition), pending sales (where the market is heading), and closed sales (what buyers have actually paid). We combine this data with our knowledge of current buyer demand, days-on-market trends, and your home's specific condition and updates. The result is a realistic price range designed to maximize your net proceeds.",
  },
  {
    q: "What is your marketing program for listings?",
    a: "Every listing receives professional photography, a custom property website, video posted to YouTube, and direct outreach to approximately 300 area agents before the home hits the MLS. Once live, your listing appears on all major real estate search platforms. We also leverage our active buyer network — buyers we are currently working with who may be a match before the home is even public.",
  },
  {
    q: "How long will it take to sell my home?",
    a: "Days on market depends on pricing, condition, current inventory, and buyer demand. A well-prepared home priced correctly for the current market typically sells within the first two to three weeks. During our listing consultation, we will share current days-on-market data for homes comparable to yours so you have a realistic expectation going in.",
  },
  {
    q: "What is your Unconditional Release Guarantee?",
    a: "If at any point during our listing agreement you are unhappy with our service, you may notify us in writing and we will release you from the contract. No fees, no penalties. We believe that a listing relationship should be earned continuously — not locked in by contract.",
  },
  {
    q: "What are typical seller closing costs in Michigan?",
    a: "Sellers in Michigan typically pay 7–9% of the sale price at closing, which includes real estate commissions, the state transfer tax ($7.50 per $1,000 of sale price), county transfer tax (varies by county), and any negotiated buyer concessions. Title insurance is customarily paid by the seller in Michigan. We walk through a full net proceeds estimate during your listing consultation so there are no surprises at the closing table.",
  },
  {
    q: "Should I make repairs before listing?",
    a: "It depends on the repair and your timeline. As a general rule, fix anything that a buyer's inspector is likely to flag — deferred maintenance items that create perceived risk. Cosmetic updates (paint, landscaping, decluttering) almost always pay for themselves in offer price and days on market. Major renovations rarely return dollar-for-dollar in a sale context. During our walkthrough, we give you a prioritized list of what will move the needle and what you can skip.",
  },
  {
    q: "Can you help if I'm selling and buying at the same time?",
    a: "Yes — coordinating a simultaneous sale and purchase is one of our specialties. We have managed hundreds of these transactions and know how to sequence the timing, write contingencies that protect you, and navigate the stress of overlapping deadlines. Our buyer and seller expertise in-house means you have one team managing both sides of your move.",
  },
];

const generalFaqs = [
  {
    q: "What areas of Michigan do you serve?",
    a: "We serve Southeast Michigan, with primary concentration in Oakland County — including Birmingham, Bloomfield Hills, Bloomfield Township, Rochester, Rochester Hills, Troy, West Bloomfield, Royal Oak, Clarkston, Lake Orion, Oxford, and surrounding communities. We also assist clients throughout Macomb and Wayne counties. If you are unsure whether we cover your area, call us — we are happy to help or refer you to a trusted agent if your location is outside our market.",
  },
  {
    q: "How is The Patrick Group different from a large brokerage team?",
    a: "You always work directly with a senior, experienced agent — Sarah or Brad Patrick. We do not hand clients off to assistants or junior agents. At the same time, you benefit from the systems, marketing infrastructure, and combined expertise that a solo agent cannot offer. It is boutique service with team-level capability.",
  },
  {
    q: "Are you affiliated with Oak & Stone Real Estate?",
    a: "Yes. The Patrick Group operates under Oak & Stone Real Estate, our brokerage. Sarah Patrick serves as Principal Broker. All agents are licensed with the State of Michigan.",
  },
  {
    q: "How do I get started?",
    a: "The easiest way is to call or text us at 248.755.3545, or email sarah@sarahpatrickhomes.com. If you are a seller, we will schedule a free listing consultation at your home. If you are a buyer, we will have a brief conversation about your goals and get you set up with a search. There is no commitment and no pressure.",
  },
];

// All FAQs flattened for schema
const allFaqs = [...buyerFaqs, ...sellerFaqs, ...generalFaqs];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="mb-14">
      <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6 pb-3 border-b border-gray-100">
        {title}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6">
            <h3 className="font-semibold text-[#1a1a1a] text-base mb-3 leading-snug">
              {faq.q}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Common Questions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Estate FAQ
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Straight answers to the questions buyers and sellers ask us most.
            No jargon, no runaround.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FaqSection title="Buyer Questions" faqs={buyerFaqs} />
          <FaqSection title="Seller Questions" faqs={sellerFaqs} />
          <FaqSection title="Working With Us" faqs={generalFaqs} />

          {/* CTA */}
          <div className="bg-[#1a1a1a] text-white p-8 rounded-sm text-center">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              Still have questions?
            </p>
            <h2 className="font-serif text-2xl font-bold mb-3">
              Ask Us Directly
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
              Every situation is different. Call, text, or email — we will give
              you a straight answer with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:2487553545"
                className="bg-[#c70000] text-white font-semibold px-6 py-3 text-sm hover:bg-[#a30000] transition-colors"
              >
                Call 248.755.3545
              </a>
              <Link
                href="/contact"
                className="border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-white/60 transition-colors"
              >
                Send a Message →
              </Link>
            </div>
          </div>

          {/* Fair Housing Notice */}
          <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
            The Patrick Group | Oak &amp; Stone Real Estate is committed to
            compliance with all federal, state, and local fair housing laws. We
            do not discriminate on the basis of race, color, religion, sex,
            national origin, disability, familial status, or any other
            protected class. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
