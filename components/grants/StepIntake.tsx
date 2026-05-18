import { useState } from "react";
import type { BuyerProfile, County, CreditScoreRange, OccupationCategory } from "@/data/grants";
import { counties, citiesByCounty } from "@/data/grants";

const inputClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#c70000] rounded-sm";
const selectClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c70000] rounded-sm";
const labelClass =
  "block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1";

const sectionTitle = "font-serif text-lg font-bold text-[#1a1a1a] mb-4";
const sectionWrap = "bg-[#faf9f7] border border-gray-100 rounded-sm p-6";

export default function StepIntake({
  onSubmit,
}: {
  onSubmit: (profile: BuyerProfile) => void;
}) {
  const [county, setCounty] = useState<County | "">("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: string[] = [];

    const firstName = (fd.get("firstName") as string).trim();
    const lastName = (fd.get("lastName") as string).trim();
    const email = (fd.get("email") as string).trim();
    const phone = (fd.get("phone") as string).trim();
    const countyVal = fd.get("county") as County;
    const cityVal = (fd.get("city") as string) || "";
    const householdSize = parseInt(fd.get("householdSize") as string, 10);
    const annualIncome = parseInt(
      (fd.get("annualIncome") as string).replace(/[^0-9]/g, ""),
      10
    );
    const purchasePrice = parseInt(
      (fd.get("purchasePrice") as string).replace(/[^0-9]/g, ""),
      10
    );
    const isFirstTimeBuyer = fd.get("firstTimeBuyer") === "yes";
    const isVeteran = fd.get("veteran") === "yes";
    const occupation = (fd.get("occupation") as OccupationCategory) || "other";
    const creditScore =
      (fd.get("creditScore") as CreditScoreRange) || "not-sure";
    const livesInDetroit =
      countyVal === "Wayne" && cityVal === "Detroit";

    if (!firstName) errs.push("First name is required");
    if (!email) errs.push("Email is required");
    if (!phone) errs.push("Phone number is required");
    if (!countyVal) errs.push("County is required");
    if (!householdSize || householdSize < 1) errs.push("Household size is required");
    if (!annualIncome || annualIncome < 1) errs.push("Annual income is required");
    if (!purchasePrice || purchasePrice < 1) errs.push("Purchase price is required");

    if (errs.length > 0) {
      setErrors(errs);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setErrors([]);

    onSubmit({
      firstName,
      lastName,
      email,
      phone,
      county: countyVal,
      city: cityVal,
      householdSize,
      annualIncome,
      purchasePrice,
      isFirstTimeBuyer,
      isVeteran,
      occupation,
      creditScore,
      livesInDetroit,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
        <div className="bg-red-50 border border-red-200 rounded-sm p-4">
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

      {/* ── Section 1: Contact ── */}
      <div className={sectionWrap}>
        <h3 className={sectionTitle}>Your Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Sarah"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Smith"
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="sarah@email.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="248-555-0100"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: Property ── */}
      <div className={sectionWrap}>
        <h3 className={sectionTitle}>Where Are You Looking to Buy?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>County *</label>
            <select
              name="county"
              required
              className={selectClass}
              value={county}
              onChange={(e) => {
                setCounty(e.target.value as County);
                setCity("");
              }}
            >
              <option value="">Select county...</option>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c} County
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>City</label>
            {county ? (
              <select
                name="city"
                className={selectClass}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select city...</option>
                {citiesByCounty[county].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            ) : (
              <select name="city" className={selectClass} disabled>
                <option value="">Select county first</option>
              </select>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Estimated Purchase Price *</label>
          <input
            type="text"
            name="purchasePrice"
            required
            placeholder="$250,000"
            className={inputClass}
          />
          <p className="text-xs text-gray-400 mt-1">
            Your best estimate of the home price you&apos;re targeting
          </p>
        </div>
      </div>

      {/* ── Section 3: Financial ── */}
      <div className={sectionWrap}>
        <h3 className={sectionTitle}>Financial Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Household Size *</label>
            <select name="householdSize" required className={selectClass}>
              <option value="">Select...</option>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 people</option>
              <option value="6">6 people</option>
              <option value="7">7 people</option>
              <option value="8">8+ people</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Annual Household Income *</label>
            <input
              type="text"
              name="annualIncome"
              required
              placeholder="$75,000"
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">
              Total income for everyone in your household
            </p>
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Credit Score Range</label>
          <select name="creditScore" className={selectClass}>
            <option value="not-sure">Not sure</option>
            <option value="720-plus">720+</option>
            <option value="680-719">680 - 719</option>
            <option value="660-679">660 - 679</option>
            <option value="620-659">620 - 659</option>
            <option value="below-620">Below 620</option>
          </select>
        </div>
      </div>

      {/* ── Section 4: Qualifying Questions ── */}
      <div className={sectionWrap}>
        <h3 className={sectionTitle}>A Few More Questions</h3>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>
              Are you a first-time homebuyer? *
            </label>
            <p className="text-xs text-gray-400 mb-2">
              Generally means you haven&apos;t owned a home in the past 3 years
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="firstTimeBuyer"
                  value="yes"
                  defaultChecked
                  className="accent-[#c70000]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="firstTimeBuyer"
                  value="no"
                  className="accent-[#c70000]"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Are you a veteran or active-duty military?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="veteran"
                  value="yes"
                  className="accent-[#c70000]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="veteran"
                  value="no"
                  defaultChecked
                  className="accent-[#c70000]"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className={labelClass}>Your Occupation</label>
            <select name="occupation" className={selectClass}>
              <option value="other">Other / Not Listed</option>
              <option value="teacher">Teacher (K-12)</option>
              <option value="law-enforcement">Law Enforcement</option>
              <option value="firefighter">Firefighter</option>
              <option value="emt">EMT / Paramedic</option>
              <option value="military-veteran">Military / Veteran</option>
              <option value="healthcare">Healthcare Worker</option>
              <option value="government">Government Employee</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#c70000] text-white font-bold py-4 text-sm rounded-sm hover:bg-[#a30000] transition-colors"
      >
        See My Grant Results →
      </button>

      <p className="text-xs text-gray-400 text-center">
        We never sell your information. Results are estimates only.
      </p>
    </form>
  );
}
