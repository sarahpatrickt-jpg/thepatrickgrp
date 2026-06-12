# The Patrick Group — Master Business Document

The ONE document for the business side of thepatrickgrp.com. Brand and copy rules live in `CLAUDE.md` (repo root); everything else is here.

Last full update: 2026-06-10

---

## 1. Stack & Accounts

| What | Where |
|---|---|
| Domain | GoDaddy |
| Code | GitHub `sarahpatrickt-jpg/thepatrickgrp` |
| Hosting | Vercel — push to `main` auto-deploys (builds take 2–4 min) |
| Analytics | GA4 (5 key events configured, confirmed May 2026) |
| CRM | Sierra |
| Newsletter | Beehiiv |
| Email marketing (planned) | Mailchimp per growth plan |
| Google Business Profile | business.google.com |
| MLS data | Spark API (MichRIC + RealComp + MiRealSource), key in Vercel env `SPARK_API_KEY` |
| External search site | bradpatrick.oakandstonerealestate.com |

## 2. Automations (all running — do not duplicate manually)

| Automation | Schedule | What it does |
|---|---|---|
| Listings sync | Nightly 11 PM ET (Vercel cron) | `scripts/update-listings-nightly.ts` pulls active/pending listings + photos from Spark API into `data/listings.ts`, commits, pushes |
| Weekly journal article | Mondays 8 AM (Claude scheduled task `weekly-journal-article-patrick-group`) | Researches the week's viral real estate topics, writes a Sarah-voice article into `data/posts.ts`, pushes. Homepage auto-promotes newest 3. |
| Monthly grant update | 1st of month 9 AM (Claude task `monthly-grant-update`) | Refreshes Michigan homebuyer grant programs in `data/grants.ts` |
| Morning dashboard | Weekdays ~10 AM (Claude task `patrick-group-morning-dashboard`) | Daily briefing on growth plan tasks |

## 3. IDX / Listings Architecture (current, June 2026)

- Full on-site search was built, then deliberately pivoted away from (data quality edge cases). The `/search-homes` page exists but is not linked.
- **Live approach:** "Search Homes" buttons go to the external Oak & Stone site. Homepage + /buying show a **Featured Homes** grid (6 homes, $600k+, boutique cities, rotates daily, deduped across MLS feeds) via `components/FeaturedListings.tsx`.
- Featured cards link to internal detail pages `/listings/[id]` with full photo gallery (`components/ListingGallery.tsx`).
- ~15k listings cached in `data/listings.ts`, refreshed nightly. Listings under $50k filtered out (rentals/lots).
- Spark API rate limit: 1,500 req / 5 min; sync uses ~150 requests.

## 3.5 Ad hoc MLS queries (comps, rentals, CMAs) from ANY chat

Any Claude session on this Mac can query the Spark API directly. The key lives at `website-repo/.env.local` (`SPARK_API_KEY`); base URL `https://replication.sparkapi.com/v1/listings` with Bearer auth. SparkQL `_filter` examples that work: `MlsStatus Eq 'Active'`, `PropertyType Eq 'F'` (rentals; 'A' single-family), `CountyOrParish Eq 'Oakland'`, `BedsTotal Eq 3`, plus the three MlsId values (in `scripts/update-listings-nightly.ts`) to span MichRIC + RealComp + MiRealSource. Response shape: `D.Results[].StandardFields`. Pagination never returns empty: stop on a partial page or cap pages. License expressly permits statistical/CMA use for our own clients; do not export or publish raw data.

**Sarah's comp methodology standards (locked June 11, 2026, after iterating on the sell-vs-rent report):**
1. Values from CLOSED sales (`MlsStatus Eq 'Closed'` + `ClosePrice`), never active asking prices. Rents from actual leased rentals where available, asking only as a flagged fallback.
2. Feature-match the comps to the subject: 2 to 2.5 car garage (`GarageSpaces`, well populated), exclude affirmative crawl-space/slab (`Basement` dict; field often blank, blanks retained in "practical" mode, excluded in "strict" mode for appraiser-grade work), single family only, no condos (`PropertySubType` excludes condo; matters on rentals where class F lumps everything).
3. Dedupe across the three MLS feeds by (price, sqft, zip): the same transaction appears in multiple feeds.
4. Test for sub-market splits by zip (cluster zip medians, split at largest gap if >= 25 percent divergence). Warren is two markets: north 48092/48088 vs south 48089/48091; the split disappears when comps are feature-matched because the south stock is crawl-space.
5. Always disclose comp counts (n) per number; flag thin samples; city medians are for strategy, single-property pricing needs a zip-level strict pull.

