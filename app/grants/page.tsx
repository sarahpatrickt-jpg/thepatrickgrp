import type { Metadata } from "next";
import Link from "next/link";
import GrantWizard from "@/components/grants/GrantWizard";

export const metadata: Metadata = {
  title:
    "Michigan Homebuyer Grants & Down Payment Assistance | Free Qualification Tool",
  description:
    "Find out which Michigan grants and down payment assistance programs you qualify for. Check MSHDA, county DPA, VA, USDA, and more — free, instant results.",
  keywords:
    "Michigan homebuyer grants, down payment assistance Michigan, MSHDA DPA, first time homebuyer Michigan, Oakland County down payment assistance, Detroit down payment assistance, Michigan first time buyer programs, homebuyer grants Southeast Michigan",
  alternates: { canonical: "https://www.thepatrickgrp.com/grants" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/grants",
    title:
      "Michigan Homebuyer Grants & Down Payment Assistance — Free Qualification Tool",
    description:
      "See which Michigan grants and down payment assistance programs you qualify for. Instant results, no cost, no obligation.",
    siteName: "The Patrick Group",
  },
};

const faqs = [
  {
    q: "What is down payment assistance?",
    a: "Down payment assistance (DPA) programs provide grants or forgivable loans to help homebuyers cover their down payment and closing costs. In Michigan, these programs are offered by the state (MSHDA), counties, cities, and federal agencies. Many are specifically designed for first-time buyers.",
  },
  {
    q: "Do I have to be a first-time homebuyer?",
    a: "Not always. While many programs target first-time buyers, some — like MSHDA's standard DPA, VA loans, and HomeReady — are available to repeat buyers as well. Our tool checks both first-time and non-first-time programs based on your answers.",
  },
  {
    q: "What counts as a first-time homebuyer in Michigan?",
    a: "In most programs, a first-time buyer is someone who has not owned a home in the past three years. If you owned a home previously but it's been more than three years, you typically qualify as a first-time buyer again.",
  },
  {
    q: "Do I have to pay these grants back?",
    a: "It depends on the program. True grants (like Oakland County's DPA) don't need to be repaid. Forgivable loans (like MSHDA DPA) are forgiven after you stay in the home for a set period. Some programs are structured as low-interest second mortgages. Our results page tells you which type each program is.",
  },
  {
    q: "Can I combine multiple programs?",
    a: "In many cases, yes. For example, you can often layer a county-level DPA grant on top of an MSHDA first mortgage. A lender who specializes in DPA programs can help you stack the maximum benefit.",
  },
  {
    q: "How accurate is this tool?",
    a: "This tool provides a preliminary screening based on publicly available program requirements. It's a strong starting point, but final eligibility is always determined by the program administrator and your lender. Income limits, purchase price caps, and program funding can change.",
  },
  {
    q: "What is MSHDA?",
    a: "MSHDA stands for Michigan State Housing Development Authority. It's the state agency that administers Michigan's primary homebuyer programs, including MI Home Loan first mortgages and DPA programs. MSHDA programs are available statewide through approved lenders.",
  },
  {
    q: "Does The Patrick Group charge for this tool?",
    a: "No. This tool is completely free and there's no obligation. If you'd like help connecting with a lender who specializes in DPA programs, we're happy to make that introduction at no cost.",
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

export default function GrantsPage() {
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
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Michigan Homebuyer Assistance
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Find Out Which Grants{" "}
            <span className="text-[#c70000]">You Qualify For</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Michigan offers thousands of dollars in down payment assistance and
            grants for homebuyers. Answer a few questions and we&apos;ll show
            you which programs match your situation — instantly, for free.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 px-4 sm:px-6 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-white/60">
            <div>
              <span className="text-white font-semibold">20+</span> Programs
              Checked
            </div>
            <div>
              <span className="text-white font-semibold">7</span> Counties
              Covered
            </div>
            <div>
              <span className="text-white font-semibold">Free</span> &amp; No
              Obligation
            </div>
            <div>
              <span className="text-white font-semibold">Instant</span> Results
            </div>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <GrantWizard />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              How it works
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Three Steps to Your Results
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Answer a Few Questions",
                desc: "Tell us where you're buying, your income, household size, and a few qualifying details. Takes about 2 minutes.",
              },
              {
                n: "02",
                title: "See Your Matches",
                desc: "We check your profile against 20+ state, county, federal, and bank programs and show you which ones you likely qualify for.",
              },
              {
                n: "03",
                title: "Connect With a Lender",
                desc: "Want to move forward? We'll connect you with an MSHDA-approved lender who specializes in DPA — at no cost to you.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-white border border-gray-100 rounded-sm p-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#c70000] text-white flex items-center justify-center text-xs font-bold mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Programs we check
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Michigan Down Payment Assistance Programs
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Government grants, bank-specific programs, and credit union offers.
              Eligibility depends on your income, location, and buyer status.
            </p>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Government &amp; County Programs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { name: "MSHDA MI DPA", amount: "Up to $7,500", type: "Statewide" },
              { name: "MSHDA MI 10K DPA", amount: "Up to $10,000", type: "Targeted Areas" },
              { name: "MSHDA First-Gen DPA", amount: "Up to $25,000", type: "Monitor for renewal" },
              { name: "Oakland County DPA", amount: "Up to $5,000", type: "Oakland County" },
              { name: "Detroit DPA", amount: "Up to $25,000", type: "Detroit" },
              { name: "Wayne County DPA", amount: "Up to $7,500", type: "Wayne County" },
              { name: "National Faith", amount: "Up to $14,999", type: "Wayne County" },
              { name: "Genesee County", amount: "Up to $10,000", type: "Genesee County" },
              { name: "Washtenaw OCED", amount: "Up to $10,000", type: "Washtenaw County" },
              { name: "VA Home Loan", amount: "0% down", type: "Veterans" },
              { name: "USDA Rural", amount: "0% down", type: "Rural Areas" },
              { name: "Good Neighbor", amount: "50% off", type: "Public Service" },
              { name: "HomeReady / Home Possible", amount: "3% down", type: "Moderate Income" },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4"
              >
                <p className="font-semibold text-[#1a1a1a] text-sm">
                  {p.name}
                </p>
                <p className="text-[#c70000] font-bold text-sm mt-1">
                  {p.amount}
                </p>
                <p className="text-xs text-gray-400 mt-1">{p.type}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Bank &amp; Credit Union Programs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Chase Homebuyer Grant", amount: "Up to $7,500", type: "Eligible areas" },
              { name: "Wells Fargo Homebuyer Access", amount: "Up to $10,000", type: "Down payment grant" },
              { name: "Wells Fargo Closing Cost Credit", amount: "Up to $5,000", type: "At or below 80% AMI" },
              { name: "Rocket Mortgage ONE+", amount: "1% down", type: "Rocket covers 2% — up to $7K" },
              { name: "Honor CU Launch DPA", amount: "Up to $20,000", type: "First-time buyers, 80% AMI" },
              { name: "FHLB HomeBoost", amount: "Up to $25,000", type: "Minority / first-gen buyers" },
              { name: "Flagstar Destination Home", amount: "No PMI", type: "Community lending areas" },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-[#faf9f7] border border-gray-100 rounded-sm p-4"
              >
                <p className="font-semibold text-[#1a1a1a] text-sm">
                  {p.name}
                </p>
                <p className="text-[#c70000] font-bold text-sm mt-1">
                  {p.amount}
                </p>
                <p className="text-xs text-gray-400 mt-1">{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Grant &amp; DPA FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
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

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Ready to get started?
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Have Questions About Grants or DPA Programs?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Call or text Brad Patrick directly. He&apos;ll walk you through your
            options and connect you with a lender who can help — no cost, no
            pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:2487553545"
              className="bg-[#c70000] text-white font-semibold px-8 py-4 text-sm hover:bg-[#a30000] transition-colors"
            >
              Call (248) 755-3545
            </a>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 text-sm hover:bg-white/10 transition-colors"
            >
              Send a Message →
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-8">
            The Patrick Group | Oak &amp; Stone Real Estate. This tool provides
            preliminary screening only. Actual program eligibility is determined
            by the administering agency and your lender. Program terms and funding
            availability may change without notice.
          </p>
        </div>
      </section>
    </>
  );
}
