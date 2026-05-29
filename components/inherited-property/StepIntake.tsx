"use client";

import { useState, useEffect } from "react";
import type {
  InheritedPropertyProfile,
  TransferMethod,
  ProbateStatus,
  HeirCount,
  HeirAgreement,
  PropertyCondition,
  LienStatus,
  Intention,
} from "@/data/inherited-property";
import { michiganCities } from "@/data/inherited-property";
import { trackWizardStart, trackWizardStep } from "@/lib/analytics";

const inputClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#c70000] rounded-sm";
const selectClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c70000] rounded-sm";
const labelClass =
  "block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1";
const sectionTitle = "font-serif text-lg font-bold text-[#1a1a1a] mb-4";
const sectionWrap = "bg-[#faf9f7] border border-gray-100 rounded-sm p-6";

type WizardStep = 1 | 2 | 3;

const radioOptionClass =
  "flex items-start gap-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:border-[#c70000]/40 transition-colors";
const radioOptionSelectedClass =
  "flex items-start gap-3 p-3 border-2 border-[#c70000] bg-[#c70000]/5 rounded-sm cursor-pointer";

function RadioOption({
  name,
  value,
  label,
  sublabel,
  selected,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  sublabel?: string;
  selected: boolean;
  onChange: (val: string) => void;
}) {
  return (
    <label className={selected ? radioOptionSelectedClass : radioOptionClass}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="accent-[#c70000] mt-0.5 shrink-0"
      />
      <div>
        <span className="text-sm font-medium text-[#1a1a1a]">{label}</span>
        {sublabel && (
          <span className="block text-xs text-gray-400 mt-0.5">{sublabel}</span>
        )}
      </div>
    </label>
  );
}

