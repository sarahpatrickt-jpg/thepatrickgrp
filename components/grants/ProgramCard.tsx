import type { QualificationResult } from "@/data/grants";

const typeLabels: Record<string, { text: string; className: string }> = {
  grant: { text: "Grant", className: "bg-emerald-50 text-emerald-700" },
  "forgivable-loan": {
    text: "Forgivable Loan",
    className: "bg-blue-50 text-blue-700",
  },
  loan: { text: "Loan", className: "bg-gray-100 text-[var(--ink-2)]" },
  "rate-reduction": {
    text: "Rate Reduction",
    className: "bg-purple-50 text-purple-700",
  },
};

export default function ProgramCard({
  result,
  variant,
}: {
  result: QualificationResult;
  variant: "qualified" | "near-miss";
}) {
  const { program, missing } = result;
  const label = typeLabels[program.type] ?? typeLabels.loan;

  return (
    <div
      className={`border p-6 ${
        variant === "qualified"
          ? "border-emerald-200 bg-[var(--paper)]"
          : "border-[var(--line)] bg-[var(--paper-2)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${label.className}`}
          >
            {label.text}
          </span>
          <h3 className="font-display text-lg text-[var(--ink)] mt-2">
            {program.name}
          </h3>
        </div>
        <div className="text-right shrink-0">
          <p className="font-display text-xl text-[var(--red)]">
            {program.amount}
          </p>
        </div>
      </div>

      <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-4">
        {program.description}
      </p>

      {variant === "qualified" && program.highlights.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {program.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-[var(--ink-2)]"
            >
              <span className="text-emerald-600 font-bold mt-0.5 shrink-0">
                ✓
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {variant === "near-miss" && missing.length > 0 && (
        <div className="bg-amber-50 border border-amber-100 p-3 mb-4">
          <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1.5">
            What you may be missing
          </p>
          <ul className="space-y-1">
            {missing.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-amber-800"
              >
                <span className="shrink-0 mt-0.5">·</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={program.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--red)] text-sm font-semibold hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
}
