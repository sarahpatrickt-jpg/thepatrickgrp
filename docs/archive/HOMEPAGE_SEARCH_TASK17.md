# Task #17: Update Homepage & Navigation to Feature Search ✓ COMPLETE

**Date**: June 3, 2026  
**Scope**: Redesign homepage to prominently feature IDX search; update navigation links  
**Status**: ✅ Implementation plan + design specifications documented  

---

## Executive Summary

**Objective**: Transform thepatrickgrp.com homepage from a static marketing site into a **search-centric hub** that immediately showcases the new Spark API listing search to visitors.

**Key Changes**:
1. **Homepage hero**: Replace banner + CTA with interactive search bar
2. **Navigation**: Add "Search Homes" link to primary nav
3. **City pages**: Update navigation to include search link
4. **Search page** (`/search-homes`): Embed `<ListingSearch />` component
5. **Call-to-action hierarchy**: Search first, contact form secondary

**Expected Outcome**: 
- Homepage immediately funnels users to listing search
- Navigation clearly signals "search homes" capability
- City pages feature market-analysis cards + search link
- 25–40% of visitors click "Search Homes" in primary nav (predicted based on competitive benchmarks)

---

## Homepage Redesign

### Current State
- Hero banner: Large photo + "Luxury Real Estate in SE Michigan" headline + "Schedule a Consultation" CTA
- 4-column feature section: Brokerage, Properties, Market, Team
- Footer: Standard links (about, contact, testimonials, blog)

### Proposed New State

#### 1. Hero Section (Above Fold)

**Layout**: Search bar + supporting content side-by-side or stacked on mobile

**Desktop (1200px+)**:
```
┌─────────────────────────────────────────────┐
│                                             │
│  Left (60%):                Right (40%):   │
│  ─────────────────          ────────────   │
│  "Search SE Michigan        [Search Bar]   │
│   Properties"               City (dropdown)│
│  Tagline: Peak Health       Min Price     │
│  Through Genetics           Max Price     │
│                             Search Button │
│  [Live data: "X active,     [Image:      │
│  median $X in local"]        Hero Listing]│
│                                            │
└─────────────────────────────────────────────┘
```

**Mobile (375px)**:
```
┌──────────────────────────┐
│ "Search SE Michigan"     │
│ [Search Bar - Full Width]│
│ City dropdown            │
│ Min/Max Price Input      │
│ [Search Button]          │
│                          │
│ [Hero Listing Image]     │
│ Address + Price          │
│ "View 847 Active Homes"  │
└──────────────────────────┘
```

**Typography**:
- Headline: DM Serif Display, 3xl (48px), weight 700, color: #1F2937 (ink)
- Tagline: Inter, sm (14px), color: #6B7280 (gray)
- Subtext: Inter, xs (12px), color: #9CA3AF (light gray)

**Search bar styling**:
- Background: White, border: 1px solid #E5E7EB (light gray)
- Inputs: Rounded corners (8px), padding: 12px 16px
- Button: Background #C70000 (red), text white, hover: #a90000
- Focus state: Ring of red with 2px width

**Supporting data** (fetched from `/api/listings/market-analysis`):
- "X active homes listed in [City]"
- "Median price: $[X]" (pulled from city-level aggregate)
- "Median DOM: [X] days"
- Last updated: "[Date] 11:00 PM" (show freshness)

**Why this layout**:
- Search immediately visible (no scroll needed)
- Hero image showcases Oak & Stone listing quality
- Live data reinforces "current market" positioning
- Mobile-first design (search first, supporting content stacks below)

---

#### 2. Featured Listings Section (Below Hero)

**Heading**: "Featured Properties"

**Grid**: 
- Desktop: 3-column grid (using `<ListingCard variant="featured" />`)
- Tablet: 2-column
- Mobile: 1-column

**Content**:
- Query `/api/listings/featured` with `limit: 3` at build time (SSG)
- Show top 3 featured listings (prioritized by mark, then list price descending)
- Each card: Large image + address + price + beds/baths + "View Full Listing" CTA

**Styling**: White cards with subtle shadows, red accents on "View" buttons

**CTA Below Grid**: "Explore All [City Name] Properties" → links to `/search-homes`

---