export default function StepIntake({
  onSubmit,
}: {
  onSubmit: (profile: InheritedPropertyProfile) => void;
}) {
  const [wizardStep, setWizardStep] = useState<WizardStep>(1);
  const [errors, setErrors] = useState<string[]>([]);

  // Step 1: Situation
  const [transferMethod, setTransferMethod] = useState<TransferMethod | "">("");
  const [probateStatus, setProbateStatus] = useState<ProbateStatus | "">("");
  const [heirCount, setHeirCount] = useState<HeirCount | "">("");
  const [heirAgreement, setHeirAgreement] = useState<HeirAgreement | "">("");

  // Step 2: Property
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyCondition, setPropertyCondition] = useState<PropertyCondition | "">("");
  const [lienStatus, setLienStatus] = useState<LienStatus | "">("");
  const [intention, setIntention] = useState<Intention | "">("");

  // Step 3: Contact (collected last for higher conversion)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function validateStep1(): boolean {
    const errs: string[] = [];
    if (!transferMethod) errs.push("How the property was received is required");
    if (transferMethod === "will-probate" && !probateStatus)
      errs.push("Probate status is required");
    if (!heirCount) errs.push("Number of heirs is required");
    if (heirCount !== "just-me" && !heirAgreement)
      errs.push("Heir agreement status is required");
    setErrors(errs);
    return errs.length === 0;
  }

  function validateStep2(): boolean {
    const errs: string[] = [];
    if (!propertyCity) errs.push("Property location is required");
    if (!propertyCondition) errs.push("Property condition is required");
    if (!lienStatus) errs.push("Mortgage/lien status is required");
    if (!intention) errs.push("Your intention is required");
    setErrors(errs);
    return errs.length === 0;
  }

  function validateStep3(): boolean {
    const errs: string[] = [];
    if (!firstName.trim()) errs.push("First name is required");
    if (!email.trim()) errs.push("Email is required");
    if (!phone.trim()) errs.push("Phone number is required");
    setErrors(errs);
    return errs.length === 0;
  }

  // Fire wizard_started once on mount
  useEffect(() => {
    trackWizardStart("inherited-property");
  }, []);

  function handleNext() {
    if (wizardStep === 1 && validateStep1()) {
      trackWizardStep("inherited-property", 2, "property_details");
      setWizardStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (wizardStep === 2 && validateStep2()) {
      trackWizardStep("inherited-property", 3, "contact_info");
      setWizardStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setErrors([]);
    if (wizardStep === 2) setWizardStep(1);
    if (wizardStep === 3) setWizardStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateStep3()) return;

    onSubmit({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      transferMethod: transferMethod as TransferMethod,
      probateStatus:
        transferMethod === "will-probate"
          ? (probateStatus as ProbateStatus)
          : transferMethod === "living-trust"
            ? "na-trust"
            : "not-sure",
      heirCount: heirCount as HeirCount,
      heirAgreement:
        heirCount === "just-me" ? "yes" : (heirAgreement as HeirAgreement),
      propertyCity,
      propertyState: "MI",
      propertyCondition: propertyCondition as PropertyCondition,
      lienStatus: lienStatus as LienStatus,
      intention: intention as Intention,
    });
  }

  // ── Progress bar ──
  const progressSteps = [
    { num: 1, label: "Your Situation" },
    { num: 2, label: "The Property" },
    { num: 3, label: "Get Your Plan" },
  ];

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
        {progressSteps.map((s, i) => (
          <div key={s.num} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  wizardStep >= s.num
                    ? "bg-[#c70000] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {wizardStep > s.num ? (
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  s.num
                )}
              </div>
              <span className="text-[10px] text-gray-500 mt-1 whitespace-nowrap">
                {s.label}
              </span>
            </div>
            {i < progressSteps.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-0.5 mx-2 mb-4 ${
                  wizardStep > s.num ? "bg-[#c70000]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Honeypot */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4 mb-6">
          <p className="text-sm font-semibold text-red-700 mb-1">
            Please fix the following:
          </p>
          <ul className="text-sm text-red-600 space-y-1">
            {errors.map((err, i) => (
              <li key={i}>· {err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ── STEP 1: Your Situation ── */}
      {wizardStep === 1 && (
        <div className="space-y-8">
          <div className={sectionWrap}>
            <h3 className={sectionTitle}>How did you receive the property?</h3>
            <div className="space-y-3">
              <RadioOption
                name="transferMethod"
                value="will-probate"
                label="Through a will or inheritance (probate)"
                sublabel="The property was left in a will, or there was no will and it's going through probate"
                selected={transferMethod === "will-probate"}
                onChange={(v) => setTransferMethod(v as TransferMethod)}
              />
              <RadioOption
                name="transferMethod"
                value="living-trust"
                label="Through a living trust"
                sublabel="The property was held in a revocable or irrevocable trust"
                selected={transferMethod === "living-trust"}
                onChange={(v) => setTransferMethod(v as TransferMethod)}
              />
              <RadioOption
                name="transferMethod"
                value="joint-tenancy"
                label="Joint tenancy / survivorship"
                sublabel="You were already on the deed as a joint owner"
                selected={transferMethod === "joint-tenancy"}
                onChange={(v) => setTransferMethod(v as TransferMethod)}
              />
              <RadioOption
                name="transferMethod"
                value="unsure"
                label="I'm not sure"
                sublabel="That's okay — we'll help you figure it out"
                selected={transferMethod === "unsure"}
                onChange={(v) => setTransferMethod(v as TransferMethod)}
              />
            </div>
          </div>

          {/* Conditional: Probate status (only for will-probate) */}
          {transferMethod === "will-probate" && (
            <div className={sectionWrap}>
              <h3 className={sectionTitle}>Has probate been opened?</h3>
              <div className="space-y-3">
                <RadioOption
                  name="probateStatus"
                  value="yes"
                  label="Yes, probate is open"
                  sublabel="A petition has been filed and/or Letters of Authority have been issued"
                  selected={probateStatus === "yes"}
                  onChange={(v) => setProbateStatus(v as ProbateStatus)}
                />
                <RadioOption
                  name="probateStatus"
                  value="no"
                  label="No, not yet"
                  selected={probateStatus === "no"}
                  onChange={(v) => setProbateStatus(v as ProbateStatus)}
                />
                <RadioOption
                  name="probateStatus"
                  value="not-sure"
                  label="I'm not sure"
                  selected={probateStatus === "not-sure"}
                  onChange={(v) => setProbateStatus(v as ProbateStatus)}
                />
              </div>
            </div>
          )}

          <div className={sectionWrap}>
            <h3 className={sectionTitle}>How many heirs are involved?</h3>
            <div className="space-y-3">
              <RadioOption
                name="heirCount"
                value="just-me"
                label="Just me"
                selected={heirCount === "just-me"}
                onChange={(v) => setHeirCount(v as HeirCount)}
              />
              <RadioOption
                name="heirCount"
                value="2-3"
                label="2-3 people"
                selected={heirCount === "2-3"}
                onChange={(v) => setHeirCount(v as HeirCount)}
              />
              <RadioOption
                name="heirCount"
                value="4-plus"
                label="4 or more"
                selected={heirCount === "4-plus"}
                onChange={(v) => setHeirCount(v as HeirCount)}
              />
            </div>
          </div>

          {/* Conditional: Heir agreement (only if multiple heirs) */}
          {heirCount && heirCount !== "just-me" && (
            <div className={sectionWrap}>
              <h3 className={sectionTitle}>Are all heirs in agreement about what to do?</h3>
              <div className="space-y-3">
                <RadioOption
                  name="heirAgreement"
                  value="yes"
                  label="Yes, we're aligned"
                  selected={heirAgreement === "yes"}
                  onChange={(v) => setHeirAgreement(v as HeirAgreement)}
                />
                <RadioOption
                  name="heirAgreement"
                  value="mostly"
                  label="Mostly — a few details to work out"
                  selected={heirAgreement === "mostly"}
                  onChange={(v) => setHeirAgreement(v as HeirAgreement)}
                />
                <RadioOption
                  name="heirAgreement"
                  value="no"
                  label="No, there's disagreement"
                  selected={heirAgreement === "no"}
                  onChange={(v) => setHeirAgreement(v as HeirAgreement)}
                />
                <RadioOption
                  name="heirAgreement"
                  value="not-discussed"
                  label="We haven't discussed it yet"
                  selected={heirAgreement === "not-discussed"}
                  onChange={(v) => setHeirAgreement(v as HeirAgreement)}
                />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Next: Tell Us About the Property
          </button>
        </div>
      )}

      {/* ── STEP 2: The Property ── */}
      {wizardStep === 2 && (
        <div className="space-y-8">
          <div className={sectionWrap}>
            <h3 className={sectionTitle}>Where is the property?</h3>
            <div>
              <label className={labelClass}>City *</label>
              <select
                value={propertyCity}
                onChange={(e) => setPropertyCity(e.target.value)}
                className={selectClass}
              >
                <option value="">Select city...</option>
                {michiganCities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={sectionWrap}>
            <h3 className={sectionTitle}>What condition is the property in?</h3>
            <div className="space-y-3">
              <RadioOption
                name="propertyCondition"
                value="move-in-ready"
                label="Move-in ready"
                sublabel="Minimal updates needed — could be listed as-is"
                selected={propertyCondition === "move-in-ready"}
                onChange={(v) => setPropertyCondition(v as PropertyCondition)}
              />
              <RadioOption
                name="propertyCondition"
                value="needs-some-work"
                label="Needs some work"
                sublabel="Cosmetic updates, minor repairs, or deferred maintenance"
                selected={propertyCondition === "needs-some-work"}
                onChange={(v) => setPropertyCondition(v as PropertyCondition)}
              />
              <RadioOption
                name="propertyCondition"
                value="major-repairs"
                label="Needs major repairs"
                sublabel="Structural issues, roof, HVAC, foundation, water damage"
                selected={propertyCondition === "major-repairs"}
                onChange={(v) => setPropertyCondition(v as PropertyCondition)}
              />
              <RadioOption
                name="propertyCondition"
                value="not-sure"
                label="I'm not sure"
                sublabel="I haven't been to the property recently or don't know its condition"
                selected={propertyCondition === "not-sure"}
                onChange={(v) => setPropertyCondition(v as PropertyCondition)}
              />
            </div>
          </div>

          <div className={sectionWrap}>
            <h3 className={sectionTitle}>
              Is there a mortgage, tax liens, or back taxes on the property?
            </h3>
            <div className="space-y-3">
              <RadioOption
                name="lienStatus"
                value="clear"
                label="No — clear title"
                sublabel="No mortgage, no liens, no back taxes"
                selected={lienStatus === "clear"}
                onChange={(v) => setLienStatus(v as LienStatus)}
              />
              <RadioOption
                name="lienStatus"
                value="mortgage"
                label="Yes, there's a mortgage"
                selected={lienStatus === "mortgage"}
                onChange={(v) => setLienStatus(v as LienStatus)}
              />
              <RadioOption
                name="lienStatus"
                value="liens-or-taxes"
                label="Yes, there are liens or back taxes"
                selected={lienStatus === "liens-or-taxes"}
                onChange={(v) => setLienStatus(v as LienStatus)}
              />
              <RadioOption
                name="lienStatus"
                value="not-sure"
                label="I'm not sure"
                selected={lienStatus === "not-sure"}
                onChange={(v) => setLienStatus(v as LienStatus)}
              />
            </div>
          </div>

          <div className={sectionWrap}>
            <h3 className={sectionTitle}>What are you leaning toward?</h3>
            <div className="space-y-3">
              <RadioOption
                name="intention"
                value="sell"
                label="Sell the property"
                selected={intention === "sell"}
                onChange={(v) => setIntention(v as Intention)}
              />
              <RadioOption
                name="intention"
                value="rent"
                label="Rent it out"
                selected={intention === "rent"}
                onChange={(v) => setIntention(v as Intention)}
              />
              <RadioOption
                name="intention"
                value="keep"
                label="Keep it (move in or hold)"
                selected={intention === "keep"}
                onChange={(v) => setIntention(v as Intention)}
              />
              <RadioOption
                name="intention"
                value="no-idea"
                label="I have no idea yet"
                sublabel="We'll help you figure it out"
                selected={intention === "no-idea"}
                onChange={(v) => setIntention(v as Intention)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors"
            >
              Next: Get Your Action Plan
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Contact Info ── */}
      {wizardStep === 3 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-[#1a1a1a] text-white rounded-sm p-6 text-center">
            <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
              Almost done
            </p>
            <h3 className="font-serif text-xl font-bold mb-2">
              Your personalized action plan is ready.
            </h3>
            <p className="text-white/60 text-sm">
              Enter your contact information to see your step-by-step plan.
              We&apos;ll also save it so our team can follow up if you need help.
            </p>
          </div>

          <div className={sectionWrap}>
            <h3 className={sectionTitle}>Your Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="248-555-0100"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors"
            >
              See My Action Plan
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            We never sell your information. Your plan is personalized to your
            situation.
          </p>
        </form>
      )}
    </div>
  );
}
