import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selling a Home in a Living Trust. Southeast Michigan",
  description:
    "Selling a home in a living trust in Southeast Michigan? The Patrick Group handles trustee authority, title, and fiduciary requirements.",
  keywords:
    "sell home in living trust Michigan, living trust real estate Southeast Michigan, trustee selling property Michigan, successor trustee home sale Oakland County, trust property sale Michigan",
  alternates: { canonical: "https://www.thepatrickgrp.com/living-trust" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/living-trust",
    title: "Selling a Home in a Living Trust. Southeast Michigan",
    description:
      "Selling a home in a living trust in Southeast Michigan? The Patrick Group handles trustee authority, title, and fiduciary requirements.",
    siteName: "The Patrick Group",
  },
};

const whyDifferent = [
  {
    title: "Trustee Authority Must Be Established First",
    desc: "Before a trust property can be listed or sold, the title company and any buyer's lender need to verify the trustee's authority to act. That means producing a certification of trust or specific excerpts from the trust agreement, before the purchase agreement is signed, not at closing.",
  },
  {
    title: "The Trustee Signs. Not the Beneficiaries",
    desc: "In a trust sale, the trustee signs the purchase agreement and closing documents in their capacity as trustee. Beneficiaries do not need to sign, but the trustee has a fiduciary duty to act in their best interest throughout the process.",
  },
  {
    title: "Fiduciary Duty Changes How Decisions Are Made",
    desc: "A trustee selling trust property cannot simply do what's convenient. They must make reasonable decisions, on price, timing, repairs, and offers, that serve the beneficiaries. We understand how to advise trustees within that framework.",
  },
  {
    title: "Title Companies Have Specific Requirements",
    desc: "Most title companies require a certification of trust, and some will want to review the full trust agreement. Knowing what they'll ask for, and having it ready, prevents delays at the worst possible time.",
  },
  {
    title: "Successor Trustees Face Unique Timing Questions",
    desc: "When the original grantor has passed, a successor trustee often takes over without a clear playbook. There are decisions to make about timing, preparation, and pricing, often while managing grief and family communication at the same time.",
  },
  {
    title: "This Is Not the Same as a Probate Sale",
    desc: "A living trust avoids probate entirely, that's the point. But trust sales still have their own process, documentation requirements, and complexity. An agent without trust sale experience may not know the difference until problems arise.",
  },
];

const trustProcess = [
  {
    title: "Confirm Trustee Authority and Documentation",
    desc: "We start by confirming who has the legal authority to sell, what trust documents are in place, and what the title company will need. We flag any issues before you're under contract, not after.",
  },
  {
    title: "Coordinate with Your Attorney Upfront",
    desc: "If you're working with an estate or trust attorney, we coordinate with them from the start. If you need one, we can refer you to experienced Michigan trust attorneys. Getting the legal side aligned early prevents delays.",
  },
  {
    title: "Property Assessment and Pricing",
    desc: "We assess the property's condition and provide a full comparative market analysis. We advise the trustee on what improvements are worth making, keeping the fiduciary duty to beneficiaries in mind.",
  },
  {
    title: "List and Market the Property",
    desc: "We handle all marketing: professional photography, MLS listing, 300-agent outreach network, custom property website, and 15-platform syndication. Trust property deserves the same exposure as any other listing.",
  },
  {
    title: "Review Offers with the Fiduciary Standard in Mind",
    desc: "We help trustees evaluate offers not just on price, but on terms, contingencies, and certainty of close, all of which matter when the trustee has a duty to maximize the estate's return.",
  },
  {
    title: "Coordinate Closing and Trust Distribution",
    desc: "We work with the title company to ensure all trust documentation is in order before closing. Proceeds go to the trust, and we make sure the title company has everything they need so there are no last-minute surprises.",
  },
];

