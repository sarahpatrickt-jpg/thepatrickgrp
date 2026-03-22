@AGENTS.md

# The Patrick Group — thepatrickgrp.com

Boutique real estate team in Southeast Michigan. Principal Broker: **Sarah Patrick** (licensed since 2000). Team also includes **Brad Patrick** (Realtor®), Christian Brown, and Christian Wodtke.

**Stack:** Next.js App Router, TypeScript, Tailwind CSS. Auto-deploys to Vercel on every push to `main` (GitHub: sarahpatrickt-jpg/thepatrickgrp).

---

## People

| Person | Title | Notes |
|---|---|---|
| Sarah Patrick | Principal Broker / Owner | 26 years experience. Her title is always "Principal Broker" — never "agent" |
| Brad Patrick | Realtor® | Title is exactly "Realtor®" — NOT "Lead Buyer's Agent" or any other variation |
| Christian Brown | Team Member | |
| Christian Wodtke | Team Member | |

---

## Key Files

- **`data/cities.ts`** — Single source of truth for all 24 SE Michigan city pages. Edit here, not in the page template.
- **`app/neighborhoods/[slug]/page.tsx`** — Dynamic route that renders all city pages from `data/cities.ts`
- **`components/ExitIntentPopup.tsx`** — Exit intent popup. Shows once per session only.
- **`components/CityFaqAccordion.tsx`** — Client-side FAQ accordion used on city pages

### City data structure (data/cities.ts)
Each city entry has:
- `slug`, `name`, `county`, `zipCodes`
- `marketStats`: medianPrice, medianPriceChange, daysOnMarket, pricePerSqft
- `priceRange`: low / mid / luxury descriptions
- `schoolDistrict`, `schoolInfo` (factual only — see fair housing rules)
- `about`, `realEstateOverview`, `locationAccess[]`
- `bradQuote` (the quote text — used for both Brad and Sarah)
- `quoteAuthor: "Brad" | "Sarah"` — controls whose name/title appears
- `nearbySlugsSee[]`, `sierraSearchUrl`, `faqs[]`, `ctaVariant`

### Quote author split (50/50)
**Sarah's cities:** Birmingham, Bloomfield Hills, Troy, West Bloomfield, Royal Oak, Clarkston, Macomb Township, St. Clair Shores, Grosse Pointe, Northville, Plymouth, Detroit

**Brad's cities:** All remaining 12

---

## Deployment

```bash
git add <files>
git commit -m "description"
git push
```
Vercel auto-builds on push. No manual deploy step needed.

---

## FAIR HOUSING RULES — READ BEFORE EDITING ANY COPY

**This is Michigan Fair Housing Act compliance. Do not bypass these rules.**

### Never use:
- School quality as a demand or desirability driver ("great schools," "award-winning schools," "top-rated schools," "highly ranked schools")
- Phrases like "families are drawn here for the schools" or "schools drive demand"
- Any language implying a neighborhood is better or worse because of its school quality
- Demographic language in neighborhood descriptions

### You MAY use:
- Factual school district names: "served by Rochester Community Schools," "within the Birmingham school district"
- Factual school names: "Stoney Creek High School serves this area" (City of Rochester only — not Rochester Hills)
- Objective infrastructure facts: "the district recently completed a new building"

**If in doubt, remove the school reference entirely.**

---

## COPY RULES — DO NOT REINTRODUCE THESE

### Tenure mentions ("26 years" / "since 2000")
These were deliberately reduced by ~70% because they were oversaid. **Only 3 mentions remain:**
1. Homepage differentiator card ("26 Years of Experience")
2. Sarah's about-page bio paragraph ("With over 26 years of experience")
3. Northville city quote ("In 26 years, I have never seen...")

Do not add "26 years," "since 2000," or tenure language anywhere else on the site.

### Referral language
Removed entirely. The team is running paid ads. **Do not use:**
- "referral-based business"
- "built on referrals"
- "by referral only"
- Any framing that implies they don't do outbound marketing

### Brad's title
Always **"Realtor®"** — nothing else. Not "Lead Buyer's Agent," not "Buyer's Agent," not "agent."

---

## BRAND VOICE

- Confident, direct, no fluff
- Knowledgeable without being condescending
- Sarah's voice: macro/historical perspective, market cycles, long-term view, seller-aware
- Brad's voice: buyer-focused, mortgage/financing awareness, tactical, competitive-market savvy
- Never oversell or use superlatives without substance ("the best," "unlike any other")
- No emojis in page copy (newsletter/social is fine)

---

## ANALYTICS

GA4 conversion events configured:
- `contact_form_submitted`
- `cash_offer_submitted`
- `vip_buyer_signup`
- `newsletter_signup`
- `phone_call_click`

Still needs to be done manually in GA4 Admin: mark those events as conversions at analytics.google.com.

---

## PENDING / NEXT UP

- GA4: Mark conversion events in GA4 Admin (manual — Sarah to do)
- GBP: Upload team headshots, office exterior, Real Producers April 2026 cover
- GBP Post: Publish March 2026 market report
- April 2026 market report page (when Realcomp data is available)
- City vs City comparison pages (next programmatic SEO priority)
- Brad + Sarah to review/approve all 24 city quotes
