import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

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
    { "@type": "City", name: "Birmingham", containedInPlace: "Michigan" },
    { "@type": "City", name: "Bloomfield Hills", containedInPlace: "Michigan" },
    { "@type": "City", name: "Rochester", containedInPlace: "Michigan" },
    { "@type": "City", name: "Rochester Hills", containedInPlace: "Michigan" },
    { "@type": "City", name: "Troy", containedInPlace: "Michigan" },
    { "@type": "City", name: "West Bloomfield", containedInPlace: "Michigan" },
    { "@type": "City", name: "Royal Oak", containedInPlace: "Michigan" },
    { "@type": "City", name: "Clarkston", containedInPlace: "Michigan" },
    { "@type": "City", name: "Lake Orion", containedInPlace: "Michigan" },
    { "@type": "City", name: "Oxford", containedInPlace: "Michigan" },
    { "@type": "City", name: "Sterling Heights", containedInPlace: "Michigan" },
    { "@type": "City", name: "Warren", containedInPlace: "Michigan" },
    { "@type": "City", name: "Clinton Township", containedInPlace: "Michigan" },
    { "@type": "City", name: "Macomb Township", containedInPlace: "Michigan" },
    { "@type": "City", name: "Shelby Township", containedInPlace: "Michigan" },
    { "@type": "City", name: "St. Clair Shores", containedInPlace: "Michigan" },
    { "@type": "City", name: "Novi", containedInPlace: "Michigan" },
    { "@type": "City", name: "Washtenaw County", containedInPlace: "Michigan" },
    { "@type": "City", name: "Livingston County", containedInPlace: "Michigan" },
    { "@type": "City", name: "Grosse Pointe", containedInPlace: "Michigan" },
    { "@type": "City", name: "Northville", containedInPlace: "Michigan" },
    { "@type": "City", name: "Plymouth", containedInPlace: "Michigan" },
    { "@type": "City", name: "Livonia", containedInPlace: "Michigan" },
    { "@type": "City", name: "Detroit", containedInPlace: "Michigan" },
    { "@type": "City", name: "Romulus", containedInPlace: "Michigan" },
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
  employee: [
    {
      "@type": "Person",
      name: "Sarah Patrick",
      jobTitle: "Principal Broker / Owner",
      url: "https://thepatrickgrp.com/about",
      email: "sarah@sarahpatrickhomes.com",
      sameAs: "https://www.linkedin.com/in/sarahkpatrick/",
      worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate" },
      description: "Sarah Patrick has been a licensed Principal Broker in Michigan since 2000, with 26 years of experience navigating every market cycle in Southeast Michigan.",
    },
    {
      "@type": "Person",
      name: "Brad Patrick",
      jobTitle: "Realtor® — Lead Buyer's Agent",
      url: "https://thepatrickgrp.com/about",
      email: "brad@youragentbrad.net",
      telephone: "+12487553545",
      sameAs: [
        "https://www.instagram.com/youragentbrad/",
        "https://www.facebook.com/search/top?q=your%20agent%20brad",
        "https://www.youtube.com/@itsmondayyall",
      ],
      worksFor: { "@type": "Organization", name: "The Patrick Group | Oak and Stone Real Estate" },
      description: "Brad Patrick brings 15+ years of real estate experience and a prior career in mortgage lending to The Patrick Group. Featured on the cover of Real Producers Magazine, April 2026.",
    },
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
        <ExitIntentPopup />
      </body>
    </html>
  );
}
