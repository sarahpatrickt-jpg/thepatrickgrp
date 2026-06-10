import type { Metadata } from "next";
import Link from "next/link";
import InheritedPropertyWizard from "@/components/inherited-property/InheritedPropertyWizard";

export const metadata: Metadata = {
  title:
    "Inherited Property Navigator | What to Do with an Inherited Home in Michigan",
  description:
    "Free step-by-step tool for Michigan heirs: probate, tax basis step-up, sell vs. rent vs. keep analysis, and a personalized action plan for your inherited property.",
  keywords:
    "inherited property Michigan, sell inherited home Michigan, inherited house what to do, probate real estate Michigan, stepped up basis inherited property, inherited home sell or rent, estate property Michigan",
  alternates: {
    canonical: "https://www.thepatrickgrp.com/inherited-property",
  },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/inherited-property",
    title:
      "Inherited Property Navigator | What to Do with an Inherited Home in Michigan",
    description:
      "Free step-by-step tool for Michigan heirs: probate, tax basis step-up, sell vs. rent vs. keep analysis, and a personalized action plan for your inherited property.",
    siteName: "The Patrick Group",
  },
};

const stats = [
  { value: "1.5M", label: "Homes inherited annually in the U.S." },
  { value: "70%", label: "Of heirs sell within 12 months" },
  { value: "4-8 mo", label: "Average probate timeline in Michigan" },
];

const commonSituations = [
  {
    title: "You inherited the family home and live out of state",
    desc: "Managing a property from a distance adds complexity to every decision. We handle the on-the-ground work: property assessment, vendor coordination, and full marketing, so you don't have to fly back and forth.",
  },
  {
    title: "Siblings can't agree on what to do",
    desc: "Multiple heirs with different financial needs and emotional attachments is the most common inherited property challenge. We stay neutral, present the data, and help all parties reach a decision that works.",
  },
  {
    title: "The property hasn't been maintained in years",
    desc: "Deferred maintenance doesn't mean the property is worthless. We'll assess what's worth fixing and what isn't, and we can coordinate trusted contractors. Sometimes selling as-is is the smartest move.",
  },
  {
    title: "You're not sure if probate is needed",
    desc: "How the property was titled determines whether probate is required. Our tool helps you identify your situation, and we work with estate attorneys who can handle the legal process if needed.",
  },
  {
    title: "You're worried about the tax implications",
    desc: "The stepped-up tax basis is one of the most significant tax advantages of inherited property, but most heirs don't know about it. We'll make sure you understand the numbers before making any decisions.",
  },
  {
    title: "There's a mortgage or liens on the property",
    desc: "Outstanding financial obligations don't prevent a sale, but they affect the estate's net proceeds. We help you understand the full picture before committing to a path.",
  },
];

const faqs = [
  {
    q: "Do I have to go through probate to sell an inherited home in Michigan?",
    a: "Not always. If the property was held in a living trust or joint tenancy, it typically avoids probate. Properties passed through a will (or with no will) generally require probate, which means obtaining Letters of Authority from the county probate court before you can execute a purchase agreement. Our tool helps you determine which path applies to your situation.",
  },
  {
    q: "What is a stepped-up tax basis and why does it matter?",
    a: "When you inherit property, the IRS resets the cost basis to the property's fair market value on the date of death. If the home was purchased for $80,000 in 1985 but was worth $350,000 when the owner passed, your new basis is $350,000. If you sell for $360,000, you only owe capital gains tax on $10,000, not the full $270,000 gain from the original purchase. Get a date-of-death appraisal to document this value.",
  },
  {
    q: "How long does it take to sell an inherited home?",
    a: "It depends on the legal structure. Trust or joint tenancy properties can be listed within weeks. Probate properties typically take 4-8 weeks to get court authorization, then another 2-3 months to prepare, list, and close. Total timeline ranges from 2-6 months depending on your situation.",
  },
  {
    q: "What if the heirs disagree about selling?",
    a: "When heirs can't agree, any co-owner can file a partition action in Michigan courts, which forces a court-supervised sale, usually at a significant discount. It's almost always better to reach agreement voluntarily. We can help facilitate these conversations by providing objective market data and presenting all options clearly.",
  },
  {
    q: "Should I fix up an inherited home before selling it?",
    a: "It depends on the cost of repairs versus the potential increase in sale price. Cosmetic updates often provide a strong return, while major renovations rarely do for estate properties. We'll walk through the property, give you honest guidance, and help you run both scenarios, fix-and-sell vs. as-is, so you can make a data-driven decision.",
  },
  {
    q: "Can I rent out the inherited property instead of selling?",
    a: "You can, but it's a business decision that requires honest number-crunching: rental income minus property taxes, insurance, maintenance (1% of value per year), property management (8-10% of rent), and any mortgage payments. With multiple heirs, you also need a formal operating agreement to avoid conflicts. Our tool helps you evaluate this option.",
  },
];

