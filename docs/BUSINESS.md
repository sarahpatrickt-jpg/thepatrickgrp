# The Patrick Group — Business Hub

Single source of truth for the business side of thepatrickgrp.com.
Brand/copy rules live in `CLAUDE.md` (repo root). Legal terms in `docs/MICHRIC-LICENSE.md`. SEO history in `docs/SEO-LOG.md`.

Last full update: 2026-06-10

---

## Stack & Accounts

| What | Where |
|---|---|
| Domain | GoDaddy |
| Code | GitHub `sarahpatrickt-jpg/thepatrickgrp` |
| Hosting | Vercel — push to `main` auto-deploys |
| Analytics | GA4 (5 key events configured) |
| CRM | Sierra |
| Newsletter | Beehiiv |
| Email marketing (planned) | Mailchimp per growth plan |
| Google Business Profile | business.google.com |
| MLS data | Spark API (MichRIC + RealComp + MiRealSource), key in Vercel env `SPARK_API_KEY` |
| External search site | bradpatrick.oakandstonerealestate.com |

## Automations (all running)

| Automation | Schedule | What it does |
|---|---|---|
| Listings sync | Nightly 11 PM ET (Vercel cron) | `scripts/update-listings-nightly.ts` pulls active/pending listings + photos from Spark API into `data/listings.ts`, commits, pushes |
| Weekly journal article | Mondays 8 AM (Claude scheduled task `weekly-journal-article-patrick-group`) | Researches the week's viral real estate topics, writes a Sarah-voice article into `data/posts.ts`, pushes. Homepage auto-promotes newest 3. |
| Monthly grant update | 1st of month 9 AM (Claude task `monthly-grant-update`) | Refreshes Michigan homebuyer grant programs in `data/grants.ts` |
| Morning dashboard | Weekdays ~10 AM (Claude task `patrick-group-morning-dashboard`) | Daily briefing on growth plan tasks |

## IDX / Listings Architecture (current, June 2026)

- Full on-site search was built, then deliberately pivoted away from (data quality edge cases). The `/search-homes` page exists but is not linked.
- **Live approach:** "Search Homes" buttons go to the external Oak & Stone site. Homepage + /buying show a **Featured Homes** grid (6 homes, $600k+, boutique cities, rotates daily, deduped across MLS feeds) via `components/FeaturedListings.tsx`.
- Featured cards link to internal detail pages `/listings/[id]` with full photo gallery (`components/ListingGallery.tsx`).
- ~15k listings cached in `data/listings.ts`, refreshed nightly. Listings under $50k filtered out (rentals/lots).
- Spark API rate limit: 1,500 req / 5 min. Sync uses ~150 requests. Compliance rules in `docs/MICHRIC-LICENSE.md`.

## 2026 Organic Growth Plan (created 2026-05-11)

Budget: $0–100/month, no paid ads yet. Revenue targets: 12-month 35–45 transactions ($378K–$486K GCI); 24-month 55–65 ($619K–$731K).

1. **Google Business Profile (top priority):** get to 50+ reviews (5/month via past-client texts), weekly posts (repurpose journal), monthly photos, respond to reviews within 24h. Still needed: Real Producers cover + office exterior photos.
2. **Social:** 3 Reels/week (15–45s phone video), cross-post IG/FB/Shorts/TikTok. Sarah's lane: market perspective, seller strategy. Brad's lane: buyer tips, rates, offer tactics.
3. **Email nurture:** Mailchimp monthly market update (repurpose journal), quarterly past-client check-in, 6–8 email drip for new leads, segment buyer vs seller.
4. **SEO:** weekly journal (automated now), city-vs-city comparison pages next, AI citation testing.

Cadence: daily 1 social post; weekly journal + GBP post + review outreach; monthly newsletter + GBP photos + performance review; quarterly past-client email + ROI review.

## Backlog (consolidated, as of 2026-06-10)

- Sierra routing rule for inherited property leads (source "thepatrickgrp.com - Inherited Property")
- AI citation test: /divorce-real-estate and /cash-offer in ChatGPT/Gemini (overdue since March)
- FAQ schema cleanup (Google deprecated FAQ rich results May 7, 2026)
- Backlink building (0 external links in Search Console)
- City-vs-city comparison pages (next programmatic SEO build)
- Facebook post with UTM-tagged inherited property link
- Brad + Sarah review/approve all 24 city page quotes
- GBP: upload Real Producers April 2026 cover + office exterior photos
- GBP: publish March 2026 market report post (copy ready)
- Sold/Closed listings not yet in nightly sync (Spark date filter syntax unresolved)
- Unique hero image for the June buyer-window article (currently reuses may-pulse image)
- Paid ads launch: revisit when revenue allows

## Umbrella Folder Map (`~/Desktop/patrick-group/`)

- `website-repo/` — THE live site source (this repo). The folder `website 2/` is an old design handoff; do not edit it.
- `landing-pages/`, `listing-presentation/` — standalone deliverables
- Root PDFs/HTML — per-property market analyses and zbuyer email deliverables (one-off artifacts)
- `gbp-content.md`, `handoff-christian.md` — content docs
