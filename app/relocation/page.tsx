import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relocating to Southeast Michigan | The Patrick Group",
  description:
    "Moving to Southeast Michigan from out of state? The Patrick Group is your trusted local guide. We help relocators from Chicago, the East Coast, and beyond find the right home.",
  keywords:
    "relocating to Southeast Michigan, moving to Rochester MI, relocation real estate agent Michigan, moving to Metro Detroit suburbs, relocating from Chicago to Michigan",
  alternates: { canonical: "https://thepatrickgrp.com/relocation" },
};

const areaGuide = [
  {
    area: "Rochester / Rochester Hills",
    type: "Our Home Base",
    highlights: "Downtown Rochester charm, Paint Creek Trail, Rochester Community School District, walkable village",
    priceRange: "$400k–$800k+",
  },
  {
    area: "Birmingham / Bloomfield Hills",
    type: "Luxury & Culture",
    highlights: "Upscale dining, vibrant art scene, Birmingham Public Schools, walkable downtown",
    priceRange: "$600k–$3M+",
  },
  {
    area: "Troy",
    type: "Corporate Hub",
    highlights: "Major employer base, Troy School District, easy freeway access, strong resale market",
    priceRange: "$350k–$700k+",
  },
  {
    area: "Shelby Township",
    type: "Space & Value",
    highlights: "Newer construction, larger lots, Utica Community Schools, proximity to local parks and recreation",
    priceRange: "$300k–$600k+",
  },
  {
    area: "Clarkston / Independence Twp",
    type: "Nature & Privacy",
    highlights: "Lakes, local trails, small-town historic feel, Clarkston Community Schools",
    priceRange: "$350k–$900k+",
  },
  {
    area: "Washington Township",
    type: "Room to Grow",
    highlights: "Acreage available, newer developments, Macomb County gem, quieter pace",
    priceRange: "$350k–$700k+",
  },
];

const relocatorProcess = [
  {
    title: "Start the Conversation Remotely",
    desc: "Most of our relocation clients start with a phone or video call. Tell us your timeline, priorities, and what you're leaving behind. We'll figure out the right neighborhoods together.",
  },
  {
    title: "Custom Neighborhood Matching",
    desc: "Based on your commute, schools, lifestyle, and price range, we'll identify 3-5 neighborhoods worth serious consideration — with honest trade-offs for each.",
  },
  {
    title: "Virtual Tours + Video Walk-Throughs",
    desc: "Can't visit yet? We'll FaceTime you through homes, give you our honest take on condition, street, and neighborhood — not just what's in the listing.",
  },
  {
    title: "Visit Trip Planning",
    desc: "When you're ready to visit, we'll pack your time efficiently. We know how to run a productive 2-day showing trip so you leave with real clarity.",
  },
  {
    title: "Remote Offer & Closing",
    desc: "Michigan allows remote closings. We've done them before. You can sign, close, and receive your keys without being physically present for every step.",
  },
];

const faqs = [
  {
    q: "What are the most popular Oakland County cities for out-of-state buyers?",
    a: "Rochester Hills, Clarkston, and Troy consistently rank as top choices for those relocating to Michigan. Rochester Hills offers walkable community features and easy freeway access. Clarkston features a historic downtown and a small-town feel. Troy offers strong employment access and a diverse housing stock. We'll help you narrow down your search based on your specific priorities — including commute times, school district boundaries, price point, and lifestyle preferences.",
  },
  {
    q: "How does the Michigan real estate market compare to Chicago or other Midwest cities?",
    a: "The Metro Detroit suburbs — particularly Oakland County — typically offer significantly more home per dollar than Chicago suburbs or major East Coast markets. You can often get a newer home with more square footage, a larger lot, and better school district access at a lower price point. The market is competitive but not as frenzied as coastal cities.",
  },
  {
    q: "Can I buy a home remotely without visiting Michigan first?",
    a: "Yes. We regularly assist buyers who make initial offers and even close entirely remotely. We provide detailed video walk-throughs, honest assessments of neighborhood and condition, and handle all paperwork digitally. However, we strongly recommend at least one in-person visit before making a final decision if your timeline allows.",
  },
  {
    q: "What are the property taxes like in Oakland County?",
    a: "Michigan property taxes vary by municipality and are based on the State Equalized Value (SEV) of the home. Generally, Oakland County property taxes are moderate compared to states like Illinois or New Jersey. We can give you an accurate tax estimate for any specific home you're considering.",
  },
  {
    q: "How long does the home buying process take when relocating?",
    a: "Most relocations close within 30–60 days from accepted offer. The full process — from initial conversation to closing — typically takes 2–4 months, depending on your search timeline and market conditions.",
  },
];

export default function RelocationPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Specialty Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Moving to Michigan?{" "}
            <span className="text-[#c70000]">You Need a Guide, Not a Stranger.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Buying a home from 800 miles away is stressful. You can&apos;t just drive
            by neighborhoods on a Sunday. You&apos;re trusting an agent you&apos;ve never
            met with the most important purchase of your life.
          </p>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">
            We&apos;ve been the local guide for relocators from Chicago, the East
            Coast, and across the country. We know Southeast Michigan deeply
            enough to tell you what the listing doesn&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2487553545"
              className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors text-center"
            >
              Start the Conversation: 248.755.3545
            </a>
            <a
              href="https://www.oakandstonerealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Browse Available Homes →
            </a>
          </div>
        </div>
      </section>

      {/* AREA GUIDE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Know the area
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Southeast Michigan: A Local&apos;s Guide
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              The suburbs north of Detroit are dramatically different from one
              another. Here&apos;s what you actually need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaGuide.map((area) => (
              <div
                key={area.area}
                className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6"
              >
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  {area.type}
                </p>
                <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">
                  {area.area}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {area.highlights}
                </p>
                <p className="text-sm font-medium text-[#1a1a1a]">
                  Typical range: {area.priceRange}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Price ranges are approximate and vary by property. Contact us for current market data.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              How it works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              How We Guide Relocators
            </h2>
          </div>
          <div className="space-y-8">
            {relocatorProcess.map((step, i) => (
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
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Common questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              Relocating to Southeast Michigan: Your Questions Answered
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
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
          Let&apos;s Start the Conversation.
        </h2>
        <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
          15 minutes on the phone will tell us whether we&apos;re the right fit — and
          give you a clearer picture of the market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-white text-[#c70000] font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
          >
            Call 248.755.3545
          </a>
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Browse Homes →
          </a>
        </div>
        <p className="text-white/60 text-xs mt-4">
          Sarah Patrick, Principal Broker · Southeast Michigan
        </p>
      </section>

      {/* FAIR HOUSING NOTICE */}
      <section className="py-6 px-4 sm:px-6 bg-[#faf9f7] border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            Oak &amp; Stone Real Estate is committed to compliance with all federal, state, and local fair housing laws. We do not discriminate against any person on the basis of race, color, religion, sex, disability, familial status, or national origin.
          </p>
        </div>
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
