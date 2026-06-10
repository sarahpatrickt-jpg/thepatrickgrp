/**
 * /listings/[id]. Single listing detail page.
 *
 * Shows full photo gallery, key specs, and a CTA to view the listing on Oak & Stone
 * for additional details or to schedule a showing.
 *
 * Data: pulled from /data/listings.ts (synced nightly from Spark API).
 *
 * MichRIC® Compliance: no raw data export, all photos served from MLS-provided URLs,
 * external link goes to the approved Oak & Stone Real Estate interface.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getListingById } from "@/data/listings";
import ListingGallery from "@/components/ListingGallery";

interface PageProps {
  params: Promise<{ id: string }>;
}

const OAK_AND_STONE_SEARCH = "https://bradpatrick.oakandstonerealestate.com/";

function fmtPrice(n: number) {
  return "$" + n.toLocaleString("en-US");
}

function fmtNumber(n: number) {
  return n.toLocaleString("en-US");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    return { title: "Listing Not Found" };
  }

  return {
    title: `${listing.address}, ${listing.city}, MI, ${fmtPrice(listing.listPrice)}`,
    description: `${listing.beds} bed, ${listing.baths} bath home for sale in ${listing.city}, MI. Listed at ${fmtPrice(listing.listPrice)}.`,
    alternates: {
      canonical: `https://www.thepatrickgrp.com/listings/${listing.id}`,
    },
    openGraph: listing.imageUrl
      ? {
          type: "website",
          title: `${listing.address}, ${listing.city}, MI`,
          description: `${listing.beds}bd / ${listing.baths}ba · ${fmtPrice(listing.listPrice)}`,
          images: [{ url: listing.imageUrl }],
        }
      : undefined,
  };
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) notFound();

  // Use full gallery if available, otherwise just the primary hero
  const photos = listing.photos && listing.photos.length > 0
    ? listing.photos
    : listing.imageUrl
    ? [listing.imageUrl]
    : [];

  const statusLabel =
    listing.status === "active"
      ? "Active"
      : listing.status === "pending"
      ? "Pending"
      : "Sold";

  const statusBg =
    listing.status === "active"
      ? "#dcfce7"
      : listing.status === "pending"
      ? "#fef3c7"
      : "#e5e7eb";

  const statusFg =
    listing.status === "active"
      ? "#166534"
      : listing.status === "pending"
      ? "#92400e"
      : "#374151";

  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>

      {/* Breadcrumb */}
      <div className="pt-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <p
          className="text-xs"
          style={{
            color: "var(--ink-3)",
            fontFamily: "var(--font-mono, monospace)",
            letterSpacing: "0.1em",
          }}
        >
          <Link href="/" className="hover:underline">Home</Link>
          {" / "}
          <Link href="/buying" className="hover:underline">Buy</Link>
          {" / "}
          <span style={{ color: "var(--ink)" }}>{listing.city}</span>
        </p>
      </div>

      {/* Hero / Address / Price */}
      <section className="pt-8 pb-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: statusBg,
                color: statusFg,
                letterSpacing: "0.1em",
              }}
            >
              {statusLabel}
            </span>
            <p
              className="text-xs"
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.1em",
              }}
            >
              MLS #{listing.mlsNumber.slice(0, 12)}
            </p>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            {listing.address}
          </h1>
          <p
            className="font-editorial italic mt-2"
            style={{ fontSize: "20px", color: "var(--ink-2)" }}
          >
            {listing.city}, MI {listing.zip}
          </p>

          <p
            className="font-display mt-5"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "var(--red)",
              lineHeight: "1",
            }}
          >
            {fmtPrice(listing.listPrice)}
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      {photos.length > 0 && (
        <section className="px-4 sm:px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <ListingGallery photos={photos} address={listing.address} />
          </div>
        </section>
      )}

      {/* Specs Grid */}
      <section className="px-4 sm:px-6 py-8" style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0">
            {[
              { label: "Bedrooms", value: fmtNumber(listing.beds) },
              { label: "Bathrooms", value: fmtNumber(listing.baths) },
              { label: "Square Feet", value: listing.sqft > 0 ? fmtNumber(listing.sqft) : "n/a" },
              { label: "Property Type", value: listing.propertyType },
            ].map((spec, i) => (
              <div
                key={spec.label}
                className="sm:px-6"
                style={{ borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}
              >
                <p
                  className="uppercase tracking-[0.18em] text-[10px] font-medium"
                  style={{
                    color: "var(--ink-3)",
                    fontFamily: "var(--font-mono, monospace)",
                  }}
                >
                  {spec.label}
                </p>
                <p
                  className="font-display mt-2"
                  style={{
                    fontSize: "28px",
                    color: "var(--ink)",
                    lineHeight: "1",
                  }}
                >
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="uppercase tracking-[0.22em] text-[10px] font-medium"
            style={{
              color: "var(--red)",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            Interested in this home?
          </p>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            Let's get you{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>
              inside this home.
            </em>
          </h2>
          <p
            className="font-editorial italic mt-4 mx-auto"
            style={{ fontSize: "17px", color: "var(--ink-2)", maxWidth: 520 }}
          >
            Get the full listing details, schedule a showing, or have us reach
            out about this property.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href={`/contact?subject=${encodeURIComponent("Question about " + listing.address)}`}
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Ask Brad About This Home
            </Link>
            <a
              href={OAK_AND_STONE_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper"
              style={{
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Full Search on Oak &amp; Stone →
            </a>
          </div>

          <p
            className="mt-8 text-xs"
            style={{
              color: "var(--ink-3)",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            Or call us directly:{" "}
            <a
              href="tel:2487553545"
              style={{ color: "var(--red)" }}
              className="hover:underline"
            >
              248.755.3545
            </a>
          </p>
        </div>
      </section>

      {/* Compliance footer */}
      <div
        className="py-4 px-4 sm:px-6 text-center text-xs"
        style={{
          backgroundColor: "var(--paper-2)",
          color: "var(--ink-3)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono, monospace)" }}>
          Listing data sourced from MichRIC® Broker Reciprocity (IDX).
          Last updated {new Date(listing.lastUpdated).toLocaleDateString("en-US")}.
        </span>
      </div>
    </div>
  );
}
