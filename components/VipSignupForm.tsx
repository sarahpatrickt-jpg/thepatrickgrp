"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm bg-white";

const labelClass = "block text-sm font-medium text-[#1a1a1a] mb-1";

export default function VipSignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const firstName = fd.get("firstName") as string;
    const lastName = fd.get("lastName") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const preferredArea = fd.get("preferredArea") as string;
    const priceRange = fd.get("priceRange") as string;
    const beds = fd.get("beds") as string;

    const note = [
      preferredArea ? `Preferred area: ${preferredArea}` : "",
      priceRange ? `Price range: ${priceRange}` : "",
      beds ? `Bedrooms: ${beds}` : "",
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
          leadType: 1, // Buyer
          source: "thepatrickgrp.com - VIP Buyers",
          note,
          tags: ["vip-buyer", "coming-soon-list"],
        }),
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
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#c70000]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#c70000] text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2">
          You&apos;re on the VIP List.
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          We&apos;ll confirm your search preferences and get you set up. Expect
          matching Coming Soon listings in your inbox first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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

      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          name="email"
          type="email"
          required
          placeholder="sarah@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Phone Number *</label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="248-555-0100"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Preferred Area(s) *</label>
        <input
          name="preferredArea"
          type="text"
          required
          placeholder="e.g. Rochester Hills, Troy, Shelby Twp…"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Price Range *</label>
        <select name="priceRange" required className={inputClass}>
          <option value="">Select your budget</option>
          <option>Under $300,000</option>
          <option>$300,000 – $500,000</option>
          <option>$500,000 – $700,000</option>
          <option>$700,000 – $1,000,000</option>
          <option>$1,000,000+</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Bedrooms (minimum)</label>
        <select name="beds" className={inputClass}>
          <option value="">Any</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
          <option>5+</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors disabled:opacity-60 mt-2"
      >
        {status === "loading" ? "Joining…" : "Get First Access — Join the VIP List"}
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
        No spam. We only send you homes that match your criteria. Unsubscribe
        any time.
      </p>
    </form>
  );
}
