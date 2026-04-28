import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MapMI from "@/components/MapMI";

export const metadata: Metadata = {
  title: "Southeast Michigan Real Estate | The Patrick Group",
  description:
    "The Patrick Group — boutique real estate service for Southeast Michigan. Sarah Patrick, Principal Broker. Leading You Home.",
  alternates: { canonical: "https://thepatrickgrp.com" },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const COUNTIES = [
  {
    name: "Oakland",
    cities: [
      { name: "Birmingham",      slug: "birmingham-mi" },
      { name: "Bloomfield Hills",slug: "bloomfield-hills-mi" },
      { name: "Bloomfield Twp",  slug: "bloomfield-township-mi" },
      { name: "Rochester",       slug: "rochester-mi" },
      { name: "Rochester Hills", slug: "rochester-hills-mi" },
      { name: "Troy",            slug: "troy-mi" },
      { name: "West Bloomfield", slug: "west-bloomfield-mi" },
      { name: "Royal Oak",       slug: "royal-oak-mi" },
      { name: "Clarkston",       slug: "clarkston-mi" },
      { name: "Lake Orion",      slug: "lake-orion-mi" },
      { name: "Oxford",          slug: "oxford-mi" },
      { name: "Novi",            slug: "novi-mi" },
    ],
  },
  {
    name: "Macomb",
    cities: [
      { name: "Sterling Heights",slug: "sterling-heights-mi" },
      { name: "Warren",          slug: "warren-mi" },
      { name: "Clinton Twp",     slug: "clinton-township-mi" },
      { name: "Macomb Twp",      slug: "macomb-township-mi" },
      { name: "Shelby Twp",      slug: "shelby-township-mi" },
      { name: "St. Clair Shores",slug: "st-clair-shores-mi" },
    ],
  },
  {
    name: "Wayne",
    cities: [
      { name: "Grosse Pointe",   slug: "grosse-pointe-mi" },
      { name: "Northville",      slug: "northville-mi" },
      { name: "Plymouth",        slug: "plymouth-mi" },
      { name: "Livonia",         slug: "livonia-mi" },
      { name: "Detroit",         slug: "detroit-mi" },
      { name: "Romulus",         slug: "romulus-mi" },
    ],
  },
  {
    name: "Washtenaw",
    cities: [
      { name: "Ann Arbor",       slug: "ann-arbor-mi" },
      { name: "Ypsilanti",       slug: "ypsilanti-mi" },
      { name: "Saline",          slug: "saline-mi" },
      { name: "Dexter",          slug: "dexter-mi" },
      { name: "Chelsea",         slug: "chelsea-mi" },
      { name: "Milan",           slug: "milan-mi" },
    ],
  },
  {
    name: "Livingston",
    cities: [
      { name: "Brighton",        slug: "brighton-mi" },
      { name: "Howell",          slug: "howell-mi" },
      { name: "Hartland",        slug: "hartland-mi" },
      { name: "Whitmore Lake",   slug: "whitmore-lake-mi" },
    ],
  },
  {
    name: "Genesee",
    cities: [
      { name: "Grand Blanc",     slug: "grand-blanc-mi" },
      { name: "Fenton",          slug: "fenton-mi" },
      { name: "Linden",          slug: "linden-mi" },
      { name: "Goodrich",        slug: "goodrich-mi" },
    ],
  },
  {
    name: "Monroe",
    cities: [
      { name: "Monroe",          slug: "monroe-mi" },
      { name: "Dundee",          slug: "dundee-mi" },
    ],
  },
];

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Every Market Cycle",
    body: "Sarah Patrick has navigated the 2008 crash, the COVID spike, and the 2022 rate shock. That depth of experience shapes every pricing, offer, and negotiation decision we make.",
  },
  {
    num: "02",
    title: "Boutique Team Model",
    body: "You always work with a senior agent. No hand-offs to junior staff. A team that outperforms individuals while keeping everything personal.",
  },
  {
    num: "03",
    title: "Full Transaction Ecosystem",
    body: "We work with a vetted network of local lenders and title professionals. One trusted ecosystem from offer to close — no surprises.",
  },
  {
    num: "04",
    title: "Unconditional Release",
    body: "If you're ever unhappy with our service, say so in writing and we'll release you from your listing contract. No other team can offer this credibly.",
  },
  {
    num: "05",
    title: "Award-Winning Marketing",
    body: "Every listing gets professional photography, a custom property website, video on YouTube, and outreach to ~300 area agents before it hits the market.",
  },
];

