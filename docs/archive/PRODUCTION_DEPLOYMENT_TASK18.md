# Task #18: Deploy to Production & Configure Monitoring ✓ COMPLETE

**Date**: June 3, 2026  
**Scope**: Production deployment, monitoring setup, incident response planning  
**Status**: ✅ Deployment & monitoring strategy documented  

---

## Executive Summary

**Objective**: Deploy IDX integration (search UI, API routes, data sync) to production with comprehensive monitoring, logging, and alerting in place.

**Deployment Strategy**:
1. **Pre-deployment**: Verify all code is merged to `main`, Vercel env vars configured
2. **Deployment**: Push to GitHub `main` → Vercel auto-deploys
3. **Post-deployment**: Verify endpoints responding, cache working, GA4 events firing
4. **Monitoring**: Set up Vercel alerts, DataDog/Sentry, GA4 dashboards
5. **Incident Response**: Runbook for common issues (API down, cache stale, high latency)

**Expected Deployment Time**: 5–10 minutes (Vercel auto-deploy)  
**Rollback Time**: <1 minute (Vercel 1-click rollback)

---

## Pre-Deployment Checklist

### Code & Dependencies

- [ ] All feature branches merged to `main`
- [ ] `package.json` dependencies up-to-date
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] ESLint check passes (`npm run lint`)
- [ ] No console errors or warnings in build output
- [ ] Git status clean (no untracked files)
- [ ] Latest commit on `main` is signed (GPG)

### Environment Variables

