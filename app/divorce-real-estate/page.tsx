import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divorce Real Estate Agent Southeast Michigan | The Patrick Group",
  description:
    "Selling a home during divorce in Southeast Michigan? The Patrick Group specializes in divorce real estate — court-ordered sales, buyouts, and neutral professional guidance.",
  keywords:
    "divorce real estate agent Southeast Michigan, selling house during divorce Michigan, court ordered home sale Michigan, divorce real estate specialist Michigan",
  alternates: { canonical: "https://thepatrickgrp.com/divorce-real-estate" },
};

const whatWeHandle = [
  {
    title: "Court-Ordered Sales",
    desc: "When a judge orders the sale of the marital home, you need an agent who understands the legal process, works efficiently, and keeps both parties informed. We've done this before.",
  },
  {
    title: "Buyout Valuations",
    desc: "If one spouse is buying out the other, you need an accurate, defensible market value — not a Zestimate. We provide documented comparative market analyses suitable for legal proceedings.",
  },
  {
    title: "Coordinating with Attorneys",
    desc: "We communicate directly with your legal team when needed. Clear documentation, prompt responses, and no drama — we make your attorney's job easier.",
  },
  {
    title: "Equity Maximization",
    desc: "Even in a difficult situation, you deserve top dollar. Our full listing marketing toolkit — professional photography, 300-agent outreach, 15-platform syndication — doesn't change because of the circumstances.",
  },
  {
    title: "Discrete, Professional Service",
    desc: "We understand this is one of the most stressful periods of your life. We're not here to make it harder. We're here to give you one less thing to worry about.",
  },
  {
    title: "Timeline Sensitivity",
    desc: "Divorce proceedings move on legal calendars. We work around your timeline — expediting when courts require it, and moving carefully when precision matters more than speed.",
  },
];

const faqs = [
  {
    q: "Do both spouses have to agree to list the home?",
    a: "In most cases, yes — both parties must agree to list and accept an offer. In court-ordered situations, the judge may authorize the sale regardless of one party's objection. We've worked in both scenarios and know how to navigate them.",
  },
  {
    q: "Can you work with just one spouse if we can't communicate?",
    a: "Yes. We're experienced with high-conflict situations where direct communication between spouses isn't possible. We coordinate through attorneys and maintain strict neutrality throughout the process.",
  },
  {
    q: "How do you handle the proceeds?",
    a: "Proceeds are handled at closing through a licensed title company. The division of proceeds follows the separation agreement or court order — we ensure the right amounts go to the right parties. Contact us for a list of our trusted service providers.",
  },
  {
    q: "What if we disagree on list price?",
    a: "This is common. We provide a detailed, documented comparative market analysis and present it to both parties separately if needed. Our goal is an objective, defensible price — not one that favors either side.",
  },
  {
    q: "Do I need a special type of agent for divorce real estate?",
    a: "You don't legally need one, but it helps significantly. An agent without experience in divorce situations may inadvertently take sides, miss timeline requirements, or create documentation issues that complicate your legal proceedings.",
  },
];

export default function DivorceRealEstatePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Specialty Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Divorce Real Estate in{" "}
            <span className="text-[#c70000]">Southeast Michigan</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Navigating a divorce is hard enough. Selling the family home doesn&apos;t
            have to make it harder. We provide calm, discreet, expert guidance —
            for both parties or one.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-8">
            <span>✓ Court-ordered sales</span>
            <span>✓ Buyout valuations</span>
            <span>✓ Attorney coordination</span>
            <span>✓ Neutral professional representation</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Confidential Consultation: 248.755.3545
            </a>
            <Link
              href="/home-valuation"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Request a Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
                Why this matters
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                This Is Different from a Typical Home Sale.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When a marriage ends and a home must be sold, the process involves
                legal timelines, emotional stakes, and two people who may not be
                on speaking terms. A standard real estate agent isn&apos;t always
                prepared for that.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;ve worked with individuals and couples navigating divorce in
                Southeast Michigan for years. We understand the legal
                landscape, we know how to work with attorneys, and we handle the
                process with the discretion it deserves.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Zillow can&apos;t help you here. A national portal agent who bought
                your lead won&apos;t have this experience. You need someone local, with
                real expertise, and a track record you can verify.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#faf9f7] border border-gray-100 p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  What clients say
                </p>
                <p className="text-[#1a1a1a] font-medium text-base mb-3">
                  &ldquo;Sarah was very prompt on all fronts, answering any questions
                  or concerns I had at any point. A wonderful experience thanks
                  to her hard work and impeccable work ethic.&rdquo;
                </p>
                <p className="text-sm text-gray-500">Verified Client</p>
              </div>
              <div className="bg-[#1a1a1a] text-white p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Confidential consultations
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  All consultations are completely confidential. We do not share
                  client information with any third party without written
                  authorization. Your privacy is protected throughout the process.
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
              What We Handle for Divorcing Clients
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

      {/* FAQ — AI SEO optimized with FAQ schema */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Divorce Real Estate: Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-100 pb-6"
              >
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
          Confidential. Professional. Local.
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Let&apos;s Talk. No Pressure, No Judgment.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          A 15-minute phone call is enough to answer your questions and understand
          your situation. Call or text anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Call 248.755.3545
          </a>
          <Link
            href="/home-valuation"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Request a Confidential Valuation
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
          Sarah Patrick, Principal Broker · Southeast Michigan
        </p>
      </section>

      {/* Schema markup for FAQs */}
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
