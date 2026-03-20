import type { MetadataRoute } from "next";

const base = "https://thepatrickgrp.com";

const neighborhoods = [
  // Oakland County
  "birmingham-mi",
  "bloomfield-hills-mi",
  "bloomfield-township-mi",
  "rochester-mi",
  "rochester-hills-mi",
  "troy-mi",
  "west-bloomfield-mi",
  "royal-oak-mi",
  "clarkston-mi",
  "lake-orion-mi",
  "oxford-mi",
  "novi-mi",
  // Macomb County
  "sterling-heights-mi",
  "warren-mi",
  "clinton-township-mi",
  "macomb-township-mi",
  "shelby-township-mi",
  "st-clair-shores-mi",
  // Wayne County
  "grosse-pointe-mi",
  "northville-mi",
  "plymouth-mi",
  "livonia-mi",
  "detroit-mi",
  "romulus-mi",
];

const marketReports = ["march-2026"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    { url: `${base}`,                     lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/buying`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/selling`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/home-valuation`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/search-homes`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/newsletter`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },

    // Specialty
    { url: `${base}/cash-offer`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/new-construction`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/divorce-real-estate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/relocation`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/downsizing`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/estate-sales`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/vip-buyers`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Neighborhoods
    { url: `${base}/neighborhoods`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...neighborhoods.map((slug) => ({
      url: `${base}/neighborhoods/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Market reports
    { url: `${base}/market-updates`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...marketReports.map((slug) => ({
      url: `${base}/market-updates/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