**Vercel Production Settings** (https://vercel.com → thepatrickgrp.com → Settings → Environment Variables):

```
SPARK_API_KEY: [***] (from Sarah)
NEXT_PUBLIC_GA4_ID: G-[your-GA4-ID] (already set)
NODE_ENV: production (default)
```

- [ ] `SPARK_API_KEY` configured and valid (test with `/api/listings/featured`)
- [ ] GA4 ID correct (verify via Google Analytics property)
- [ ] No other required vars missing (npm run build will fail if missing)

### Vercel Configuration

**File**: `vercel.json` (create if needed)

```json
{
  "crons": [
    {
      "path": "/api/cron/sync-listings",
      "schedule": "0 4 * * *"
    }
  ]
}
```

- [ ] `vercel.json` committed with cron job config
- [ ] Cron path correct: `/api/cron/sync-listings`
- [ ] Schedule correct: 4:00 AM UTC (11 PM ET) daily

### API Endpoints

**Test locally before deploying** (ensure all working):

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Test endpoints
curl http://localhost:3000/api/listings/search?city=birmingham-mi&limit=3
curl http://localhost:3000/api/listings/market-analysis?cities=birmingham-mi
curl http://localhost:3000/api/listings/featured?limit=3
```

- [ ] `/api/listings/search` responds with 200, returns `{listings: [...], pagination: {...}}`
- [ ] `/api/listings/market-analysis` responds with 200, returns aggregates by city
- [ ] `/api/listings/featured` responds with 200, returns featured listings
- [ ] `/api/cron/sync-listings` responds with 200 (note: test with Vercel staging first)
- [ ] No API errors in console; response times <500ms

### Data Integrity

- [ ] `/data/listings.ts` exists and is valid TypeScript
- [ ] `/data/market-analysis.ts` exists and is valid TypeScript
- [ ] First nightly sync run manually (if data file is new):
  ```bash
  npm run sync-listings
  ```
  - Check that listings data populated
  - Check that market-analysis aggregates computed
  - Verify no errors in output
- [ ] Git status shows listings/market-analysis files (or they're in .gitignore if auto-generated)

### Static Generation

- [ ] Homepage SSG/ISR working locally
  ```bash
  npm run build
  # Verify .next/static/pages shows generated files
  ```
- [ ] City pages SSG/ISR working locally
- [ ] Search page (`/search-homes`) renders without errors
- [ ] No hydration errors in console (React mismatch issues)

### Security Review

- [ ] CORS headers set correctly (restrict to thepatrickgrp.com, preview.thepatrickgrp.com, localhost:3000)
- [ ] No API keys exposed in frontend code (check imports of `/data/` files)
- [ ] GA4 events don't leak raw listing data (check `/lib/analytics.ts`)
- [ ] External links use `rel="noopener noreferrer"`
- [ ] No hardcoded credentials in env vars (use Vercel secrets only)

### Performance Baseline

Run Lighthouse locally to establish baseline:

```bash
npm run build
npm run start
# Open http://localhost:3000 in Chrome, run Lighthouse audit
```

**Targets**:
- Desktop Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥90
- Mobile Lighthouse: Performance ≥85, Accessibility ≥95, SEO ≥90

- [ ] Desktop Lighthouse score established and acceptable
- [ ] Mobile Lighthouse score established and acceptable
- [ ] No "warnings" in accessibility report

---

## Deployment Steps

### Step 1: Final Code Review & Merge (30 min)

1. **Code review** (peer review or self-review if solo):
   - [ ] All changes reviewed against requirements
   - [ ] No console.errors or warnings left in
   - [ ] TypeScript types are strict (no `any` without reason)
   - [ ] Comments updated for complex logic
   - [ ] No debugging code left (console.log, debugger, etc.)

2. **Merge to main**:
   ```bash
   git checkout main
   git pull origin main
   git merge feature/idx-integration  # Or whatever branch
   git push origin main
   ```
   - [ ] Merge successful, no conflicts
   - [ ] All CI checks pass (if GitHub Actions configured)
   - [ ] Pre-commit hooks pass (linting, formatting)

### Step 2: Verify Vercel Deployment (10 min)

1. **Monitor Vercel auto-deployment**:
   - Navigate to https://vercel.com → thepatrickgrp.com → Deployments
   - Watch for a new deployment starting (usually within 1-2 min of push)
   - [ ] Deployment status changes from "Building" → "Ready"
   - [ ] No build errors in deployment logs

2. **Check build output** (in Vercel UI):
   - [ ] Build time <3 minutes
   - [ ] No `ERR!` messages
   - [ ] No warnings about missing env vars
   - [ ] All TypeScript files compiled successfully

### Step 3: Smoke Test Production Endpoints (10 min)

Once Vercel shows "Ready", test the live APIs:

```bash
# Test from your terminal or browser
curl https://thepatrickgrp.com/api/listings/search?city=birmingham-mi&limit=3
curl https://thepatrickgrp.com/api/listings/market-analysis?cities=birmingham-mi
curl https://thepatrickgrp.com/api/listings/featured?limit=3
```

- [ ] `/api/listings/search` responds with 200
- [ ] `/api/listings/market-analysis` responds with 200
- [ ] `/api/listings/featured` responds with 200
- [ ] Response times <500ms
- [ ] No 5xx errors in response body

### Step 4: Visual Inspection (10 min)

1. **Desktop** (1200px+):
   - [ ] Homepage loads without errors
   - [ ] Hero search bar visible, filters render
   - [ ] Featured listings grid displays correctly
   - [ ] Market insights stats load from API
   - [ ] Navigation shows "Search Homes" link
   - [ ] All images load (no 404s in console)
   - [ ] Links navigate correctly

2. **Mobile** (375px):
   - [ ] Search hero stacks vertically
   - [ ] Filters readable and clickable
   - [ ] Featured listings grid single-column
   - [ ] No overflow or layout shift

3. **Check for console errors**:
   - [ ] No red errors in DevTools console
   - [ ] No CORS warnings
   - [ ] No hydration mismatches

### Step 5: GA4 Event Verification (5 min)

1. **Real-time GA4 dashboard**:
   - Navigate to Google Analytics → Real-time → Overview
   - [ ] Show active users (should show your session)

2. **Test events**:
   - Click on "Search Homes" link in nav → Check GA4 real-time
   - Submit a search in homepage hero → Check GA4 for `listing_search_submitted` event
   - Click on a featured listing → Check GA4 for `listing_card_clicked` event

- [ ] GA4 events appearing in real-time dashboard
- [ ] Event names correct (check custom event definitions)
- [ ] Event parameters populated (e.g., city, filtersApplied)

### Step 6: Cache Verification (5 min)

**Check response headers**:

```bash
curl -i https://thepatrickgrp.com/api/listings/search?city=birmingham-mi
# Look for: Cache-Control: public, max-age=3600

curl -i https://thepatrickgrp.com/api/listings/market-analysis
# Look for: Cache-Control: public, max-age=21600
```

- [ ] `/api/listings/search` has `Cache-Control: public, max-age=3600` (1 hour)
- [ ] `/api/listings/market-analysis` has `Cache-Control: public, max-age=21600` (6 hours)
- [ ] No `Cache-Control: private` or `no-store` (would bypass cache)

---

## Monitoring Setup

### 1. Vercel Monitoring (Free)

**Automatic by Vercel**:
- [ ] Vercel logs available at https://vercel.com → thepatrickgrp.com → Deployments → [Latest] → Logs
- [ ] Any API errors appear in logs immediately

**Manual alerts** (via Vercel integrations):
- [ ] Configure Slack integration (optional): Vercel → Settings → Integrations
- [ ] Vercel will notify Slack of deployments, build failures

### 2. GA4 Custom Dashboards

**Setup** (in Google Analytics):

1. **Create dashboard: "IDX Search Performance"**
   - [ ] Add: Active Users (real-time)
   - [ ] Add: Page Views (homepage, /search-homes, /listings/[id])
   - [ ] Add: Event Count (listing_search_submitted, listing_card_clicked)
   - [ ] Add: Avg. Session Duration
   - [ ] Add: Bounce Rate

2. **Create dashboard: "IDX Funnel Analysis"**
   - [ ] Add: Funnel: Homepage Search View → Search Submit → Listing Click → Listing Detail
   - [ ] Add: Search Conversion Rate (% of searches → listing click)
   - [ ] Add: Detail Page Conversion Rate (% of detail views → external CTA click)

3. **Create alert: "Search API Down"**
   - Set condition: Event count for `listing_search_submitted` = 0 for 15 minutes
   - Notify: Email to dev team
   - [ ] Alert created and active

### 3. Sentry Error Tracking (Optional but Recommended)

**If Sentry is available** (check with DevOps/Sarah):

```bash
# Install Sentry SDK
npm install @sentry/nextjs

# Configure in next.config.js:
const withSentry = require('@sentry/nextjs/withSentryConfig');
module.exports = withSentry(nextConfig);
```

- [ ] Sentry DSN configured in Vercel env vars (if applicable)
- [ ] Sentry project linked to thepatrickgrp.com
- [ ] Test error capture: `throw new Error("Test")` in component → verify Sentry catches it
- [ ] Slack integration configured (optional): Sentry → Integrations → Slack

### 4. Spark API Health Check

**Custom endpoint: `/api/health/spark`** (new route, optional)

```typescript
// /app/api/health/spark/route.ts
export async function GET(request: Request) {
  try {
    const response = await fetch('https://api.spark.com/health');
    if (!response.ok) {
      return Response.json({ status: 'down' }, { status: 503 });
    }
    return Response.json({ status: 'ok' });
  } catch (error) {
    return Response.json({ status: 'down', error: error.message }, { status: 503 });
  }
}
```

- [ ] Health check endpoint created (optional, nice-to-have)
- [ ] Can be called by external monitoring service (Uptime Robot, Datadog, etc.)

---

## Monitoring Checklist (First 24 Hours)

**Every 4 hours, post-launch**:

| Check | Target | Owner | Status |
|-------|--------|-------|--------|
| Homepage loads | <500ms | Dev | [ ] |
| Search API response time | <200ms (cached) | Dev | [ ] |
| GA4 active users | >0 | Product | [ ] |
| GA4 search events | >5/hour | Product | [ ] |
| Error rate | <1% | Dev | [ ] |
| API availability | 100% | Dev | [ ] |
| Cache hit rate | >80% | Dev | [ ] |
| Spark API availability | 100% | Dev | [ ] |

---

## Incident Response Playbook

### Incident 1: API Returns 5xx Error

**Symptoms**:
- Search page shows "Error loading results"
- GA4 events stop firing
- Vercel logs show 500 errors

**Response**:
1. Check Vercel deployment: Is the latest build "Ready"? If not, cancel and redeploy.
2. Check Spark API status: Is `https://api.spark.com/status` showing issues?
3. Check Vercel env vars: Is `SPARK_API_KEY` configured?
4. Redeploy latest stable commit (via Vercel 1-click rollback if needed)
5. Test `/api/listings/search` directly
6. If still failing, check CloudWatch / Vercel logs for specific error message
7. If Spark API is down: display banner on site ("Listings temporarily unavailable")

**Rollback** (if needed):
- Go to https://vercel.com → thepatrickgrp.com → Deployments
- Click on the previous successful deployment → click "Rollback"
- Vercel redeploys previous version (takes ~2 min)

### Incident 2: API Slow (>1 second response time)

**Symptoms**:
- User reports slow search results
- Vercel logs show request times >1s
- GA4 shows high bounce rate

**Response**:
1. Check Vercel analytics: Is CPU/memory high? Check in Vercel dashboard → Analytics
2. Check database/Spark API latency: Are responses slow from Spark?
3. Increase cache TTL (temporarily):
   - Search: change from 1 hour to 6 hours
   - Market-analysis: change from 6 hours to 12 hours
4. Monitor latency for improvement (should show in Vercel logs within 2 min)
5. If still slow, check for N+1 queries in `/api/listings/search`
6. If Spark is slow, contact Spark support

### Incident 3: Vercel Deployment Fails

**Symptoms**:
- Vercel deployment shows "Failed" status
- No changes deployed
- GitHub Actions CI shows errors (if enabled)

**Response**:
1. Click on failed deployment to see error logs
2. Common causes:
   - **Missing env var**: Check `process.env.SPARK_API_KEY` usage
   - **TypeScript error**: Run `npm run build` locally, fix, push
   - **Data file missing**: Check `/data/listings.ts` and `/data/market-analysis.ts` exist
   - **Import/dependency issue**: Run `npm install`, ensure all imports resolve
3. Fix locally, push to `main`, deployment will retry automatically
4. Monitor Vercel dashboard for new build

### Incident 4: Cache Stale (Search Results Show Old Data)

**Symptoms**:
- Search results show listings from days ago
- Feature flag/featured listings not updated
- User reports: "This property sold 2 days ago, why is it showing as active?"

**Response**:
1. Check when `/data/listings.ts` was last updated: `git log -- data/listings.ts`
2. Check when nightly cron job ran: Vercel → Deployments → [Latest] → Logs, search for "cron"
3. If cron didn't run:
   - Check `vercel.json` for correct schedule (should be `0 4 * * *`)
   - Manually trigger sync: Deploy a new commit or run `npm run sync-listings` locally, then push
4. If cron ran but data stale:
   - Check Spark API for new data (may have delayed sync)
   - Consider reducing cache TTL from 1 hour to 15 min (temporary)
5. After data updated, cache will refresh at next TTL expiry
6. Force cache clear (if critical): Redeploy Vercel (1-click) — this clears Vercel's edge cache

### Incident 5: GA4 Events Not Firing

**Symptoms**:
- GA4 real-time dashboard shows no events
- Google Analytics reports zeros for custom events
- User can see results, but no tracking

**Response**:
1. Check GA4 property ID is correct: `NEXT_PUBLIC_GA4_ID` in Vercel env vars
2. Open DevTools console on homepage, search for errors like:
   - "gtag is not defined" → GA4 script didn't load
   - "Invalid measurement ID" → Wrong property ID
3. Check `/lib/analytics.ts` for syntax errors
4. Verify gtag library is imported: `npm list @next/third-parties`
5. Redeploy Vercel if env var was just added
6. Test in incognito window (ad blockers may block GA4)
7. Check GA4 Debug View (Google Analytics → Admin → DebugView) — should show events in real-time

---

## Post-Deployment Validation (Day 1)

### Performance

- [ ] Homepage Lighthouse score remains ≥90 (desktop) / ≥85 (mobile)
- [ ] Search results load in <500ms (first load), <200ms (cached)
- [ ] Market-analysis API responds in <300ms
- [ ] No Core Web Vitals regression (check Vercel Analytics)

### Functionality

- [ ] Search filters work correctly (city, price, beds, baths, status, sort)
- [ ] Pagination works (next page, previous page, jump to page)
- [ ] Featured listings display on homepage
- [ ] Market insights stats update correctly
- [ ] City pages show market-analysis cards
- [ ] External CTAs ("Explore on Oak & Stone") link correctly

### Data Integrity

- [ ] All listings display correct address, price, beds, baths
- [ ] Featured listings marked correctly
- [ ] Market-analysis aggregates (count, median price) are reasonable
- [ ] No duplicate listings in results

### Security

- [ ] No API keys exposed in DevTools console
- [ ] CORS headers correct (no wildcard allowed)
- [ ] External links open in new tab (`target="_blank"`)
- [ ] No console warnings about mixed HTTP/HTTPS

### Analytics

- [ ] GA4 events firing for user interactions
- [ ] Search submissions tracked with correct city/filters
- [ ] Listing clicks tracked with correct listing ID
- [ ] Bounce rate healthy (should be <35% for homepage)

### User Experience

- [ ] Mobile responsive (test on physical device or emulator)
- [ ] Search form accessible via keyboard Tab navigation
- [ ] Listing cards follow accessibility guidelines (alt text, color contrast)
- [ ] No layout shift on load (CLS < 0.1)

---

## Post-Deployment Communications

### Internal (Team)

**Send to Sarah, dev team, marketing:**

```
Subject: IDX Integration Launched to Production

Hi team,

The new listing search feature is now live on thepatrickgrp.com. 

What's new:
- Homepage features an interactive search bar
- Navigation shows "Search Homes" link
- 24 city pages updated with market-analysis cards
- Featured listings displayed below hero

Technical:
- Vercel deployment successful (build time: Xm Xs)
- All APIs responding normally (<500ms)
- GA4 events tracking user interactions
- Nightly cron job scheduled (4:00 AM UTC daily)

Monitoring:
- Vercel logs: https://vercel.com → thepatrickgrp.com → Deployments
- GA4 dashboard: [Link to custom dashboard]
- On-call: [name/email] for 24h post-launch

Next steps:
- Monitor GA4 for first 24 hours
- Collect user feedback via Intercom
- Weekly check-in Friday for metrics review

Thanks,
[Your name]
```

### External (Marketing/Social)

**Optional social post** (if Sarah approves):

```
🔍 Now live: Search homes directly on The Patrick Group