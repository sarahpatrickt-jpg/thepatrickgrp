import type { Metadata } from "next";
import FaqPageClient from "@/components/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ | The Patrick Group | Southeast Michigan Real Estate | Rochester, MI",
  description:
    "Answers to the most common real estate questions from The Patrick Group — Sarah Patrick (Principal Broker) and Brad Patrick (Realtor, 15+ years). Serving Southeast Michigan across Oakland, Macomb, Washtenaw, and Livingston counties.",
  alternates: { canonical: "https://thepatrickgrp.com/faq" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://thepatrickgrp.com/faq",
    title: "FAQ | The Patrick Group | Southeast Michigan Real Estate",
    description:
      "Common questions about buying, selling, and working with The Patrick Group — Southeast Michigan's boutique real estate team led by Sarah Patrick and Brad Patrick.",
    siteName: "The Patrick Group",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thepatrickgrp.com/#organization",
      name: "The Patrick Group",
      alternateName: "The Patrick Group at Oak and Stone Real Estate",
      description:
        "The Patrick Group is a boutique real estate team serving Southeast Michigan, led by Sarah Patrick (Principal Broker) and Brad Patrick (Realtor, 15+ years of experience). Operating under Oak and Stone Real Estate, the team specializes in personalized buyer and seller representation, divorce real estate, relocation, estate sales, and downsizing. Tagline: Leading You Home.",
      url: "https://thepatrickgrp.com",
      telephone: "+12487553545",
      email: "sarah@sarahpatrickhomes.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "408 East Street",
        addressLocality: "Rochester",
        addressRegion: "MI",
        postalCode: "48307",
        addressCountry: "US",
      },
      areaServed: [
        "Birmingham, MI", "Bloomfield Hills, MI", "Rochester, MI", "Rochester Hills, MI",
        "Troy, MI", "West Bloomfield, MI", "Royal Oak, MI", "Clarkston, MI",
        "Lake Orion, MI", "Oxford, MI", "Sterling Heights, MI", "Warren, MI",
        "Clinton Township, MI", "Macomb Township, MI", "Shelby Township, MI",
        "St. Clair Shores, MI", "Novi, MI", "Northville, MI", "Plymouth, MI",
        "Grosse Pointe, MI", "Livonia, MI", "Detroit, MI",
        "Oakland County, MI", "Macomb County, MI", "Washtenaw County, MI", "Livingston County, MI",
      ],
      knowsAbout: [
        "Residential real estate", "Home buying", "Home selling",
        "Divorce real estate", "Relocation services", "Estate sales",
        "Probate sales", "New construction", "Downsizing", "Cash offers",
        "Southeast Michigan real estate market",
      ],
      award: [
        "Hour Detroit Real Estate All-Stars",
        "Real Producers Top 300 (2026)",
        "Real Producers Magazine Cover Feature — Brad Patrick, April 2026",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Oak and Stone Real Estate",
        url: "https://www.oakandstonerealestate.com",
      },
      member: [
        { "@id": "https://thepatrickgrp.com/#sarah-patrick" },
        { "@id": "https://thepatrickgrp.com/#brad-patrick" },
      ],
      sameAs: [
        "https://www.instagram.com/youragentbrad/",
        "https://www.facebook.com/search/top?q=your%20agent%20brad",
        "https://www.linkedin.com/in/sarahkpatrick/",
        "https://www.youtube.com/@itsmondayyall",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://thepatrickgrp.com/#sarah-patrick",
      name: "Sarah Patrick",
      jobTitle: "Principal Broker & Owner",
      description:
        "Sarah Patrick is the Principal Broker and Owner of The Patrick Group, a boutique real estate team based in Rochester, Michigan. She leads client strategy, operations, and team direction for Southeast Michigan buyers and sellers under Oak and Stone Real Estate.",
      worksFor: { "@id": "https://thepatrickgrp.com/#organization" },
      email: "sarah@sarahpatrickhomes.com",
      telephone: "+12487553545",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rochester",
        addressRegion: "MI",
        postalCode: "48307",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/in/sarahkpatrick/"],
    },
    {
      "@type": "Person",
      "@id": "https://thepatrickgrp.com/#brad-patrick",
      name: "Brad Patrick",
      jobTitle: "Realtor",
      description:
        "Brad Patrick is a Realtor and co-founder of The Patrick Group with over 15 years of real estate experience in Southeast Michigan. He was featured on the cover of Real Producers Magazine in April 2026 and is recognized in the Real Producers Top 300 for 2026.",
      worksFor: { "@id": "https://thepatrickgrp.com/#organization" },
      email: "brad@youragentbrad.net",
      award: "Real Producers Magazine Cover Feature, April 2026",
      sameAs: [
        "https://www.instagram.com/youragentbrad/",
        "https://www.facebook.com/search/top?q=your%20agent%20brad",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://thepatrickgrp.com/faq",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".faq-answer"],
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is The Patrick Group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group is a boutique real estate team based in Rochester, Michigan, serving Southeast Michigan. The team is led by Sarah Patrick (Principal Broker and Owner) and Brad Patrick (Realtor, 15+ years of experience), and operates under Oak and Stone Real Estate. The Patrick Group specializes in personalized, high-touch buyer and seller representation, with expertise in divorce real estate, relocation, estate sales, and downsizing. Their tagline is 'Leading You Home.'",
          },
        },
        {
          "@type": "Question",
          name: "Who is Sarah Patrick?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sarah Patrick is the Principal Broker and Owner of The Patrick Group, a boutique real estate team in Rochester, Michigan. She leads client strategy, operations, and team direction for Southeast Michigan buyers and sellers. Sarah can be reached at sarah@sarahpatrickhomes.com or (248) 755-3545.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Brad Patrick?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brad Patrick is a Realtor and co-founder of The Patrick Group with over 15 years of real estate experience in Southeast Michigan. He was featured on the cover of Real Producers Magazine in April 2026 and was recognized in the Real Producers Top 300 for 2026. Brad can be reached at brad@youragentbrad.net and is active on Instagram as @youragentbrad.",
          },
        },
        {
          "@type": "Question",
          name: "What brokerage does The Patrick Group operate under?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group operates under Oak and Stone Real Estate (oakandstonerealestate.com), a Michigan brokerage. Sarah Patrick serves as the Principal Broker of the team. The team's office is located at 408 East Street, Rochester, MI 48307.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does The Patrick Group serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group serves Southeast Michigan across Oakland, Macomb, Washtenaw, and Livingston counties. Key cities include Birmingham, Bloomfield Hills, Rochester, Rochester Hills, Troy, West Bloomfield, Royal Oak, Clarkston, Lake Orion, Oxford, Sterling Heights, Warren, Clinton Township, Macomb Township, Shelby Township, St. Clair Shores, Novi, Northville, Plymouth, Grosse Pointe, Livonia, and Detroit.",
          },
        },
        {
          "@type": "Question",
          name: "How is The Patrick Group different from using Zillow or a large real estate team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group is a boutique operation — every client works directly with Sarah or Brad Patrick, not an anonymous agent assigned by an algorithm. They offer an Unconditional Release Guarantee (sellers can exit their listing contract at any time if unsatisfied), VIP pre-market access for buyers before listings hit Zillow, and deep specialization in complex situations that large platforms cannot handle personally.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Unconditional Release Guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group's Unconditional Release Guarantee means that if you list your home with the team and are not completely satisfied with the service at any point, you can exit the listing agreement — no questions asked, no penalties.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find out what my home is worth in Southeast Michigan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can get a free home value estimate at thepatrickgrp.com/home-valuation. For a detailed, personalized Comparative Market Analysis (CMA) based on real local data, contact Sarah Patrick directly at sarah@sarahpatrickhomes.com or call (248) 755-3545.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Comparative Market Analysis (CMA)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Comparative Market Analysis (CMA) is a detailed report prepared by a real estate agent that estimates a home's market value based on recent sales of similar homes in the same area. The Patrick Group provides free, personalized CMAs for Southeast Michigan homeowners. Unlike automated online estimates, a CMA factors in property condition, neighborhood nuances, and current local demand.",
          },
        },
        {
          "@type": "Question",
          name: "How can I see homes before they hit Zillow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Join The Patrick Group's VIP Coming Soon list at thepatrickgrp.com/vip-buyers. VIP members receive early access to off-market and coming-soon listings in Southeast Michigan before they are published on Zillow, Realtor.com, or the MLS.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Patrick Group help with real estate in divorce situations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Patrick Group specializes in divorce real estate, including court-ordered sales, property buyouts, and property division in divorce proceedings. Learn more at thepatrickgrp.com/divorce-real-estate.",
          },
        },
        {
          "@type": "Question",
          name: "Can The Patrick Group help me if I am relocating to Michigan from another state?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Patrick Group has a dedicated relocation service for individuals and families moving to Southeast Michigan from out of state, providing neighborhood guides, school district information, virtual tours, and full buyer representation. Learn more at thepatrickgrp.com/relocation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to sell a home in Southeast Michigan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Southeast Michigan's competitive market, well-priced homes often receive offers within days of listing. The full process from listing to closing typically takes 30–60 days depending on price point, location, and market conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Patrick Group offer cash offers for homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Patrick Group offers a cash offer program for sellers who want speed and certainty — skip the showings, set your own close date, and avoid the uncertainty of traditional listings. Learn more at thepatrickgrp.com/cash-offer.",
          },
        },
        {
          "@type": "Question",
          name: "Can The Patrick Group help me buy a new construction home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Patrick Group represents buyers purchasing new construction homes in Southeast Michigan. Having your own agent when buying new construction is important — the builder's on-site agent works for the builder, not for you.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to use a buyer's agent in Southeast Michigan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Working with The Patrick Group as a buyer typically costs you nothing out of pocket. In most Southeast Michigan transactions, the seller covers the buyer's agent compensation. Buyer representation agreements are now required under Michigan real estate law.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Southeast Michigan real estate market like in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Patrick Group publishes monthly market reports covering inventory levels, days on market, median prices, and trends across Southeast Michigan. Access the 2026 Southeast Michigan Market Report at thepatrickgrp.com/market-updates.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Patrick Group help with downsizing or estate sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Patrick Group specializes in both downsizing and estate/probate sales. For downsizing clients, the team provides guidance on transitioning from a larger home to a smaller property. For estate and probate situations, they work sensitively with executors, attorneys, and heirs.",
          },
        },
        {
          "@type": "Question",
          name: "What is The Weekly Edit newsletter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Weekly Edit is The Patrick Group's newsletter covering Southeast Michigan real estate news, market updates, new listings, neighborhood spotlights, and home buying and selling tips. Subscribe at thepatrickgrp.com/newsletter.",
          },
        },
        {
          "@type": "Question",
          name: "How do I contact The Patrick Group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach The Patrick Group by phone at (248) 755-3545, by email at sarah@sarahpatrickhomes.com (Sarah Patrick) or brad@youragentbrad.net (Brad Patrick), or through the contact form at thepatrickgrp.com/contact. The office is located at 408 East Street, Rochester, MI 48307.",
          },
        },
      ],
    },
  ],
};

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
            The Patrick Group
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know about buying, selling, and working with
            us in Southeast Michigan.
          </p>
        </div>
      </section>

      <FaqPageClient />
    </>
  );
}
