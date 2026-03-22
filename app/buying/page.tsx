import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy a Home in Southeast Michigan | The Patrick Group",
  description:
    "Find your next home in Southeast Michigan with The Patrick Group. Expert buyer representation, mortgage coordination, and local knowledge you won't find on Zillow.",
  alternates: { canonical: "https://thepatrickgrp.com/buying" },
};

const buyingFaqs = [
  {
    q: "Do I need a buyer's agent when purchasing a home in Michigan?",
    a: "You are not legally required to have a buyer's agent in Michigan, but it is strongly recommended. The seller's agent represents the seller's interests — not yours. A buyer's agent negotiates on your behalf, reviews contracts for red flags, coordinates inspections, and guides you through every step at no direct cost to you in most transactions.",
  },
  {
    q: "How much does a buyer's agent cost in Southeast Michigan?",
    a: "In most transactions, buyer's agent compensation is negotiated as part of the purchase offer and is often covered through seller-paid concessions, meaning buyers typically pay nothing out of pocket for professional representation. The Patrick Group's buyer representation fees are transparent and negotiable — we explain the structure clearly before you sign anything.",
  },
  {
    q: "What is the VIP Coming Soon Buyer List?",
    a: "The Patrick Group maintains a network of approximately 300 Southeast Michigan agents. When a home enters 'Coming Soon' status, our VIP buyers receive advance notice before the property appears on Zillow or Realtor.com. In competitive markets, this head start can be the difference between getting the home or missing it.",
  },
  {
    q: "How long does it take to buy a home in Southeast Michigan?",
    a: "From accepted offer to closing, most Michigan residential transactions close in 30–45 days. The search process varies — some buyers find the right home in one weekend, others take several months. As of March 2026, average days on market range from 15–18 days across Southeast Michigan counties, meaning well-priced homes move quickly.",
  },
  {
    q: "Why does Brad's mortgage background matter when buying a home?",
    a: "Brad Patrick began his career in mortgage lending before transitioning to real estate. This means he understands how loans are underwritten, how financing contingencies should be structured, and how to spot terms in a purchase agreement that could create problems at closing. Most buyer's agents don't have this background — it gives The Patrick Group clients a meaningful edge in offer strategy and negotiation.",
  },
  {
    q: "Which Southeast Michigan cities and counties does The Patrick Group serve?",
    a: "The Patrick Group serves buyers throughout Oakland County (Rochester, Birmingham, Bloomfield Hills, Troy, Novi, Royal Oak), Macomb County (Shelby Township, Clinton Township, Macomb Township), Wayne County (Grosse Pointe, Plymouth, Livonia, Northville), Washtenaw County, and Livingston County.",
  },
];

const buyingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const buyerBenefits = [
  {
    title: "Brad's mortgage background",
    desc: "Brad started his career in mortgage lending. He understands financing at a level most agents never reach — which means better-structured offers, fewer surprises at closing, and an edge in competitive situations.",
  },
  {
    title: "Access before it hits Zillow",
    desc: "Our 300-agent network means we often know about listings before they're publicly active. In a competitive market, that's your edge.",
  },
  {
    title: "We fight for you in negotiations",
    desc: "Brad doesn't just write an offer — he develops a strategy. Multiple offers? He's been there. He knows how to win without overpaying.",
  },
  {
    title: "Principal Broker oversight on every transaction",
    desc: "Every deal at The Patrick Group has Sarah Patrick behind it — a licensed Principal Broker who has navigated every market cycle Metro Detroit has seen. That level of brokerage experience, market depth, and accountability isn't something most teams can offer. It's your protection from contract to close.",
  },
  {
    title: "One relationship, all the way to close",
    desc: "We work with a carefully vetted network of local lenders and title professionals who share our standards. Contact us for our list of trusted service providers.",
  },
  {
    title: "Transparent, negotiable representation fees",
    desc: "Our buyer representation fees are transparent and negotiable. We prioritize structuring your offer so that our professional services are funded through seller-paid concessions whenever possible, ensuring you get expert advocacy throughout the transaction.",
  },
  {
    title: "Patience and education",
    desc: "As one client said: \"Great experience with comprehensive information and service — and thanks for your patience when gaining information on the market.\"",
  },
];

const buyerProcess = [
  {
    n: "01",
    title: "Initial Consultation",
    desc: "We learn your goals, timeline, and priorities. You learn how we work. No commitment required — just conversation.",
  },
  {
    n: "02",
    title: "Pre-Approval Coordination",
    desc: "We connect you with a trusted local mortgage lender from our vetted network. A solid pre-approval letter makes your offers stand out.",
  },
  {
    n: "03",
    title: "Home Search Strategy",
    desc: "We set up custom searches and alert you the moment something matches — not after it's had 40 showings.",
  },
  {
    n: "04",
    title: "Showings & Analysis",
    desc: "We tour homes with you and give you honest assessments. We'd rather lose a deal than steer you into the wrong home.",
  },
  {
    n: "05",
    title: "Offer & Negotiation",
    desc: "We analyze the market, develop the offer strategy, and negotiate on your behalf — with the fire of someone who treats this like it's our own money.",
  },
  {
    n: "06",
    title: "Inspection & Due Diligence",
    desc: "We help you navigate inspections, evaluate findings, and negotiate repairs — where many deals are won or lost.",
  },
  {
    n: "07",
    title: "Closing",
    desc: "Coordinated with your lender and title company. We walk you through every document and make sure you leave as confident homeowners.",
  },
];

