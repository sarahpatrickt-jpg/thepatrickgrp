import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach The Patrick Group. Southeast Michigan real estate specialists. Call, text, or email Sarah or Brad Patrick. 408 East Street, Rochester, MI.",
  alternates: { canonical: "https://www.thepatrickgrp.com/contact" },
  openGraph: {
    type: "website",
    url: "https://www.thepatrickgrp.com/contact",
    title: "Contact Us",
    description:
      "Reach The Patrick Group. Southeast Michigan real estate specialists. Call, text, or email Sarah or Brad Patrick. 408 East Street, Rochester, MI.",
    siteName: "The Patrick Group",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact The Patrick Group",
  url: "https://www.thepatrickgrp.com/contact",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "The Patrick Group | Oak and Stone Real Estate",
    url: "https://www.thepatrickgrp.com",
    logo: "https://www.thepatrickgrp.com/logo.png",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6806,
      longitude: -83.1338,
    },
    areaServed: [
      "Oakland County, MI",
      "Macomb County, MI",
      "Wayne County, MI",
      "Washtenaw County, MI",
      "Livingston County, MI",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    employee: [
      {
        "@type": "Person",
        name: "Sarah Patrick",
        jobTitle: "Principal Broker",
        email: "sarah@sarahpatrickhomes.com",
        telephone: "+12487553545",
      },
      {
        "@type": "Person",
        name: "Brad Patrick",
        jobTitle: "Realtor",
        email: "brad@youragentbrad.net",
        telephone: "+12487553545",
      },
    ],
    sameAs: [
      "https://www.instagram.com/youragentbrad/",
      "https://www.linkedin.com/in/sarahkpatrick/",
      "https://www.facebook.com/search/top?q=your%20agent%20brad",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact The Patrick Group
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Call, text, or email, we respond promptly and without pressure.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left. Contact Cards */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                Reach Us Directly
              </h2>

              {/* Sarah */}
              <div className="border border-gray-100 rounded-sm p-6 bg-[#faf9f7]">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                  Principal Broker / Owner
                </p>
                <p className="font-serif text-xl font-bold text-[#1a1a1a] mb-3">
                  Sarah Patrick
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:sarah@sarahpatrickhomes.com"
                      className="text-[#c70000] hover:underline"
                    >
                      ✉ sarah@sarahpatrickhomes.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sarahkpatrick/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#c70000] transition-colors"
                    >
                      LinkedIn →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Brad */}
              <div className="border border-gray-100 rounded-sm p-6 bg-[#faf9f7]">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                  Realtor®
                </p>
                <p className="font-serif text-xl font-bold text-[#1a1a1a] mb-3">
                  Brad Patrick
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="tel:2487553545"
                      className="text-[#c70000] hover:underline"
                    >
                      📞 248.755.3545
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:brad@youragentbrad.net"
                      className="text-[#c70000] hover:underline"
                    >
                      ✉ brad@youragentbrad.net
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/youragentbrad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#c70000] transition-colors"
                    >
                      Instagram @youragentbrad →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/search/top?q=your%20agent%20brad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#c70000] transition-colors"
                    >
                      Facebook →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Office */}
              <div className="border border-gray-100 rounded-sm p-6 bg-[#faf9f7]">
                <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-1">
                  Office
                </p>
                <p className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">
                  Oak &amp; Stone Real Estate
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  408 East Street<br />
                  Rochester, MI 48307<br />
                  Licensed in Michigan
                </p>
                <a
                  href="https://www.oakandstonerealestate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-gray-500 hover:text-[#c70000] transition-colors"
                >
                  OakAndStoneRealEstate.com →
                </a>
              </div>

              {/* Quick links */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Quick Actions
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/home-valuation"
                    className="text-sm text-[#1a1a1a] border border-gray-200 px-4 py-3 rounded-sm hover:border-[#c70000] hover:text-[#c70000] transition-colors"
                  >
                    → Request a Free Home Valuation
                  </Link>
                  <Link
                    href="/vip-buyers"
                    className="text-sm text-[#1a1a1a] border border-gray-200 px-4 py-3 rounded-sm hover:border-[#c70000] hover:text-[#c70000] transition-colors"
                  >
                    → Join the VIP Coming Soon Buyers List
                  </Link>
                  <Link
                    href="/faq"
                    className="text-sm text-[#1a1a1a] border border-gray-200 px-4 py-3 rounded-sm hover:border-[#c70000] hover:text-[#c70000] transition-colors"
                  >
                    → Browse Our FAQ
                  </Link>
                </div>
              </div>
            </div>

            {/* Right. Message Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Fair Housing */}
      <section className="py-6 px-4 sm:px-6 bg-[#faf9f7] border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            The Patrick Group | Oak &amp; Stone Real Estate is committed to
            compliance with all federal, state, and local fair housing laws. We
            do not discriminate on the basis of race, color, religion, sex,
            national origin, disability, familial status, or any other
            protected class. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