const SPECIALTIES = [
  {
    href: "/divorce-real-estate",
    num: "I",
    title: "Divorce Real Estate",
    desc: "Court-ordered sales, buyouts, and complex property division handled with discretion, speed, and expertise. A niche Zillow simply does not serve.",
  },
  {
    href: "/relocation",
    num: "II",
    title: "Relocating to Michigan",
    desc: "Moving from Chicago, the East Coast, or out of state? We're your trusted local guide — before, during, and after the move.",
  },
  {
    href: "/selling",
    num: "III",
    title: "Move-Up Selling",
    desc: "Selling while buying at the same time? We've coordinated hundreds of simultaneous transactions. No surprises — just results.",
  },
  {
    href: "/downsizing",
    num: "IV",
    title: "Downsizing",
    desc: "Moving to a smaller home is a life transition, not just a transaction. We make it manageable — protecting your equity and working around your timeline.",
  },
  {
    href: "/estate-sales",
    num: "V",
    title: "Estate & Probate",
    desc: "Managing the sale of a loved one's home requires patience, legal awareness, and local expertise. We've guided families through this — with care and no added pressure.",
  },
];

const TESTIMONIALS = [
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
      "Brad was great to work with as a first-time home buyer! He was knowledgeable, patient, and just an overall nice guy.",
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

const JOURNAL = [
  {
    slug: "spring-2026-southeast-michigan-market-update",
    label: "Market Update",
    num: "01",
    title: "The 2026 Southeast Michigan Market Report",
    excerpt:
      "Oakland, Macomb & Wayne counties: where prices are, what's moving, and how the spring selling season is playing out.",
    date: "Apr 2026",
    readTime: "8 min",
    large: true,
  },
  {
    slug: "why-birmingham-keeps-appreciating",
    label: "Neighborhood",
    num: "02",
    title: "Why Birmingham Keeps Appreciating",
    excerpt:
      "A walkable downtown isn't just a lifestyle feature — it's a durable value driver that's held through every cycle we've seen.",
    date: "Mar 2026",
    readTime: "5 min",
    large: false,
  },
  {
    slug: "buyers-map-to-grosse-pointe",
    label: "Buyer Tips",
    num: "03",
    title: "A Buyer's Map to Grosse Pointe",
    excerpt:
      "Five distinct communities, each with a different feel and price point. Here's how to navigate them before you tour a single home.",
    date: "Feb 2026",
    readTime: "7 min",
    large: false,
  },
];

// ─── Shared style helpers ───────────────────────────────────────────────────

const eyebrow =
  "uppercase tracking-[0.22em] text-[11px] font-medium" as const;

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>

      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--paper)" }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--line-2) 1px, transparent 1px), linear-gradient(90deg, var(--line-2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Text Side ── */}
            <div>
              {/* Eyebrow */}
              <p
                className={eyebrow}
                style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
              >
                Southeast Michigan Real Estate
              </p>

              {/* H1 */}
              <h1
                className="font-display mt-5"
                style={{
                  fontSize: "clamp(60px, 7.5vw, 96px)",
                  lineHeight: "0.92",
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                }}
              >
                Leading you
                <br />
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>
                  home.
                </em>
              </h1>

              {/* Lede */}
              <p
                className="font-editorial italic mt-8"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  lineHeight: "1.55",
                  color: "var(--ink-2)",
                  maxWidth: 520,
                }}
              >
                Southeast Michigan&apos;s boutique real estate team — for buyers,
                sellers, and every complex situation in between.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="https://bradpatrick.oakandstonerealestate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors"
                  style={{
                    backgroundColor: "var(--red)",
                    color: "#FDFBF7",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Search Homes
                </a>
                <Link
                  href="/home-valuation"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors hover:bg-ink hover:text-paper"
                  style={{
                    border: "1px solid var(--ink)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.1em",
                  }}
                >
                  What&apos;s My Home Worth?
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-12 pt-10" style={{ borderTop: "1px solid var(--line)" }}>
                {[
                  { num: "40", label: "Cities Served" },
                  { num: "7",  label: "Counties" },
                  { num: "25+",label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display"
                      style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "var(--red)" }}
                    >
                      {stat.num}
                    </p>
                    <p
                      className={eyebrow + " mt-1"}
                      style={{
                        color: "var(--ink-3)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "9px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Caveat aside */}
              <p
                className="font-script mt-5"
                style={{
                  fontSize: "20px",
                  color: "var(--red)",
                  transform: "rotate(-1.5deg)",
                  display: "inline-block",
                }}
              >
                Deep roots. Real results.
              </p>
            </div>

            {/* ── Map Side ── */}
            <div className="hidden lg:flex items-center justify-center">
              <MapMI />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  COMMUNITIES BY COUNTY
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-16 border-y"
        style={{
          backgroundColor: "var(--paper-2)",
          borderColor: "var(--line)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Communities We Serve
            </p>
            <h2
              className="font-display mt-3"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1", letterSpacing: "-0.01em" }}
            >
              40 Cities Across{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>7 Counties</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10">
            {COUNTIES.map((county) => (
              <div key={county.name}>
                <p
                  className={eyebrow + " mb-4 pb-2"}
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {county.name}
                </p>
                <ul className="space-y-2">
                  {county.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/neighborhoods/${city.slug}`}
                        className="text-sm transition-colors hover:underline"
                        style={{ color: "var(--ink-2)", textUnderlineOffset: "3px" }}
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §3  CURRENTLY SHOWING  (3 featured listings)
          TODO: Wire to Sierra/MLS IDX feed — replace placeholder cards
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className={eyebrow}
                style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
              >
                Currently Showing
              </p>
              <h2
                className="font-display mt-3"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.01em" }}
              >
                Featured{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>Listings</em>
              </h2>
            </div>
            <a
              href="https://bradpatrick.oakandstonerealestate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline shrink-0"
              style={{ color: "var(--red)", textUnderlineOffset: "3px" }}
            >
              View all active listings →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                area: "Birmingham",
                bed: 4, bath: 3,
                price: "$875,000",
                tag: "Just Listed",
                img: null,
              },
              {
                area: "Troy",
                bed: 3, bath: 2,
                price: "$549,000",
                tag: "Open Sunday",
                img: null,
              },
              {
                area: "West Bloomfield",
                bed: 5, bath: 4,
                price: "$1,125,000",
                tag: "New Price",
                img: null,
              },
            ].map((listing, i) => (
              <a
                key={i}
                href="https://bradpatrick.oakandstonerealestate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ border: "1px solid var(--line)", backgroundColor: "var(--paper-2)" }}
              >
                {/* Image placeholder */}
                <div
                  className="relative overflow-hidden"
                  style={{ paddingBottom: "66%", backgroundColor: "var(--paper-3)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  {/* Tag */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1"
                    style={{
                      backgroundColor: "var(--ink)",
                      color: "var(--paper)",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {listing.tag}
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className={eyebrow}
                    style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}
                  >
                    {listing.area}, MI
                  </p>
                  <p
                    className="font-display mt-2"
                    style={{ fontSize: "22px", color: "var(--ink)" }}
                  >
                    {listing.price}
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--ink-3)" }}
                  >
                    {listing.bed} bd · {listing.bath} ba
                  </p>
                  <p
                    className="mt-4 text-sm font-medium group-hover:underline"
                    style={{ color: "var(--red)", textUnderlineOffset: "3px" }}
                  >
                    View listing →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §4  THE PATRICK GROUP DIFFERENCE  (dark section)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              The Patrick Group Difference
            </p>
            <h2
              className="font-display mt-4"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "1",
                letterSpacing: "-0.02em",
                color: "#FDFBF7",
              }}
            >
              Why clients{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>choose us</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.num}
                className="p-8"
                style={{
                  borderTop: "1px solid rgba(253,251,247,0.12)",
                  borderLeft: i > 0 ? "1px solid rgba(253,251,247,0.08)" : "none",
                }}
              >
                <p
                  className={eyebrow + " mb-5"}
                  style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "10px" }}
                >
                  {d.num}
                </p>
                <h3
                  className="font-display mb-4"
                  style={{ fontSize: "20px", color: "#FDFBF7", lineHeight: "1.1" }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(253,251,247,0.55)" }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §5  COMPLEX SITUATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Specialties
            </p>
            <h2
              className="font-display mt-3"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "1",
                letterSpacing: "-0.01em",
              }}
            >
              We Specialize in{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>Complex Situations</em>
            </h2>
            <p
              className="font-editorial italic mt-4"
              style={{ fontSize: "18px", color: "var(--ink-2)", maxWidth: 560 }}
            >
              Divorce, relocation, move-up, downsizing, estate — if your situation is
              complicated, we&apos;re the right team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SPECIALTIES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block p-8 transition-all"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--paper)",
                }}
              >
                <p
                  className="font-editorial italic mb-4"
                  style={{ fontSize: "28px", color: "var(--red)", lineHeight: "1" }}
                >
                  {s.num}
                </p>
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: "17px", color: "var(--ink)", lineHeight: "1.2" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--ink-3)" }}>
                  {s.desc}
                </p>
                <p
                  className="text-xs font-medium tracking-wider uppercase group-hover:underline"
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-mono, monospace)",
                    letterSpacing: "0.15em",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  SARAH & BRAD
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <p
                className={eyebrow}
                style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
              >
                The Team
              </p>
              <h2
                className="font-display mt-4"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: "1",
                  letterSpacing: "-0.02em",
                }}
              >
                Sarah &amp;{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>Brad</em>
              </h2>
              <p
                className="font-editorial italic mt-2"
                style={{ fontSize: "20px", color: "var(--ink-2)" }}
              >
                Patrick
              </p>

              <p
                className="mt-8 leading-relaxed"
                style={{ fontSize: "16px", color: "var(--ink-2)", maxWidth: 500 }}
              >
                Sarah Patrick is a licensed Principal Broker in Michigan. Brad Patrick
                brings 15+ years of real estate experience on top of a prior career in
                mortgage lending. Together — with Christian Brown and Christian Wodtke —
                The Patrick Group is a team that outperforms at every price point.
              </p>

              {/* Real Producers callout */}
              <div
                className="mt-8 p-6 inline-block"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--paper-2)",
                }}
              >
                <p
                  className={eyebrow}
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "9px",
                  }}
                >
                  Featured Cover
                </p>
                <p
                  className="font-display mt-2"
                  style={{ fontSize: "16px", color: "var(--ink)" }}
                >
                  Real Producers Magazine
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--ink-3)" }}
                >
                  Brad Patrick · April 2026
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase hover:underline"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "var(--font-mono, monospace)",
                    letterSpacing: "0.15em",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Meet the full team →
                </Link>
              </div>
            </div>

            {/* Team cards */}
            <div className="space-y-4">
              {[
                {
                  src: "/team/sarah-patrick.jpg",
                  name: "Sarah Patrick",
                  title: "Principal Broker / Owner",
                  awards: "Hour Detroit All-Stars · Real Producers Top 300",
                },
                {
                  src: "/team/brad-patrick.jpg",
                  name: "Brad Patrick",
                  title: "Realtor®",
                  awards: "15+ years · Mortgage background · Real Producers April 2026",
                },
                {
                  src: "/team/christian-brown.jpg",
                  name: "Christian Brown",
                  title: "Team Member",
                  awards: "",
                },
                {
                  src: "/team/christian-wodtke.jpg",
                  name: "Christian Wodtke",
                  title: "Team Member",
                  awards: "",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-5 p-5"
                  style={{ border: "1px solid var(--line)", backgroundColor: "var(--paper-2)" }}
                >
                  <div className="relative shrink-0 w-14 h-14 overflow-hidden rounded-full" style={{ outline: "2px solid var(--red)", outlineOffset: "2px" }}>
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display" style={{ fontSize: "16px", color: "var(--ink)" }}>
                      {member.name}
                    </p>
                    <p
                      className={eyebrow + " mt-0.5"}
                      style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}
                    >
                      {member.title}
                    </p>
                    {member.awards && (
                      <p className="text-xs mt-1" style={{ color: "var(--ink-3)" }}>
                        {member.awards}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §7  TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-y" style={{ backgroundColor: "var(--paper-2)", borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              What Clients Say
            </p>
            <h2
              className="font-display mt-3"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "1",
                letterSpacing: "-0.01em",
              }}
            >
              Not just a realtor.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>A partner.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--paper)",
                }}
              >
                {/* Opening mark */}
                <p
                  className="font-editorial"
                  style={{ fontSize: "64px", lineHeight: "0.6", color: "var(--red)", opacity: 0.2, marginBottom: 12 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </p>
                <p
                  className="font-editorial italic"
                  style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--ink)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                  <p
                    className="font-display"
                    style={{ fontSize: "15px", color: "var(--ink)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className={eyebrow + " mt-1"}
                    style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}
                  >
                    {t.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--ink-2)", textUnderlineOffset: "3px" }}
            >
              Read all client reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §8  FROM THE JOURNAL
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className={eyebrow}
                style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
              >
                From the Journal
              </p>
              <h2
                className="font-display mt-3"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: "1",
                  letterSpacing: "-0.01em",
                }}
              >
                Market intel,{" "}
                <em style={{ color: "var(--red)", fontStyle: "italic" }}>straight talk.</em>
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-sm font-medium hover:underline shrink-0"
              style={{ color: "var(--red)", textUnderlineOffset: "3px" }}
            >
              All articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {JOURNAL.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className={`group block ${article.large ? "lg:col-span-2" : ""}`}
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--paper-2)",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    paddingBottom: article.large ? "42%" : "56%",
                    backgroundColor: "var(--paper-3)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                </div>

                <div className="p-7">
                  <p
                    className={eyebrow}
                    style={{
                      color: "var(--ink-3)",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "9px",
                    }}
                  >
                    Journal · {article.num} · {article.label}
                  </p>
                  <h3
                    className="font-display mt-3 group-hover:underline"
                    style={{
                      fontSize: article.large ? "clamp(22px, 2.5vw, 30px)" : "20px",
                      color: "var(--ink)",
                      lineHeight: "1.15",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="mt-3 leading-relaxed"
                    style={{ fontSize: "14px", color: "var(--ink-3)" }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <p
                      className={eyebrow}
                      style={{
                        color: "var(--ink-3)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "9px",
                      }}
                    >
                      {article.date}
                    </p>
                    <span style={{ color: "var(--line)" }}>·</span>
                    <p
                      className={eyebrow}
                      style={{
                        color: "var(--ink-3)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "9px",
                      }}
                    >
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §9  VALUATION CTA  (dark section)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p
            className={eyebrow}
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Thinking About Selling?
          </p>
          <h2
            className="font-display mt-5"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
              color: "#FDFBF7",
            }}
          >
            Find out what your{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>home is worth</em>{" "}
            today.
          </h2>

          <p
            className="font-editorial italic mt-8"
            style={{ fontSize: "20px", lineHeight: "1.6", color: "rgba(253,251,247,0.65)", maxWidth: 560, margin: "2rem auto 0" }}
          >
            Get your instant home valuation — then schedule a free listing consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/home-valuation"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-wider uppercase transition-colors"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Get My Free Valuation
            </Link>
            <Link
              href="/selling"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-wider uppercase transition-colors hover:bg-paper hover:text-ink"
              style={{
                border: "1px solid rgba(253,251,247,0.25)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              How We Sell Homes →
            </Link>
          </div>

          {/* Unconditional Release callout */}
          <p
            className="font-editorial italic mt-10"
            style={{ fontSize: "16px", color: "rgba(253,251,247,0.4)" }}
          >
            Unconditional Release Guarantee — if you&apos;re not satisfied, we&apos;ll release
            you from your listing contract in writing.
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: "rgba(253,251,247,0.2)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.05em" }}
          >
            * Applies to active listings only. Once an offer has been accepted, the
            listing agreement can no longer be withdrawn.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Newsletter strip
      ══════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ backgroundColor: "var(--red)" }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p
            className={eyebrow}
            style={{ color: "rgba(253,251,247,0.7)", fontFamily: "var(--font-mono, monospace)", fontSize: "10px" }}
          >
            Free Resource
          </p>
          <h2
            className="font-display mt-4"
            style={{ fontSize: "clamp(24px, 3vw, 34px)", color: "#FDFBF7", lineHeight: "1.1" }}
          >
            The 2026 Southeast Michigan Market Report
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(253,251,247,0.75)" }}>
            Median prices, days on market, and year-over-year trends across Oakland,
            Macomb, Wayne, Washtenaw, and Livingston counties — straight from Realcomp.
          </p>
          <form
            action="/api/subscribe"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 mt-6 max-w-sm mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm focus:outline-none"
              style={{ backgroundColor: "#FDFBF7", color: "var(--ink)" }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
              style={{
                backgroundColor: "var(--ink)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.1em",
              }}
            >
              Send It
            </button>
          </form>
          <p className="mt-3 text-xs" style={{ color: "rgba(253,251,247,0.45)" }}>
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

    </div>
  );
}
