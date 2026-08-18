"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/analytics";

/**
 * Global tel:/mailto: link tracker via event delegation (capture phase), so
 * every phone and email link on every page fires — including links in server
 * components and in nav/footer. The ONLY place phone/email clicks are tracked;
 * do not add per-link onClick handlers (they would double-count).
 * Routes through trackLead so each click also emits generate_lead for GA4's
 * Lead acquisition reports.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.(
        'a[href^="tel:"], a[href^="mailto:"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const isPhone = link.getAttribute("href")?.startsWith("tel:");
      const zone = link.closest("nav")
        ? "nav"
        : link.closest("footer")
          ? "footer"
          : "body";
      trackLead(isPhone ? "phone_call_click" : "email_click", {
        lead_source: isPhone ? "phone" : "email",
        location: zone,
        link_text: (link.textContent || "").trim().slice(0, 100),
        page_path: window.location.pathname || "unknown",
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
