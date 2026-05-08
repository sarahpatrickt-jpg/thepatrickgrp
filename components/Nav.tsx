"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackPhoneClick } from "@/lib/analytics";

// Left-side nav links (desktop) — split around the Specialties dropdown
const leftLinksBefore = [
  { href: "/buying",  label: "Buy" },
  { href: "/selling", label: "Sell" },
];

const leftLinksAfter = [
  { href: "/neighborhoods",    label: "Neighborhoods" },
  { href: "/new-construction", label: "New Homes" },
  { href: "/market-updates",   label: "Market Reports" },
];

// Specialties dropdown — mirrors the footer "Specialties" section
const specialtyLinks = [
  { href: "/cash-offer",          label: "Cash Offer Program" },
  { href: "/new-construction",    label: "New Construction" },
  { href: "/divorce-real-estate", label: "Divorce Real Estate" },
  { href: "/relocation",          label: "Relocating to Michigan" },
  { href: "/downsizing",          label: "Downsizing" },
  { href: "/estate-sales",        label: "Estate & Probate Sales" },
];

const specialtyHrefs = new Set(specialtyLinks.map((l) => l.href));

// All links for mobile drawer
const allLinks = [
  { href: "/buying",               label: "Buy" },
  { href: "/selling",              label: "Sell" },
  { href: "/cash-offer",           label: "Cash Offer Program" },
  { href: "/new-construction",     label: "New Construction" },
  { href: "/divorce-real-estate",  label: "Divorce Real Estate" },
  { href: "/relocation",           label: "Relocating to Michigan" },
  { href: "/downsizing",           label: "Downsizing" },
  { href: "/estate-sales",         label: "Estate & Probate Sales" },
  { href: "/neighborhoods",        label: "Neighborhoods" },
  { href: "/market-updates",       label: "Market Reports" },
  { href: "/insights",             label: "Journal" },
  { href: "/about",                label: "Our Team" },
  { href: "/reviews",              label: "Reviews" },
  { href: "/contact",              label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]               = useState(false);
  const [menuOpen, setMenuOpen]               = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const pathname                              = usePathname();
  const isHome                                = pathname === "/";
  const specialtiesRef                        = useRef<HTMLDivElement>(null);
  const closeTimer                            = useRef<ReturnType<typeof setTimeout> | null>(null);
  const specialtiesActive                     = specialtyHrefs.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, click outside
  useEffect(() => {
    if (!specialtiesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSpecialtiesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (specialtiesRef.current && !specialtiesRef.current.contains(e.target as Node)) {
        setSpecialtiesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [specialtiesOpen]);

  // Hover-open with small close delay so cursor can travel to panel
  const openSpecialties = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSpecialtiesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setSpecialtiesOpen(false), 120);
  };

  // On the homepage, nav is transparent until the user scrolls
  const transparent = isHome && !scrolled && !menuOpen;

  const navBg     = transparent ? "transparent" : "var(--paper)";
  const linkColor = transparent ? "#FDFBF7" : "var(--ink-2)";
  const shadow    = transparent ? "none" : "0 1px 0 var(--line)";

  const linkClass = "text-[13px] font-medium transition-colors whitespace-nowrap";
  const linkStyle = (href: string) => ({
    color: pathname === href ? "var(--red)" : linkColor,
    fontFamily: "var(--font-sans)",
    letterSpacing: "0.01em",
  });

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: navBg, boxShadow: shadow }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">

          {/* ── Left: desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-5 flex-1">
            {leftLinksBefore.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass} style={linkStyle(l.href)}>
                {l.label}
              </Link>
            ))}

            {/* Specialties dropdown */}
            <div
              ref={specialtiesRef}
              className="relative"
              onMouseEnter={openSpecialties}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={specialtiesOpen}
                onClick={() => setSpecialtiesOpen((o) => !o)}
                className={`${linkClass} inline-flex items-center gap-1`}
                style={{
                  color: specialtiesActive ? "var(--red)" : linkColor,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.01em",
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                Specialties
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  style={{
                    transition: "transform 200ms",
                    transform: specialtiesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {specialtiesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full pt-3"
                  style={{ minWidth: 240 }}
                >
                  <div
                    className="py-2"
                    style={{
                      backgroundColor: "var(--paper)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 1px 0 var(--line)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {specialtyLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        role="menuitem"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-5 py-2.5 text-[13px] font-medium transition-colors"
                        style={{
                          color: pathname === s.href ? "var(--red)" : "var(--ink-2)",
                          fontFamily: "var(--font-sans)",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {leftLinksAfter.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass} style={linkStyle(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── Center: wordmark (absolutely centered on desktop) ── */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 hidden lg:block"
            aria-label="The Patrick Group — Home"
          >
            <Image
              src="/logo-full-color.png"
              alt="Oak & Stone Real Estate — The Patrick Group — Leading You Home"
              width={500}
              height={500}
              priority
              className="h-14 w-auto object-contain transition-all duration-300"
              style={{ filter: transparent ? "brightness(0) invert(1)" : "none" }}
            />
          </Link>

          {/* ── Mobile: logo left ── */}
          <Link href="/" className="lg:hidden flex items-center">
            <Image
              src="/logo-full-color.png"
              alt="Oak & Stone Real Estate — The Patrick Group"
              width={500}
              height={500}
              priority
              className="h-12 w-auto object-contain transition-all duration-300"
              style={{ filter: transparent ? "brightness(0) invert(1)" : "none" }}
            />
          </Link>

          {/* ── Right: phone + CTA ── */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-end">
            <a
              href="tel:2487553545"
              onClick={() => trackPhoneClick("nav")}
              className="text-[13px] font-medium transition-colors whitespace-nowrap"
              style={{
                color: linkColor,
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.04em",
              }}
            >
              248.755.3545
            </a>
            <Link
              href="/home-valuation"
              className="text-[12px] font-medium px-5 py-2.5 uppercase tracking-wider transition-colors whitespace-nowrap"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Get My Home Value
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className="lg:hidden p-2 ml-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-200"
                style={{
                  backgroundColor: transparent && !menuOpen ? "#FDFBF7" : "var(--ink)",
                  marginBottom: i < 2 ? "5px" : 0,
                  transform:
                    menuOpen && i === 0 ? "translateY(7px) rotate(45deg)" :
                    menuOpen && i === 1 ? "scaleX(0) opacity-0" :
                    menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)" :
                    "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          className="lg:hidden px-4 py-6 space-y-1"
          style={{ backgroundColor: "var(--paper)", boxShadow: "0 4px 24px var(--line)" }}
        >
          {/* Logo */}
          <div className="pb-4 mb-2" style={{ borderBottom: "1px solid var(--line)" }}>
            <Image
              src="/logo-full-color.png"
              alt="The Patrick Group"
              width={500}
              height={500}
              className="h-10 w-auto object-contain"
            />
          </div>

          {allLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-base font-medium transition-colors"
              style={{
                color: pathname === l.href ? "var(--red)" : "var(--ink)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-4 space-y-3" style={{ borderTop: "1px solid var(--line)", marginTop: "8px" }}>
            <Link
              href="/home-valuation"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-sm font-medium uppercase tracking-wider"
              style={{
                backgroundColor: "var(--red)",
                color: "#FDFBF7",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              Get My Home Value
            </Link>
            <Link
              href="/vip-buyers"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-sm font-medium uppercase tracking-wider"
              style={{
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: "0.12em",
              }}
            >
              VIP Coming Soon List
            </Link>
            <p className="text-sm text-center pt-1" style={{ color: "var(--ink-3)" }}>
              Call or text Brad:{" "}
              <a
                href="tel:2487553545"
                onClick={() => trackPhoneClick("nav-mobile")}
                className="font-medium"
                style={{ color: "var(--red)" }}
              >
                248.755.3545
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