export default function InheritedPropertyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Free Tool for Michigan Heirs
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Inherited a Property?{" "}
            <span className="text-[#c70000]">Here&apos;s What to Do.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Answer a few questions about your situation and get a personalized
            action plan: probate steps, tax basis guidance, sell vs. rent
            analysis, and a realistic timeline. No cost, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-8">
            <span>8 quick questions</span>
            <span>Personalized action plan</span>
            <span>Michigan-specific guidance</span>
          </div>
          <a
            href="#navigator"
            className="inline-block bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Start the Navigator
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-100 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#c70000]">
                {s.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAVIGATOR WIZARD */}
      <section id="navigator" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Inherited Property Navigator
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Get Your Personalized Action Plan
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Tell us about your situation and we&apos;ll generate a
              step-by-step plan tailored to your inherited property, including
              legal steps, tax guidance, and a realistic timeline.
            </p>
          </div>
          <InheritedPropertyWizard />
        </div>
      </section>

      {/* COMMON SITUATIONS */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Sound familiar?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Common Inherited Property Situations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonSituations.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-gray-100 rounded-sm shadow-sm"
              >
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Inherited Property: Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Related services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/estate-sales"
              className="group bg-white border border-gray-100 rounded-sm p-5 hover:border-gray-300 transition-colors"
            >
              <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[#c70000] transition-colors">
                Estate &amp; Probate Sales
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Full-service estate sale coordination from first walkthrough to
                closing.
              </p>
            </Link>
            <Link
              href="/cash-offer"
              className="group bg-white border border-gray-100 rounded-sm p-5 hover:border-gray-300 transition-colors"
            >
              <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[#c70000] transition-colors">
                Cash Offer Program
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sell as-is with no repairs, no showings, and close in as few as
                14 days.
              </p>
            </Link>
            <Link
              href="/living-trust"
              className="group bg-white border border-gray-100 rounded-sm p-5 hover:border-gray-300 transition-colors"
            >
              <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[#c70000] transition-colors">
                Living Trust Sales
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Selling trust-held property with proper trustee documentation and
                title transfer.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
          Patient. Knowledgeable. Local.
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Every Inherited Property Has a Right Answer.
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          We&apos;ve guided families through this across Southeast Michigan. A
          15-minute call is all it takes to understand your situation and give
          you a clear path forward.
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
            Request a Property Assessment
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
          Sarah Patrick, Principal Broker · Southeast Michigan
        </p>
      </section>

      {/* Schema: FAQ */}
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

      {/* Schema: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Inherited Property Navigator",
            description:
              "Free tool that generates a personalized action plan for heirs of inherited property in Michigan, including probate steps, tax basis guidance, and sell vs. rent analysis.",
            url: "https://www.thepatrickgrp.com/inherited-property",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            provider: {
              "@type": "RealEstateAgent",
              name: "The Patrick Group",
              url: "https://www.thepatrickgrp.com",
            },
          }),
        }}
      />
    </>
  );
}
