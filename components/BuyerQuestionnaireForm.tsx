"use client";

import { useState } from "react";

// ─── Replace with your Formspree form ID ─────────────────────────────────────
// 1. Go to https://formspree.io → New Form → name it "Buyer Questionnaire"
// 2. Paste the form ID (e.g. "xpwzabcd") here
const FORMSPREE_ID = "YOUR_BUYER_FORM_ID";
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm bg-white";

const labelClass = "block text-sm font-medium text-[#1a1a1a] mb-1";

export default function BuyerQuestionnaireForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("_subject", "New Buyer Inquiry — The Patrick Group");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
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
      <div className="bg-white border border-gray-100 rounded-sm p-10 text-center shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#c70000]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#c70000] text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2">
          Got it — we&apos;ll be in touch.
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
          Brad will reach out within one business day with homes that match your
          criteria. In the meantime, feel free to call or text at{" "}
          <a href="tel:2487553545" className="text-[#c70000] font-medium">
            248.755.3545
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>What areas are you searching? *</label>
        <input
          name="preferredArea"
          type="text"
          required
          placeholder="e.g. Rochester Hills, Troy, Bloomfield Hills…"
          className={inputClass}
        />
        <p className="text-xs text-gray-400 mt-1">
          As specific or broad as you like — we know every pocket of Southeast Michigan.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Price Range *</label>
          <select name="priceRange" required className={inputClass}>
            <option value="">Select range</option>
            <option>Under $300,000</option>
            <option>$300,000 – $500,000</option>
            <option>$500,000 – $700,000</option>
            <option>$700,000 – $1,000,000</option>
            <option>$1,000,000+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Bedrooms (min)</label>
          <select name="beds" className={inputClass}>
            <option value="">Any</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Bathrooms (min)</label>
          <select name="baths" className={inputClass}>
            <option value="">Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Timeline *</label>
          <select name="timeline" required className={inputClass}>
            <option value="">Select timeline</option>
            <option>Ready now / ASAP</option>
            <option>Within 1–3 months</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
            <option>Just starting research</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Your Situation</label>
        <select name="situation" className={inputClass}>
          <option value="">Select one</option>
          <option>First-time buyer</option>
          <option>Move-up buyer (selling current home too)</option>
          <option>Relocating from out of state</option>
          <option>Downsizing</option>
          <option>Investment property</option>
          <option>Divorce / life transition</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Anything else we should know?</label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Must-haves, deal-breakers, specific neighborhoods, schools district priorities…"
          className={inputClass}
        />
      </div>

      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs text-[#c70000] uppercase tracking-widest font-semibold mb-4">
          Your contact info
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input
              name="firstName"
              type="text"
              required
              placeholder="Sarah"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Smith"
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="248-555-0100"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="sarah@email.com"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send My Search Criteria to Brad →"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please call us at{" "}
          <a href="tel:2487553545" className="underline">
            248.755.3545
          </a>
          .
        </p>
      )}

      <p className="text-xs text-gray-400 text-center">
        No obligation. Brad will reach out with curated options — no spam, no pressure.
      </p>
    </form>
  );
}
