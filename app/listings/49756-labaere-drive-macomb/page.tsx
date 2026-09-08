/**
 * Featured listing landing page: 49756 Labaere Drive, Macomb Township.
 * MLS# 20261072213 (Realcomp) · Coming Soon, activates 09/10/2026.
 *
 * Static route deliberately shadows /listings/[id] so this URL is shareable
 * for social, sign riders, and the "Featured Listing" nav tab.
 *
 * Photos are the listing's own set, stored in public/images/listings/49756-labaere.
 * The MLS watermark bands were cropped off; attribution to the listing office stays
 * in the disclaimer at the foot of the page. Listing facts are from the MLS sheet.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ListingGallery from "@/components/ListingGallery";

const ADDRESS = "49756 Labaere Drive";
const CITY_LINE = "Macomb Township, MI 48044";
const PRICE = "$550,000";

const PHOTO_DIR = "/images/listings/49756-labaere";

const PHOTOS: string[] = [
  "01-exterior-twilight",
  "02-exterior-front",
  "03-foyer-staircase",
  "04-entry",
  "05-office",
  "06-living-room",
  "07-family-room-fireplace",
  "08-living-to-kitchen",
  "09-kitchen",
  "10-kitchen-island",
  "11-dining",
  "12-powder-room",
  "13-laundry",
  "14-primary-bedroom",
  "15-primary-bath-vanity",
  "16-primary-bath-sauna",
  "17-bedroom-two",
  "18-bedroom-three",
  "19-full-bath",
  "20-full-bath-vanity",
  "21-lower-level",
  "22-lower-level-fireplace",
  "23-wet-bar",
  "24-wet-bar-wide",
  "25-backyard-gazebo",
  "26-floor-plan-main",
  "27-floor-plan-second",
].map((n) => `${PHOTO_DIR}/${n}.jpg`);

const FACTS: { label: string; value: string }[] = [
  { label: "Price", value: PRICE },
  { label: "Bedrooms", value: "4" },
  { label: "Bathrooms", value: "2 full · 2 half" },
  { label: "Above-Grade Sq Ft", value: "2,222" },
  { label: "Total Finished Sq Ft", value: "3,043" },
  { label: "Garage", value: "3-car attached" },
  { label: "Style", value: "Colonial, 2 story" },
  { label: "Year Built", value: "2010" },
  { label: "Lot", value: "72 x 122 (0.2 acre)" },
  { label: "Subdivision", value: "Brook Run" },
  { label: "School District", value: "Chippewa Valley Schools" },
  { label: "MLS#", value: "20261072213" },
];

const HIGHLIGHTS: string[] = [
  "Renovated primary bath with an oversized glass shower and a built-in sauna",
  "Finished basement with a stacked-stone wet bar, fireplace feature wall, and a newly added half bath",
  "Kitchen with granite counters, center island, and stainless appliances, open to the main living area",
  "Hardwood floors and crown molding through the main level",
  "Backyard built for entertaining: covered gazebo, stamped concrete patio, and a fully fenced yard",
  "First-floor laundry and a private front office behind French doors",
  "3-car attached garage with direct entry",
];

const ROOMS: { room: string; size: string; level: string }[] = [
  { room: "Primary Bedroom", size: "15'1\" x 19'6\"", level: "Second" },
  { room: "Primary Bathroom", size: "11'8\" x 9'", level: "Second" },
  { room: "Bedroom", size: "12'4\" x 11'7\"", level: "Second" },
  { room: "Bedroom", size: "11'2\" x 11'7\"", level: "Second" },
  { room: "Bedroom", size: "11'6\" x 11'9\"", level: "Second" },
  { room: "Full Bathroom", size: "9'7\" x 9'6\"", level: "Second" },
  { room: "Kitchen", size: "12'5\" x 14'11\"", level: "Main" },
  { room: "Dining Area", size: "9'8\" x 17'2\"", level: "Main" },
  { room: "Great Room", size: "19'9\" x 15'2\"", level: "Main" },
  { room: "Living Area / Office", size: "11' x 13'3\"", level: "Main" },
  { room: "Laundry Room", size: "6'4\" x 7'10\"", level: "Main" },
  { room: "Garage", size: "27'5\" x 22'7\"", level: "Main" },
];

const AREA_POINTS: { title: string; body: string }[] = [
  {
    title: "Parks and Recreation",
    body: "Macomb Corners Park sits a few minutes away with ball fields, trails, a splash pad, and a dog park. The Macomb Township Recreation Center on Broughton Road offers a fitness center, gym, and community programming. Stony Creek Metropark, one of the region's largest Metroparks with a lake, beaches, and miles of trails, is roughly a 20 minute drive northwest.",
  },
  {
    title: "Shopping and Dining",
    body: "The Mall at Partridge Creek, an open-air shopping and dining district, is about 10 minutes south. The Hall Road (M-59) corridor carries the area's major retail, grocery, and restaurant options, and the growing 23 Mile and Romeo Plank corridors keep everyday errands close to home.",
  },
  {
    title: "Location and Access",
    body: "The home sits near 22 Mile and Romeo Plank in southern Macomb Township, with M-53 (Van Dyke) a short drive west for north-south travel and Hall Road connecting east to I-94. Downtown Detroit is approximately 35 miles south.",
  },
  {
    title: "Schools",
    body: "This address is served by Chippewa Valley Schools. Verify address-specific school assignments directly with the district.",
  },
];

const CANONICAL = "https://www.thepatrickgrp.com/listings/49756-labaere-drive-macomb";

export const metadata: Metadata = {
  title: `${ADDRESS}, Macomb Township | Coming Soon ${PRICE}`,
  description: `Coming Soon 09/10/2026: 4 bedroom, 2 full and 2 half bath colonial in Brook Run Sub, Macomb Township. 3,043 finished sq ft, 3-car garage, finished basement with wet bar, primary bath with sauna. ${PRICE}.`,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    title: `${ADDRESS}, ${CITY_LINE} · ${PRICE}`,
    description:
      "Coming Soon 09/10/2026. 4 bed, 2.2 bath colonial with a finished basement, sauna, and gazebo in Brook Run Sub.",
    images: [{ url: `${PHOTO_DIR}/01-exterior-twilight.jpg` }],
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${ADDRESS}, ${CITY_LINE}`,
    url: CANONICAL,
    datePosted: "2026-09-08",
    about: {
      "@type": "SingleFamilyResidence",
      name: `${ADDRESS}`,
      numberOfBedrooms: 4,
      numberOfFullBathrooms: 2,
      numberOfPartialBathrooms: 2,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 3043,
        unitCode: "FTK",
      },
      yearBuilt: 2010,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS,
        addressLocality: "Macomb Township",
        addressRegion: "MI",
        postalCode: "48044",
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      price: 550000,
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      availabilityStarts: "2026-09-10",
    },
    image: PHOTOS.map((p) => `https://www.thepatrickgrp.com${p}`),
    provider: {
      "@type": "RealEstateAgent",
      name: "The Patrick Group at Oak & Stone Real Estate",
      telephone: "+1-248-755-3545",
      url: "https://www.thepatrickgrp.com",
    },
  };
}

export default function LabaereLandingPage() {
  return (
    <main style={{ backgroundColor: "var(--paper)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p
          className="uppercase tracking-[0.22em] text-[10px] mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
        >
          Featured Listing · Coming Soon · September 10, 2026
        </p>
        <h1
          className="font-display text-4xl md:text-6xl leading-tight"
          style={{ color: "var(--ink)" }}
        >
          {ADDRESS}
        </h1>
        <p
          className="font-editorial italic text-xl md:text-2xl mt-3"
          style={{ color: "var(--ink-3)" }}
        >
          {CITY_LINE} · Brook Run Sub
        </p>

        {/* Stat row */}
        <div
          className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-px"
          style={{ backgroundColor: "var(--line)", border: "1px solid var(--line)" }}
        >
          {[
            { v: PRICE, l: "List Price" },
            { v: "4", l: "Bedrooms" },
            { v: "2.2", l: "Bathrooms" },
            { v: "3,043", l: "Finished Sq Ft" },
            { v: "3-Car", l: "Attached Garage" },
          ].map((s) => (
            <div key={s.l} className="p-5" style={{ backgroundColor: "var(--paper)" }}>
              <div className="font-display text-2xl md:text-3xl" style={{ color: "var(--ink)" }}>
                {s.v}
              </div>
              <div
                className="uppercase tracking-[0.22em] text-[10px] mt-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <ListingGallery photos={PHOTOS} address={ADDRESS} />
      </section>

      {/* Overview */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p
          className="uppercase tracking-[0.22em] text-[10px] mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
        >
          The Home
        </p>
        <h2 className="font-display text-3xl mb-6" style={{ color: "var(--ink)" }}>
          A colonial that has been genuinely taken care of.
        </h2>
        <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            Built in 2010 and meticulously maintained since, this 4 bedroom Brook Run colonial
            delivers over 3,000 finished square feet across three levels. The main floor opens from
            a two-story foyer into a great room with a gas fireplace, hardwood floors, and crown
            molding, flowing into a granite kitchen with a center island and a sunny dining area
            overlooking the backyard. French doors off the foyer create a private office or sitting
            room, and first-floor laundry keeps the everyday routine on one level.
          </p>
          <p>
            Upstairs, the primary suite runs the full depth of the home and pairs a large walk-in
            closet with a fully renovated bath: dual vanities, an oversized glass shower, and a
            built-in sauna. Three additional bedrooms share a second renovated full bath with dual
            sinks and marble-look tile.
          </p>
          <p>
            The finished lower level is the bonus space that sells this house: a stacked-stone wet
            bar with a beverage fridge, a fireplace feature wall, room for a gym and a media area,
            and a newly added half bath. Outside, a covered gazebo and stamped concrete patio
            anchor a fully fenced, professionally landscaped yard.
          </p>
        </div>
      </section>

      {/* Highlights + Facts */}
      <section className="py-16" style={{ backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p
              className="uppercase tracking-[0.22em] text-[10px] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
            >
              Highlights
            </p>
            <ul className="space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-3 text-[16px]" style={{ color: "var(--ink-2)" }}>
                  <span style={{ color: "var(--red)" }}>·</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="uppercase tracking-[0.22em] text-[10px] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
            >
              At a Glance
            </p>
            <dl>
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="flex justify-between py-2.5 text-[15px]"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <dt style={{ color: "var(--ink-3)" }}>{f.label}</dt>
                  <dd className="font-medium text-right" style={{ color: "var(--ink)" }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Room dimensions */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p
          className="uppercase tracking-[0.22em] text-[10px] mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
        >
          Room Dimensions
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[15px]" style={{ minWidth: 420 }}>
            <thead>
              <tr
                className="text-left uppercase tracking-[0.15em] text-[10px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
              >
                <th className="py-2 pr-4 font-normal">Room</th>
                <th className="py-2 pr-4 font-normal">Size</th>
                <th className="py-2 font-normal">Level</th>
              </tr>
            </thead>
            <tbody>
              {ROOMS.map((r, i) => (
                <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
                  <td className="py-2.5 pr-4" style={{ color: "var(--ink)" }}>
                    {r.room}
                  </td>
                  <td className="py-2.5 pr-4" style={{ color: "var(--ink-2)" }}>
                    {r.size}
                  </td>
                  <td className="py-2.5" style={{ color: "var(--ink-3)" }}>
                    {r.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] mt-4" style={{ color: "var(--ink-3)" }}>
          Dimensions are approximate. Basement adds roughly 821 finished square feet including a
          rec area, wet bar, and half bath. Summer taxes $4,557, winter taxes $1,348.
        </p>
      </section>

      {/* Area */}
      <section className="py-16" style={{ backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="uppercase tracking-[0.22em] text-[10px] mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
          >
            The Area
          </p>
          <h2 className="font-display text-3xl mb-8" style={{ color: "var(--ink)" }}>
            Life in Macomb Township
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="relative w-full aspect-[16/9]" style={{ border: "1px solid var(--line)" }}>
              <Image
                src="/images/cities/macomb-township-mi.png"
                alt="Macomb Township, Michigan"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
              Macomb Township has been one of Michigan's fastest-growing communities for two
              decades. Its newer housing stock, larger lots, and steadily developing retail
              corridors have made it one of the most sought-after addresses in Macomb County, and
              Brook Run sits in the established southern section near 22 Mile and Romeo Plank.{" "}
              <Link
                href="/neighborhoods/macomb-township-mi"
                className="underline"
                style={{ color: "var(--red)" }}
              >
                Read our full Macomb Township guide
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
            {AREA_POINTS.map((a) => (
              <div key={a.title}>
                <h3 className="font-display text-xl mb-2" style={{ color: "var(--ink)" }}>
                  {a.title}
                </h3>
                <p className="text-[16px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p
          className="uppercase tracking-[0.22em] text-[10px] mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
        >
          Showings Begin September 10
        </p>
        <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "var(--ink)" }}>
          Get in before it hits the open market.
        </h2>
        <p className="font-editorial italic text-lg mb-8" style={{ color: "var(--ink-3)" }}>
          Listed by Brad Patrick, Realtor®, The Patrick Group at Oak & Stone Real Estate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+12487553545"
            className="px-8 py-4 font-medium"
            style={{ backgroundColor: "var(--red)", color: "#fff" }}
          >
            Call (248) 755-3545
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 font-medium"
            style={{ border: "1px solid var(--ink)", color: "var(--ink)" }}
          >
            Request Showing Details
          </Link>
        </div>
        <p className="text-[12px] mt-10" style={{ color: "var(--ink-3)" }}>
          MLS# 20261072213 · Listing courtesy of Oak and Stone Real Estate. Information deemed
          reliable but not guaranteed. Buyer to verify all information.
        </p>
      </section>
    </main>
  );
}
