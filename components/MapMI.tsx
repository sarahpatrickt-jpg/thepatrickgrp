"use client";

import Link from "next/link";
import { useState } from "react";

interface CityPin {
  name: string;
  slug: string;
  cx: number;
  cy: number;
  /** true = red filled dot with double-ring halo */
  big: boolean;
}

interface CountyShape {
  name: string;
  /** SVG polygon points string */
  points: string;
  /** Position for the county label */
  label: { x: number; y: number };
}

// County outlines — simplified editorial polygons
// Coordinate system: viewBox "0 0 660 530"
// x = (84.6 - lon) / 2.0 * 700 (clamped to viewBox)
// y = (43.4 - lat) / 1.9 * 560 (clamped to viewBox)
const COUNTY_SHAPES: CountyShape[] = [
  {
    name: "Genesee",
    points: "208,50 432,50 432,190 208,190",
    label: { x: 320, y: 76 },
  },
  {
    name: "Livingston",
    points: "110,148 312,148 312,286 110,286",
    label: { x: 195, y: 174 },
  },
  {
    name: "Oakland",
    points: "312,108 548,108 548,286 312,286",
    label: { x: 428, y: 134 },
  },
  {
    name: "Macomb",
    points: "548,108 644,108 644,286 548,286",
    label: { x: 596, y: 134 },
  },
  {
    name: "Washtenaw",
    points: "36,286 382,286 382,418 36,418",
    label: { x: 190, y: 312 },
  },
  {
    name: "Wayne",
    points: "382,286 644,286 644,418 382,418",
    label: { x: 510, y: 312 },
  },
  {
    name: "Monroe",
    points: "252,418 512,418 512,512 252,512",
    label: { x: 382, y: 444 },
  },
];

// 40 city pins — all link to /neighborhoods/{slug}
const CITY_PINS: CityPin[] = [
  // ── Oakland County ──────────────────────────────────────
  { name: "Birmingham",      slug: "birmingham-mi",        cx: 487, cy: 250, big: true  },
  { name: "Bloomfield Hills",slug: "bloomfield-hills-mi",  cx: 475, cy: 238, big: true  },
  { name: "Bloomfield Twp",  slug: "bloomfield-township-mi",cx: 466,cy: 246, big: false },
  { name: "Rochester",       slug: "rochester-mi",         cx: 514, cy: 210, big: true  },
  { name: "Rochester Hills", slug: "rochester-hills-mi",   cx: 507, cy: 221, big: false },
  { name: "Troy",            slug: "troy-mi",              cx: 509, cy: 238, big: true  },
  { name: "West Bloomfield", slug: "west-bloomfield-mi",   cx: 427, cy: 251, big: true  },
  { name: "Royal Oak",       slug: "royal-oak-mi",         cx: 509, cy: 268, big: true  },
  { name: "Clarkston",       slug: "clarkston-mi",         cx: 413, cy: 196, big: false },
  { name: "Lake Orion",      slug: "lake-orion-mi",        cx: 477, cy: 180, big: false },
  { name: "Oxford",          slug: "oxford-mi",            cx: 466, cy: 165, big: false },
  { name: "Novi",            slug: "novi-mi",              cx: 389, cy: 272, big: true  },
  // ── Macomb County ───────────────────────────────────────
  { name: "Sterling Heights",slug: "sterling-heights-mi",  cx: 552, cy: 242, big: false },
  { name: "Warren",          slug: "warren-mi",            cx: 552, cy: 268, big: false },
  { name: "Clinton Twp",     slug: "clinton-township-mi",  cx: 581, cy: 241, big: false },
  { name: "Macomb Twp",      slug: "macomb-township-mi",   cx: 574, cy: 218, big: true  },
  { name: "Shelby Twp",      slug: "shelby-township-mi",   cx: 552, cy: 215, big: true  },
  { name: "St. Clair Shores",slug: "st-clair-shores-mi",   cx: 596, cy: 267, big: true  },
  // ── Wayne County ────────────────────────────────────────
  { name: "Grosse Pointe",   slug: "grosse-pointe-mi",     cx: 594, cy: 299, big: true  },
  { name: "Northville",      slug: "northville-mi",        cx: 390, cy: 287, big: true  },
  { name: "Plymouth",        slug: "plymouth-mi",          cx: 394, cy: 303, big: true  },
  { name: "Livonia",         slug: "livonia-mi",           cx: 436, cy: 304, big: false },
  { name: "Detroit",         slug: "detroit-mi",           cx: 546, cy: 315, big: false },
  { name: "Romulus",         slug: "romulus-mi",           cx: 421, cy: 348, big: false },
  // ── Washtenaw County ────────────────────────────────────
  { name: "Ann Arbor",       slug: "ann-arbor-mi",         cx: 298, cy: 328, big: true  },
  { name: "Ypsilanti",       slug: "ypsilanti-mi",         cx: 344, cy: 341, big: false },
  { name: "Saline",          slug: "saline-mi",            cx: 285, cy: 366, big: false },
  { name: "Dexter",          slug: "dexter-mi",            cx: 250, cy: 311, big: false },
  { name: "Chelsea",         slug: "chelsea-mi",           cx: 203, cy: 317, big: false },
  { name: "Milan",           slug: "milan-mi",             cx: 323, cy: 389, big: false },
  // ── Livingston County ───────────────────────────────────
  { name: "Brighton",        slug: "brighton-mi",          cx: 287, cy: 258, big: false },
  { name: "Howell",          slug: "howell-mi",            cx: 234, cy: 235, big: false },
  { name: "Hartland",        slug: "hartland-mi",          cx: 295, cy: 220, big: false },
  { name: "Whitmore Lake",   slug: "whitmore-lake-mi",     cx: 281, cy: 283, big: false },
  // ── Genesee County ──────────────────────────────────────
  { name: "Grand Blanc",     slug: "grand-blanc-mi",       cx: 340, cy: 139, big: false },
  { name: "Fenton",          slug: "fenton-mi",            cx: 311, cy: 177, big: false },
  { name: "Linden",          slug: "linden-mi",            cx: 284, cy: 172, big: false },
  { name: "Goodrich",        slug: "goodrich-mi",          cx: 382, cy: 142, big: false },
  // ── Monroe County ───────────────────────────────────────
  { name: "Monroe",          slug: "monroe-mi",            cx: 421, cy: 438, big: false },
  { name: "Dundee",          slug: "dundee-mi",            cx: 325, cy: 425, big: false },
];