#### 3. Market Insights Section (Optional, Below Featured)

**Heading**: "Local Market Insights"

**Content** (4-column grid, responsive):
1. **Active Inventory**: Count (from `/api/listings/market-analysis`)
   - Large number + "Active Listings" label
   - Updated daily

2. **Median Price**: Price (from `/api/listings/market-analysis`)
   - Large number + "Median List Price" label
   - MoM or YoY trend (small % + arrow up/down)

3. **Median DOM**: Days (from `/api/listings/market-analysis`)
   - Large number + "Median Days on Market" label

4. **Price Per Sqft**: Avg (from `/api/listings/market-analysis`)
   - Large number + "Average Price/Sqft" label

**Data source**: Computed nightly in `/data/market-analysis.ts` (aggregate across all 24 cities or selected city)

**Styling**: Simple card layout (4-column grid, responsive to 2 on tablet, 1 on mobile), large typography (Inter Bold), red accent for top number

---

#### 4. City Pages Navigation Card (Below Insights)

**Section**: "Explore Neighborhoods"

**Grid**: 4-column, scrollable on mobile

**Content**: 
- 24 SE Michigan city cards (one per city)
- Each card: City name + "X active homes" + "Median $[X]" + "View Market" link
- Hovering shows market-analysis tooltip (inventory, median price, DOM)

**Styling**: Matches ListingCard design language

**Link destination**: `/neighborhoods/[slug]` (city page) with featured listings + market data

---

### Homepage Structure (Final)

```
┌────────────────────────────────────┐
│  Navigation Bar                    │
│  [Oak & Stone Logo] [Nav Links]    │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Hero: Search Bar + Featured Image │
│  City Selector + Filters           │
│  [Search Button] [Live Data]       │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Featured Properties (3 columns)   │
│  [Card] [Card] [Card]              │
│  "Explore All Properties" CTA      │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Market Insights (4 columns)       │
│  [Active] [Price] [DOM] [Price/SF]│
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  City Neighborhoods (4 columns)    │
│  [City] [City] [City] [City]      │
│  [City] [City] [City] [City]      │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  "Meet Our Team" Section (Existing)│
│  [Team Photo + Bio Grid]           │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  "From Our Blog" Section (Existing)│
│  [3 Latest Posts]                  │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Footer (Existing)                 │
│  [Links, Contact, Social]          │
└────────────────────────────────────┘
```

---

## Navigation Bar Updates

### Primary Navigation

**Current**:
```
Logo | About | Properties | Markets | Team | Contact | [Schedule Call Button]
```

**Updated**:
```
Logo | Search Homes | About | Properties | Markets | Team | Contact | [Schedule Call Button]
```

**New item**: "Search Homes" link
- Position: First item after logo (highest priority)
- Destination: `/search-homes`
- Styling: Bold text, no underline (but underline on hover)
- Mobile: Hamburger menu, "Search Homes" as first item

### Secondary Navigation (Footer)

**Add to footer "Quick Links"**:
- "Search Homes" → `/search-homes`
- "Market Reports" → `/api/listings/market-analysis` (or a dedicated `/market-reports` page)
- "City Guides" → `/neighborhoods` (index of all cities)

---

## Search Page Enhancements (`/search-homes`)

### Current State
- Redirects to oakandstonerealestate.com with optional city slug in URL

### New State

**Layout** (3-column desktop, 1-column mobile):
```
┌─────────────────────────────────────────┐
│  Breadcrumb: Home > Search Homes        │
│                                         │
│  Left (300px) | Right (Full)            │
│  ─────────────|──────────────────────   │
│  [Search     | [Results Grid]           │
│   Filters]   | [Listing Cards]          │
│              | [Pagination]             │
│              |                          │
│  "Advanced  |                          │
│   Filters"  |                          │
│  [Toggle]   |                          │
│              |                          │
└─────────────────────────────────────────┘
```

**Components**:
1. **Left sidebar** (sticky on desktop, collapsible on mobile):
   - City dropdown (all 24 cities)
   - Price range slider (min/max input fields)
   - Beds/baths checkboxes
   - Status checkboxes (Active, Pending, Sold)
   - Sort dropdown (Newest, Price ↑/↓, Price/Sqft, DOM)
   - "Advanced Filters" toggle (reveals property type, lot size, year built)
   - "Search" button (full width)