**SparkQL gotchas (hard-won):** dates UNQUOTED (`CloseDate Ge 2026-03-01`; quoted dates throw syntax errors). Query per CITY, not per county (the 800-row page cap truncates county queries arbitrarily). Pagination never returns empty: stop on partial page or cap pages. `PropertyType`: A=single family, B=condo, F=rental class. `BathsTotal Eq 1` works server-side. Response: `D.Results[].StandardFields`.

**Tools:** report builder + last dataset saved at `~/Desktop/patrick-group/content/comp-tools/`. Finished reports in `~/Desktop/patrick-group/content/`. Example outputs: June 11 sell-vs-rent report (10 cities; Eastpointe 11.1 percent yield tops cash flow, Royal Oak $312K tops value); clean Warren 3/1 w/ basement+garage = $198,500 median.

## 4. MichRIC® IDX License (signed June 1, 2026 — auto-renews each June 1)

Provider: Michigan Regional Information Center (MichRIC®) via GMAR. Contact: support@michric.org · 5830 Venture Park Dr., Kalamazoo, MI 49009 · mlshelp.com. Michigan law, Kalamazoo County jurisdiction.

**Allowed:** public IDX display on thepatrickgrp.com; local caching for performance (no live API calls per page load); statistical/CMA use for specific clients; redistributing the team's OWN listings.

