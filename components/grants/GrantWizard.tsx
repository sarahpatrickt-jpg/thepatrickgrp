"use client";

import { useState } from "react";
import type { BuyerProfile } from "@/data/grants";
import StepIntake from "./StepIntake";
import StepResults from "./StepResults";

export default function GrantWizard() {
  const [step, setStep] = useState<"intake" | "results">("intake");
  const [profile, setProfile] = useState<BuyerProfile | null>(null);
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formLoadedAt] = useState(() => Date.now());

  async function handleIntakeSubmit(p: BuyerProfile) {
    setProfile(p);
    setStep("results");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fire GA4 event
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "grant_qualification_submitted", {
        county: p.county,
        first_time_buyer: p.isFirstTimeBuyer,
        is_veteran: p.isVeteran,
      });
    }

    // Send lead to Sierra immediately on form submit
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
      }
    } catch {
      // Silent fail — don't block the user from seeing results
    }
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
