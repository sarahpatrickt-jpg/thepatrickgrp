"use client";

import { useState } from "react";
import type { BuyerProfile } from "@/data/grants";
import StepIntake from "./StepIntake";
import StepResults from "./StepResults";

export default function GrantWizard() {
  const [step, setStep] = useState<"intake" | "sending" | "results">("intake");
  const [profile, setProfile] = useState<BuyerProfile | null>(null);
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formLoadedAt] = useState(() => Date.now());

  async function handleIntakeSubmit(p: BuyerProfile) {
    setProfile(p);
    setLeadStatus("loading");
    setStep("sending");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fire GA4 event
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "grant_qualification_submitted", {
        county: p.county,
        first_time_buyer: p.isFirstTimeBuyer,
        is_veteran: p.isVeteran,
      });
    }

    // Build note with all profile data
    const note = [
      `County: ${p.county}`,
      p.city ? `City: ${p.city}` : "",
      `Household: ${p.householdSize}`,
      `Income: $${p.annualIncome.toLocaleString()}`,
      `Purchase Price: $${p.purchasePrice.toLocaleString()}`,
      `First-time buyer: ${p.isFirstTimeBuyer ? "Yes" : "No"}`,
      `Veteran: ${p.isVeteran ? "Yes" : "No"}`,
      `Occupation: ${p.occupation}`,
      `Credit: ${p.creditScore}`,
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      const res = await fetch("/api/sierra-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: p.firstName,
          lastName: p.lastName,
          email: p.email,
          phone: p.phone,
          leadType: 1, // Buyer
          source: "thepatrickgrp.com - Grant Qualifier",
          note,
          tags: ["grant-qualifier", "buyer-lead"],
          _t: formLoadedAt,
        }),
      });

      if (res.ok) {
        setLeadStatus("success");
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "grant_lead_submitted", {
            county: p.county,
          });
        }
        // Only show results after lead is confirmed in Sierra
        setStep("results");
      } else {
        // Sierra returned an error — still show results (we have their info in the form)
        // but retry the lead in background
        setLeadStatus("error");
        setStep("results");
      }
    } catch {
      // Network error — still show results but mark lead as failed
      setLeadStatus("error");
      setStep("results");
    }
  }

  // Loading state — shown while lead is being sent to Sierra
  if (step === "sending") {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c70000]/10 mb-6">
          <svg
            className="w-8 h-8 text-[#c70000] animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-3">
          Checking Your Eligibility...
        </h2>
        <p className="text-gray-500 text-sm">
          We&apos;re reviewing 12+ Michigan grant and assistance programs based on
          your profile. This takes just a moment.
        </p>
      </div>
    );
  }

  if (step === "results" && profile) {
    return (
      <StepResults
        profile={profile}
        onBack={() => setStep("intake")}
        leadStatus={leadStatus}
      />
    );
  }

  return <StepIntake onSubmit={handleIntakeSubmit} />;
}
