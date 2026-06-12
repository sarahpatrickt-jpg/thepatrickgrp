"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Global tel: link tracker via event delegation, so phone links in server
 * components (which can't attach onClick) still fire phone_call_click.
 * Nav and Footer links are skipped: they fire their own labeled events.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;
      // Nav and Footer already fire phone_call_click with their own labels
      if (link.closest("nav") || link.closest("footer")) return;
      trackEvent("phone_call_click", {
        location: window.location.pathname || "unknown",
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
