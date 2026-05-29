"use client";

import { useState } from "react";
import type { InheritedPropertyProfile } from "@/data/inherited-property";
import {
  trackInheritedPropertySubmitted,
  trackInheritedPropertyLeadSubmitted,
  trackWizardStep,
} from "@/lib/analytics";
import StepIntake from "./StepIntake";
import StepResults from "./StepResults";

export default function InheritedPropertyWizard() {
  const [step, setStep] = useState<"intake" | "sending" | "results">("intake");
  const [profile, setProfile] = useState<InheritedPropertyProfile | null>(null);
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formLoadedAt] = useState(() => Date.now());

  async function handleIntakeSubmit(p: InheritedPropertyProfile) {
    setProfile(p);
    setLeadStatus("loading");
    setStep("sending");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fire GA4 events
    trackWizardStep("inherited-property", 4, "submitted");
    trackInheritedPropertySubmitted(p.transferMethod, p.intention, p.heirCount);

    // Build note with all profile data
    const note = [
      `Transfer: ${p.transferMethod}`,
      `Probate: ${p.probateStatus}`,
      `Heirs: ${p.heirCount}`,
      `Agreement: ${p.heirAgreement}`,
      `City: ${p.propertyCity}`,
      `Condition: ${p.propertyCondition}`,
      `Liens: ${p.lienStatus}`,
      `Intention: ${p.intention}`,
    ].join(" | ");

    // Determine tags based on profile
    const tags: string[] = ["inherited-property"];
    if (p.transferMethod === "will-probate") tags.push("probate");
    if (p.transferMethod === "living-trust") tags.push("trust");
    if (p.intention === "sell") tags.push("seller-lead");
    if (p.intention === "rent") tags.push("rental-property");
    if (p.heirAgreement === "no") tags.push("heir-disagreement");
    if (p.propertyCondition === "major-repairs") tags.push("as-is-property");

    try {
      const res = await fetch("/api/sierra-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: p.firstName,
          lastName: p.lastName,
          email: p.email,
          phone: p.phone,
          leadType: 2, // Seller
          source: "thepatrickgrp.com - Inherited Property",
          note,
          tags,
          _t: formLoadedAt,
        }),
      });

      if (res.ok) {
        setLeadStatus("success");
        trackInheritedPropertyLeadSubmitted(p.transferMethod, p.intention);
        setStep("results");
      } else {
        setLeadStatus("error");
        setStep("results");
      }
    } catch {
      setLeadStatus("error");
      setStep("results");
    }
  }

  // Loading state
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
          Building Your Action Plan...
        </h2>
        <p className="text-gray-500 text-sm">
          We&apos;re analyzing your situation and creating a personalized
          step-by-step plan. This takes just a moment.
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
