"use client";

import { useState } from "react";
import Link from "next/link";
import ListingSearch from "@/components/ListingSearch";

// Neighborhood discovery cards — curated popular searches that pre-fill the search
const QUICK_SEARCHES = [
  { label: "Birmingham",        slug: "birmingham-mi",         tag: "Luxury · Oakland" },
  { label: "Rochester Hills",   slug: "rochester-hills-mi",    tag: "Family · Oakland" },
  { label: "Troy",              slug: "troy-mi",               tag: "All prices · Oakland" },
  { label: "Bloomfield Hills",  slug: "bloomfield-hills-mi",   tag: "Luxury · Oakland" },
  { label: "Northville",        slug: "northville-mi",         tag: "Walkable · Wayne" },
  { label: "Clarkston",         slug: "clarkston-mi",          tag: "Lakefront · Oakland" },
  { label: "Shelby Township",   slug: "shelby-township-mi",    tag: "Value · Macomb" },
  { label: "Royal Oak",         slug: "royal-oak-mi",          tag: "Urban · Oakland" },
];

const eyebrow = "uppercase tracking-[0.22em] text-[10px] font-medium" as const;

export default function SearchHomesPage() {
  const [resultCount, setResultCount] = useState<number | null>(null);
  const [activeCity, setActiveCity] = useState("");

  return (
    <div style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>

      {/* ── Slim hero ── */}
      <section
        className="pt-28 pb-10 px-4 sm:px-6"
        style={{ backgroundColor: "var(--paper)", borderBottom: "1px solid var(--line)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className={eyebrow}
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            MLS Home Search · Southeast Michigan
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-3">
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1",
                letterSpacing: "-0.01em",
              }}
            >
              {resultCount !== null && resultCount > 0 ? (
                <>
                  <em style={{ color: "var(--red)", fontStyle: "italic" }}>{resultCount.toLocaleString()} homes</em>{" "}
                  {activeCity ? `in ${activeCity}` : "across SE Michigan"}
                </>
              ) : (
                <>
                  Find your home{" "}
                  <em style={{ color: "var(--red)", fontStyle: "italic" }}>in Southeast Michigan</em>
                </>
              )}
            </h1>
            <p
              className="text-sm shrink-0"
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Updated nightly from MLS
            </p>
          </div>
        </div>
      </section>

      {/* ── Search ── */}
      <section className="px-4 sm:px-6 py-10" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <ListingSearch
            onResults={(count, city) => {
              setResultCount(count);
              setActiveCity(city ?? "");
            }}
          />
        </div>
      </section>

      {/* ── Browse by neighborhood ── */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "var(--paper-2)", borderTop: "1px solid var(--line)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className={eyebrow}
            style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Browse by Neighborhood
          </p>
          <h2
            className="font-display mt-3 mb-8"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1", letterSpacing: "-0.01em" }}
          >
            Popular searches{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>right now</em>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {QUICK_SEARCHES.map((s) => (
              <Link
                key={s.slug}
                href={`/search-homes?city=${s.slug}`}
                className="group block p-5 transition-all"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--paper)",
                }}
              >
                <p
                  className={eyebrow + " mb-2"}
                  style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", fontSize: "9px" }}
                >
                  {s.tag}
                </p>
                <p
                  className="font-display group-hover:underline"
                  style={{ fontSize: "18px", color: "var(--ink)", textUnderlineOffset: "3px" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs mt-3 group-hover:underline"
                  style={{ color: "var(--red)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.12em", textUnderlineOffset: "3px" }}
                >
                  View homes →
                </p>
              </Link>
            ))}
          </div>

          {/* Neighborhood guides row */}
          <div
            className="mt-6 pt-6 flex flex-wrap gap-3"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <p
              className={eyebrow + " w-full mb-1"}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Neighborhood Guides
            </p>
            {QUICK_SEARCHES.map((s) => (
              <Link
                key={s.slug + "-guide"}
                href={`/neighborhoods/${s.slug}`}
                className="text-xs font-medium hover:underline px-3 py-1.5 transition-colors"
                style={{
                  border: "1px solid var(--line)",
                  color: "var(--ink-2)",
                  fontFamily: "var(--font-mono, monospace)",
                  textUnderlineOffset: "3px",
                }}
              >
                {s.label} guide →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Talk to us strip ── */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p
              className={eyebrow}
              style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Not finding what you need?
            </p>
            <h2
              className="font-display mt-3"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: "1.1", color: "#FDFBF7" }}
            >
              Tell us exactly what you&apos;re looking for.{" "}
              <em style={{ color: "var(--red)", fontStyle: "italic" }}>We&apos;ll find it.</em>
            </h2>
            <p
              className="font-editorial italic mt-3"
              style={{ fontSize: "16px", color: "rgba(253,251,247,0.55)" }}
            >
              Brad specializes in competitive markets and knows inventory before it hits the MLS.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/vip-buyers"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Join VIP Buyer List
            </Link>
            <a
              href="tel:2487553545"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wider uppercase whitespace-nowrap transition-colors hover:bg-paper hover:text-ink"
              style={{
                border: "1px solid rgba(253,251,247,0.25)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Call 248.755.3545
            </a>
          </div>
        </div>
      </section>

      {/* ── Fine print ── */}
      <div
        className="py-4 px-4 sm:px-6 text-center text-xs"
        style={{ backgroundColor: "var(--paper-2)", color: "var(--ink-3)", borderTop: "1px solid var(--line)" }}
      >
        <span style={{ fontFamily: "var(--font-mono, monospace)" }}>
          Listing data sourced from MichRIC® Broker Reciprocity (IDX). See full details on{" "}
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--ink-2)" }}
          >
            Oak &amp; Stone Real Estate
          </a>
          .
        </span>
      </div>

    </div>
  );
}