const faqs = [
  {
    q: "Does selling a home in a living trust avoid probate?",
    a: "Yes, avoiding probate is the primary purpose of a living trust. Property held in a properly funded living trust passes directly to beneficiaries according to the trust terms, without going through Michigan's probate process. This is what makes trust sales faster and more private than estate sales.",
  },
  {
    q: "I'm the successor trustee after my parent passed. Can I sell the home?",
    a: "In most cases, yes. If the trust grants the successor trustee the power to sell real property, which most well-drafted revocable living trusts do, you can proceed with the sale. You'll need the trust document, a death certificate, and likely a certification of trust for the title company. We'll walk through exactly what you need before you list.",
  },
  {
    q: "Do all the beneficiaries have to agree to sell?",
    a: "Not necessarily. If the trust gives the trustee discretionary authority to sell, the trustee can proceed without beneficiary consent, though as trustee, you have a fiduciary duty to act in the beneficiaries' best interests. If the trust requires beneficiary consent before a sale, that consent must be documented. Your trust attorney can clarify what your specific trust requires.",
  },
  {
    q: "What documents does the title company need?",
    a: "Most Michigan title companies require a certification of trust, a condensed document that confirms the trust's existence, identifies the trustees, and confirms the power to sell real property, without disclosing the full terms of the trust. Some title companies will also ask for the full trust agreement or specific relevant sections. We recommend having these ready before you accept an offer.",
  },
  {
    q: "Can I sell a home that's in an irrevocable trust?",
    a: "It's more complex. Unlike a revocable trust, an irrevocable trust generally cannot be changed without court approval or beneficiary consent, and the trustee's powers are limited to those explicitly granted by the trust. Selling irrevocable trust property typically requires careful review of the trust terms and, in some cases, court authorization. We work with your attorney on these situations.",
  },
  {
    q: "How long does a trust sale take compared to a regular sale?",
    a: "Once the property is listed, the timeline is essentially the same as a standard sale, typically 30–60 days from accepted offer to closing. The difference is the preparation phase: gathering trust documentation, confirming trustee authority, and coordinating with the title company upfront. Doing that work before you list prevents delays after you accept an offer.",
  },
];

