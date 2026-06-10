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

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import ListingCard from "./ListingCard";
import { trackListingSearchSubmitted, trackListingCardClicked } from "@/lib/analytics";
import type { Listing } from "@/data/listings";

// All SE Michigan cities, sorted alphabetically
const SE_MICHIGAN_CITIES: { name: string; slug: string }[] = [
  { name: "Ann Arbor",          slug: "ann-arbor-mi" },
  { name: "Birmingham",         slug: "birmingham-mi" },
  { name: "Bloomfield Hills",   slug: "bloomfield-hills-mi" },
  { name: "Bloomfield Township",slug: "bloomfield-township-mi" },
  { name: "Brighton",           slug: "brighton-mi" },
  { name: "Chelsea",            slug: "chelsea-mi" },
  { name: "Clarkston",          slug: "clarkston-mi" },
  { name: "Clinton Township",   slug: "clinton-township-mi" },
  { name: "Detroit",            slug: "detroit-mi" },
  { name: "Dexter",             slug: "dexter-mi" },
  { name: "Dundee",             slug: "dundee-mi" },
  { name: "Fenton",             slug: "fenton-mi" },
  { name: "Grand Blanc",        slug: "grand-blanc-mi" },
  { name: "Goodrich",           slug: "goodrich-mi" },
  { name: "Grosse Pointe",      slug: "grosse-pointe-mi" },
  { name: "Hartland",           slug: "hartland-mi" },
  { name: "Howell",             slug: "howell-mi" },
  { name: "Lake Orion",         slug: "lake-orion-mi" },
  { name: "Linden",             slug: "linden-mi" },
  { name: "Livonia",            slug: "livonia-mi" },
  { name: "Macomb Township",    slug: "macomb-township-mi" },
  { name: "Milan",              slug: "milan-mi" },
  { name: "Monroe",             slug: "monroe-mi" },
  { name: "Northville",         slug: "northville-mi" },
  { name: "Novi",               slug: "novi-mi" },
  { name: "Orchard Lake",       slug: "orchard-lake-mi" },
  { name: "Oxford",             slug: "oxford-mi" },
  { name: "Plymouth",           slug: "plymouth-mi" },
  { name: "Rochester",          slug: "rochester-mi" },
  { name: "Rochester Hills",    slug: "rochester-hills-mi" },
  { name: "Romulus",            slug: "romulus-mi" },
  { name: "Royal Oak",          slug: "royal-oak-mi" },
  { name: "Saline",             slug: "saline-mi" },
  { name: "Shelby Township",    slug: "shelby-township-mi" },
  { name: "South Lyon",         slug: "south-lyon-mi" },
  { name: "St. Clair Shores",   slug: "st-clair-shores-mi" },
  { name: "Sterling Heights",   slug: "sterling-heights-mi" },
  { name: "Troy",               slug: "troy-mi" },
  { name: "Warren",             slug: "warren-mi" },
  { name: "West Bloomfield",    slug: "west-bloomfield-mi" },
  { name: "Whitmore Lake",      slug: "whitmore-lake-mi" },
  { name: "Ypsilanti",          slug: "ypsilanti-mi" },
];

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
  onResults?: (count: number, city?: string) => void;
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

  // City combobox state
  const [cityInput, setCityInput] = useState(
    SE_MICHIGAN_CITIES.find((c) => c.slug === defaultCity)?.name ?? ""
  );
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement>(null);

  const filteredCities = cityInput.trim()
    ? SE_MICHIGAN_CITIES.filter((c) =>
        c.name.toLowerCase().includes(cityInput.toLowerCase())
      )
    : SE_MICHIGAN_CITIES;

  // Close city dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setCityOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Fetch listings
  const handleSearch = useCallback(async (page = 1, searchFilters = filters) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchFilters.city) params.append("city", searchFilters.city);
      if (searchFilters.minPrice) params.append("minPrice", searchFilters.minPrice.toString());
      if (searchFilters.maxPrice) params.append("maxPrice", searchFilters.maxPrice.toString());
      if (searchFilters.beds) params.append("beds", searchFilters.beds.toString());
      if (searchFilters.baths) params.append("baths", searchFilters.baths.toString());
      if (searchFilters.status) params.append("status", searchFilters.status);
      params.append("sort", searchFilters.sort);
      params.append("page", page.toString());
      params.append("limit", "20");

      const response = await fetch(`/api/listings/search?${params.toString()}`);
      const data = (await response.json()) as SearchResponse;

      setResults(data);
      setCurrentPage(page);

      if (onResults && data.success) {
        const cityName = searchFilters.city
          ? SE_MICHIGAN_CITIES.find((c) => c.slug === searchFilters.city)?.name
          : undefined;
        onResults(data.pagination.total, cityName);
      }

      // Fire GA4 event
      if (data.success) {
        const filtersApplied = Object.values(searchFilters).filter((v) => v).length;
        trackListingSearchSubmitted(searchFilters.city, filtersApplied, data.pagination.total);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  }, [filters, onResults]);

  // Auto-search on mount
  useEffect(() => {
    handleSearch(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-search when filters change (debounced 400ms)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      handleSearch(1, filters);
    }, 400);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-gray-50 border border-[var(--line)] p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* City combobox */}
          <div ref={cityRef} className="relative">
            <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
              City
            </label>
            <input
              type="text"
              value={cityInput}
              placeholder="All cities, or type to filter"
              autoComplete="off"
              onFocus={() => setCityOpen(true)}
              onChange={(e) => {
                setCityInput(e.target.value);
                setCityOpen(true);
                // If user clears the input, clear the filter
                if (!e.target.value) {
                  setFilters({ ...filters, city: "" });
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") setCityOpen(false);
                if (e.key === "Enter" && filteredCities.length === 1) {
                  const c = filteredCities[0];
                  setCityInput(c.name);
                  setFilters({ ...filters, city: c.slug });
                  setCityOpen(false);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            />
            {cityOpen && (
              <ul
                className="absolute z-20 left-0 right-0 top-full mt-1 bg-[var(--paper)] border border-[var(--line)] shadow-lg max-h-60 overflow-y-auto"
              >
                <li>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setCityInput("");
                      setFilters({ ...filters, city: "" });
                      setCityOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-[var(--ink-3)] hover:bg-gray-50"
                  >
                    All cities
                  </button>
                </li>
                {filteredCities.map((c) => (
                  <li key={c.slug}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setCityInput(c.name);
                        setFilters({ ...filters, city: c.slug });
                        setCurrentPage(1);
                        setCityOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      style={{
                        color: filters.city === c.slug ? "#C70000" : undefined,
                        fontWeight: filters.city === c.slug ? 600 : undefined,
                      }}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
                {filteredCities.length === 0 && (
                  <li className="px-3 py-2 text-sm text-[var(--ink-3)]">No cities match</li>
                )}
              </ul>
            )}
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
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
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
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
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
            />
          </div>

          {/* Sort */}
          <div>
            <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
              Sort By
            </label>
            <select
              value={filters.sort}
              onChange={(e) => {
                setFilters({ ...filters, sort: e.target.value });
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
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
            className="text-sm font-medium text-[var(--red)] hover:underline flex items-center gap-1"
          >
            {expandedFilters ? "▼" : "▶"} Advanced Filters
          </button>

          {expandedFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {/* Beds */}
              <div>
                <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
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
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
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
                <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
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
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
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
                <label className="block text-xs font-semibold text-[var(--ink-2)] uppercase tracking-wider mb-2">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => {
                    setFilters({ ...filters, status: e.target.value });
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C70000]"
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

        {/* Search button + status */}
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={() => handleSearch(1)}
            disabled={loading}
            className="px-6 py-2.5 font-medium uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-opacity text-sm"
            style={{ backgroundColor: "#C70000", color: "#fff", letterSpacing: "0.1em" }}
          >
            {loading ? "Searching…" : "Search Listings"}
          </button>
          {!loading && results && (
            <span className="text-xs text-[var(--ink-3)]">
              {results.pagination.total > 0
                ? `${results.pagination.total.toLocaleString()} listing${results.pagination.total !== 1 ? "s" : ""} found`
                : "No listings match, try broadening your search"}
            </span>
          )}
          {loading && (
            <span className="text-xs text-[var(--ink-3)] flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 border-2 border-[#C70000] border-t-transparent rounded-full animate-spin" />
              Searching…
            </span>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <div>
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-[var(--ink-2)]">
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
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
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
                          className={`px-3 py-2 ${
                            page === currentPage
                              ? "bg-[var(--red)] text-white"
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
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 px-4">
              <p
                className="font-display mb-2"
                style={{ fontSize: "24px", color: "var(--ink)" } as React.CSSProperties}
              >
                No listings match right now.
              </p>
              <p className="text-sm text-[var(--ink-3)] mb-8 max-w-sm mx-auto">
                MLS data syncs nightly. Try broadening your price range or selecting a different city, or let Brad find something before it hits the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/vip-buyers"
                  className="inline-block px-6 py-3 text-sm font-medium uppercase tracking-wider"
                  style={{ backgroundColor: "#C70000", color: "#fff", letterSpacing: "0.1em" } as React.CSSProperties}
                >
                  Join VIP Buyer List
                </a>
                <a
                  href="https://www.oakandstonerealestate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-sm font-medium uppercase tracking-wider border border-gray-300 hover:border-gray-500 transition-colors"
                  style={{ letterSpacing: "0.1em" } as React.CSSProperties}
                >
                  Full MLS Search →
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtle compliance footer */}
      <div className="mt-10 pt-6 border-t border-[var(--line)] text-center">
        <p className="text-xs text-[var(--ink-3)]">
          Need advanced filters?{" "}
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--ink-2)] transition-colors"
          >
            Full MLS search on Oak &amp; Stone Real Estate
          </a>
        </p>
      </div>
    </div>
  );
}
