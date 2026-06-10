"use client";

import { useState } from "react";
import { trackContactFormSubmitted } from "@/lib/analytics";

const inputClass =
  "w-full border border-[var(--line)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[#c70000]";
const labelClass =
  "block text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-1";

// Map interest value → Sierra leadType (1=Buyer, 2=Seller, 3=Both)
function getLeadType(interest: string): number {
  if (["buying", "vip-buyers", "relocation"].includes(interest)) return 1;
  if (["selling", "home-valuation", "divorce-real-estate", "estate-sale", "downsizing"].includes(interest)) return 2;
  return 3;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formLoadedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);

    const firstName = fd.get("first_name") as string;
    const lastName = fd.get("last_name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const interest = fd.get("interest") as string;
    const message = fd.get("message") as string;
    const honeypot = fd.get("website") as string;

    const note = [
      interest ? `Interest: ${interest}` : "",
      message ? `Message: ${message}` : "",
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
          leadType: getLeadType(interest),
          source: "thepatrickgrp.com - Contact Form",
          note,
          tags: ["contact-form", interest].filter(Boolean),
          honeypot,
          _t: formLoadedAt,
        }),
      });

      if (res.ok) {
        trackContactFormSubmitted(interest);
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
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[var(--red)]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[var(--red)] text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-display text-xl text-[var(--ink)] mb-2">
          Message Received
        </h3>
        <p className="text-[var(--ink-3)] text-sm max-w-xs mx-auto leading-relaxed">
          We typically respond within one business day. You can also reach Brad
          directly at{" "}
          <a href="tel:2487553545" className="text-[var(--red)] hover:underline">
            248.755.3545
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot, hidden from real users, bots fill it in */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className={labelClass}>First Name *</label>
          <input type="text" id="first-name" name="first_name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="last-name" className={labelClass}>Last Name *</label>
          <input type="text" id="last-name" name="last_name" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input type="email" id="email" name="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input type="tel" id="phone" name="phone" className={inputClass} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>I am interested in</label>
        <select id="interest" name="interest" className={inputClass + " bg-[var(--paper)]"}>
          <option value="">Select one…</option>
          <option value="buying">Buying a Home</option>
          <option value="selling">Selling a Home</option>
          <option value="buying-and-selling">Buying &amp; Selling</option>
          <option value="home-valuation">Free Home Valuation</option>
          <option value="divorce-real-estate">Divorce Real Estate</option>
          <option value="estate-sale">Estate / Probate Sale</option>
          <option value="relocation">Relocation to Michigan</option>
          <option value="downsizing">Downsizing</option>
          <option value="other">Other / General Question</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass + " resize-y"}
          placeholder="Tell us a bit about what you are looking for…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[var(--red)] text-white font-bold py-4 text-sm hover:bg-[var(--red-deep)] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          Something went wrong. Please call{" "}
          <a href="tel:2487553545" className="underline">248.755.3545</a>.
        </p>
      )}

      <p className="text-xs text-[var(--ink-3)] text-center">
        We typically respond within one business day. Your information is never shared or sold.
      </p>
    </form>
  );
}
