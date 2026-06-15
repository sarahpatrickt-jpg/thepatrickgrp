"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  /** Shown under the player as attribution, e.g. "Video by The Local Project" */
  credit?: string;
  creditHref?: string;
}

/**
 * Click-to-play YouTube facade. Renders a poster frame + play button and only
 * loads YouTube's iframe (privacy-enhanced nocookie domain) after the user
 * clicks, so it costs the homepage nothing until someone actually wants it.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  credit,
  creditHref,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: "16 / 9", border: "1px solid var(--line)" }}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            aria-label={`Play video: ${title}`}
            onClick={() => {
              setPlaying(true);
              trackEvent("video_play", { video_id: videoId, title });
            }}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* Poster frame. Plain img avoids the next/image domain whitelist. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
              }}
            />
            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 76,
                  height: 76,
                  backgroundColor: "var(--red)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FDFBF7" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            {/* Title overlay */}
            <span
              className="absolute bottom-0 left-0 right-0 p-5 text-left font-display text-white"
              style={{ fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.15 }}
            >
              {title}
            </span>
          </button>
        )}
      </div>
      {credit && (
        <figcaption
          className="mt-3 text-xs"
          style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)" }}
        >
          {creditHref ? (
            <a
              href={creditHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--ink)]"
            >
              {credit}
            </a>
          ) : (
            credit
          )}
        </figcaption>
      )}
    </figure>
  );
}
