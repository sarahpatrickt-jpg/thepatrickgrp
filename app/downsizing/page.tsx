import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Downsizing Your Home in Southeast Michigan | The Patrick Group",
  description:
    "Ready to downsize in Southeast Michigan? The Patrick Group helps you navigate the emotional and logistical challenges of moving to a smaller home — protecting your equity and working on your timeline.",
  keywords:
    "downsizing real estate Southeast Michigan, sell large home Michigan, downsize home Rochester Hills, right-size home Michigan, downsizing realtor Michigan",
  alternates: { canonical: "https://thepatrickgrp.com/downsizing" },
};

const whatWeHandle = [
  {
    title: "Right-Sizing Strategy",
    desc: "We start by understanding where you want to land, not just what you want to leave. We help you identify the right size, type, and location for this next chapter.",
  },
  {
    title: "Equity Maximization on Your Current Home",
    desc: "Your existing home is likely your largest asset. Our full marketing toolkit — professional photography, 300-agent preview, 15-platform syndication — ensures you extract every dollar of equity you've built.",
  },
  {
    title: "Coordinated Buy-Sell Timing",
    desc: "Moving to a smaller home while selling a larger one requires precise timing. We've orchestrated hundreds of simultaneous transactions and know how to sequence it so you're never stuck owning two homes or none.",
  },
  {
    title: "Understanding What You Actually Need",
    desc: "Downsizing isn't always about square footage. We help you think through what you use, what matters, and what you can let go of — before you start looking at listings.",
  },
  {
    title: "Navigating the Emotional Side",
    desc: "Leaving a family home is hard. We don't pretend otherwise. We work at your pace, respect your process, and make sure you feel confident at every step — not rushed.",
  },
  {
    title: "Condo, Ranch, and 55+ Community Expertise",
    desc: "These property types have their own contracts, HOA disclosures, and due diligence requirements. We know how to evaluate them and protect you through the process.",
  },
];

const downsizingProcess = [
  {
    title: "Start with a Conversation",
    desc: "Tell us where you are and where you want to go. We'll talk through your timeline, your priorities, and what 'right' looks like for your next home. No commitment required.",
  },
  {
    title: "Honest Assessment of Your Current Home's Value",
    desc: "Before you make any decisions, you need to know exactly what you're working with. We provide a documented comparative market analysis — not a Zestimate.",
  },
  {
    title: "Build Your Target Profile",
    desc: "We help you define what you actually need in a smaller home: location, type (condo vs. ranch vs. townhome), must-haves, and deal-breakers.",
  },
  {
    title: "Synchronized Search and Sale",
    desc: "We coordinate the listing of your current home with the search for your next one, managing both sides so the timing works in your favor.",
  },
  {
    title: "Close with Confidence",
    desc: "We work with trusted local lenders and title professionals to manage every detail at closing. You move once, cleanly, without gap stress.",
  },
];

const faqs = [
  {
    q: "Should I sell my current home before buying a smaller one?",
    a: "It depends on your financial position, the current market, and your risk tolerance. In a competitive market, buyers with contingencies can struggle — but buying before selling carries its own risks. We'll walk through your specific situation and help you decide which sequence makes the most sense.",
  },
  {
    q: "How do I know if downsizing actually makes financial sense?",
    a: "For most Southeast Michigan homeowners who have held their property for 5+ years, the equity available makes downsizing not just emotionally freeing but financially significant. We'll model out what you'd net from your sale and what you'd spend on a smaller home — so you see the real numbers before you commit.",
  },
  {
    q: "We've lived here 25 years. I don't know where to start.",
    a: "We hear this often. The best starting point is a conversation, not a commitment. We'll walk through your current home, talk through what you want in the next one, and build a plan at a pace that works for you. There's no pressure and no timeline except yours.",
  },
  {
    q: "What's the difference between a condo and a ranch — which is better for downsizing?",
    a: "It depends on what you value. Condos eliminate exterior maintenance and often offer community amenities, but come with HOA fees and rules. Ranches give you more autonomy, a yard, and privacy, but you're responsible for upkeep. We'll help you understand what each option looks like in Southeast Michigan's market and which type fits your lifestyle best.",
  },
  {
    q: "Can you help with 55+ communities or active adult developments?",
    a: "Yes. Southeast Michigan has several well-regarded active adult communities. They have specific qualification rules, HOA structures, and resale considerations that differ from standard condos and homes. We know these communities and can help you evaluate whether they're the right fit.",
  },
];

export default function DownsizingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Specialty Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Downsizing in{" "}
            <span className="text-[#c70000]">Southeast Michigan.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Moving to a smaller home is a life transition, not just a
            transaction. The equity you&apos;ve built, the memories in those
            walls, and the logistics of coordinating a sale and a purchase
            at the same time — it&apos;s a lot. We&apos;ve guided clients through
            this before, and we know how to make it manageable.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-8">
            <span>✓ Right-sizing strategy</span>
            <span>✓ Coordinated buy-sell timing</span>
            <span>✓ Condo &amp; 55+ community expertise</span>
            <span>✓ Full equity marketing</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Get a Free Home Valuation
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

      {/* CONTEXT */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
                Why this is different
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                This Isn&apos;t Just a Real Estate Transaction.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Downsizing often means leaving the home where your kids grew
                up, where holidays happened, where decades of your life unfolded.
                That&apos;s not something a standard agent is trained to handle.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At the same time, the logistics are genuinely complex: selling
                your current home, finding the right smaller property, timing
                both so you&apos;re not carrying two mortgages or scrambling for
                temporary housing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle both sides — the emotional and the transactional —
                with patience, honesty, and a clear process. You don&apos;t have
                to figure this out alone.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#faf9f7] border border-gray-100 p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  What clients say
                </p>
                <p className="text-[#1a1a1a] font-medium text-base mb-3">
                  &ldquo;Sarah and Brad helped us find our HOME. They are amazing
                  to work with — fun, knowledgeable and easy. I will work with
                  them again.&rdquo;
                </p>
                <p className="text-sm text-gray-500">Tracey Williams · Buyer</p>
              </div>
              <div className="bg-[#1a1a1a] text-white p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Unconditional Release Guarantee*
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  If at any point you&apos;re unhappy with our service, provide
                  written notice and we will unconditionally release you from
                  your listing contract. No other team in Southeast Michigan
                  can say this credibly.
                </p>
                <p className="text-white/30 text-xs mt-3">
                  * Applies to active listings only. Once an offer has been accepted, the listing agreement can no longer be withdrawn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Our expertise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              What We Handle for Downsizing Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeHandle.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-gray-100 rounded-sm shadow-sm"
              >
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
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
              How We Guide You Through the Transition
            </h2>
          </div>
          <div className="space-y-8">
            {downsizingProcess.map((step, i) => (
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
              Downsizing in Southeast Michigan: Your Questions Answered
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
          Ready to Find Out What Your Next Chapter Looks Like?
        </h2>
        <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
          Start with a free home valuation. It takes 15 minutes and gives you
          the real numbers — so you can decide from a position of clarity,
          not guesswork.
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
        <p className="text-white/60 text-xs mt-4">
          Sarah Patrick, Principal Broker · Southeast Michigan
        </p>
      </section>

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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
