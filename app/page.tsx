import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate | The Patrick Group",
  description:
    "The Patrick Group — boutique real estate service for Southeast Michigan. Sarah Patrick, Principal Broker. Leading You Home.",
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
    icon: "chart",
    title: "Every Market Cycle",
    body: "Sarah Patrick has navigated the 2008 crash, the COVID spike, and the 2022 rate shock. That depth of experience shapes every pricing, offer, and negotiation decision we make.",
  },
  {
    icon: "users",
    title: "Boutique Team Model",
    body: "You always work with a senior agent. No hand-offs to junior staff. A team that outperforms individuals while keeping everything personal.",
  },
  {
    icon: "key",
    title: "Full Transaction Ecosystem",
    body: "We work with a vetted network of local lenders and title professionals. One trusted ecosystem from offer to close — no surprises. Contact us for our list of recommended service providers.",
  },
  {
    icon: "shield",
    title: "Unconditional Release Guarantee*",
    body: "If you're ever unhappy with our service, just say so in writing and we'll release you from your listing contract. No other team can offer this credibly.",
  },
  {
    icon: "megaphone",
    title: "Award-Winning Marketing",
    body: "Every listing gets professional photography, a custom property website, video on YouTube, and outreach to ~300 area agents before it hits the market.",
  },
];

const diffIcons: Record<string, React.ReactNode> = {
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#c70000]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#c70000]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  key: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#c70000]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#c70000]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  megaphone: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#c70000]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
};

const specialties = [
  {
    href: "/divorce-real-estate",
    icon: "scales",
    title: "Divorce Real Estate",
    desc: "Court-ordered sales, buyouts, and complex property division handled with discretion, speed, and expertise. A niche Zillow simply does not serve.",
  },
  {
    href: "/relocation",
    icon: "mappin",
    title: "Relocating to Michigan",
    desc: "Moving from Chicago, the East Coast, or out of state? We're your trusted local guide — before, during, and after the move.",
  },
  {
    href: "/selling",
    icon: "arrowup",
    title: "Move-Up Selling",
    desc: "Selling while buying at the same time? We've coordinated hundreds of simultaneous transactions. No surprises — just results.",
  },
  {
    href: "/downsizing",
    icon: "arrowdown",
    title: "Downsizing",
    desc: "Moving to a smaller home is a life transition, not just a transaction. We make it manageable — protecting your equity and working around your timeline.",
  },
  {
    href: "/estate-sales",
    icon: "document",
    title: "Estate & Probate Sales",
    desc: "Managing the sale of a loved one's home requires patience, legal awareness, and local expertise. We've guided families through this — with care and no added pressure.",
  },
];

const specialtyIcons: Record<string, React.ReactNode> = {
  scales: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 0L9 12m3-7.5L15 12m-9.75 0h13.5M12 21v-4.5m0 0a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  ),
  mappin: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  arrowup: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  ),
  arrowdown: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center"
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: copy ── */}
            <div>
              {/* Pre-headline eyebrow */}
              <p className="text-[#c70000] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-6">
                Southeast Michigan Real Estate
              </p>

              {/* H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Real Estate the Way
                <br />
                It{" "}
                <span className="text-[#c70000]">Should</span> Be Done.
              </h1>

              {/* Sub-headline */}
              <p className="text-white/70 text-lg sm:text-xl mb-10 leading-relaxed">
                Get more for your home sale. Find the right home before it hits
                Zillow. That&apos;s what deep Southeast Michigan relationships
                actually look like.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#c70000] shrink-0">
                    <path fillRule="evenodd" d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.897l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" clipRule="evenodd" />
                  </svg>
                  <span>
                    Buying soon?{" "}
                    <span className="underline underline-offset-2 group-hover:text-[#c70000]">
                      Join the Coming Soon VIP List
                    </span>{" "}
                    — see homes before Zillow does.
                  </span>
                </Link>
              </div>

              {/* Social proof badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-white/55 border border-white/15 rounded-full px-3 py-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#c70000]">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  Hour Detroit Real Estate All-Stars
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/55 border border-white/15 rounded-full px-3 py-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#c70000]">
                    <path fillRule="evenodd" d="M5.166 5.132A6.5 6.5 0 0115.5 8.232V9a1 1 0 002 0v-.768a8.5 8.5 0 00-13.178-7.085 1 1 0 001.344 1.485zM4.5 8.232a6.5 6.5 0 018.93 6.11A1 1 0 0115.41 15.5H4.59a1 1 0 001.98-1.158A6.5 6.5 0 014.5 8.232zM10 17a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  Real Producers Top 300
                </span>
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/team/sarah-patrick.jpg"
                  alt="Sarah Patrick, Principal Broker — The Patrick Group, Southeast Michigan Real Estate"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="50vw"
                />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 via-transparent to-transparent" />
                {/* Name plate */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif font-bold text-xl mb-0.5">Sarah Patrick</p>
                  <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold">Principal Broker / Owner</p>
                </div>
              </div>
            </div>

          </div>
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
                <span className="text-[#c70000] mb-4 block">{specialtyIcons[s.icon]}</span>
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
                <div className="shrink-0 mt-0.5 w-10 h-10 rounded-sm bg-[#c70000]/8 flex items-center justify-center">
                  {diffIcons[d.icon]}
                </div>
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
                Sarah Patrick is a licensed Principal Broker in Michigan.
                Brad Patrick brings 15+ years of real estate
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
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-sm">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#c70000]/40">
                  <Image
                    src="/team/sarah-patrick.jpg"
                    alt="Sarah Patrick, Principal Broker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold mb-0.5">Sarah Patrick</p>
                  <p className="text-[#c70000] text-xs uppercase tracking-widest mb-2">Principal Broker / Owner</p>
                  <p className="text-white/60 text-sm">Hour Detroit All-Stars · Real Producers Top 300</p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-sm">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#c70000]/40">
                  <Image
                    src="/team/brad-patrick.jpg"
                    alt="Brad Patrick, Realtor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold mb-0.5">Brad Patrick</p>
                  <p className="text-[#c70000] text-xs uppercase tracking-widest mb-2">Realtor®</p>
                  <p className="text-white/60 text-sm">15+ years · Mortgage background · Real Producers April 2026 Cover</p>
                </div>
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
