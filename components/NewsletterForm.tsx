"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("General market updates");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, interest }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#c70000]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✅</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2">You&apos;re in!</h3>
        <p className="text-gray-500 text-sm">
          Welcome to Local Intel. You&apos;ll hear from us next month with the latest
          Southeast Michigan market updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Sarah"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Smith"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
          Email Address *
        </label>
        <input
          type="email"
          required
          placeholder="sarah@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
          I&apos;m interested in...
        </label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#c70000] rounded-sm bg-white"
        >
          <option>General market updates</option>
          <option>Buying a home in the next 12 months</option>
          <option>Selling my home in the next 12 months</option>
          <option>Relocating to the area</option>
          <option>Just staying informed</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#c70000]">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe to Local Intel"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No spam. Your information stays with us.
      </p>
    </form>
  );
}
