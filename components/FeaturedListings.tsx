/**
 * FeaturedListings — A curated grid of 6 featured homes for sale.
 *
 * Server component: pulls from the cached IDX data synced nightly.
 * No client-side fetching. No search UI. No pagination.
 *
 * Picks 6 listings from the 8 boutique cities, only homes with a real photo,
 * sorted by price descending so the most impressive ones lead.
 *
 * All "View Details" links go to the external Oak & Stone search site —
 * this section is a hook, not a destination.
 */

import Image from "next/image";
import Link from "next/link";

import { getAllListings, type Listing } from "@/data/listings";

const BOUTIQUE_CITIES = new Set<string>([
  "birmingham-mi",
  "rochester-hills-mi",
  "rochester-mi",
  "troy-mi",
  "bloomfield-hills-mi",
  "bloomfield-township-mi",
  "northville-mi",
  "clarkston-mi",
  "shelby-township-mi",
  "royal-oak-mi",
  "west-bloomfield-mi",
  "plymouth-mi",
]);

const OAK_AND_STONE_SEARCH = "https://bradpatrick.oakandstonerealestate.com/";

/**
 * Day-of-year used to deterministically rotate the featured set each day.
 * Same 6 homes within a day, different 6 tomorrow.
 */
function dayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

function pickFeatured(count = 6): Listing[] {
  const all = getAllListings();

  // Eligibility: $600k+ luxury inventory in our boutique markets, with a photo
  const eligible = all.filter(
    (l) =>
      BOUTIQUE_CITIES.has(l.slug) &&
      l.status === "active" &&
      l.listPrice >= 600000 &&
      l.beds > 0 &&
      l.baths > 0 &&
      l.imageUrl,
  );

  if (eligible.length <= count) return eligible;

  // Build a pool sized to give a 5-7 day rotation cycle
  const poolSize = Math.min(count * 7, eligible.length);
  const pool = [...eligible]
    .sort((a, b) => b.listPrice - a.listPrice)
    .slice(0, poolSize);

  // Rotate the pool by day-of-year, then take the first `count`
  // De-duped by city so we don't show two from the same city.
  const offset = dayOfYear() % pool.length;
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];

  const seenCities = new Set<string>();
  const picked: Listing[] = [];

  for (const l of rotated) {
    if (!seenCities.has(l.slug)) {
      picked.push(l);
      seenCities.add(l.slug);
      if (picked.length === count) break;
    }
  }

  // Top up if not enough distinct cities in the pool today
  if (picked.length < count) {
    for (const l of rotated) {
      if (!picked.includes(l)) {
        picked.push(l);
        if (picked.length === count) break;
      }
    }
  }

  return picked;
}

function formatPrice(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

interface FeaturedListingsProps {
  /** Eyebrow text above the heading */
  eyebrow?: string;
  /** Heading (red italic word will be the last word) */
  heading?: string;
  /** Subhead under the heading */
  subhead?: string;
  /** How many listings (default 6) */
  count?: number;
  /** Background variant — "paper" (cream) or "ink" (dark) */
  variant?: "paper" | "ink";
}

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

export default function FeaturedListings({
  eyebrow: eyebrowText = "Currently Showing",
  heading = "Featured Homes for Sale",
  subhead = "A curated look at homes on the market right now across our SE Michigan service area. Updated nightly from the MLS.",
  count = 6,
  variant = "paper",
}: FeaturedListingsProps) {
  const featured = pickFeatured(count);

  if (featured.length === 0) return null;

  const isDark = variant === "ink";
  const sectionBg = isDark ? "var(--ink)" : "var(--paper)";
  const headingColor = isDark ? "#FDFBF7" : "var(--ink)";
  const cardBg = isDark ? "rgba(253,251,247,0.04)" : "var(--paper)";
  const cardBorder = isDark ? "rgba(253,251,247,0.1)" : "var(--line)";
  const subheadColor = isDark ? "rgba(253,251,247,0.55)" : "var(--ink-2)";
  const labelColor = isDark ? "rgba(253,251,247,0.45)" : "var(--ink-3)";
  const addressColor = isDark ? "rgba(253,251,247,0.7)" : "var(--ink-3)";
  const detailColor = isDark ? "#FDFBF7" : "var(--ink)";

  return (
    <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: sectionBg }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={eyebrow}
            style={{ color: labelColor, fontFamily: "var(--font-mono, monospace)" }}
          >
            {eyebrowText}
          </p>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: "1.05",
              letterSpacing: "-0.01em",
              color: headingColor,
            }}
          >
            {heading}
          </h2>
          <p
            className="font-editorial italic mt-4 mx-auto"
            style={{ fontSize: "17px", color: subheadColor, maxWidth: 520 }}
          >
            {subhead}
          </p>
        </div>

        {/* Listings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing) => (
            <Link
              key={listing.id}
              href={`/listings/${listing.id}`}
              className="group block"
              style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={listing.imageUrl}
                  alt={listing.address}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <p
                  className={eyebrow}
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "9px",
                  }}
                >
                  {listing.city}, MI
                </p>

                <h3
                  className="font-display mt-2 group-hover:underline"
                  style={{
                    fontSize: "20px",
                    color: detailColor,
                    lineHeight: "1.2",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {listing.address}
                </h3>

                <p
                  className="font-display mt-2"
                  style={{
                    fontSize: "24px",
                    color: "var(--red)",
                    lineHeight: "1",
                  }}
                >
                  {formatPrice(listing.listPrice)}
                </p>

                <div
                  className="flex items-center gap-4 mt-3 pt-3 text-sm"
                  style={{ borderTop: `1px solid ${cardBorder}`, color: addressColor }}
                >
                  <span>
                    <strong style={{ color: detailColor }}>{listing.beds}</strong> bd
                  </span>
                  <span>
                    <strong style={{ color: detailColor }}>{listing.baths}</strong> ba
                  </span>
                  {listing.sqft > 0 && (
                    <span>
                      <strong style={{ color: detailColor }}>
                        {listing.sqft.toLocaleString()}
                      </strong>{" "}
                      sqft
                    </span>
                  )}
                </div>

                <p
                  className={eyebrow + " mt-4 group-hover:underline"}
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-mono, monospace)",
                    letterSpacing: "0.12em",
                    textUnderlineOffset: "3px",
                  }}
                >
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={OAK_AND_STONE_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-sm font-medium tracking-wide uppercase transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--red)",
              color: "#FDFBF7",
              fontFamily: "var(--font-mono, monospace)",
              letterSpacing: "0.12em",
            }}
          >
            Search All Listings →
          </a>
          <p
            className="mt-3 text-xs"
            style={{
              color: labelColor,
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            Full MLS search powered by Oak &amp; Stone Real Estate
          </p>
        </div>
      </div>
    </section>
  );
}
