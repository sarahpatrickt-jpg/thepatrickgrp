import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Patrick Group | Southeast Michigan Real Estate Experts",
    template: "%s | The Patrick Group",
  },
  description:
    "The Patrick Group — Southeast Michigan real estate specialists. 26 years of experience, boutique service, referral-based business. Led by Sarah Patrick, Principal Broker.",
  metadataBase: new URL("https://thepatrickgrp.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thepatrickgrp.com",
    siteName: "The Patrick Group",
    title: "The Patrick Group | Southeast Michigan Real Estate Experts",
    description:
      "Boutique real estate service from Southeast Michigan's most experienced team. 26 years of market expertise. Leading You Home.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Patrick Group | Southeast Michigan Real Estate Experts",
    description:
      "Boutique real estate service from Southeast Michigan's most experienced team. 26 years of market expertise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "The Patrick Group | Oak and Stone Real Estate",
  url: "https://thepatrickgrp.com",
  telephone: "+12487553545",
  email: "sarah@sarahpatrickhomes.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "408 East Street",
    addressLocality: "Rochester",
    addressRegion: "MI",
    postalCode: "48307",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Southeast Michigan", containedInPlace: "Michigan" },
  ],
  description:
    "Boutique real estate team serving Southeast Michigan. 26 years of experience. Sarah Patrick, Principal Broker.",
  sameAs: [
    "https://www.oakandstonerealestate.com",
    "https://www.facebook.com/search/top?q=your%20agent%20brad",
    "https://www.instagram.com/youragentbrad/",
    "https://www.linkedin.com/in/sarahkpatrick/",
    "https://www.youtube.com/@itsmondayyall",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#1a1a1a]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
