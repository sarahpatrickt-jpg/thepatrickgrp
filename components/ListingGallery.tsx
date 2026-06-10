"use client";

/**
 * ListingGallery. Photo gallery for listing detail pages.
 *
 * Layout: large hero photo on top, scrollable thumbnail strip below.
 * Click any thumbnail to swap into the hero position.
 *
 * Keyboard: ←/→ arrow keys navigate between photos.
 */

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ListingGalleryProps {
  photos: string[];
  address: string;
}

export default function ListingGallery({ photos, address }: ListingGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = useCallback(() => {
    setActiveIdx((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const prev = useCallback(() => {
    setActiveIdx((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (photos.length === 0) return null;

  return (
    <div>
      {/* Hero photo */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200"
        style={{ border: "1px solid var(--line)" }}
      >
        <Image
          src={photos[activeIdx]}
          alt={`${address}, photo ${activeIdx + 1}`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          priority={activeIdx === 0}
        />

        {/* Photo counter */}
        <div
          className="absolute bottom-4 right-4 px-3 py-1.5 text-xs font-medium"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#fff",
            fontFamily: "var(--font-mono, monospace)",
            letterSpacing: "0.1em",
          }}
        >
          {activeIdx + 1} / {photos.length}
        </div>

        {/* Prev / Next buttons (only if more than 1 photo) */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-100"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                opacity: 0.85,
              }}
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-100"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                opacity: 0.85,
              }}
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip (only if more than 1 photo) */}
      {photos.length > 1 && (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {photos.map((url, i) => (
            <button
              key={url + i}
              type="button"
              onClick={() => setActiveIdx(i)}
              aria-label={`View photo ${i + 1}`}
              className="relative shrink-0 transition-opacity"
              style={{
                width: 100,
                height: 70,
                opacity: i === activeIdx ? 1 : 0.55,
                outline:
                  i === activeIdx
                    ? "2px solid var(--red)"
                    : "1px solid var(--line)",
                outlineOffset: i === activeIdx ? "-2px" : "-1px",
              }}
            >
              <Image
                src={url}
                alt={`${address}, thumbnail ${i + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
