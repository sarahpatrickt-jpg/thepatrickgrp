import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet The Patrick Group Team | Southeast Michigan Real Estate",
  description:
    "Meet Sarah Patrick, Brad Patrick, Christian Brown, Christian Wodtke, and the rest of The Patrick Group — Southeast Michigan's boutique real estate team. Multiple awards, results-driven service.",
  alternates: { canonical: "https://thepatrickgrp.com/about" },
};

const team = [
  {
    name: "Sarah Patrick",
    title: "Principal Broker / Owner",
    photo: "/team/sarah-patrick.jpg",
    phone: "248.755.3545",
    email: "sarah@sarahpatrickhomes.com",
    bio: `Sarah Patrick is the Principal Broker and Owner of Oak and Stone Real Estate and the driving force behind The Patrick Group — one of Southeast Michigan's most recognized real estate teams. With over 26 years of experience navigating every market cycle Metro Detroit has seen, Sarah has built a reputation on results and relationships.

A consecutive recipient of the Hour Detroit Real Estate All-Stars honor and a featured broker in Top Producers Magazine, Sarah's credentials speak for themselves. But what her clients remember most is the experience: bespoke, attentive service from an agent who genuinely knows the market — and genuinely cares about the outcome.

As a broker-owner, Sarah brings a level of accountability to every transaction that a typical agent simply cannot offer. Whether she's guiding a family through a move-up purchase, navigating a sensitive divorce situation, or helping out-of-state buyers find their place in Southeast Michigan, her approach is the same: knowledgeable, calm, and entirely focused on you.`,
    credentials: [
      "Principal Broker / Owner — Oak and Stone Real Estate",
      "Licensed since 2000",
      "Hour Detroit Real Estate All-Stars — multiple years",
      "Top Producers Magazine — February 2022 Feature",
      "Award-winning service — Hour Detroit All-Stars",
    ],
  },
  {
    name: "Brad Patrick",
    title: "Realtor®",
    photo: "/team/brad-patrick-2024.jpg",
    phone: "248.755.3545",
    email: "Brad@youragentbrad.net",
    bio: `Brad Patrick brings a rare dual perspective to real estate: he started his career in the mortgage industry, which means he understands financing at the level most agents never reach. After graduating from Ferris State University and spending years in mortgages, refinancing, and debt consolidation, Brad made the natural move into real estate — and has spent 15+ years helping buyers and sellers throughout Southeast Michigan ever since.

As a Realtor with The Patrick Group and a featured agent in Real Producers Magazine — including the April 2026 cover — Brad is recognized as one of Southeast Michigan's top producers. His approach is built on deep market knowledge, patience, and a genuine commitment to fighting for his clients. Whether navigating a competitive multiple-offer situation or coordinating the simultaneous buy-sell of a move-up client, Brad treats every transaction like a partnership, not a paycheck.

Outside of real estate, Brad enjoys spending time with family, riding his Harley, and playing golf.`,
    credentials: [
      "Realtor® — The Patrick Group / Oak and Stone Real Estate",
      "15+ years Southeast Michigan real estate",
      "Mortgage lending background (Ferris State University)",
      "Hour Detroit Real Estate All-Stars — multiple years",
      "Real Producers Magazine — April 2026",
      "Oakland County Real Producers Top 300 — 2026",
    ],
  },
  {
    name: "Christian Brown",
    title: "Realtor®",
    photo: "/team/christian-brown.jpg",
    phone: "248.890.7952",
    email: "MyrealtorBrown@gmail.com",
    bio: `Christian Brown joined The Patrick Group with real estate in his DNA. Growing up around the industry gave him an understanding of what clients truly need — not just the transaction, but the peace of mind that comes with an agent who is genuinely in your corner.

Christian is committed to making sure clients are well-prepared, well-informed, and never left wondering what comes next. In an industry where trust is everything, Christian's approach is straightforward: earn it, protect it, and make every client feel like their decision matters as much to him as it does to them.`,
    credentials: [
      "Realtor® — The Patrick Group / Oak and Stone Real Estate",
      "Southeast Michigan specialist",
    ],
  },
  {
    name: "Christian Wodtke",
    title: "Realtor® · Senior Banker, Rocket Mortgage",
    photo: "/team/christian-wodtke.jpg",
    phone: "248.648.5078",
    email: "",
    bio: `Christian Wodtke brings a rare dual capability to The Patrick Group: he is both a licensed Realtor and the team's dedicated refinance loan officer. In a business where most agents stop at the sale, Christian gives clients a resource that follows them through the full lifecycle of homeownership — including what comes after closing.

As a refinance specialist, Christian helps homeowners tap into their equity, improve their rate, or restructure their mortgage to better meet their financial goals. His fluency in both real estate and lending means he can identify opportunities that most agents simply aren't equipped to see. Whether a client is weighing a cash-out refinance, navigating a rate change, or just wondering if now is the right time to act — Christian gives them a straight answer.`,
    credentials: [
      "Licensed Realtor® — The Patrick Group / Oak and Stone Real Estate",
      "Senior Banker — Rocket Mortgage | NMLS #3030",
      "NMLS #2699419",
      "Southeast Michigan real estate & lending specialist",
    ],
  },
];

