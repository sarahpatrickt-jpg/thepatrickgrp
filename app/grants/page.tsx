import type { Metadata } from "next";
import Link from "next/link";
import GrantWizard from "@/components/grants/GrantWizard";
import {
  programs,
  GRANTS_LAST_UPDATED,
  GRANTS_LAST_UPDATED_ISO,
} from "@/data/grants";

export const metadata: Metadata = {
  title:
    "Michigan Homebuyer Grants & Down Payment Assistance | Free Qualification Tool",
  description:
    "Find out which Michigan grants and down payment assistance programs you qualify for. Check MSHDA, county DPA, VA, USDA, and more, free, instant results.",
  keywords:
    "Michigan homebuyer grants, down payment assistance Michigan, MSHDA DPA, first time homebuyer Michigan, Oakland County down payment assistance, Detroit down payment assistance, Michigan first time buyer programs, homebuyer grants Southeast Michigan",
  alternates: { canonical: "https://www.thepatrickgrp.com/grants" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/grants",
    title:
      "Michigan Homebuyer Grants & Down Payment Assistance. Free Qualification Tool",
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
    a: "Not always. While many programs target first-time buyers, some, like MSHDA's standard DPA, VA loans, and HomeReady, are available to repeat buyers as well. Our tool checks both first-time and non-first-time programs based on your answers.",
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

// Region/eligibility tag per program id, for the overview cards
const regionTag: Record<string, string> = {
  "mshda-mi-dpa": "Statewide",
  "mshda-10k-dpa": "Targeted Areas",
  "mshda-first-gen": "Monitor for renewal",
  "oakland-county-dpa": "Oakland County",
  "detroit-dpa": "Detroit",
  "wayne-county-dpa": "Wayne County",
  "national-faith-wayne": "Wayne County",
  "genesee-county-dpa": "Genesee County",
  "washtenaw-oced": "Washtenaw County",
  "va-home-loan": "Veterans",
  "usda-rural": "Rural Areas",
  "good-neighbor": "Public Service",
  homeready: "Moderate Income",
  "chase-homebuyer-grant": "Eligible areas",
  "wells-fargo-homebuyer-access": "Down payment grant",
  "wells-fargo-closing-cost": "At or below 80% AMI",
  "rocket-one-plus": "Rocket covers 2%: up to $7K",
  "honor-cu-launch": "First-time buyers, 80% AMI",
  "fhlb-homeboost": "Minority / first-gen buyers",
  "flagstar-destination-home": "Community lending areas",
};

const BANK_IDS = new Set([
  "chase-homebuyer-grant",
  "wells-fargo-homebuyer-access",
  "wells-fargo-closing-cost",
  "rocket-one-plus",
  "honor-cu-launch",
  "fhlb-homeboost",
  "flagstar-destination-home",
]);

const govPrograms = programs.filter((p) => !BANK_IDS.has(p.id));
const bankPrograms = programs.filter((p) => BANK_IDS.has(p.id));

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Michigan Homebuyer Grant Qualification Tool",
  url: "https://www.thepatrickgrp.com/grants",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web browser",
  description:
    "Free tool that checks a Michigan homebuyer's profile (county, income, household size, buyer status, credit range) against 20+ state, county, city, federal, bank, and credit union down payment assistance programs and shows which ones they likely qualify for, instantly.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "RealEstateAgent",
    name: "The Patrick Group | Oak & Stone Real Estate",
    url: "https://www.thepatrickgrp.com",
  },
};

const programListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Michigan Homebuyer Grant and Down Payment Assistance Programs",
  description:
    "State, county, federal, bank, and credit union down payment assistance programs available to Michigan homebuyers, reviewed monthly.",
  dateModified: GRANTS_LAST_UPDATED_ISO,
  numberOfItems: programs.length,
  itemListElement: programs.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name} (${p.amount})`,
    url: p.url,
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background:
            "var(--ink)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
            Michigan Homebuyer Assistance
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Find Out Which Grants{" "}
            <span className="text-[var(--red)]">You Qualify For</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Michigan offers thousands of dollars in down payment assistance and
            grants for homebuyers. Answer a few questions and we&apos;ll show
            you which programs match your situation, instantly, for free.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 px-4 sm:px-6 bg-[var(--ink)] border-t border-white/5">
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
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-3xl mx-auto">
          <GrantWizard />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)]">
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
                desc: "Want to move forward? We'll connect you with an MSHDA-approved lender who specializes in DPA, at no cost to you.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-[var(--paper)] border border-[var(--line)] p-6"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--red)] text-white flex items-center justify-center text-xs font-bold mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold text-[var(--ink)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--ink-3)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Programs we check
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)]">
              Michigan Down Payment Assistance Programs
            </h2>
            <p className="text-[var(--ink-3)] text-sm mt-3 max-w-xl mx-auto">
              Government grants, bank-specific programs, and credit union offers.
              Eligibility depends on your income, location, and buyer status.
            </p>
            <p className="text-xs text-[var(--ink-3)] mt-3">
              Program list last updated {GRANTS_LAST_UPDATED}. Reviewed monthly
              against official program sources.
            </p>
          </div>
          <p className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest mb-3">Government &amp; County Programs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {govPrograms.map((p) => (
              <div
                key={p.id}
                className="bg-[var(--paper-2)] border border-[var(--line)] p-4 flex flex-col"
              >
                <p className="font-semibold text-[var(--ink)] text-sm">
                  {p.name}
                </p>
                <p className="text-[var(--red)] font-bold text-sm mt-1">
                  {p.amount}
                </p>
                <p className="text-xs text-[var(--ink-3)] mt-1 mb-2">
                  {regionTag[p.id] ?? ""}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--ink-3)] underline hover:text-[var(--ink)] transition-colors mt-auto"
                >
                  Official program page ↗
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest mb-3">Bank &amp; Credit Union Programs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bankPrograms.map((p) => (
              <div
                key={p.id}
                className="bg-[var(--paper-2)] border border-[var(--line)] p-4 flex flex-col"
              >
                <p className="font-semibold text-[var(--ink)] text-sm">
                  {p.name}
                </p>
                <p className="text-[var(--red)] font-bold text-sm mt-1">
                  {p.amount}
                </p>
                <p className="text-xs text-[var(--ink-3)] mt-1 mb-2">
                  {regionTag[p.id] ?? ""}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--ink-3)] underline hover:text-[var(--ink)] transition-colors mt-auto"
                >
                  Official program page ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
              Common questions
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)]">
              Grant &amp; DPA FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[var(--line)] pb-6">
                <h3 className="font-semibold text-[var(--ink)] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 bg-[var(--ink)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-3">
            Ready to get started?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl mb-4">
            Have Questions About Grants or DPA Programs?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Call or text Brad Patrick directly. He&apos;ll walk you through your
            options and connect you with a lender who can help, no cost, no
            pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:2487553545"
              className="bg-[var(--red)] text-white font-semibold px-8 py-4 text-sm hover:bg-[var(--red-deep)] transition-colors"
            >
              Call (248) 755-3545
            </a>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 text-sm hover:bg-[var(--paper)]/10 transition-colors"
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
