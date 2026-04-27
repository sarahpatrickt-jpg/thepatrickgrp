"use client";

import { useState } from "react";
import { trackCashOfferSubmitted } from "@/lib/analytics";

const inputClass =
  "w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c70000] rounded-sm";
const labelClass = "block text-xs uppercase tracking-widest text-white/60 font-semibold mb-1";

export default function CashOfferForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);

    const firstName = fd.get("firstName") as string;
    const lastName = fd.get("lastName") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const propertyAddress = fd.get("propertyAddress") as string;
    const situation = fd.get("situation") as string;
    const timeline = fd.get("timeline") as string;
    const honeypot = fd.get("website") as string;

    const note = [
      propertyAddress ? `Property: ${propertyAddress}` : "",
      situation ? `Situation: ${situation}` : "",
      timeline ? `Timeline: ${timeline}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      const res = await fetch("/api/sierra-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          leadType: 2, // Seller
          source: "thepatrickgrp.com - Cash Offer",
          note,
          tags: ["cash-offer-lead", "seller-lead"],
          honeypot,
        }),
      });

      if (res.ok) {
        trackCashOfferSubmitted(situation, timeline);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#c70000]/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#c70000] text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-white mb-2">Request Received</h3>
        <p className="text-white/60 text-sm max-w-xs mx-auto leading-relaxed">
          We&apos;ll be in touch within one business day. For faster service, call Brad at{" "}
          <a href="tel:2487553545" className="text-[#c70000] hover:underline">
            248.755.3545
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name *</label>
          <input type="text" name="firstName" required placeholder="Sarah" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input type="text" name="lastName" placeholder="Smith" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" name="email" required placeholder="sarah@email.com" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Phone *</label>
        <input type="tel" name="phone" required placeholder="248-555-0100" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Property Address</label>
        <input
          type="text"
          name="propertyAddress"
          placeholder="123 Main St, Rochester Hills, MI"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Your Situation</label>
        <select name="situation" className={inputClass + " bg-[#1a1a1a]"}>
          <option value="">Select one…</option>
          <option value="relocating">Relocating / Job Transfer</option>
          <option value="repairs">Property Needs Major Repairs</option>
          <option value="divorce">Divorce or Separation</option>
          <option value="inherited">Inherited Property</option>
          <option value="behind-payments">Behind on Payments / Foreclosure</option>
          <option value="landlord">Tired Landlord / Rental Property</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Ideal Timeline</label>
        <select name="timeline" className={inputClass + " bg-[#1a1a1a]"}>
          <option value="">Select one…</option>
          <option value="asap">As Soon as Possible</option>
          <option value="30-days">Within 30 Days</option>
          <option value="60-days">Within 60 Days</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors disabled:opacity-60 mt-2"
      >
        {status === "loading" ? "Submitting…" : "Request My Cash Offer →"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          Something went wrong. Please call{" "}
          <a href="tel:2487553545" className="underline">248.755.3545</a>.
        </p>
      )}

      <p className="text-xs text-white/30 text-center">
        No obligation. We never sell your information.
      </p>
    </form>
  );
}
