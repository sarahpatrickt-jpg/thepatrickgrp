import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search Homes for Sale — Southeast Michigan | The Patrick Group",
  description:
    "Search all homes for sale in Southeast Michigan. Full MLS/IDX search powered by Oak and Stone Real Estate.",
  alternates: { canonical: "https://thepatrickgrp.com/search-homes" },
};

export default function SearchHomesPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
            MLS Home Search
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">
            Search Every Home for Sale in Southeast Michigan
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Browse the full MLS on Oak and Stone Real Estate — real-time listings,
            saved searches, and direct agent access. No gimmicks.
          </p>
          <a
            href="https://www.oakandstonerealestate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c70000] text-white font-bold text-lg px-10 py-5 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Search All Available Homes →
          </a>
          <p className="text-white/40 text-sm mt-4">
            Opens on OakAndStoneRealEstate.com — our full IDX search platform
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Popular Searches in Southeast Michigan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Homes for Sale in Rochester, MI",
              "Homes for Sale in Troy, MI",
              "Homes for Sale in Birmingham, MI",
              "Homes for Sale in Bloomfield Hills, MI",
              "Homes for Sale in Shelby Township, MI",
              "Homes for Sale in Clarkston, MI",
              "Homes for Sale in Washington Township, MI",
              "Homes for Sale in Rochester Hills, MI",
              "Homes under $500k Oakland County",
              "$500k–$800k Homes Oakland County",
              "Luxury Homes Bloomfield Hills",
              "New Construction Oakland County",
            ].map((search) => (
              <a
                key={search}
                href="https://www.oakandstonerealestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#faf9f7] border border-gray-100 text-sm text-[#1a1a1a] px-4 py-3 rounded-sm hover:border-[#c70000] hover:text-[#c70000] transition-colors text-center"
              >
                {search}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-[#faf9f7] text-center">
        <p className="text-gray-600 mb-4">
          Want a curated list based on your specific needs?
        </p>
        <Link
          href="/buying"
          className="text-[#c70000] font-semibold hover:underline"
        >
          Talk to a buyer&apos;s agent →
        </Link>
        {" "}or call{" "}
        <a href="tel:2487553545" className="text-[#c70000] font-semibold hover:underline">
          248.755.3545
        </a>
      </section>
    </>
  );
}
