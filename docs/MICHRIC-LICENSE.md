# MichRIC® IDX Data License — Terms Summary

Signed June 1, 2026. Provider: Michigan Regional Information Center, LLC (MichRIC®), via GMAR.
Contact: support@michric.org · 5830 Venture Park Dr., Kalamazoo, MI 49009 · mlshelp.com
Term: 1 year, auto-renews each June 1. Michigan law, Kalamazoo County jurisdiction.

## Allowed
- Display IDX listing data publicly on thepatrickgrp.com per IDX guidelines
- Cache/replicate listings locally for performance (no live API calls per page load)
- Statistical use, including property valuations/CMAs for specific clients
- Redistribute the team's OWN listings to third parties (exception to the rules below)

## Prohibited (violations risk injunctive relief + attorney's fees)
- Redistribute, sell, sublicense, or grant third-party access to the data
- Download, export, or transmit raw data to external computers/services (beyond IDX display)
- Compile or aggregate MichRIC data with other sources (Zillow, Redfin, etc.)
- Create derivative works beyond permitted IDX/statistical use
- Share non-IDX (members-only) data publicly
- Share passwords via broadcast or non-confidential channels

## Technical & Compliance
- Maintain firewalls/filters so data is inaccessible to unauthorized parties
- Comply with MLS Bylaws, IDX policy, VOW policy; MLS rules prevail on conflict; check mlshelp.com for updates
- Rate limit: 1,500 requests per 5-minute window (IDX key); overage $0.0004/request beyond monthly quota
- Data is "as is," no warranties; MichRIC retains all IP; we indemnify MichRIC

## Termination — CRITICAL
- Either party: 5 business days written notice (USPS + email)
- Auto-terminates if Sarah leaves GMAR, GMAR leaves MichRIC, or the vendor relationship ends
- On termination: purge ALL MichRIC data from all servers within 1 business day; written confirmation to MichRIC within 3 business days
- Architecture implication: keep a kill switch to purge `data/listings.ts` and any caches within 24 hours
