"use client";

import Link from "next/link";
import { useState } from "react";

interface CityPin {
  name: string;
  slug: string;
  cx: number;
  cy: number;
  /** Label offset from dot center: [dx, dy]. Defaults to [0, -10] (above). */
  label?: [number, number];
  /** Text anchor override: "start" | "middle" | "end". Defaults to "middle". */
  anchor?: "start" | "middle" | "end";
}

interface CountyShape {
  name: string;
  points: string;
  label: { x: number; y: number };
}

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

// All 24 cities with published neighborhood guides
const CITY_PINS: CityPin[] = [
  // ── Oakland County ──────────────────────────────────────
  { name: "Birmingham",       slug: "birmingham-mi",         cx: 487, cy: 250, label: [0, 11],  anchor: "middle" },
  { name: "Bloomfield Hills", slug: "bloomfield-hills-mi",   cx: 460, cy: 230, label: [-8, -8], anchor: "end"    },
  { name: "Bloomfield Twp",   slug: "bloomfield-township-mi",cx: 445, cy: 244, label: [-8, 0],  anchor: "end"    },
  { name: "Rochester",        slug: "rochester-mi",          cx: 514, cy: 200, label: [0, -8],  anchor: "middle" },
  { name: "Rochester Hills",  slug: "rochester-hills-mi",    cx: 507, cy: 215, label: [-8, 0],  anchor: "end"    },
  { name: "Troy",             slug: "troy-mi",               cx: 509, cy: 238, label: [8, 0],   anchor: "start"  },
  { name: "West Bloomfield",  slug: "west-bloomfield-mi",    cx: 410, cy: 256, label: [-8, 0],  anchor: "end"    },
  { name: "Royal Oak",        slug: "royal-oak-mi",          cx: 509, cy: 268, label: [8, 0],   anchor: "start"  },
  { name: "Clarkston",        slug: "clarkston-mi",          cx: 413, cy: 190, label: [-8, 0],  anchor: "end"    },
  { name: "Lake Orion",       slug: "lake-orion-mi",         cx: 477, cy: 175, label: [8, 0],   anchor: "start"  },
  { name: "Oxford",           slug: "oxford-mi",             cx: 466, cy: 158, label: [-8, 0],  anchor: "end"    },
  { name: "Novi",             slug: "novi-mi",               cx: 380, cy: 274, label: [-8, 0],  anchor: "end"    },
  // ── Macomb County ───────────────────────────────────────
  { name: "Sterling Heights", slug: "sterling-heights-mi",   cx: 558, cy: 244, label: [8, 0],   anchor: "start"  },
  { name: "Warren",           slug: "warren-mi",             cx: 552, cy: 268, label: [8, 0],   anchor: "start"  },
  { name: "Clinton Twp",      slug: "clinton-township-mi",   cx: 588, cy: 236, label: [8, 0],   anchor: "start"  },
  { name: "Macomb Twp",       slug: "macomb-township-mi",    cx: 580, cy: 210, label: [8, 0],   anchor: "start"  },
  { name: "Shelby Twp",       slug: "shelby-township-mi",    cx: 555, cy: 208, label: [-8, 0],  anchor: "end"    },
  { name: "St. Clair Shores", slug: "st-clair-shores-mi",    cx: 604, cy: 268, label: [8, 0],   anchor: "start"  },
  // ── Wayne County ────────────────────────────────────────
  { name: "Grosse Pointe",    slug: "grosse-pointe-mi",      cx: 594, cy: 299, label: [8, 0],   anchor: "start"  },
  { name: "Northville",       slug: "northville-mi",         cx: 393, cy: 296, label: [-8, 0],  anchor: "end"    },
  { name: "Plymouth",         slug: "plymouth-mi",           cx: 400, cy: 312, label: [-8, 0],  anchor: "end"    },
  { name: "Livonia",          slug: "livonia-mi",            cx: 436, cy: 308, label: [0, 11],  anchor: "middle" },
  { name: "Detroit",          slug: "detroit-mi",            cx: 540, cy: 320, label: [0, 11],  anchor: "middle" },
  { name: "Romulus",          slug: "romulus-mi",            cx: 430, cy: 355, label: [0, 11],  anchor: "middle" },
];

export default function MapMI() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full select-none" style={{ maxWidth: 660 }}>
      <svg
        viewBox="0 0 660 530"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Southeast Michigan service area map — we serve all communities across seven counties"
      >
        {/* ── Background ── */}
        <rect width="660" height="530" fill="var(--paper)" />

        {/* ── County shapes (filled to show full service area) ── */}
        {COUNTY_SHAPES.map((county) => (
          <g key={county.name}>
            <polygon
              points={county.points}
              fill="var(--red)"
              stroke="var(--paper)"
              strokeWidth="1.5"
              opacity="0.08"
            />
            <polygon
              points={county.points}
              fill="none"
              stroke="var(--ink-3)"
              strokeWidth="0.75"
              opacity="0.35"
            />
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

        {/* ── City pins — all 24 neighborhood guides ── */}
        {CITY_PINS.map((city) => {
          const isHovered = hovered === city.slug;
          const [dx, dy] = city.label ?? [0, -10];
          const anchor = city.anchor ?? "middle";
          return (
            <Link
              key={city.slug}
              href={`/neighborhoods/${city.slug}`}
              aria-label={`${city.name} neighborhood guide`}
            >
              <g
                onMouseEnter={() => setHovered(city.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Hover ring */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={isHovered ? 8 : 0}
                  fill="none"
                  stroke="var(--red)"
                  strokeWidth="0.75"
                  opacity={isHovered ? 0.3 : 0}
                  style={{ transition: "all 0.15s ease" }}
                />
                {/* Solid red dot */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={isHovered ? 4 : 3}
                  fill="var(--red)"
                  style={{ transition: "r 0.15s ease" }}
                />
                {/* City name label — always visible */}
                <text
                  x={city.cx + dx}
                  y={city.cy + dy}
                  textAnchor={anchor}
                  dominantBaseline="central"
                  style={{
                    fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                    fontSize: isHovered ? "8px" : "7px",
                    fill: isHovered ? "var(--red)" : "var(--ink-2)",
                    letterSpacing: "0.02em",
                    pointerEvents: "none",
                    fontWeight: isHovered ? 600 : 400,
                    transition: "all 0.15s ease",
                  }}
                >
                  {city.name}
                </text>
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