export default function LivingTrustPage() {
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
      <section className="bg-[var(--ink)] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            Specialty Services
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-5">
            Selling a Home in a Living Trust.{" "}
            <span className="text-[var(--red)]">We Know How This Works.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-5">
            Trust sales avoid probate, but they come with their own documentation requirements, fiduciary obligations, and title company expectations. An agent who hasn&apos;t done this before will find out at the worst possible moment.
          </p>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">
            We&apos;ve worked with trustees, successor trustees, and estate attorneys in Southeast Michigan. We know what the title company needs before you list, and we know how to advise a trustee who has a fiduciary duty to get this right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors text-center"
            >
              Confidential Consultation: 248.755.3545
            </a>
            <Link
              href="/home-valuation"
              className="border border-white/30 text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors text-center"
            >
              Request a Property Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="px-4 sm:px-6 py-10" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-5xl mx-auto relative overflow-hidden" style={{ aspectRatio: "16 / 8", border: "1px solid var(--line)" }}>
        <Image
          src="/images/photos/great-room.jpg"
          alt="Light-filled great room with two-story windows"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        </div>
      </section>


      {/* TRUST VS PROBATE */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
                The key distinction
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-4">
                Trust Sales and Probate Sales Are Not the Same.
              </h2>
              <p className="text-[var(--ink-2)] leading-relaxed mb-4">
                A properly funded living trust lets the successor trustee sell the property directly, no court supervision, no public record of the estate, no mandatory waiting periods. That&apos;s a significant advantage over probate.
              </p>
              <p className="text-[var(--ink-2)] leading-relaxed mb-4">
                But trust sales still require documentation, legal coordination, and an agent who understands the trustee&apos;s obligations. The trust document controls what the trustee can do, and the title company will want proof before they insure the transaction.
              </p>
              <p className="text-[var(--ink-2)] leading-relaxed">
                We handle trust sales and estate/probate sales in Southeast Michigan. If you&apos;re not sure which situation you&apos;re in, a 15-minute conversation will clarify it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[var(--paper-2)] border border-[var(--line)] p-5">
                <p className="text-xs uppercase tracking-widest font-semibold text-[var(--red)] mb-2">
                  Living Trust Sale
                </p>
                <ul className="text-sm text-[var(--ink-2)] space-y-1.5">
                  <li>✓ No probate court involvement</li>
                  <li>✓ Trustee signs, beneficiaries do not</li>
                  <li>✓ Faster process after setup</li>
                  <li>✓ Private, not a public court record</li>
                  <li>→ Title company needs certification of trust</li>
                  <li>→ Trustee has fiduciary duty to beneficiaries</li>
                </ul>
              </div>
              <div className="bg-[var(--paper-2)] border border-[var(--line)] p-5">
                <p className="text-xs uppercase tracking-widest font-semibold text-[var(--red)] mb-2">
                  Estate / Probate Sale
                </p>
                <ul className="text-sm text-[var(--ink-2)] space-y-1.5">
                  <li>→ Michigan probate court oversight</li>
                  <li>→ Letters of Authority required to list</li>
                  <li>→ Timeline tied to court process</li>
                  <li>→ Public record of the estate</li>
                  <li>→ Multiple heirs may have competing interests</li>
                </ul>
                <Link
                  href="/estate-sales"
                  className="inline-block mt-3 text-xs font-semibold text-[var(--red)] underline underline-offset-2"
                >
                  See our estate &amp; probate services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              What makes this complex
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              Why Trust Sales Require Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDifferent.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--paper)] p-6 border border-[var(--line)] shadow-sm"
              >
                <h3 className="font-semibold text-[var(--ink)] mb-2 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ink-3)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
              How We Guide a Trust Sale to Closing
            </h2>
          </div>
          <div className="space-y-8">
            {trustProcess.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[var(--red)] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
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
              Living Trust Real Estate: Your Questions Answered
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
              Living Trust Sales Across Southeast Michigan
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: "Birmingham", slug: "birmingham-mi" },
              { name: "Bloomfield Hills", slug: "bloomfield-hills-mi" },
              { name: "Bloomfield Township", slug: "bloomfield-township-mi" },
              { name: "Rochester", slug: "rochester-mi" },
              { name: "Rochester Hills", slug: "rochester-hills-mi" },
              { name: "Troy", slug: "troy-mi" },
              { name: "West Bloomfield", slug: "west-bloomfield-mi" },
              { name: "Grosse Pointe", slug: "grosse-pointe-mi" },
              { name: "Northville", slug: "northville-mi" },
              { name: "Plymouth", slug: "plymouth-mi" },
              { name: "Novi", slug: "novi-mi" },
              { name: "Royal Oak", slug: "royal-oak-mi" },
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
            <Link href="/estate-sales" className="text-sm font-semibold text-[var(--red)] hover:underline">
              Estate &amp; Probate Sales →
            </Link>
            <Link href="/downsizing" className="text-sm font-semibold text-[var(--red)] hover:underline">
              Downsizing →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--ink)] text-white text-center">
        <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
          We&apos;ve Done This Before
        </p>
        <h2 className="font-display text-2xl sm:text-3xl mb-4">
          Let&apos;s Talk Through Your Situation.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          Every trust sale is different. A 15-minute call will tell us exactly what you&apos;re working with and what the path forward looks like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[var(--red)] text-white font-bold px-8 py-4 hover:bg-[var(--red-deep)] transition-colors"
          >
            Call 248.755.3545
          </a>
          <Link
            href="/home-valuation"
            className="border border-white/30 text-white font-semibold px-8 py-4 hover:bg-[var(--paper)]/10 transition-colors"
          >
            Request a Confidential Assessment
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
          Sarah Patrick, Principal Broker · Southeast Michigan
        </p>
      </section>

      {/* FAIR HOUSING */}
      <section className="py-6 px-4 sm:px-6 bg-[var(--paper)] border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[var(--ink-3)] leading-relaxed">
            This page is for general informational purposes only and does not constitute legal advice. Trust and estate matters involve complex legal questions, consult a licensed Michigan attorney for guidance specific to your situation. Oak &amp; Stone Real Estate is committed to compliance with the Fair Housing Act and all applicable fair housing laws. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
