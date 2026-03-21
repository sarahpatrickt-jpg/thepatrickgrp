import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate | The Patrick Group",
  description:
    "The Patrick Group — boutique real estate service for Southeast Michigan. 26 years of experience. Sarah Patrick, Principal Broker. Leading You Home.",
  alternates: { canonical: "https://thepatrickgrp.com" },
};

const testimonials = [
  {
    quote:
      "Brad was not just our realtor, but our partner throughout the entire process. He went to bat for us — and we secured our dream home.",
    name: "Sabella Cascarelli",
    type: "Buyer",
  },
  {
    quote: "Sold in 18 hours.",
    name: "Linda Christoff",
    type: "Seller",
  },
  {
    quote:
      "Brad was great to work with as a first time home buyer! He was knowledgeable, patient, and just an overall nice guy.",
    name: "Jasmine Coleman",
    type: "First-Time Buyer",
  },
  {
    quote:
      "Sarah and Brad helped us find our HOME. They are amazing to work with — fun, knowledgeable and easy.",
    name: "Tracey Williams",
    type: "Buyer",
  },
];

const differentiators = [
  {
    icon: "🏆",
    title: "26 Years of Experience",
    body: "Sarah Patrick has navigated every market cycle since 2000 — the 2008 crash, the COVID spike, the 2022 rate shock. Experience like that doesn't come from Zillow.",
  },
  {
    icon: "🤝",
    title: "Referral-Based Business",
    body: "Most of our clients come from other happy clients. That's the highest trust signal in real estate — and the reason we don't need to buy leads.",
  },
  {
    icon: "🏡",
    title: "Boutique Team Model",
    body: "You always work with a senior agent. No hand-offs to junior staff. A team that outperforms individuals while keeping everything personal.",
  },
  {
    icon: "🔑",
    title: "Full Transaction Ecosystem",
    body: "We work with a vetted network of local lenders and title professionals. One trusted ecosystem from offer to close — no surprises. Contact us for our list of recommended service providers.",
  },
  {
    icon: "📜",
    title: "Unconditional Release Guarantee*",
    body: "If you're ever unhappy with our service, just say so in writing and we'll release you from your listing contract. No other team can offer this credibly.",
  },
  {
    icon: "📸",
    title: "Award-Winning Marketing",
    body: "Every listing gets professional photography, a custom property website, video on YouTube, and outreach to ~300 area agents before it hits the market.",
  },
];

