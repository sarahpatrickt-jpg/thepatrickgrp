"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-only sticky contact bar for listing pages.
 *
 * Most listing traffic arrives on a phone from social, where the nav's phone
 * number is hidden behind the hamburger and the page's own CTA sits below a
 * long gallery. This keeps Call and Text reachable the whole way down.
 *
 * Clicks are tracked by the global PhoneClickTracker (tel:/sms: delegation),
 * so there are deliberately no onClick handlers here.
 */

interface Props {
  phone: string;
  /** Prefilled text body, e.g. "Hi Brad, I'd like to see 49756 Labaere." */
  smsBody: string;
}

const SHOW_AFTER_PX = 350;

export default function ListingStickyContactBar({ phone, smsBody }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const digits = phone.replace(/\D/g, "");

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-200"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        backgroundColor: "var(--paper)",
        borderTop: "1px solid var(--line)",
        paddingBottom: "env(safe-area-inset-bottom)",
        boxShadow: "0 -6px 20px rgba(26,20,16,0.08)",
      }}
      aria-hidden={!visible}
    >
      <div className="flex gap-2 p-3">
        <a
          href={`tel:${digits}`}
          className="flex-1 text-center py-3.5 text-[15px] font-medium"
          style={{ backgroundColor: "var(--red)", color: "#fff" }}
          tabIndex={visible ? 0 : -1}
        >
          Call Brad
        </a>
        <a
          href={`sms:${digits}?&body=${encodeURIComponent(smsBody)}`}
          className="flex-1 text-center py-3.5 text-[15px] font-medium"
          style={{ border: "1px solid var(--ink)", color: "var(--ink)" }}
          tabIndex={visible ? 0 : -1}
        >
          Text Brad
        </a>
      </div>
    </div>
  );
}
