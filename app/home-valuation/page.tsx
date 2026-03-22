import type { Metadata } from "next";
import Link from "next/link";
import SierraValuationFrame from "@/components/SierraValuationFrame";

export const metadata: Metadata = {
  title: "Free Home Valuation — Southeast Michigan",
  description:
    "Find out what your Southeast Michigan home is worth. Free, no-obligation home valuation from The Patrick Group — deep local expertise, real data.",
  alternates: { canonical: "https://thepatrickgrp.com/home-valuation" },
};

const process = [
  {
    step: "01",
    title: "Enter Your Address",
    desc: "Tell us about your home. Takes less than 60 seconds.",
  },
  {
    step: "02",
    title: "Get Your Instant Estimate",
    desc: "We pull recent comparable sales and active listings in your neighborhood.",
  },
  {
    step: "03",
    title: "Schedule Your Free Consultation",
    desc: "We'll come to your home, walk through it, and give you a precise market analysis — not just a Zestimate.",
  },
  {
    step: "04",
    title: "Know Your Numbers",
    desc: "You'll leave the consultation knowing exactly what your home is worth, what to expect from the market, and what we'll do to maximize your proceeds.",
  },
];

const sellerTestimonials = [
  {
    quote: "Sold in 18 hours.",
    name: "Linda Christoff",
    type: "Seller",
  },
  {
    quote: "Brad was very professional, helpful and efficient in getting the house sold.",
    name: "Verified Client",
    type: "Seller",
  },
  {
    quote: "Brad was on top of the sale of the condo, kept me informed throughout. Very professional.",
    name: "Verified Client",
    type: "Condo Seller",
  },
];

export default function HomeValuationPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Seller Resources
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            What Is Your Home{" "}
            <span className="text-[#c70000]">Actually</span> Worth?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Zillow&apos;s Zestimate is a starting point — not a selling price. Enter
            your address for an instant estimate, then connect with an agent who
            knows your neighborhood — not just the data.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span>✓ No pressure, no obligation</span>
            <span>✓ Free listing consultation available</span>
            <span>✓ Same agent from start to close</span>
          </div>
        </div>
      </section>

      {/* VALUATION FORM */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Sierra Instant Home Valuation Tool */}
            <div className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
              <div className="px-8 pt-8 pb-4">
                <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-1">
                  Get Your Instant Home Valuation
                </h2>
                <p className="text-gray-500 text-sm">
                  Enter your address below — takes less than 60 seconds.
                </p>
              </div>
              <SierraValuationFrame />
            </div>

            {/* Why us */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">
                Why a Real Valuation Matters
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-[#c70000] font-bold text-xl shrink-0">→</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      Zestimates are off by 7–8% on average
                    </p>
                    <p className="text-sm text-gray-500">
                      That&apos;s $35,000–$56,000 on a $700k home. You need a number
                      you can make decisions with.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#c70000] font-bold text-xl shrink-0">→</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      Pricing strategy changes in every market
                    </p>
                    <p className="text-sm text-gray-500">
                      The 2026 market is different from 2021, 2022, or 2019.
                      You need an agent who has sold through all of them.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#c70000] font-bold text-xl shrink-0">→</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      First impressions determine final price
                    </p>
                    <p className="text-sm text-gray-500">
                      We&apos;ll walk through your home and tell you exactly what
                      matters — and what doesn&apos;t — before you spend a dollar on
                      updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-8 bg-[#1a1a1a] text-white p-6 rounded-sm">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
                  Our Guarantee
                </p>
                <p className="font-serif text-lg font-bold mb-2">
                  Unconditional Release*
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  If at any time you&apos;re unhappy with our service, simply provide
                  written notice and we will unconditionally release you from
                  your listing contract. No other team in Southeast Michigan can say
                  this credibly.
                </p>
                <p className="text-white/30 text-xs mt-3">
                  * Applies to active listings only. Once an offer has been accepted, the listing agreement can no longer be withdrawn.
                </p>
              </div>

              {/* Seller testimonials */}
              <div className="mt-6 space-y-4">
                {sellerTestimonials.map((t, i) => (
                  <div key={i} className="bg-[#faf9f7] p-4 rounded-sm border border-gray-100">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.name} · {t.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-10 text-center">
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#c70000]/10 text-[#c70000] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 px-4 sm:px-6 bg-[#c70000] text-white text-center">
        <p className="font-serif text-xl font-bold mb-2">
          Prefer to call or text?
        </p>
        <a
          href="tel:2487553545"
          className="text-2xl font-bold underline hover:no-underline"
        >
          248.755.3545
        </a>
        <p className="text-white/70 text-sm mt-1">
          Sarah Patrick, Principal Broker · Rochester, MI
        </p>
        <div className="mt-4">
          <Link
            href="/selling"
            className="text-white/80 text-sm underline hover:text-white"
          >
            Learn how we market and sell homes →
          </Link>
        </div>
      </section>
    </>
  );
}