export default function MapMI() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full select-none" style={{ maxWidth: 660 }}>
      <svg
        viewBox="0 0 660 530"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Southeast Michigan service area map"
      >
        {/* ── Background ── */}
        <rect width="660" height="530" fill="var(--paper)" />

        {/* ── County shapes ── */}
        {COUNTY_SHAPES.map((county) => (
          <g key={county.name}>
            <polygon
              points={county.points}
              fill="var(--paper-3)"
              stroke="var(--ink-3)"
              strokeWidth="0.75"
              opacity="0.55"
            />
            {/* County label */}
            <text
              x={county.label.x}
              y={county.label.y}
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-jm, 'JetBrains Mono', monospace)",
                fontSize: "9px",
                letterSpacing: "0.18em",
                fill: "var(--ink-3)",
                textTransform: "uppercase",
                pointerEvents: "none",
              }}
            >
              {county.name.toUpperCase()}
            </text>
          </g>
        ))}

        {/* ── City pins ── */}
        {CITY_PINS.map((city) => {
          const isHovered = hovered === city.slug;
          return (
            <Link
              key={city.slug}
              href={`/neighborhoods/${city.slug}`}
              aria-label={`${city.name} real estate`}
            >
              <g
                onMouseEnter={() => setHovered(city.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {city.big ? (
                  <>
                    {/* Double-ring halo */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={isHovered ? 11 : 9}
                      fill="none"
                      stroke="var(--red)"
                      strokeWidth="0.75"
                      opacity="0.25"
                      style={{ transition: "r 0.15s ease" }}
                    />
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={isHovered ? 7 : 5.5}
                      fill="none"
                      stroke="var(--red)"
                      strokeWidth="1"
                      opacity="0.5"
                      style={{ transition: "r 0.15s ease" }}
                    />
                    {/* Core dot */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={isHovered ? 4 : 3}
                      fill="var(--red)"
                      style={{ transition: "r 0.15s ease" }}
                    />
                  </>
                ) : (
                  <circle
                    cx={city.cx}
                    cy={city.cy}
                    r={isHovered ? 3.5 : 2.5}
                    fill={isHovered ? "var(--red)" : "var(--ink-2)"}
                    style={{ transition: "all 0.15s ease" }}
                  />
                )}

                {/* Hover tooltip */}
                {isHovered && (
                  <g>
                    <rect
                      x={city.cx - 40}
                      y={city.cy - 26}
                      width={80}
                      height={16}
                      rx="2"
                      fill="var(--ink)"
                      opacity="0.92"
                    />
                    <text
                      x={city.cx}
                      y={city.cy - 14}
                      textAnchor="middle"
                      style={{
                        fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                        fontSize: "8px",
                        fill: "#FDFBF7",
                        letterSpacing: "0.04em",
                        pointerEvents: "none",
                      }}
                    >
                      {city.name}
                    </text>
                  </g>
                )}
              </g>
            </Link>
          );
        })}

        {/* ── Compass rose ── */}
        <g transform="translate(624, 488)">
          <text
            textAnchor="middle"
            y="-12"
            style={{
              fontFamily: "var(--font-jm, monospace)",
              fontSize: "7px",
              fill: "var(--ink-3)",
              letterSpacing: "0.1em",
            }}
          >
            N
          </text>
          <line x1="0" y1="-8" x2="0" y2="8" stroke="var(--ink-3)" strokeWidth="0.75" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="var(--ink-3)" strokeWidth="0.75" />
          <circle cx="0" cy="0" r="2" fill="var(--ink-3)" />
        </g>

        {/* ── Scale bar ── */}
        <g transform="translate(36, 498)">
          <line x1="0" y1="0" x2="50" y2="0" stroke="var(--ink-3)" strokeWidth="0.75" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="var(--ink-3)" strokeWidth="0.75" />
          <line x1="50" y1="-3" x2="50" y2="3" stroke="var(--ink-3)" strokeWidth="0.75" />
          <text
            x="25"
            y="-5"
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-jm, monospace)",
              fontSize: "7px",
              fill: "var(--ink-3)",
              letterSpacing: "0.08em",
            }}
          >
            ~25 MI
          </text>
        </g>
      </svg>
    </div>
  );
}