export default function BuyingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            For Buyers
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Find Your Home in Southeast Michigan.{" "}
            <span className="text-[#c70000]">With Someone in Your Corner.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Buying a home is the largest purchase most people make. You deserve an
            agent who fights for you, explains everything, and is still answering
            your texts after closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://bradpatrick.oakandstonerealestate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Search Available Homes →
            </a>
            <Link
              href="/vip-buyers"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              🔑 Join the VIP Coming Soon List
            </Link>
          </div>
        </div>
      </section>

      {/* VIP PROMO BAND */}
      <section className="py-10 px-4 sm:px-6 bg-[#c70000] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-1">
              VIP Buyer Access
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mb-1">
              See Homes Before They Hit Zillow.
            </h2>
            <p className="text-white/80 text-sm max-w-xl">
              Join our Coming Soon VIP list — get MLS-powered alerts for matching
              homes the moment they enter Coming Soon status. Days before the public sees them.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/vip-buyers"
              className="bg-white text-[#c70000] font-bold px-6 py-3 rounded-sm hover:bg-white/90 transition-colors text-center text-sm whitespace-nowrap"
            >
              Join the VIP List →
            </Link>
            <a
              href="https://bradpatrick.oakandstonerealestate.com/coming-soon-properties/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors text-center text-sm whitespace-nowrap"
            >
              Browse Coming Soon Now
            </a>
          </div>
        </div>
      </section>

      {/* BUYER BENEFITS */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Why buyers choose us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              What Sets Us Apart for Buyers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyerBenefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#c70000] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              The buying process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              From First Conversation to Keys in Hand
            </h2>
          </div>

          <div className="space-y-0">
            {buyerProcess.map((step, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#c70000] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {step.n}
                  </div>
                  {i < buyerProcess.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            What Buyers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                q: "Brad was not just our realtor, but our partner throughout the entire process. He went to bat for us and it paid off — we secured our dream home.",
                name: "Verified Client",
                type: "Buyer & Seller",
              },
              {
                q: "Sarah and Brad helped us find our HOME. They are amazing to work with — fun, knowledgeable and easy. I will work with them again.",
                name: "Tracey Williams",
                type: "Buyer",
              },
              {
                q: "A wonderful first home buying experience thanks to her hard work and impeccable work ethic. A true professional.",
                name: "Verified Client",
                type: "First-Time Buyer",
              },
              {
                q: "Great experience working with them. Had comprehensive information and service. Thanks for your patience when gaining information on the market.",
                name: "Eric Liu",
                type: "First-Time Buyer",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#faf9f7] p-6 border border-gray-100 rounded-sm shadow-sm">
                <p className="text-base font-medium text-[#1a1a1a] mb-3">
                  &ldquo;{t.q}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#1a1a1a]">{t.name}</p>
                <p className="text-xs text-[#c70000] uppercase tracking-wider">{t.type}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/reviews" className="text-sm text-[#c70000] font-semibold hover:underline">
              See all client reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyingFaqSchema) }}
      />
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {buyingFaqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-[#1a1a1a] list-none flex justify-between items-center hover:text-[#c70000] transition-colors">
                  {faq.q}
                  <span className="text-[#c70000] ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH CTA */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Search now */}
            <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-8 flex flex-col justify-between">
              <div>
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
                  Start searching
                </p>
                <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-3">
                  Browse All Available Homes
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Search the full Southeast Michigan MLS on Brad&apos;s portal —
                  save searches, set up alerts, and see every active listing in
                  real time.
                </p>
              </div>
              <a
                href="https://bradpatrick.oakandstonerealestate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#c70000] text-white font-bold px-6 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
              >
                Search All Homes →
              </a>
            </div>

            {/* VIP list */}
            <div className="bg-[#1a1a1a] text-white rounded-sm shadow-sm p-8 flex flex-col justify-between">
              <div>
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
                  Get first access
                </p>
                <h2 className="font-serif text-2xl font-bold mb-3">
                  Coming Soon VIP List
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  See homes before they&apos;re publicly listed. Join the VIP list
                  and get MLS-powered Coming Soon alerts sent straight to you —
                  days before Zillow has them.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/vip-buyers"
                  className="block text-center bg-[#c70000] text-white font-bold px-6 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
                >
                  Join the VIP List →
                </Link>
                <a
                  href="https://bradpatrick.oakandstonerealestate.com/coming-soon-properties/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-white/20 text-white/70 font-medium px-6 py-3 rounded-sm hover:bg-white/10 transition-colors text-sm"
                >
                  Browse Coming Soon Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Let&apos;s Find Your Home.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          Call or text us to set up your free buyer consultation — no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Call Brad: 248.755.3545
          </a>
          <a
            href="https://bradpatrick.oakandstonerealestate.com/coming-soon-properties/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Browse Coming Soon Listings →
          </a>
        </div>
        <p className="text-white/40 text-xs mt-4">
          Relocating from out of state?{" "}
          <Link href="/relocation" className="underline hover:text-white/70">
            See our relocation services →
          </Link>
          {" · "}
          <Link href="/new-construction" className="underline hover:text-white/70">
            Interested in new construction? →
          </Link>
        </p>
      </section>
    </>
  );
}
