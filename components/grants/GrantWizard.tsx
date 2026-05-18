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

  function handleIntakeSubmit(p: BuyerProfile) {
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
  }

  async function handleSubmitLead() {
    if (!profile) return;
    setLeadStatus("loading");

    const note = [
      `County: ${profile.county}`,
      profile.city ? `City: ${profile.city}` : "",
      `Household: ${profile.householdSize}`,
      `Income: $${profile.annualIncome.toLocaleString()}`,
      `Purchase Price: $${profile.purchasePrice.toLocaleString()}`,
      `First-time buyer: ${profile.isFirstTimeBuyer ? "Yes" : "No"}`,
      `Veteran: ${profile.isVeteran ? "Yes" : "No"}`,
      `Occupation: ${profile.occupation}`,
      `Credit: ${profile.creditScore}`,
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      const res = await fetch("/api/sierra-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
          phone: profile.phone,
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
            county: profile.county,
          });
        }
      } else {
        setLeadStatus("error");
      }
    } catch {
      setLeadStatus("error");
    }
  }

  if (step === "results" && profile) {
    return (
      <StepResults
        profile={profile}
        onBack={() => setStep("intake")}
        onSubmitLead={handleSubmitLead}
        leadStatus={leadStatus}
      />
    );
  }

  return <StepIntake onSubmit={handleIntakeSubmit} />;
}
