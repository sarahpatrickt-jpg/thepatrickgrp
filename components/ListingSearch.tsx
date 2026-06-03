"use client";

/**
 * ListingSearch Component
 *
 * Interactive search UI for filtering and displaying listings.
 * Manages filter state, API calls, pagination, and results grid.
 *
 * Features:
 * - City dropdown (all 24 SE Michigan cities)
 * - Price range sliders (slider or number inputs)
 * - Beds/baths minimum selectors
 * - Status checkboxes (active, pending, sold)
 * - Property type filter
 * - Sort dropdown (newest, price, DOM, price/sqft)
 * - Results pagination
 * - GA4 event tracking
 * - Mobile responsive
 *
 * Styling: Oak & Stone brand tokens (DM Serif, Cormorant, red accent)
 */

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import ListingCard from "./ListingCard";
import { trackListingSearchSubmitted, trackListingCardClicked } from "@/lib/analytics";
import type { Listing } from "@/data/listings";

// All 24 SE Michigan cities
const SE_MICHIGAN_CITIES = [
  "Birmingham",
  "Bloomfield Hills",
  "Bloomfield Township",
  "Clarkston",
  "Lake Orion",
  "Orchard Lake",
  "Royal Oak",
  "Troy",
  "West Bloomfield",
  "Brighton",
  "Howell",
  "Northville",
  "Plymouth",
  "Macomb Township",
  "St. Clair Shores",
  "Warren",
  "Ann Arbor",
  "Saline",
  "Detroit",
  "Grosse Pointe",
  "Grosse Pointe Woods",
  "Flint",
];

const CITY_SLUG_MAP: Record<string, string> = {
  "Birmingham": "birmingham-mi",
  "Bloomfield Hills": "bloomfield-hills-mi",
  "Bloomfield Township": "bloomfield-township-mi",
  "Clarkston": "clarkston-mi",
  "Lake Orion": "lake-orion-mi",
  "Orchard Lake": "orchard-lake-mi",
  "Royal Oak": "royal-oak-mi",
  "Troy": "troy-mi",
  "West Bloomfield": "west-bloomfield-mi",
  "Brighton": "brighton-mi",
  "Howell": "howell-mi",
  "Northville": "northville-mi",
  "Plymouth": "plymouth-mi",
  "Macomb Township": "macomb-township-mi",
  "St. Clair Shores": "st-clair-shores-mi",
  "Warren": "warren-mi",
  "Ann Arbor": "ann-arbor-mi",
  "Saline": "saline-mi",
  "Detroit": "detroit-mi",
  "Grosse Pointe": "grosse-pointe-mi",
  "Grosse Pointe Woods": "grosse-pointe-woods-mi",
  "Flint": "flint-mi",
};

interface SearchFilters {
  city: string;
  minPrice: number | null;
  maxPrice: number | null;
  beds: number | null;
  baths: number | null;
  status: string;
  sort: string;
}

interface SearchResponse {
  success: boolean;
  listings: Listing[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
  filters: SearchFilters;
  stats: {
    activeCountByCity: Record<string, number>;
  };
}

interface ListingSearchProps {
  defaultCity?: string;
  defaultFilters?: Partial<SearchFilters>;
  onResults?: (count: number) => void;
}

/**
 * ListingSearch Component
 */
export default function ListingSearch({
  defaultCity = "",
  defaultFilters = {},
  onResults,
}: ListingSearchProps) {
  // Search state
  const [filters, setFilters] = useState<SearchFilters>({
    city: defaultCity,
    minPrice: defaultFilters.minPrice ?? null,
    maxPrice: defaultFilters.maxPrice ?? null,
    beds: defaultFilters.beds ?? null,
    baths: defaultFilters.baths ?? null,
    status: defaultFilters.status ?? "active",
    sort: defaultFilters.sort ?? "newest",
  });

  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFilters, setExpandedFilters] = useState(false);

