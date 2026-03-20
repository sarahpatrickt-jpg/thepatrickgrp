import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top strip */}
      <div className="bg-[#c70000] py-3 text-center">
        <p className="text-sm text-white font-medium tracking-wide">
          Ready to make a move?{" "}
          <a href="tel:2487553545" className="underline font-bold">
            248.755.3545
          </a>{" "}
          &nbsp;|&nbsp; Southeast Michigan
        </p>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            {/* Real logo — all-white via brightness(0) invert(1) on dark footer */}
            <Image
              src="/logo-full-color.png"
              alt="Oak & Stone Real Estate — The Patrick Group — Leading You Home"
              width={500}
              height={500}
              className="h-20 w-auto object-contain mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Boutique real estate service for Southeast Michigan.
              Experience matters — especially when the market gets complicated.
            </p>
            <div className="mt-5 space-y-4">
              <p className="text-sm text-white/60">
                📍 408 East Street, Rochester, MI 48307
              </p>

              {/* Sarah */}
              <div className="space-y-0.5">
                <p className="text-xs text-white/40 uppercase tracking-wider">Sarah Patrick · Principal Broker</p>
                <p className="text-sm">
                  <a
                    href="mailto:sarah@sarahpatrickhomes.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    ✉ sarah@sarahpatrickhomes.com
                  </a>
                </p>
              </div>

              {/* Brad */}
              <div className="space-y-0.5">
                <p className="text-xs text-white/40 uppercase tracking-wider">Brad Patrick · Realtor®</p>
                <p className="text-sm">
                  <a
                    href="tel:2487553545"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    📞 248.755.3545
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href="mailto:brad@youragentbrad.net"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    ✉ brad@youragentbrad.net
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Buyers & Sellers */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c70000] font-semibold mb-4">
              Buyers &amp; Sellers
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/buying",         label: "Buy a Home" },
                { href: "/vip-buyers",     label: "VIP Coming Soon List" },
                { href: "/selling",        label: "Sell Your Home" },
                { href: "/home-valuation", label: "Free Home Valuation" },
                { href: "/search-homes",   label: "Search Homes" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties & Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c70000] font-semibold mb-4">
              Specialties
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { href: "/cash-offer",           label: "Cash Offer Program" },
                { href: "/new-construction",     label: "New Construction" },
                { href: "/divorce-real-estate", label: "Divorce Real Estate" },
                { href: "/relocation",          label: "Relocating to Michigan" },
                { href: "/downsizing",          label: "Downsizing" },
                { href: "/estate-sales",        label: "Estate & Probate Sales" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs uppercase tracking-widest text-[#c70000] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about",          label: "Our Team" },
                { href: "/reviews",        label: "Client Reviews" },
                { href: "/neighborhoods",  label: "Neighborhood Guides" },
                { href: "/market-updates", label: "Market Reports" },
                { href: "/faq",            label: "FAQ" },
                { href: "/contact",        label: "Contact Us" },
                { href: "/newsletter",     label: "Newsletter" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.oakandstonerealestate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  OakAndStoneRealEstate.com ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Follow Us</p>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/search/top?q=your%20agent%20brad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c70000] flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/youragentbrad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c70000] flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sarahkpatrick/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c70000] flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@itsmondayyall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c70000] flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a1a"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {year} Oak &amp; Stone Real Estate | The Patrick Group. All rights reserved. | Sarah Patrick, Principal Broker.
          </p>
          <p className="text-white/30 text-xs">
            408 East Street, Rochester, MI 48307 | Licensed in Michigan | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