const specialties = [
  {
    href: "/divorce-real-estate",
    icon: "⚖️",
    title: "Divorce Real Estate",
    desc: "Court-ordered sales, buyouts, and complex property division handled with discretion, speed, and expertise. A niche Zillow simply does not serve.",
  },
  {
    href: "/relocation",
    icon: "✈️",
    title: "Relocating to Michigan",
    desc: "Moving from Chicago, the East Coast, or out of state? We're your trusted local guide — before, during, and after the move.",
  },
  {
    href: "/selling",
    icon: "🏠",
    title: "Move-Up Selling",
    desc: "Selling while buying at the same time? We've coordinated hundreds of simultaneous transactions. No surprises — just results.",
  },
  {
    href: "/downsizing",
    icon: "📦",
    title: "Downsizing",
    desc: "Moving to a smaller home is a life transition, not just a transaction. We make it manageable — protecting your equity and working around your timeline.",
  },
  {
    href: "/estate-sales",
    icon: "📋",
    title: "Estate & Probate Sales",
    desc: "Managing the sale of a loved one's home requires patience, legal awareness, and local expertise. We've guided families through this — with care and no added pressure.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20">
          {/* Pre-headline eyebrow */}
          <p className="text-[#c70000] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-6">
            Southeast Michigan
          </p>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Real Estate the Way
            <br className="hidden sm:block" />
            It{" "}
            <span className="text-[#c70000]">Should</span> Be Done.
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Get more for your home sale. Find the right home before it hits
            Zillow. That&apos;s what 26 years of Southeast Michigan relationships
            actually looks like.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home-valuation"
              className="bg-[#c70000] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors shadow-lg"
            >
              What&apos;s My Home Worth?
            </Link>
            <a
              href="https://bradpatrick.oakandstonerealestate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/30 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Search Homes →
            </a>
          </div>

          {/* VIP teaser */}
          <div className="mt-6">
            <Link
              href="/vip-buyers"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-[#c70000] text-base">🔑</span>
              <span>
                Buying soon?{" "}
                <span className="underline underline-offset-2 group-hover:text-[#c70000]">
                  Join the Coming Soon VIP List
                </span>{" "}
                — see homes before Zillow does.
              </span>
            </Link>
          </div>

          {/* Social proof micro-line */}
          <p className="mt-6 text-white/40 text-sm">
            Hour Detroit Real Estate All-Stars &nbsp;·&nbsp; Real Producers Top
            300 &nbsp;·&nbsp; 26 Years in Metro Detroit
          </p>
        </div>

        {/* Scroll chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ═══ AWARDS STRIP ═══ */}
      <section className="bg-[#faf9f7] border-y border-gray-100 py-7">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            {[
              {
                label: "Recognized by",
                title: "Hour Detroit",
                sub: "Real Estate All-Stars",
              },
              {
                label: "Featured in",
                title: "Real Producers",
                sub: "Oakland County Top 300 · 2026",
              },
              {
                label: "Licensed since",
                title: "2000",
                sub: "26 Years · Every Market Cycle",
              },
              {
                label: "Business model",
                title: "Referral-Based",
                sub: "Clients Send Their Friends",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-12 bg-gray-200" />
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#c70000] font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="font-serif text-base font-bold text-[#1a1a1a]">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THREE PATHS / SPECIALTIES ═══ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              How can we help?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              We Specialize in Complex Situations
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Divorce, relocation, move-up, downsizing, or estate — we&apos;ve
              navigated all of it. If your situation is complicated, we&apos;re the
              right team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-gray-100 rounded-sm p-8 hover:shadow-lg hover:border-[#c70000]/30 transition-all bg-white block"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c70000] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-[#c70000] text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              What clients say
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Not Just a Realtor. A Partner.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm"
              >
                <svg
                  className="w-8 h-8 text-[#c70000]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#1a1a1a] text-base leading-relaxed mb-4 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#c70000] uppercase tracking-wider">
                    {t.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATORS ═══ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              The Patrick Group difference
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Why Clients Choose Us Over Zillow&apos;s Agents
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              We don&apos;t buy your information. You find us because someone you trust
              sent you here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4">
                <div className="text-2xl shrink-0 mt-0.5">{d.icon}</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">
                    {d.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM TEASER ═══ */}
      <section className="py-20 px-4 sm:px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
                Led by
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-5">
                Sarah &amp; Brad Patrick
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-5">
                Sarah Patrick has been a licensed Principal Broker in Michigan
                since 2000. Brad Patrick brings 15+ years of real estate
                experience on top of a prior career in mortgage lending.
                Together — with Christian Brown and Christian Wodtke — The
                Patrick Group is a team that outperforms individuals at every
                price point.
              </p>
              <p className="text-white/60 text-sm italic mb-6">
                Brad was featured on the cover of Real Producers Magazine, April 2026.
              </p>
              <Link
                href="/about"
                className="inline-block border border-[#c70000] text-[#c70000] px-6 py-3 text-sm font-semibold hover:bg-[#c70000] hover:text-white transition-colors"
              >
                Meet the Full Team →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <p className="font-serif text-lg font-bold mb-1">
                  Sarah Patrick
                </p>
                <p className="text-[#c70000] text-xs uppercase tracking-widest mb-3">
                  Principal Broker / Owner
                </p>
                <p className="text-white/60 text-sm">
                  26 years · Hour Detroit All-Stars · Top Producers Magazine
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <p className="font-serif text-lg font-bold mb-1">
                  Brad Patrick
                </p>
                <p className="text-[#c70000] text-xs uppercase tracking-widest mb-3">
                  Realtor® · Lead Buyer&apos;s Agent
                </p>
                <p className="text-white/60 text-sm">
                  15+ years · Mortgage background · Real Producers April 2026
                  Cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELLER CONVERSION CTA ═══ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Thinking about selling?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5">
            Find Out What Your Home Is Worth Today
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get your instant home valuation — then schedule a free listing
            consultation. We&apos;ll come to your home, walk through the market, and
            show you exactly what we&apos;ll do to get you the best possible outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home-valuation"
              className="bg-[#c70000] text-white font-bold text-base px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
            >
              Get My Free Home Valuation
            </Link>
            <Link
              href="/selling"
              className="border border-gray-300 text-[#1a1a1a] font-semibold text-base px-8 py-4 rounded-sm hover:border-[#c70000] hover:text-[#c70000] transition-colors"
            >
              How We Sell Homes →
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Unconditional Release Guarantee* — if you&apos;re not satisfied, we&apos;ll
            release you from your listing contract.
          </p>
          <p className="mt-2 text-xs text-gray-300">
            * Applies to active listings only. Once an offer has been accepted, the listing agreement can no longer be withdrawn.
          </p>
        </div>
      </section>

      {/* ═══ NEWSLETTER / LEAD MAGNET ═══ */}
      <section className="py-16 px-4 sm:px-6 bg-[#c70000]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3">
            Free resource
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Get the 2026 Southeast Michigan Market Report
          </h2>
          <p className="text-white/80 text-sm mb-2">
            Median sale prices, days on market, and year-over-year trends across Oakland, Macomb, Wayne, Washtenaw, and Livingston counties — straight from Realcomp.
          </p>
          <p className="text-white/60 text-xs mb-6">
            Plus monthly local intel: market shifts, featured listings, and real estate insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm rounded-sm bg-white text-[#1a1a1a] placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#1a1a1a] text-white font-semibold px-6 py-3 text-sm rounded-sm hover:bg-black transition-colors whitespace-nowrap"
            >
              Send Me the Report
            </button>
          </form>
          <p className="text-white/50 text-xs mt-3">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* ═══ PARTNERS STRIP ═══ */}
      <section className="py-12 px-4 sm:px-6 bg-[#faf9f7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">
            A complete transaction ecosystem
          </p>
          <p className="text-[#1a1a1a] font-medium mb-1">
            Trusted Local Lenders &amp; Title Professionals
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            We work with a vetted network of local mortgage and title partners who share our standards.{" "}
            <a href="tel:2487553545" className="text-[#c70000] hover:underline">
              Contact us for our list of recommended service providers.
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
