"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show once per session
    if (sessionStorage.getItem("exitPopupShown")) return;

    // Desktop: detect cursor leaving viewport through top edge
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem("exitPopupShown", "1");
      }
    };

    // Mobile fallback: show after 60 seconds of engagement
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("exitPopupShown")) {
        setVisible(true);
        sessionStorage.setItem("exitPopupShown", "1");
      }
    }, 60000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,10,10,0.75)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Are you thinking about moving?"
    >
      <div className="bg-[#faf9f7] max-w-md w-full shadow-2xl relative overflow-hidden">
        {/* Red accent bar */}
        <div className="h-1 bg-[#c70000]" />

        <div className="p-8 sm:p-10">
          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-5 text-gray-400 hover:text-[#1a1a1a] text-2xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Eyebrow */}
          <p className="text-[#c70000] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            Before you go
          </p>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2 leading-tight">
            Thinking About Making a Move?
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Tell us where you are — we&apos;ll send you exactly the right
            information. No pressure, no spam.
          </p>

          {/* Two-path cards */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/home-valuation"
              onClick={dismiss}
              className="group flex flex-col bg-[#1a1a1a] text-white p-5 hover:bg-[#c70000] transition-colors duration-200"
            >
              <span className="text-2xl mb-3 block">🏡</span>
              <span className="font-serif font-bold text-base mb-1 leading-snug">
                I&apos;m thinking of selling
              </span>
              <span className="text-white/65 text-xs leading-relaxed">
                Find out what your home is worth in today&apos;s market →
              </span>
            </Link>

            <Link
              href="/vip-buyers"
              onClick={dismiss}
              className="group flex flex-col bg-[#1a1a1a] text-white p-5 hover:bg-[#c70000] transition-colors duration-200"
            >
              <span className="text-2xl mb-3 block">🔑</span>
              <span className="font-serif font-bold text-base mb-1 leading-snug">
                I&apos;m looking to buy
              </span>
              <span className="text-white/65 text-xs leading-relaxed">
                See homes before they hit Zillow →
              </span>
            </Link>
          </div>

          {/* Dismiss */}
          <p className="text-center mt-5">
            <button
              onClick={dismiss}
              className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
            >
              Just browsing — no thanks
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