**Prohibited (risk: injunctive relief + attorney's fees):** redistributing/selling/sublicensing data; exporting raw data to third parties; aggregating MichRIC data with other sources (Zillow, Redfin, etc.); derivative works beyond IDX/statistical use; sharing members-only data publicly; sharing passwords via broadcast channels.

**Compliance:** maintain firewalls/filters; follow MLS Bylaws + IDX/VOW policies (MLS rules prevail; check mlshelp.com); data is "as is," MichRIC retains all IP, we indemnify.

**Termination — CRITICAL:** either party with 5 business days written notice (USPS + email). Auto-terminates if Sarah leaves GMAR, GMAR leaves MichRIC, or the vendor relationship ends. On termination: **purge ALL MichRIC data from all servers within 1 business day**, written confirmation within 3. Keep a kill switch to purge `data/listings.ts` and caches within 24 hours.

## 5. 2026 Organic Growth Plan (created 2026-05-11)

Budget: $0–100/month, no paid ads yet. Revenue targets: 12-month 35–45 transactions ($378K–$486K GCI); 24-month 55–65 ($619K–$731K).

1. **Google Business Profile (top priority):** get to 50+ reviews (5/month via past-client texts), weekly posts (repurpose journal), monthly photos, respond to reviews within 24h. Still needed: Real Producers cover + office exterior photos.
2. **Social:** 3 Reels/week (15–45s phone video), cross-post IG/FB/Shorts/TikTok. Sarah's lane: market perspective, seller strategy. Brad's lane: buyer tips, rates, offer tactics.
3. **Email nurture:** Mailchimp monthly market update (repurpose journal), quarterly past-client check-in, 6–8 email drip for new leads, segment buyer vs seller.
4. **SEO:** weekly journal (automated now), city-vs-city comparison pages next, AI citation testing.

Cadence: daily 1 social post; weekly journal + GBP post + review outreach; monthly newsletter + GBP photos + performance review; quarterly past-client email + ROI review.

## 6. SEO / Search Console Log (newest first — append after each checkup)

### 2026-06-12 — GA4 review (last 28 days, May 15–Jun 11)
- 284 active users, 800 views, 279 new users. Last 7 days: 121 active (+6.1%), organic search +164% (37 users), organic social still #1 (81), referral +300% (4)
- Top pages: / 397 views; **/search-homes 102 views, 38s avg engagement, 298 searches by 54 users (5.5 each)** despite being unlinked from nav — found via Google index; most engaged page on the site
- Key events thin: contact_form_submitted 4, vip_buyer_signup 1, grant_lead_submitted 2; newsletter_signup 0, cash_offer_submitted 0, phone_call_click 0
- **phone_call_click 0 was a tracking bug, fixed 6/12**: only Nav/Footer tel: links were instrumented; ~20 pages had untracked tel: links. Global delegated listener added (`components/PhoneClickTracker.tsx` in layout). Expect phone clicks to start appearing; don't compare to pre-6/12 numbers
- form_start 16 vs contact_form_submitted 4 = 75% form abandonment; watch
- Search Console linked to GA4 (Sarah approved 6/12): www property + Patrick Group Website stream; "Search Console" report collection published in GA4 left nav (Queries + Google organic search traffic). Data populates within ~48h
- /search-homes exposure increased 6/12: already footer-linked; added a quiet "Quick search on our site" link in the /buying hero (it was the most engaged page on the site)

### 2026-05-29 — One-week check-in
- Impressions 426 (up from 378), 1 click, CTR 0.2%, avg position 39.1 (broader discovery after www fix)
- Top query: "real estate agents near me" (36 impressions, 0 clicks). Top pages: homepage 177, /grants 145, /neighborhoods/livonia 54
- Indexing requested: /inherited-property, /buying; /cash-offer already indexed. Still to check: /selling, /contact
- Backlinks: 0 external links showing — building them is a priority
- michiganhomegrants.com: verified, sitemap submitted, re-crawl requested after a stale cached noindex; bank/CU programs added to landing page + grants wizard

### 2026-05-22 — Initial health check + www fix
- Found: property registered for non-www but site 308-redirects to www → 6 redirect errors; 7 indexed / 7 not; 9 clicks / 378 impressions / avg position 18.5 (3-mo)
- Fixed: added www property, submitted sitemap, updated ALL URLs site-wide to www (32 files, commit a66ac33), requested re-indexing for /, /grants, /divorce-real-estate, /estate-sales
- Notes: Google deprecated FAQ rich results May 7, 2026 (schema cleanup pending); no manual actions; 0 backlinks

## 7. Backlog (consolidated, as of 2026-06-10)

Done June 10: design system unified across all pages (brand tokens); /market-tracker launched (nightly city-level inventory + median price, history in data/market-history.json, WoW change appears after 7 days); reviews surfaced in hero + testimonials (16 on /reviews, true 32-count shown); fair housing copy cleanup; site-wide em dash removal; city pages got city-specific Search Homes hero buttons; homepage county grid moved to bottom with "Serving All of Southeast Michigan" framing; photo bands on all 11 specialty pages (graded via assets/grade.py, contained 1024px frames); Brad's email signature built (assets/brad-email-signature.html) and installed.

Awaiting Sarah/Brad (drafted and ready): send Real Producers + Hour Detroit backlink emails (drafts in the June 10 chat); add thepatrickgrp.com to Brad's Realtor.com profile and GMAR directory (Zillow DONE, verified 6/12: "Visit agent website" → thepatrickgrp.com); 5 review-request texts per month. Brad's Zillow profile has 0 reviews vs 32 on Google; worth pointing a few past clients at Zillow too.

- Sierra routing rule for inherited property leads (source "thepatrickgrp.com - Inherited Property")
- ~~AI citation test~~ DONE 6/12: /cash-offer SURFACES in web search for "cash offer southeast michigan"; /divorce-real-estate, /compare/*, /grants do NOT surface for their queries (outranked by content mills, bestplaces.net, indexyard, MSHDA). AI-readiness audit also 6/12: crawlers (GPTBot/ClaudeBot/PerplexityBot) get 200 + full server-rendered HTML, schema solid (RealEstateAgent, FAQPage, HowTo, Article w/ dates+author), llms.txt added. Verdict: technically optimized; the bottleneck is authority/backlinks. Keep FAQPage schema (Google dropped the rich result but LLMs still read it). Retest quarterly.
- /grants made citation-grade 6/12 (Sarah's priority page): visible "last updated" date (constants `GRANTS_LAST_UPDATED`/`_ISO` in data/grants.ts, monthly task must bump both), all 20 program cards now link their official program pages, ItemList schema with dateModified added. Cards render from data/grants.ts (no more hardcoded duplicates in page.tsx).
- FAQ schema cleanup (deprecated by Google May 7, 2026)
- Backlink building (0 external links in Search Console)
- ~~City-vs-city comparison pages~~ DONE: 17 live at /compare/* (June 2026)
- Facebook post with UTM-tagged inherited property link
- Brad + Sarah review/approve all 24 city page quotes
- GBP: upload Real Producers April 2026 cover + office exterior photos
- GBP: publish March 2026 market report post (copy ready)
- Sold/Closed listings not yet in nightly sync (Spark date filter syntax unresolved)
- Unique hero image for the June buyer-window article (currently reuses may-pulse image)
- Paid ads launch: revisit when revenue allows

## 8. Umbrella Folder Map (`~/Desktop/patrick-group/` — sorted 2026-06-10)

| Folder | Contents |
|---|---|
| `website-repo/` | THE live site source (this repo) |
| `market-analyses/` | Per-property market analysis PDFs/HTML |
| `zbuyer-emails/` | zbuyer outreach email HTML files |
| `assets/` | Review QR code, listing presentations, brand zip, Brad email signature, photo pipeline (`photos-raw/` originals, `photos-graded/` output, `grade.py` applies the unified site photo treatment) |
| `content/` | gbp-content.md, handoff-christian.md |
| `landing-pages/`, `listing-presentation/` | Standalone deliverable projects |
| `website 2/` | OLD design handoff — never edit |