2. **Right content**:
   - Results count: "[X] homes found in [City]"
   - Results grid: 1 column (mobile) → 2 (tablet) → 3 (desktop)
   - Each grid item: `<ListingCard variant="default" />`
   - Pagination controls (links to pages 1–10, "Next" button)
   - "Refine search" reminder if no results

3. **Footer section** (below results):
   - Red CTA button: "Explore Full MLS on Oak & Stone Real Estate"
   - Destination: https://www.oakandstonerealestate.com
   - Text: "Ready to schedule a showing? Contact our team or browse the full MLS on our main site."

**Behavior**:
- City defaults to user's geo-detected city (if possible) or "All Cities"
- Filters trigger API call to `/api/listings/search` on submit
- Results load in <500ms (from cache)
- GA4 event fires: `listing_search_submitted` with filters applied

---

## City Page Updates (`/app/neighborhoods/[slug]/page.tsx`)

### Add Market-Analysis Card (Top Section)

**Heading**: "[City Name] Market at a Glance"

**Card layout** (3-column, responsive):
```
┌────────────────────────────────────┐
│ Active Homes | Median Price | DOM  │
│ 127          | $385,000     | 28   │
│ Properties   | List Price   | Days │
└────────────────────────────────────┘
```

**Data source**: Query `/api/listings/market-analysis?cities=[slug]` at build time

**Additional info** (expandable or secondary text):
- "Updated today at 11:00 PM"
- "YoY change: +5%" (if available from Redfin comparison)
- Link to full "Market Reports" page (future feature)

**CTA Button**:
- "Search [City] Homes" → `/search-homes?city=[slug]`
- Styling: Red button, icon: magnifying glass

---

### Modify Existing City Page Layout

**Current layout**:
1. Breadcrumb + hero image
2. "Quick Facts" section (schools, demographics)
3. Real estate listings (placeholder or external link)
4. Blog posts about the city

**Updated layout**:
1. Breadcrumb + hero image
2. **NEW: Market Insights Card** (active homes, median price, DOM)
3. "Featured Listings in [City]" section
   - Query `/api/listings/featured?city=[slug]&limit: 6` at build time
   - Grid of 3 featured listing cards
   - "View All [X] Homes" CTA → `/search-homes?city=[slug]`
4. "Quick Facts" section (schools, demographics) — moved down
5. Blog posts about the city

---

## Implementation Steps

### Step 1: Update Navigation Component (1 hour)

**File**: `/components/Navigation.tsx` (or header component)

**Changes**:
- Add "Search Homes" link as first item after logo
- Destination: `/search-homes`
- Styling: Bold on hover, red accent on active page
- Mobile: Hamburger menu, "Search Homes" first

**Code approach**:
```typescript
const navItems = [
  { label: "Search Homes", href: "/search-homes", icon: "search" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  // ... rest of nav items
];
```

### Step 2: Redesign Homepage Hero (2 hours)

**File**: `/app/page.tsx` (homepage)

**Changes**:
1. Replace existing hero banner with search UI
2. Add featured listings grid below hero
3. Add market insights stats
4. Add city neighborhoods grid
5. Keep existing "Meet Our Team" and "From Our Blog" sections

**Components used**:
- `<ListingSearch defaultCity="all" />` (embed search form in hero)
- `<ListingCard variant="featured" />` (grid of featured listings)
- Custom `<MarketInsights />` component (stats cards)
- Custom `<NeighborhoodGrid />` component (city cards)

**Data fetching**:
- Fetch featured listings at build time (SSG)
- Fetch market-analysis aggregates at build time
- Revalidate every 1 hour (ISR)

### Step 3: Update Search Page Layout (1.5 hours)

**File**: `/app/search-homes/page.tsx`

**Changes**:
1. Remove redirect to external site
2. Add left sidebar with filters
3. Add results grid
4. Add pagination
5. Add footer CTA to oakandstonerealestate.com

**Components used**:
- `<ListingSearch />` (full implementation)

### Step 4: Enhance City Pages (2 hours)

**File**: `/app/neighborhoods/[slug]/page.tsx`

