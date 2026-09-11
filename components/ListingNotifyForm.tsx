"use client";

import { useState } from "react";
import {
  getClientId,
  trackListingNotifySubmitted,
  trackListingShowingRequested,
} from "@/lib/analytics";

/**
 * Lead capture for a featured listing, in two modes:
 *
 * - "notify": Coming Soon. Offers notification, not early access, so it stays
 *   inside Coming Soon marketing rules. Needs `showingDate`.
 * - "showing": Active. A showing request; phone is required because Brad
 *   schedules by phone or text.
 *
 * Kept short because it runs on phones straight off social.
 */

interface Props {
  listingId: string;
  address: string;
  mode: "notify" | "showing";
  /** Human-readable date showings begin, e.g. "Thursday, September 10". Notify mode only. */
  showingDate?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ListingNotifyForm({ listingId, address, mode, showingDate }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [formLoadedAt] = useState(() => Date.now());
  const isShowing = mode === "showing";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const fullName = ((fd.get("name") as string) || "").trim();
    const [firstName, ...restName] = fullName.split(/\s+/);
    const email = (fd.get("email") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const preferredTime = ((fd.get("preferredTime") as string) || "").trim();
    const honeypot = (fd.get("website") as string) || "";

    const note = isShowing
      ? `Requested a showing for ${address}.` +
        (preferredTime ? ` Preferred time: ${preferredTime}.` : "")
      : `Requested a showing alert for ${address}. Showings begin ${showingDate}.`;

    try {
      const res = await fetch("/api/sierra-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName || "",
          lastName: restName.join(" "),
          email,
          phone,
          leadType: 1, // Buyer
          source: isShowing
            ? `thepatrickgrp.com - Showing request: ${address}`
            : `thepatrickgrp.com - Coming Soon: ${address}`,
          note,
          tags: [isShowing ? "showing-request" : "coming-soon-alert", `listing-${listingId}`],
          honeypot,
          _t: formLoadedAt,
          ga_client_id: await getClientId(),
        }),
      });
      if (res.ok) {
        if (isShowing) trackListingShowingRequested(listingId, address);
        else trackListingNotifySubmitted(listingId, address);
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="p-8 text-center"
        style={{ backgroundColor: "var(--paper)", border: "1px solid var(--line)" }}
      >
        <h3 className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>
          {isShowing ? "Request received." : "You're on the list."}
        </h3>
        <p className="text-[15px]" style={{ color: "var(--ink-2)" }}>
          {isShowing
            ? "Brad will reach out shortly to confirm a time. Need it sooner? Call or text "
            : `We'll reach out as soon as showings open on ${showingDate}. If you want a specific time, call or text Brad at `}
          <a href="tel:2487553545" className="underline" style={{ color: "var(--red)" }}>
            248.755.3545
          </a>
          .
        </p>
      </div>
    );
  }

  const inputStyle = {
    border: "1px solid var(--line)",
    backgroundColor: "var(--paper)",
    color: "var(--ink)",
  };
  const inputClass = "px-4 py-3 text-sm focus:outline-none focus:border-[var(--red)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 text-left"
      style={{ backgroundColor: "var(--paper)", border: "1px solid var(--line)" }}
    >
      <p
        className="uppercase tracking-[0.22em] text-[10px] mb-2"
        style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
      >
        {isShowing ? "Request a Showing" : "Showing Alert"}
      </p>
      <h3 className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>
        {isShowing ? "See it in person." : "Know the moment showings open."}
      </h3>
      <p className="text-[15px] mb-5" style={{ color: "var(--ink-3)" }}>
        {isShowing
          ? "Tell us when works for you and Brad will confirm a time."
          : `Showings begin ${showingDate}. Leave your details and we'll be in touch as soon as the schedule opens.`}
      </p>

      {/* Honeypot, hidden from real users, bots fill it in */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          autoComplete="name"
          className={inputClass}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          autoComplete="email"
          className={inputClass}
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          required={isShowing}
          placeholder={isShowing ? "Phone" : "Phone (optional)"}
          autoComplete="tel"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {isShowing && (
        <input
          type="text"
          name="preferredTime"
          placeholder="Preferred day and time (optional)"
          className={`${inputClass} w-full mt-3`}
          style={inputStyle}
        />
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-4 py-4 font-medium disabled:opacity-60"
        style={{ backgroundColor: "var(--red)", color: "#fff" }}
      >
        {status === "loading"
          ? "Sending..."
          : isShowing
            ? "Request a Showing"
            : "Notify Me About This Home"}
      </button>

      {status === "error" && (
        <p className="text-sm mt-3" style={{ color: "var(--red)" }}>
          Something went wrong. Call or text Brad at 248.755.3545 and he&apos;ll take
          care of it.
        </p>
      )}
    </form>
  );
}
