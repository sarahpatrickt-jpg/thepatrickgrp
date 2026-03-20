"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/buying",               label: "Buy" },
  { href: "/selling",              label: "Sell" },
  { href: "/home-valuation",       label: "Home Value" },
  { href: "/divorce-real-estate",  label: "Divorce" },
  { href: "/relocation",           label: "Relocating" },
  { href: "/about",                label: "Our Team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home page: transparent until scrolled. All other pages: always white.
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Real Logo ── */}
          <Link href="/" className="flex items-center shrink-0">
            {/*
              logo-full-color.png — full combined logo (Oak & Stone + The Patrick Group + Leading You Home)
              500×500 RGBA transparent background
              Dark/transparent state: brightness(0) invert(1) renders it all-white
              Scrolled/white state: full color, no filter
            */}
            <Image
              src="/logo-full-color.png"
              alt="Oak & Stone Real Estate — The Patrick Group — Leading You Home"
              width={500}
              height={500}
              priority
              className="h-16 w-auto object-contain transition-all duration-300"
              style={{ filter: transparent ? "brightness(0) invert(1)" : "none" }}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#c70000] ${
                  pathname === l.href
                    ? "text-[#c70000]"
                    : transparent
                    ? "text-white"
                    : "text-[#1a1a1a]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/home-valuation"
              className="ml-2 bg-[#c70000] text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-[#a30000] transition-colors"
            >
              Get My Home Value
            </Link>
          </nav>

          {/* ── Mobile burger ── */}
          <button
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all ${
                transparent && !menuOpen ? "bg-white" : "bg-[#1a1a1a]"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all ${
                transparent && !menuOpen ? "bg-white" : "bg-[#1a1a1a]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                transparent && !menuOpen ? "bg-white" : "bg-[#1a1a1a]"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {/* Logo inside drawer */}
          <div className="pb-3 border-b border-gray-100">
            <Image
              src="/logo-dark.svg"
              alt="Oak & Stone Real Estate — The Patrick Group"
              width={160}
              height={96}
              className="h-10 w-auto object-contain"
            />
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium py-1 transition-colors hover:text-[#c70000] ${
                pathname === l.href ? "text-[#c70000]" : "text-[#1a1a1a]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/home-valuation"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-[#c70000] text-white font-semibold px-5 py-3 rounded-sm"
          >
            Get My Home Value
          </Link>
          <Link
            href="/vip-buyers"
            onClick={() => setMenuOpen(false)}
            className="block text-center border border-[#c70000] text-[#c70000] font-semibold px-5 py-3 rounded-sm hover:bg-[#c70000]/5 transition-colors text-sm"
          >
            🔑 VIP Coming Soon List
          </Link>
          <p className="text-sm text-[#6b7280] pt-2">
            Call or text Brad Patrick:{" "}
            <a href="tel:2487553545" className="text-[#c70000] font-medium">
              248.755.3545
            </a>
          </p>
        </div>
      )}
    </header>
  );
}