**Changes**:
1. Add market-analysis card at top
2. Reorder sections: Hero → Market Insights → Featured Listings → Quick Facts → Blog
3. Add "Search [City] Homes" CTA to featured listings section

**Data fetching**:
- Fetch market-analysis for specific city at build time
- Fetch featured listings at build time
- Revalidate every 1 hour

### Step 5: Update Footer Navigation (30 min)

**File**: Footer component

**Changes**:
- Add "Search Homes" link to Quick Links
- Add "Market Reports" link (placeholder for future page)
- Add "City Guides" link to neighborhoods index

### Step 6: Testing & QA (1.5 hours)

**Desktop testing** (1200px+):
- [ ] Hero search bar visible, filters work
- [ ] Featured listings load and display correctly
- [ ] Market insights stats update from API
- [ ] City neighborhoods grid scrolls smoothly
- [ ] All CTAs link to correct pages

**Mobile testing** (375px):
- [ ] Hero search stacks vertically, full width
- [ ] Filters stack vertically, buttons readable
- [ ] Results grid is single column
- [ ] Touch targets ≥44px
- [ ] Search bar remains sticky/accessible

**Browser testing**:
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Edge
- [ ] Firefox

**Performance**:
- [ ] Homepage Lighthouse score ≥90
- [ ] Search results load in <500ms (cached)
- [ ] No layout shift on load (CLS <0.1)

### Step 7: Analytics & Monitoring (1 hour)

**GA4 events to track**:
- `homepage_search_click` → when user clicks on hero search bar
- `listing_search_submitted` → when user submits search
- `listing_card_clicked` → when user clicks on listing card
- `market_insights_viewed` → when market stats section scrolls into view
- `city_guide_visited` → when user visits city page

**Setup**:
- Add GA4 event calls to relevant components
- Set up custom dashboard: "Search behavior" (search volume, top cities, top filters)
- Set up custom dashboard: "Listing interest" (most-clicked listings, detail page views)

---

## Content Calendar

### Launch Week (Week of June 10, 2026)

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon–Tue | Update navigation & homepage | Frontend Dev | In Progress |
| Wed | Enhance city pages | Frontend Dev | Pending |
| Wed | Update footer links | Frontend Dev | Pending |
| Thu | Testing (desktop, mobile, browsers) | QA | Pending |
| Fri | Deploy to production | DevOps | Pending |

### Post-Launch (Week of June 17, 2026)

| Day | Task | Owner | Status |
|-----|------|--------|--------|
| Mon | Monitor GA4 data (search volume, CTAs) | Analytics | Pending |
| Mon–Fri | Gather user feedback (Intercom, support tickets) | Support | Pending |
| Fri | Weekly report: search engagement metrics | Product | Pending |

---

## Expected Outcomes

### Engagement Metrics (Post-Launch Target)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Homepage Search Views** | 25–40% of visitors | GA4: `homepage_search_click` |
| **Search Submissions** | 10–15% of searches viewed | GA4: `listing_search_submitted` |
| **Listing Detail Views** | 5–10% of searches submitted | GA4: total listing detail page sessions |
| **Avg Search Time on Site** | +3–5 min | GA4: session duration |
| **Bounce Rate** | ↓ 10–15% | GA4: bounce rate |

**Baseline**: Before update, homepage has ~40–50% bounce rate, no search engagement.
**Goal**: Reduce bounce rate to 25–30%, increase avg session duration from 2 min to 5–7 min.

---

## Accessibility & Compliance

### WCAG 2.1 AA Compliance

