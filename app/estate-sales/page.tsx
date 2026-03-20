import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estate & Probate Home Sales in Southeast Michigan | The Patrick Group",
  description:
    "Handling the sale of a loved one's home in Southeast Michigan? The Patrick Group provides experienced, compassionate guidance through estate and probate real estate — from the first walkthrough to closing.",
  keywords:
    "estate sale real estate Southeast Michigan, probate home sale Michigan, sell inherited home Michigan, estate property Michigan, probate real estate agent Michigan",
  alternates: { canonical: "https://thepatrickgrp.com/estate-sales" },
};

const whatWeHandle = [
  {
    title: "Probate Sale Coordination",
    desc: "Michigan probate law governs how real estate must be handled when part of an estate. We understand the process, work within the legal timeline, and coordinate with the estate's attorney and executor to ensure compliance.",
  },
  {
    title: "Property Assessment and Pricing",
    desc: "Estate homes often haven't been updated in years, may need repairs, or have deferred maintenance. We provide an honest, documented market analysis that accounts for condition — so the estate receives fair value without leaving money on the table.",
  },
  {
    title: "Working with Executors and Trustees",
    desc: "We understand that the person managing the sale may be dealing with grief, family disagreements, and legal complexity simultaneously. We give executors clear information, honest timelines, and patient guidance throughout.",
  },
  {
    title: "Preparing the Property for Sale",
    desc: "Estate homes frequently need cleaning, de-cluttering, minor repairs, or staging. We can coordinate trusted vendors — and tell you honestly what's worth doing and what isn't, so you don't over-invest.",
  },
  {
    title: "Managing Family Dynamics",
    desc: "Multiple heirs with different expectations is one of the most common challenges in estate sales. We stay neutral, communicate clearly with all parties, and help keep the process moving without unnecessary conflict.",
  },
  {
    title: "Full Marketing Execution",
    desc: "Estate properties deserve the same professional marketing as any other listing. Professional photography, 300-agent outreach, custom property website, and 15-platform syndication — regardless of price point.",
  },
];

const estateProcess = [
  {
    title: "Initial Consultation with the Executor",
    desc: "We start by understanding who has legal authority to sell, what the probate status is, and what the timeline looks like. We work from wherever the estate is in the legal process.",
  },
  {
    title: "Property Walkthrough and Honest Assessment",
    desc: "We visit the home, assess its condition honestly, and give the estate a realistic picture of value — including what improvements are worth making and which aren't.",
  },
  {
    title: "Preparing the Property for Market",
    desc: "We help coordinate whatever preparation is appropriate: estate sale, cleaning, minor repairs, or professional staging and photography. We have trusted vendors for all of it.",
  },
  {
    title: "Listing and Full-Market Exposure",
    desc: "We list at the right price, at the right time, with the full marketing toolkit. Every decision is made to maximize the estate's return — not to move the property quickly at a discount.",
  },
  {
    title: "Managing Offers Through Closing",
    desc: "We handle all negotiations, coordinate with the estate attorney and title company, and ensure proceeds are distributed correctly. No surprises at the closing table.",
  },
];

const faqs = [
  {
    q: "Do we need probate court approval before listing the home?",
    a: "It depends on how the estate is structured and whether the property was held in trust. In Michigan, if the property goes through formal probate, you generally need Letters of Authority issued by the probate court before executing a purchase agreement. We'll walk through your specific situation with your attorney to make sure we sequence this correctly.",
  },
  {
    q: "What happens if the heirs disagree about selling the home?",
    a: "This is more common than most people expect. In some cases, heirs must reach agreement — and that can delay or complicate the sale. In others, the executor has clear legal authority to proceed. We work with the executor and the estate's attorney to move forward within the bounds of what's legally permitted. We stay neutral and professional throughout.",
  },
  {
    q: "The home is in poor condition — is it worth fixing it up before listing?",
    a: "Sometimes yes, sometimes no. It depends on the cost of repairs versus the likely increase in sale price — and on the estate's timeline and budget. We'll walk through the property with you, give you an honest recommendation, and help coordinate trusted contractors for anything that genuinely improves value.",
  },
  {
    q: "How is an estate sale priced differently from a regular home sale?",
    a: "The pricing process is the same — we do a full comparative market analysis. However, we factor in the property's condition, the legal timeline, and whether the estate has flexibility on timing. A well-priced estate property that's properly prepared sells well in today's market. The goal is always to maximize the estate's return, not just to move the property quickly.",
  },
  {
    q: "Can you help with the personal property inside the home as well?",
    a: "We can refer you to trusted estate sale companies who handle personal property — furniture, contents, and collectibles — separately from the real estate transaction. We can also advise on sequencing: whether to hold the estate sale before or after listing, which depends on the property's condition and how quickly it needs to sell.",
  },
];

export default function EstateSalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Specialty Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Estate &amp; Probate Sales in{" "}
            <span className="text-[#c70000]">Southeast Michigan.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Managing the sale of a loved one&apos;s home requires patience,
            legal awareness, and local market expertise. We&apos;ve guided
            families through this before — with calm, structure, and no
            added pressure during an already difficult time.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-8">
            <span>✓ Probate coordination</span>
            <span>✓ Executor support</span>
            <span>✓ Family dynamics management</span>
            <span>✓ Full marketing execution</span>
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
              Request a Property Assessment
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
                Why this requires specialized help
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                Estate Sales Are Different from Standard Transactions.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When a home must be sold as part of an estate or probate
                proceeding, the process involves legal timelines, potential
                family disagreements, a property that may not have been
                maintained, and an executor who may be managing all of this
                while grieving.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A standard agent without this experience may not understand
                Michigan probate requirements, may inadvertently create
                documentation issues, or may not know how to navigate a
                situation where multiple heirs have different expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve handled estate sales in Southeast Michigan for
                years. We know the legal landscape, we work respectfully with
                attorneys and family members, and we manage the process so
                the estate receives what it deserves.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#faf9f7] border border-gray-100 p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  What clients say
                </p>
                <p className="text-[#1a1a1a] font-medium text-base mb-3">
                  &ldquo;Sarah was very prompt on all fronts, answering any
                  questions or concerns I had at any point. A wonderful
                  experience thanks to her hard work and impeccable work
                  ethic.&rdquo;
                </p>
                <p className="text-sm text-gray-500">Verified Client</p>
              </div>
              <div className="bg-[#1a1a1a] text-white p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Confidential consultations
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  All consultations are completely confidential. We can meet
                  at the property, at our office, or by phone — whatever
                  works best for the executor and the estate.
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
              What We Handle for Estate and Probate Sales
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
              How We Guide an Estate Through to Closing
            </h2>
          </div>
          <div className="space-y-8">
            {estateProcess.map((step, i) => (
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
              Estate &amp; Probate Sales: Frequently Asked Questions
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
          Patient. Knowledgeable. Local.
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Let&apos;s Start with a Conversation.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          We understand this is a difficult time. A 15-minute call is all it
          takes to understand your situation and give you a clear path forward.
          Call or text anytime.
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
            Request a Confidential Assessment
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
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
