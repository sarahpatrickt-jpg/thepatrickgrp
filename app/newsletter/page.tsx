import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Local Intel Newsletter",
  description:
    "Sign up for The Patrick Group Local Intel: monthly Southeast Michigan real estate updates, community news, and market insights from your local experts.",
  alternates: { canonical: "https://www.thepatrickgrp.com/newsletter" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/newsletter",
    title: "Local Intel Newsletter",
    description:
      "Sign up for The Patrick Group Local Intel: monthly Southeast Michigan real estate updates, community news, and market insights from your local experts.",
    siteName: "The Patrick Group",
  },
};

const contentPillars = [
  {
    icon: "📊",
    title: "Monthly Market Update",
    desc: "Median prices, days on market, and what's actually happening in Southeast Michigan, not national headlines.",
  },
  {
    icon: "📅",
    title: "Community Events",
    desc: "The best local events in Rochester, Birmingham, and beyond, because your next neighborhood connection might be at the Farmers Market.",
  },
  {
    icon: "🏡",
    title: "Featured Listing",
    desc: "One great home, highlighted each month, sometimes before it's publicly active.",
  },
  {
    icon: "🗺️",
    title: "Neighborhood Focus",
    desc: "Deep dives on Southeast Michigan communities, what makes each one different, and who thrives there.",
  },
  {
    icon: "💡",
    title: "Homeowner Resource",
    desc: "Seasonal maintenance tips, staging advice, financing insights, practical content for homeowners at every stage.",
  },
  {
    icon: "🤝",
    title: "Local Spotlight",
    desc: "We highlight trusted local businesses and service providers, because your home needs more than just an agent.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-4">
            Stay connected
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-5">
            The Patrick Group{" "}
            <span className="text-[var(--red)]">Local Intel</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            The real estate newsletter that actually tells you something. Monthly
            market data, community events, local insights, and none of the noise.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-[var(--paper-2)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--paper)] border border-[var(--line)] shadow-sm p-8">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-2">
              Subscribe. It&apos;s Free
            </h2>
            <p className="text-[var(--ink-3)] text-sm mb-6">
              Monthly updates, no spam, unsubscribe any time.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-[var(--paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-[var(--ink)]">
              What&apos;s in Every Issue
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <span className="text-2xl shrink-0">{pillar.icon}</span>
                <div>
                  <h3 className="font-semibold text-[var(--ink)] mb-1">{pillar.title}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
