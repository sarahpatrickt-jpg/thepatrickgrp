/**
 * GA4 event tracking utility for The Patrick Group
 * Measurement ID: G-DPFLY88Y4D
 *
 * Usage: trackEvent('event_name', { key: 'value' })
 * All events automatically appear in GA4 > Reports > Events
 * Mark as conversions in GA4 Admin > Conversions
 */

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
}

// ─── Conversion Events ────────────────────────────────────────────────────────
// Mark ALL of these as conversions in GA4 Admin > Conversions

/** Fired when home valuation CTA is clicked */
export const trackHomValuationClick = () =>
  trackEvent("home_valuation_click", { page: "home-valuation" });

/** Fired when contact form submits successfully */
export const trackContactFormSubmitted = (interest: string) =>
  trackEvent("contact_form_submitted", { interest });

/** Fired when cash offer form submits successfully */
export const trackCashOfferSubmitted = (situation: string, timeline: string) =>
  trackEvent("cash_offer_submitted", { situation, timeline });

/** Fired when VIP buyer list form submits successfully */
export const trackVipBuyerSignup = (priceRange: string, area: string) =>
  trackEvent("vip_buyer_signup", { price_range: priceRange, area });

/** Fired when newsletter/market report form submits successfully */
export const trackNewsletterSignup = (interest: string) =>
  trackEvent("newsletter_signup", { interest });

/** Fired when any phone number link is clicked */
export const trackPhoneClick = (location: string) =>
  trackEvent("phone_call_click", { location });

// ─── Engagement Events ────────────────────────────────────────────────────────

/** Fired when a neighborhood page is viewed */
export const trackNeighborhoodView = (neighborhood: string) =>
  trackEvent("neighborhood_viewed", { neighborhood });

/** Fired when a market report page is viewed */
export const trackMarketReportView = (period: string) =>
  trackEvent("market_report_viewed", { period });

/** Fired when grant qualification form submits */
export const trackGrantQualificationSubmitted = (county: string) =>
  trackEvent("grant_qualification_submitted", { county });

/** Fired when grant lead (connect with lender) submits */
export const trackGrantLeadSubmitted = (county: string) =>
  trackEvent("grant_lead_submitted", { county });

/** Fired when inherited property wizard is submitted */
export const trackInheritedPropertySubmitted = (
  transferMethod: string,
  intention: string,
  heirCount: string
) =>
  trackEvent("inherited_property_submitted", {
    transfer_method: transferMethod,
    intention,
    heir_count: heirCount,
  });

/** Fired when inherited property lead is confirmed in Sierra */
export const trackInheritedPropertyLeadSubmitted = (
  transferMethod: string,
  intention: string
) =>
  trackEvent("inherited_property_lead_submitted", {
    transfer_method: transferMethod,
    intention,
  });

// ─── Wizard Funnel Events ─────────────────────────────────────────────────────

/** Fired when a user advances a step in any wizard (grants, inherited property, etc.) */
export const trackWizardStep = (
  wizard: string,
  stepNumber: number,
  stepName: string
) =>
  trackEvent("wizard_step_completed", {
    wizard,
    step_number: stepNumber,
    step_name: stepName,
  });

/** Fired when a user starts a wizard (views step 1) */
export const trackWizardStart = (wizard: string) =>
  trackEvent("wizard_started", { wizard });

// ─── Listing Search & Detail Events ──────────────────────────────────────────

/** Fired when listing search is submitted */
export const trackListingSearchSubmitted = (
  city: string,
  filtersApplied: number,
  resultsFound: number
) =>
  trackEvent("listing_search_submitted", {
    city: city || "all",
    filters_applied: filtersApplied,
    results_found: resultsFound,
  });

/** Fired when a listing detail page is viewed */
export const trackListingViewed = (
  listingId: string,
  address: string,
  city: string
) =>
  trackEvent("listing_viewed", {
    listing_id: listingId,
    address,
    city,
  });

/** Fired when "Schedule a Showing" or other listing CTA is clicked */
export const trackListingCTAClicked = (
  listingId: string,
  address: string,
  ctaText: string
) =>
  trackEvent("listing_cta_clicked", {
    listing_id: listingId,
    address,
    cta_text: ctaText,
  });

/** Fired when a listing card in search results is clicked */
export const trackListingCardClicked = (
  listingId: string,
  address: string,
  isFeatured: boolean
) =>
  trackEvent("listing_card_clicked", {
    listing_id: listingId,
    address,
    is_featured: isFeatured,
  });
