@AGENTS.md

# The Patrick Group — thepatrickgrp.com

Boutique real estate team in Southeast Michigan. Principal Broker: **Sarah Patrick** (licensed since 2000). Team also includes **Brad Patrick** (Realtor®), **Christian Brown** (Realtor®), and Christian Wodtke.

**Stack:** Next.js App Router, TypeScript, Tailwind CSS. Auto-deploys to Vercel on every push to `main` (GitHub: sarahpatrickt-jpg/thepatrickgrp).

**Business hub:** `docs/BUSINESS.md` — the ONE master doc: accounts, automations, growth plan, IDX architecture, MichRIC license terms, SEO log, backlog, folder map. Read it when working on anything beyond code. Old planning docs: `docs/archive/`.

---

## People

| Person | Title | Notes |
|---|---|---|
| Sarah Patrick | Principal Broker / Owner | 26 years experience. Her title is always "Principal Broker" — never "agent" |
| Brad Patrick | Realtor® | Title is exactly "Realtor®" — NOT "Lead Buyer's Agent" or any other variation |
| Christian Brown | Realtor® | |
| Christian Wodtke | Team Member | |

---

## Key Files

- **`data/cities.ts`** — Single source of truth for all 24 SE Michigan city pages. Edit here, not in the page template.
- **`data/posts.ts`** — All journal articles. Homepage auto-promotes the newest 3 by date.
- **`data/listings.ts`** — ~15k cached MLS listings, regenerated nightly by `scripts/update-listings-nightly.ts`. Never hand-edit listing entries.
- **`components/FeaturedListings.tsx`** — Featured Homes grid (homepage + /buying): $600k+, boutique cities, daily rotation, address-deduped.
- **`app/neighborhoods/[slug]/page.tsx`** — Dynamic route rendering all city pages from `data/cities.ts`
- **`components/ExitIntentPopup.tsx`** — Exit intent popup. Shows once per session only.

### City data structure (data/cities.ts)
Each city entry has: `slug`, `name`, `county`, `zipCodes`; `marketStats` (medianPrice, medianPriceChange, daysOnMarket, pricePerSqft); `priceRange` (low/mid/luxury); `schoolDistrict`, `schoolInfo` (factual only — see fair housing rules); `about`, `realEstateOverview`, `locationAccess[]`; `bradQuote` + `quoteAuthor: "Brad" | "Sarah"`; `nearbySlugsSee[]`, `sierraSearchUrl`, `faqs[]`, `ctaVariant`.

**Quote author split:** Sarah's cities: Birmingham, Bloomfield Hills, Troy, West Bloomfield, Royal Oak, Clarkston, Macomb Township, St. Clair Shores, Grosse Pointe, Northville, Plymouth, Detroit. Brad: the remaining 12.

---

## Deployment

```bash
git add <files> && git commit -m "description" && git push
```
Vercel auto-builds on push. No manual deploy step. Builds take 2–4 min (large listings file).

---

## FAIR HOUSING RULES — READ BEFORE EDITING ANY COPY

**This is Michigan Fair Housing Act compliance. Do not bypass these rules.**

### Never use:
- School quality as a demand or desirability driver ("great schools," "award-winning schools," "top-rated schools," "highly ranked schools")
- Phrases like "families are drawn here for the schools" or "schools drive demand"
- Any language implying a neighborhood is better or worse because of its school quality
- "Family" as a demographic descriptor of a neighborhood ("family-friendly," "Family · Oakland" tags)
- Demographic language in neighborhood descriptions

### You MAY use:
- Factual school district names: "served by Rochester Community Schools"
- Factual school names: "Stoney Creek High School serves this area" (City of Rochester only — not Rochester Hills)
- Objective infrastructure facts: "the district recently completed a new building"

**If in doubt, remove the school reference entirely.**

---

## COPY & WRITING RULES — DO NOT REINTRODUCE THESE

### No em dashes (Sarah's explicit rule, June 2026)
Never use em dashes (—) in site copy, journal articles, or marketing content. Restructure with periods, commas, colons, or parentheses. (This file's own formatting is exempt; published content is not.)

### Tenure mentions ("26 years" / "since 2000")
Deliberately reduced ~70%. **Only 3 mentions remain:** homepage differentiator card, Sarah's about-page bio, Northville city quote. Do not add tenure language anywhere else.

### Referral language
Removed entirely; the team runs paid ads. Never: "referral-based business," "built on referrals," "by referral only."

### Brad's title
Always **"Realtor®"** — nothing else.

### Journal card images
Never invent image filenames (broken images). Reuse from `/public/images/insights/` and avoid using the same image as the other two homepage journal cards.

---

## BRAND VOICE

- Confident, direct, no fluff; knowledgeable without being condescending
- Sarah: macro/historical perspective, market cycles, long-term view, seller-aware
- Brad: buyer-focused, mortgage/financing awareness, tactical, competitive-market savvy
- Never oversell or use superlatives without substance ("the best," "unlike any other")
- No emojis in page copy (newsletter/social is fine)

---

## ANALYTICS

GA4 key events (all confirmed in GA4 Admin, May 2026): `contact_form_submitted`, `cash_offer_submitted`, `vip_buyer_signup`, `newsletter_signup`, `phone_call_click`.

---

## AUTOMATIONS (do not duplicate this work manually)

- **Nightly listings sync** — Vercel cron 11 PM ET → `data/listings.ts`
- **Weekly journal article** — Claude scheduled task, Mondays 8 AM (researches viral topics, writes, pushes)
- **Monthly grants refresh** — Claude scheduled task, 1st of month
- Full details + backlog: `docs/BUSINESS.md`