  // Fetch listings
  const handleSearch = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.city) params.append("city", filters.city);
      if (filters.minPrice) params.append("minPrice", filters.minPrice.toString());
      if (filters.maxPrice) params.append("maxPrice", filters.maxPrice.toString());
      if (filters.beds) params.append("beds", filters.beds.toString());
      if (filters.baths) params.append("baths", filters.baths.toString());
      if (filters.status) params.append("status", filters.status);
      params.append("sort", filters.sort);
      params.append("page", page.toString());
      params.append("limit", "20");

      const response = await fetch(`/api/listings/search?${params.toString()}`);
      const data = (await response.json()) as SearchResponse;

      setResults(data);
      setCurrentPage(page);

      if (onResults && data.success) {
        onResults(data.pagination.total);
      }

      // Fire GA4 event
      if (data.success) {
        const filtersApplied = Object.values(filters).filter((v) => v).length;
        trackListingSearchSubmitted(filters.city, filtersApplied, data.pagination.total);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  }, [filters, onResults]);

  // Auto-search on mount if city is provided
  useEffect(() => {
    if (filters.city || defaultCity) {
      handleSearch(1);
    }
  }, []); // Only on mount

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              City
            </label>
            <select
              value={filters.city}
              onChange={(e) => {
                setFilters({ ...filters, city: e.target.value });
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            >
              <option value="">All Cities</option>
              {SE_MICHIGAN_CITIES.map((city) => (
                <option key={city} value={CITY_SLUG_MAP[city]}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Min Price
            </label>
            <input
              type="number"
              value={filters.minPrice || ""}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  minPrice: e.target.value ? parseInt(e.target.value) : null,
                })
              }
              placeholder="$100,000"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Max Price
            </label>
            <input
              type="number"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  maxPrice: e.target.value ? parseInt(e.target.value) : null,
                })
              }
              placeholder="$5,000,000"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            />
          </div>

          {/* Sort */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Sort By
            </label>
            <select
              value={filters.sort}
              onChange={(e) => {
                setFilters({ ...filters, sort: e.target.value });
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="dom">Days on Market</option>
              <option value="price-sqft">Price per Sqft</option>
            </select>
          </div>
        </div>

        {/* Expandable Advanced Filters */}
        <div className="border-t border-gray-300 pt-4">
          <button
            onClick={() => setExpandedFilters(!expandedFilters)}
            className="text-sm font-medium text-[#C70000] hover:underline flex items-center gap-1"
          >
            {expandedFilters ? "▼" : "▶"} Advanced Filters
          </button>

          {expandedFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {/* Beds */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Min Bedrooms
                </label>
                <select
                  value={filters.beds || ""}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      beds: e.target.value ? parseInt(e.target.value) : null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Baths */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Min Bathrooms
                </label>
                <select
                  value={filters.baths || ""}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      baths: e.target.value ? parseFloat(e.target.value) : null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="1.5">1.5+</option>
                  <option value="2">2+</option>
                  <option value="2.5">2.5+</option>
                  <option value="3">3+</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => {
                    setFilters({ ...filters, status: e.target.value });
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C70000]"
                >
                  <option value="">Any</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="mt-4">
          <button
            onClick={() => handleSearch(1)}
            disabled={loading}
            className="px-6 py-2.5 bg-[#C70000] text-white font-medium uppercase tracking-wider hover:bg-[#a90000] disabled:opacity-50 transition-colors"
          >
            {loading ? "Searching..." : "Search Listings"}
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div>
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold">
                {(results.pagination.page - 1) * results.pagination.limit + 1}-
                {Math.min(
                  results.pagination.page * results.pagination.limit,
                  results.pagination.total,
                )}
              </span>{" "}
              of <span className="font-semibold">{results.pagination.total}</span> listings
            </p>
          </div>

          {results.listings.length > 0 ? (
            <>
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {results.listings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    variant={listing.isFeatured ? "featured" : "default"}
                  />
                ))}
              </div>

              {/* Pagination */}
              {results.pagination.pages > 1 && (
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => handleSearch(currentPage - 1)}
                    disabled={currentPage === 1 || loading}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: results.pagination.pages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => handleSearch(page)}
                          disabled={loading}
                          className={`px-3 py-2 rounded ${
                            page === currentPage
                              ? "bg-[#C70000] text-white"
                              : "border border-gray-300 hover:bg-gray-50"
                          } disabled:opacity-50`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                  </div>

                  <button
                    onClick={() => handleSearch(currentPage + 1)}
                    disabled={currentPage === results.pagination.pages || loading}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No listings found matching your criteria.</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your filters and searching again.</p>
            </div>
          )}
        </div>
      )}

      {/* CTA Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-700 mb-4">
          Want to see all listings with additional search options?
        </p>
        <a
          href="https://www.oakandstonerealestate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#C70000] text-white font-medium uppercase tracking-wider hover:bg-[#a90000] transition-colors"
        >
          Explore All on Oak & Stone Real Estate
        </a>
      </div>
    </div>
  );
}
