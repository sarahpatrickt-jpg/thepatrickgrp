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
