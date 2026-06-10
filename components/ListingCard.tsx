"use client";

/**
 * ListingCard Component
 *
 * Displays a single listing in card format with image, key details, and CTA.
 *
 * Variants:
 * - "default" (280px): Thumbnail, address, price, beds/baths, DOM, view link
 * - "compact" (240px): Minimal card for dense grids
 * - "featured" (360px): Large card with agent notes and prominent CTA
 *
 * Styling: Oak & Stone brand tokens (DM Serif Display for price, red accent, cream/ink)
 * MichRIC® Compliance: All links point to approved oakandstonerealestate.com interface
 */

import Link from "next/link";
import Image from "next/image";
import { trackListingCardClicked } from "@/lib/analytics";
import type { Listing } from "@/data/listings";

interface ListingCardProps {
  /** The listing data to display */
  listing: Listing;

  /** Card size variant */
  variant?: "default" | "compact" | "featured";

  /** Whether to show agent info (defaults to true for featured) */
  showAgent?: boolean;
}

/**
 * Format price as USD string (e.g., "$485,000")
 */
function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Format number with thousands separator (e.g., "2,145" sqft)
 */
function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * ListingCard Component
 */
export default function ListingCard({
  listing,
  variant = "default",
  showAgent = true,
}: ListingCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  // Card dimensions based on variant
  const cardClass = isFeatured
    ? "w-full max-w-xs bg-[var(--paper)] border border-black/5"
    : isCompact
      ? "w-full max-w-xs bg-[var(--paper)] border border-black/5"
      : "w-full max-w-sm bg-[var(--paper)] border border-black/5";

  // Status badge color
  const statusBg =
    listing.status === "active"
      ? "bg-green-50"
      : listing.status === "pending"
        ? "bg-amber-50"
        : "bg-gray-50";

  const statusText =
    listing.status === "active"
      ? "text-green-700"
      : listing.status === "pending"
        ? "text-amber-700"
        : "text-[var(--ink-2)]";

  // Navigate to detail page OR approved external interface
  const detailLink = `/listings/${listing.id}`;

  // Track listing card click
  const handleCardClick = () => {
    trackListingCardClicked(listing.id, listing.address, listing.isFeatured);
  };

  return (
    <div className={`${cardClass} overflow-hidden hover:shadow-lg transition-shadow`}>
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-gray-100">
        {listing.imageUrl ? (
          <Image
            src={listing.imageUrl}
            alt={listing.address}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-[var(--ink-3)] text-sm">No image</span>
          </div>
        )}

        {/* Status Badge */}
        <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium ${statusBg} ${statusText}`}>
          {listing.status === "sold" ? "Sold" : listing.status === "pending" ? "Pending" : "Active"}
        </div>

        {/* Featured Badge */}
        {listing.isFeatured && (
          <div className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-[var(--red)] text-white">
            Featured
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className={`p-4 ${isFeatured ? "pb-5" : ""}`}>
        {/* Address */}
        <h3 className="font-['DM_Serif_Display'] text-base leading-tight mb-1 text-[var(--ink)] line-clamp-2">
          {listing.address}
        </h3>

        {/* City */}
        <p className="text-xs text-[var(--ink-2)] mb-3">{listing.city}, MI {listing.zip}</p>

        {/* Price - Red accent */}
        <div className="mb-3">
          <p className="font-['DM_Serif_Display'] text-2xl font-bold text-[var(--red)]">
            {formatPrice(listing.listPrice)}
          </p>
        </div>

        {/* Details Grid */}
        {!isCompact && (
          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-black/5">
            {/* Beds */}
            <div>
              <p className="text-xs text-[var(--ink-2)]">Beds</p>
              <p className="font-medium text-sm">{listing.beds}</p>
            </div>

            {/* Baths */}
            <div>
              <p className="text-xs text-[var(--ink-2)]">Baths</p>
              <p className="font-medium text-sm">{listing.baths}</p>
            </div>

            {/* DOM */}
            <div>
              <p className="text-xs text-[var(--ink-2)]">DOM</p>
              <p className="font-medium text-sm">{listing.daysOnMarket}</p>
            </div>
          </div>
        )}

        {/* Square Footage - Compact only */}
        {isCompact && (
          <p className="text-xs text-[var(--ink-2)] mb-3">
            {formatNumber(listing.sqft)} sqft
          </p>
        )}

        {/* Agent Notes - Featured only */}
        {isFeatured && listing.agentNotes && (
          <p className="text-sm text-[var(--ink-2)] italic font-['Cormorant_Garamond'] mb-4 leading-relaxed">
            "{listing.agentNotes}"
          </p>
        )}

        {/* CTA Button or Link */}
        {isFeatured ? (
          <Link
            href={detailLink}
            onClick={handleCardClick}
            className="block w-full text-center px-4 py-2.5 bg-[var(--red)] text-white text-sm font-medium uppercase tracking-wider hover:bg-[var(--red-deep)] transition-colors"
          >
            View Full Listing
          </Link>
        ) : (
          <Link
            href={detailLink}
            onClick={handleCardClick}
            className="text-[var(--red)] text-sm font-medium hover:underline"
          >
            View Details →
          </Link>
        )}
      </div>

      {/* Footer: Agent + Oak & Stone (featured only) */}
      {isFeatured && showAgent && (
        <div className="px-4 py-3 bg-gray-50 border-t border-black/5">
          <p className="text-xs text-[var(--ink-2)]">Represented by</p>
          <p className="font-medium text-sm">Oak & Stone Real Estate</p>
        </div>
      )}

      {/* Compliance Footer: External link note */}
      <div className="px-4 py-2 text-center border-t border-black/5 bg-[var(--paper)]/50">
        <p className="text-xs text-[var(--ink-3)]">
          See full details on{" "}
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--red)] hover:underline font-medium"
          >
            oakandstonerealestate.com
          </a>
        </p>
      </div>
    </div>
  );
}
