import type { InheritedPropertyProfile, ActionStep, RedFlag } from "@/data/inherited-property";
import { generateActionPlan } from "@/data/inherited-property";

const iconMap: Record<ActionStep["icon"], string> = {
  legal: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  financial: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  property: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  family: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  tax: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  decision: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
};

const urgencyLabels: Record<ActionStep["urgency"], { text: string; className: string }> = {
  now: { text: "Do Now", className: "bg-red-50 text-red-700" },
  soon: { text: "Do Soon", className: "bg-amber-50 text-amber-700" },
  later: { text: "When Ready", className: "bg-gray-100 text-gray-600" },
};

function ActionStepCard({ step, index }: { step: ActionStep; index: number }) {
  const urgency = urgencyLabels[step.urgency];
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#c70000] text-white flex items-center justify-center shrink-0 text-sm font-bold">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="font-semibold text-[#1a1a1a]">{step.title}</h3>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${urgency.className}`}
            >
              {urgency.text}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
        </div>
      </div>
    </div>
  );
}

function RedFlagCard({ flag }: { flag: RedFlag }) {
  return (
    <div className="bg-red-50 border border-red-100 rounded-sm p-5">
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          <h4 className="font-semibold text-red-800 text-sm mb-1">{flag.title}</h4>
          <p className="text-sm text-red-700/80 leading-relaxed">{flag.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function StepResults({
  profile,
  onBack,
  leadStatus,
}: {
  profile: InheritedPropertyProfile;
  onBack: () => void;
  leadStatus: "idle" | "loading" | "success" | "error";
}) {
  const plan = generateActionPlan(profile);

  return (
    <div>
      {/* Summary header */}
      <div className="bg-[#1a1a1a] text-white rounded-sm p-8 mb-8">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
          Your Action Plan
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
          {plan.headline}
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">{plan.summary}</p>
      </div>

      {/* Action steps */}
      <div className="mb-10">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-4">
          Step-by-Step Action Plan
        </p>
        <div className="space-y-4">
          {plan.steps.map((step, i) => (
            <ActionStepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      {/* Red flags */}
      {plan.redFlags.length > 0 && (
        <div className="mb-10">
          <p className="text-red-700 text-xs uppercase tracking-widest font-semibold mb-4">
            Important Warnings
          </p>
          <div className="space-y-3">
            {plan.redFlags.map((flag, i) => (
              <RedFlagCard key={i} flag={flag} />
            ))}
          </div>
        </div>
      )}

      {/* Tax basis explainer */}
      <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6 mb-8">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
          Tax Basis Step-Up
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{plan.taxNote}</p>
      </div>

      {/* Sell vs rent insight */}
      <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6 mb-8">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
          {profile.intention === "sell"
            ? "Selling Outlook"
            : profile.intention === "rent"
              ? "Rental Consideration"
              : profile.intention === "keep"
                ? "Keeping the Property"
                : "Sell vs. Rent vs. Keep"}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {plan.sellVsRentInsight}
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-[#faf9f7] border border-gray-100 rounded-sm p-6 mb-10">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-2">
          Estimated Timeline
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {plan.timelineEstimate}
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[#c70000] text-white rounded-sm p-8 text-center">
        <h3 className="font-serif text-xl font-bold mb-2">
          Need help navigating this?
        </h3>
        <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
          We&apos;ve guided families through inherited property sales across
          Southeast Michigan. One conversation is all it takes to get clarity
          on your situation.
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
            Call Sarah: (248) 755-3545
          </a>
          <a
            href="/contact"
            className="border-2 border-white/60 text-white font-semibold px-6 py-3 text-sm hover:border-white transition-colors"
          >
            Send a Message
          </a>
        </div>
      </div>

      {/* Back button */}
      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Start Over
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed max-w-2xl mx-auto">
        This action plan is generated based on common inherited property
        scenarios in Michigan and is for informational purposes only. It does not
        constitute legal, tax, or financial advice. Every situation is unique —
        consult with an estate attorney and tax professional for guidance
        specific to your circumstances. The Patrick Group does not provide legal
        or tax services.
      </p>
    </div>
  );
}
