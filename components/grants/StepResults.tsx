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
      <div className="bg-[#1a1a1a] text-white rounded-sm p-8 mb-8">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
          Your Results
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
          {qualified.length > 0
            ? `You may qualify for ${qualified.length} program${qualified.length > 1 ? "s" : ""}`
            : "We found programs worth exploring"}
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          {qualified.length > 0
            ? `Based on your information, you appear to qualify for ${qualified.length} assistance program${qualified.length > 1 ? "s" : ""}${nearMiss.length > 0 ? ` and may be close to qualifying for ${nearMiss.length} more` : ""}. These results are estimates — a licensed lender will confirm your eligibility.`
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
          <p className="text-sm text-gray-500 mb-4">
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
        <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-8 text-center mb-10">
          <p className="font-serif text-xl font-bold text-[#1a1a1a] mb-3">
            No programs matched your current profile
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            This tool checks a limited set of programs. There may be additional
            options available through lenders, nonprofits, or employer-sponsored
            programs. We recommend speaking with an MSHDA-approved lender for a
            complete assessment.
          </p>
        </div>
      )}

      {/* CTA — Talk to us */}
      <div className="bg-[#c70000] text-white rounded-sm p-8 text-center">
        <h3 className="font-serif text-xl font-bold mb-2">
          Want help navigating these programs?
        </h3>
        <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
          We work with MSHDA-approved lenders who specialize in down payment
          assistance. Let us connect you — no cost, no obligation.
        </p>

        {leadStatus === "success" ? (
          <div className="bg-white/10 rounded-sm p-4 mb-4">
            <p className="font-semibold">We have your information!</p>
            <p className="text-white/70 text-sm mt-1">
              Someone from our team will reach out within one business day.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2487553545"
            className="bg-white text-[#c70000] font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
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
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← Edit My Information
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
        These results are estimates based on publicly available program
        requirements. Actual eligibility is determined by the program
        administrator and your lender. Income limits, purchase price caps, and
        program availability may change. The Patrick Group does not guarantee
        eligibility for any program.
      </p>
    </div>
  );
}