const pressFeatures = [
  {
    outlet: "Hour Detroit Magazine",
    feature: "Real Estate All-Stars",
    agent: "Sarah Patrick",
    link: null,
    year: "Multiple Years",
  },
  {
    outlet: "Real Producers Magazine",
    feature: "Oakland County Top 300",
    agent: "The Patrick Group",
    link: null,
    year: "2026",
  },
  {
    outlet: "Real Producers Magazine",
    feature: "Real Producers April 2026",
    agent: "Brad Patrick",
    link: null,
    year: "April 2026",
  },
  {
    outlet: "Top Producers Magazine",
    feature: "Broker Feature",
    agent: "Sarah Patrick",
    link: "https://issuu.com/tcsotty/docs/feb_2022_oakland_county_issuu/s/14586699",
    year: "February 2022",
  },
];

const values = [
  {
    title: "Success",
    desc: "Our success is measured by your success.",
  },
  {
    title: "Exceptional",
    desc: "We believe in excellence — we strive to be exceptional.",
  },
  {
    title: "Teamwork",
    desc: "We believe in teamwork — we share in order to succeed.",
  },
  {
    title: "Skill",
    desc: "We are continually sharpening our real estate knowledge to better serve you.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            Our Team
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            We&apos;re The Patrick Group.{" "}
            <span className="text-[#c70000]">Southeast Michigan&apos;s Boutique Team.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A boutique real estate team built on results and relationships. We
            do our job the way it was supposed to be done — and our clients
            remember that.
          </p>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-12 px-4 sm:px-6 bg-[#faf9f7] border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl text-[#1a1a1a] italic leading-relaxed">
            &ldquo;Oak &amp; Stone Real Estate is committed to delivering a personalized,
            boutique brokerage experience rooted in the human side of real
            estate. We measure our success by our clients&apos; success.&rdquo;
          </p>
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${
                i < team.length - 1 ? "pb-16 border-b border-gray-100" : ""
              }`}
            >
              {/* Card */}
              <div className="md:col-span-1">
                <div className="bg-[#1a1a1a] text-white rounded-sm overflow-hidden">
                  {/* Photo — shows when file exists in public/team/, falls back to initials */}
                  {member.photo ? (
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={member.photo}
                        alt={`${member.name} — ${member.title}, The Patrick Group, Southeast Michigan Real Estate`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="px-6 pt-6">
                      <div className="w-16 h-16 rounded-full bg-[#c70000]/20 text-[#c70000] text-2xl font-bold flex items-center justify-center font-serif">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                  <h2 className="font-serif text-xl font-bold mb-1">{member.name}</h2>
                  <p className="text-[#c70000] text-xs uppercase tracking-widest mb-4">
                    {member.title}
                  </p>
                  <div className="space-y-1">
                    <a
                      href={`tel:${member.phone.replace(/\./g, "")}`}
                      className="block text-sm text-white/70 hover:text-white"
                    >
                      📞 {member.phone}
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="block text-sm text-white/70 hover:text-white break-all"
                      >
                        ✉ {member.email}
                      </a>
                    )}
                  </div>
                  {member.credentials && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                        Credentials
                      </p>
                      <ul className="space-y-1">
                        {member.credentials.map((c, ci) => (
                          <li key={ci} className="text-xs text-white/60 flex gap-1">
                            <span className="text-[#c70000] shrink-0">·</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  </div>{/* end p-6 */}
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  {member.bio.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-gray-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              What we stand for
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#c70000] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {v.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-1">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS & AWARDS */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
              Recognition
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
              Press &amp; Awards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pressFeatures.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#faf9f7] border border-gray-100 p-5 rounded-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#c70000]/10 text-[#c70000] flex items-center justify-center shrink-0">
                  🏆
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {p.outlet} · {p.year}
                  </p>
                  <p className="font-semibold text-[#1a1a1a]">{p.feature}</p>
                  <p className="text-sm text-gray-500">{p.agent}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#c70000] hover:underline mt-1 inline-block"
                    >
                      View feature →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
          A quick call with Brad or Sarah is the best place to start. No commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home-valuation"
            className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Get My Free Home Valuation
          </Link>
          <a
            href="tel:2487553545"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Call 248.755.3545
          </a>
        </div>
        <p className="mt-6 text-white/50 text-sm">
          <Link href="/reviews" className="hover:text-white underline underline-offset-2 transition-colors">
            See what our clients say →
          </Link>
        </p>
      </section>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "The Patrick Group / Oak and Stone Real Estate",
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
            areaServed: ["Southeast Michigan"],
            employee: team.map((t) => ({
              "@type": "Person",
              name: t.name,
              jobTitle: t.title,
              telephone: t.phone,
              email: t.email,
              ...(t.photo ? { image: `https://thepatrickgrp.com${t.photo}` } : {}),
            })),
          }),
        }}
      />
    </>
  );
}
