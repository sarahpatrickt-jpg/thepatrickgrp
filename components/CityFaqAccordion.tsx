"use client";

import { useState } from "react";

interface Faq {
  q: string;
  a: string;
}

interface CityFaqAccordionProps {
  faqs: Faq[];
  cityName: string;
}

export default function CityFaqAccordion({ faqs, cityName }: CityFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3" aria-label={`Frequently asked questions about ${cityName} real estate`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-[var(--line)] overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[var(--paper-2)] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[var(--ink)] text-sm leading-snug">
                {faq.q}
              </span>
              <span
                className={`text-[var(--red)] text-lg font-bold flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-[var(--line)] bg-[var(--paper-2)]">
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