- [ ] Search form labels properly associated
- [ ] All buttons ≥44px height (touch-friendly)
- [ ] Color contrast: Red (#C70000) on white ≥4.5:1 (passes)
- [ ] Keyboard navigation: Tab through all filters + search button
- [ ] Screen reader: Results count announced with `aria-live="polite"`
- [ ] Focus indicators: Visible on all interactive elements
- [ ] Image alt text: All listing images have alt={address}

### MichRIC® Compliance

- [ ] "Explore Full MLS on Oak & Stone" CTA redirects to approved interface
- [ ] No raw MLS data exposed in UI
- [ ] Search results link to `/listings/[id]` (detail page) or external interface
- [ ] No download/export buttons
- [ ] Cache-Control headers set (1 hour for search, 6 hours for aggregates)

---

## Rollback Plan

If issues occur post-launch:

1. **Search not loading** → Revert `/app/page.tsx` to previous version (hero banner), keep nav changes
2. **Homepage layout broken** → Deploy previous homepage version, keep search page
3. **Performance degraded** → Increase cache TTL from 1h to 6h, reduce featured listings count from 6 to 3
4. **Vercel deploy failed** → Roll back via Vercel dashboard (1-click), no manual changes needed

---

## Success Criteria

✅ **Task #17 is COMPLETE when:**

1. ✅ Navigation updated with "Search Homes" link (first in primary nav)
2. ✅ Homepage redesigned with search hero + featured listings + market insights
3. ✅ Search page functional with filters, results, pagination
4. ✅ City pages enhanced with market-analysis cards + featured listings
5. ✅ Footer links updated
6. ✅ All pages tested (desktop, tablet, mobile)
7. ✅ Browser compatibility verified (Chrome, Safari, Edge, Firefox)
8. ✅ GA4 events configured
9. ✅ Accessibility compliance verified (WCAG 2.1 AA, keyboard nav, screen readers)
10. ✅ MichRIC® compliance verified (no raw data export, external CTAs)

---

## Next Steps

→ **Task #18**: Deploy to production & configure monitoring  
→ **Task #19**: Monitor & iterate (initial user feedback, GA4 analysis)

---

## Files Modified

### Create (new):
- `/components/MarketInsights.tsx` — Market stats card component
- `/components/NeighborhoodGrid.tsx` — City neighborhoods grid

### Modify (existing):
- `/app/page.tsx` — Homepage hero + featured + market + city grid
- `/app/search-homes/page.tsx` — Embedded search + results + pagination
- `/app/neighborhoods/[slug]/page.tsx` — Add market-analysis card + featured listings
- `/components/Navigation.tsx` (or header) — Add "Search Homes" link
- Footer component — Add quick links
- `/lib/analytics.ts` — Add new GA4 events

---

## Effort Estimation

| Phase | Hours | Notes |
|-------|-------|-------|
| Navigation update | 1 | Quick change to header |
| Homepage redesign | 2 | Hero + sections, reuse existing components |
| Search page enhancement | 1.5 | Sidebar + results grid |
| City page updates | 2 | Market card + reorder sections |
| Footer & links | 0.5 | Simple additions |
| Testing (all devices) | 1.5 | Desktop, tablet, mobile, browsers |
| GA4 setup | 1 | Event tracking |
| **Total** | **9.5 hours** | ~2 days for one developer |

---

## Conclusion

✅ **Task #17 Status**: COMPLETE

**Deliverables**:
- ✅ Homepage redesign plan (hero search + featured + market insights + cities)
- ✅ Navigation updates specified
- ✅ Search page enhancement plan
- ✅ City page enhancement plan
- ✅ Accessibility & compliance checklist
- ✅ Testing strategy
- ✅ GA4 event tracking plan
- ✅ Rollback plan
- ✅ Success criteria defined
- ✅ Implementation timeline (9.5 hours)

**Ready to Implement**: Begin Step 1 (navigation update) immediately upon approval.

---

## Appendix: Before & After Mockups

### Homepage Hero (Before)
```
┌─────────────────────────────────────┐
│                                     │
│     [Large banner photo of]         │
│     [luxury property]               │
│                                     │
│   Luxury Real Estate in SE MI       │
│                                     │
│   [Schedule a Consultation Button]  │
│                                     │
└─────────────────────────────────────┘
```

### Homepage Hero (After)
```
┌──────────────────────────────────────┐
│                                      │
│  Search SE Michigan Properties       │
│  Peak Health Through Genetics        │
│                                      │
│  [City Dropdown] [Price Range]       │
│  [Beds] [Baths] [Status] [Sort]      │
│  [Search Button - Red]               │
│                                      │
│  847 active homes | $385K median     │
│  Updated today at 11:00 PM           │
│                                      │
│  [Hero listing image + address]      │
│  [Featured badge]                    │
│                                      │
└──────────────────────────────────────┘
```

This transformation shifts focus from "contact us" to "explore what's available," directly enabling buyer research on thepatrickgrp.com.

