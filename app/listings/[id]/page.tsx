/**
 * /app/listings/[id]/page.tsx
 *
 * Dynamic listing detail page.
 *
 * Route: /listings/[id]
 * Data: Fetches from /data/listings.ts based on [id] slug
 *
 * Content:
 * - Hero: Address, status badge, list price (red)
 * - Image gallery: Hero image + placeholder thumbnails
 * - Key stats: Beds, baths, sqft, lot size, year built, DOM
 * - Property description
 * - Agent notes (Cormorant Garamond italic)
 * - Market context: Similar homes in city
 * - CTA: "Schedule a Showing" button
 * - Footer: Compliance link to oakandstonerealestate.com
 *
 * Styling: Oak & Stone brand tokens (DM Serif, red accent, cream/ink)
 * MichRIC® Compliance: Footer link directs to approved external interface
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getListingById } from "@/data/listings";
import { getMarketAnalysis } from "@/data/market-analysis";

interface ListingDetailPageProps {
  params: {
    id: string;
  };
}

/**
 * Generate metadata for the listing detail page
 */
export async function generateMetadata({
  params,
}: ListingDetailPageProps): Promise<Metadata> {
  const listing = getListingById(params.id);

  if (!listing) {
    return {
      title: "Listing Not Found",
      description: "The listing you're looking for could not be found.",
    };
  }

  return {
    title: `${listing.address}, ${listing.city} — Oak & Stone Real Estate`,
    description: `${listing.beds}bd/${listing.baths}ba home in ${listing.city}, MI. $${listing.listPrice.toLocaleString()}. ${listing.sqft.toLocaleString()} sqft.`,
    alternates: {
      canonical: `https://www.thepatrickgrp.com/listings/${listing.id}`,
    },
    openGraph: {
      type: "website",
      url: `https://www.thepatrickgrp.com/listings/${listing.id}`,
      title: `${listing.address}, ${listing.city}`,
      description: `${listing.beds}bd/${listing.baths}ba home in ${listing.city}, MI. $${listing.listPrice.toLocaleString()}.`,
      images: listing.imageUrl
        ? [
            {
              url: listing.imageUrl,
              width: 1200,
              height: 630,
              alt: listing.address,
            },
          ]
        : [],
    },
  };
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
  return new Intl.NumberFormat("en-US").format(Math.round(num));
}

/**
 * Listing Detail Page
 */
export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = getListingById(params.id);

  if (!listing) {
    notFound();
  }

  // Get market analysis for the city to show context
  const cityMarketData = getMarketAnalysis(listing.slug);

  // Status badge styling
  const statusBg =
    listing.status === "active"
      ? "bg-green-50 text-green-700"
      : listing.status === "pending"
        ? "bg-amber-50 text-amber-700"
        : "bg-gray-50 text-gray-600";

  const statusLabel =
    listing.status === "sold"
      ? "Sold"
      : listing.status === "pending"
        ? "Pending"
        : "Active";

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/search-homes" className="text-[#C70000] hover:underline">
              Search Homes
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/neighborhoods/${listing.slug}`} className="text-[#C70000] hover:underline">
              {listing.city}, MI
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{listing.address}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div className="flex-1">
              {/* Status Badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${statusBg}`}>
                  {statusLabel}
                </span>
              </div>

              {/* Address */}
              <h1 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {listing.address}
              </h1>

              {/* City/Zip */}
              <p className="text-lg text-gray-600 mb-6">
                {listing.city}, MI {listing.zip}
              </p>

              {/* Price - Red accent */}
              <p className="font-['DM_Serif_Display'] text-5xl font-bold text-[#C70000] mb-8">
                {formatPrice(listing.listPrice)}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">{listing.beds}</p>
                <p className="text-sm text-gray-600 uppercase">Beds</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">{listing.baths}</p>
                <p className="text-sm text-gray-600 uppercase">Baths</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">
                  {formatNumber(listing.sqft)}
                </p>
                <p className="text-sm text-gray-600 uppercase">Sqft</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-12">
            {listing.imageUrl ? (
              <Image
                src={listing.imageUrl}
                alt={listing.address}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-lg">No image available</span>
              </div>
            )}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              {/* Key Facts */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="font-['DM_Serif_Display'] text-2xl font-bold text-gray-900 mb-6">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Bedrooms
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{listing.beds}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Bathrooms
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{listing.baths}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Square Feet
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(listing.sqft)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Days on Market
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{listing.daysOnMarket}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Property Type
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{listing.propertyType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                      Price per Sqft
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${Math.round(listing.listPrice / listing.sqft)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              {listing.agentNotes && (
                <div className="mb-8">
                  <h2 className="font-['DM_Serif_Display'] text-2xl font-bold text-gray-900 mb-4">
                    About This Home
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Cormorant_Garamond'] italic">
                    "{listing.agentNotes}"
                  </p>
                </div>
              )}

              {/* Market Context */}
              {cityMarketData && cityMarketData.activeCount > 0 && (
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h2 className="font-['DM_Serif_Display'] text-lg font-bold text-gray-900 mb-3">
                    Market Context
                  </h2>
                  <p className="text-gray-700 mb-3">
                    This home is listed in a market with{" "}
                    <span className="font-semibold">{cityMarketData.activeCount}</span> active
                    listings. Homes in {listing.city} are typically listed for{" "}
                    <span className="font-semibold">{cityMarketData.medianDOM}</span> days.
                  </p>
                  <p className="text-gray-700">
                    Similar homes sell for a median of{" "}
                    <span className="font-semibold">{formatPrice(cityMarketData.medianPrice)}</span>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: CTA & Info */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-6">
                <h3 className="font-['DM_Serif_Display'] text-xl font-bold text-gray-900 mb-4">
                  Interested in This Home?
                </h3>
                <Link
                  href={`/contact?listing=${listing.id}&address=${encodeURIComponent(listing.address)}`}
                  className="block w-full text-center px-6 py-3 bg-[#C70000] text-white font-medium uppercase tracking-wider hover:bg-[#a90000] transition-colors rounded mb-4"
                >
                  Schedule a Showing
                </Link>
                <p className="text-xs text-gray-600 text-center">
                  Contact our team to schedule a viewing or ask questions.
                </p>
              </div>

              {/* Agent Info Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-2">Represented by</p>
                <p className="font-['DM_Serif_Display'] text-xl font-bold text-gray-900">
                  Oak & Stone Real Estate
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  <a href="tel:2487553545" className="text-[#C70000] hover:underline">
                    248.755.3545
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Compliance & External Link */}
      <section className="bg-gray-50 border-t border-gray-200 py-8 px-4 sm:px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-3">
            See full listing details with additional photos and information on
          </p>
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#C70000] text-white font-medium uppercase tracking-wider hover:bg-[#a90000] transition-colors"
          >
            Oak & Stone Real Estate
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Listing information sourced from MichRIC® Broker Reciprocity (IDX).
          </p>
        </div>
      </section>
    </div>
  );
}
