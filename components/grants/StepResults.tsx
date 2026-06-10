import type { BuyerProfile, QualificationResult } from "@/data/grants";
import { qualifyBuyer } from "@/data/grants";
import ProgramCard from "./ProgramCard";

export default function StepResults({
  profile,
  onBack,
  leadStatus,
}: {
  profile: BuyerProfile;
  onBack: () => void;
  leadStatus: "idle" | "loading" | "success" | "error";
}) {
  const { qualified, nearMiss } = qualifyBuyer(profile);
  const total = qualified.length + nearMiss.length;

  return (
    <div>
      {/* Summary header */}
      <div className="bg-[var(--ink)] text-white p-8 mb-8">
        <p className="text-[var(--red)] uppercase tracking-[0.22em] text-[11px] font-medium font-mono mb-2">
          Your Results
        </p>
        <h2 className="font-display text-2xl sm:text-3xl mb-3">
          {qualified.length > 0
            ? `You may qualify for ${qualified.length} program${qualified.length > 1 ? "s" : ""}`
            : "We found programs worth exploring"}
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          {qualified.length > 0
            ? `Based on your information, you appear to qualify for ${qualified.length} assistance program${qualified.length > 1 ? "s" : ""}${nearMiss.length > 0 ? ` and may be close to qualifying for ${nearMiss.length} more` : ""}. These results are estimates, a licensed lender will confirm your eligibility.`
            : "While you may not meet all requirements for these programs right now, some are worth discussing with a lender. Eligibility can change based on exact income, property address, and program updates."}
        </p>
      </div>

      {/* Qualified programs */}
      {qualified.length > 0 && (
        <div className="mb-10">
          <p className="text-emerald-700 text-xs uppercase tracking-widest font-semibold mb-4">
            Programs You Likely Qualify For
          </p>
          <div className="space-y-4">
            {qualified.map((r) => (
              <ProgramCard key={r.program.id} result={r} variant="qualified" />
            ))}
          </div>
        </div>
      )}

      {/* Near miss programs */}
      {nearMiss.length > 0 && (
        <div className="mb-10">
          <p className="text-amber-700 text-xs uppercase tracking-widest font-semibold mb-4">
            Programs Worth Exploring
          </p>
          <p className="text-sm text-[var(--ink-3)] mb-4">
            You may be close to qualifying for these. A lender can help
            determine if adjustments to your situation or updated program
            criteria could make you eligible.
          </p>
          <div className="space-y-4">
            {nearMiss.map((r) => (
              <ProgramCard key={r.program.id} result={r} variant="near-miss" />
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {total === 0 && (
        <div className="bg-[var(--paper-2)] border border-[var(--line)] p-8 text-center mb-10">
          <p className="font-display text-xl text-[var(--ink)] mb-3">
            No programs matched your current profile
          </p>
          <p className="text-sm text-[var(--ink-3)] max-w-md mx-auto leading-relaxed">
            This tool checks a limited set of programs. There may be additional
            options available through lenders, nonprofits, or employer-sponsored
            programs. We recommend speaking with an MSHDA-approved lender for a
            complete assessment.
          </p>
        </div>
      )}

      {/* CTA. Talk to us */}
      <div className="bg-[var(--red)] text-white p-8 text-center">
        <h3 className="font-display text-xl mb-2">
          Want help navigating these programs?
        </h3>
        <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
          We work with MSHDA-approved lenders who specialize in down payment
          assistance. Let us connect you, no cost, no obligation.
        </p>

        {leadStatus === "success" ? (
          <div className="bg-[var(--paper)]/10 p-4 mb-4">
            <p className="font-semibold">We have your information!</p>
            <p className="text-white/70 text-sm mt-1">
              Someone from our team will reach out within one business day.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[var(--paper)] text-[var(--red)] font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            Call Brad: (248) 755-3545
          </a>
          <a
            href="/contact"
            className="border-2 border-white/60 text-white font-semibold px-6 py-3 text-sm hover:border-white transition-colors"
          >
            Send a Message →
          </a>
        </div>
      </div>

      {/* Back button */}
      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="text-sm text-[var(--ink-3)] hover:text-[var(--ink-2)] transition-colors"
        >
          ← Edit My Information
        </button>
      </div>

      <p className="mt-8 text-xs text-[var(--ink-3)] text-center leading-relaxed">
        These results are estimates based on publicly available program
        requirements. Actual eligibility is determined by the program
        administrator and your lender. Income limits, purchase price caps, and
        program availability may change. The Patrick Group does not guarantee
        eligibility for any program.
      </p>
    </div>
  );
}
