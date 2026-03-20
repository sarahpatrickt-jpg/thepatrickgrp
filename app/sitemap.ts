import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thepatrickgrp.com";

  const pages = [
    { url: "/",                    priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/about",               priority: 0.9,  changeFrequency: "monthly" },
    { url: "/buying",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/selling",             priority: 0.8,  changeFrequency: "monthly" },
    { url: "/home-valuation",      priority: 0.9,  changeFrequency: "monthly" },
    { url: "/search-homes",        priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/vip-buyers",          priority: 0.7,  changeFrequency: "monthly" },
    { url: "/relocation",          priority: 0.8,  changeFrequency: "monthly" },
    { url: "/divorce-real-estate", priority: 0.8,  changeFrequency: "monthly" },
    { url: "/downsizing",          priority: 0.7,  changeFrequency: "monthly" },
    { url: "/estate-sales",        priority: 0.7,  changeFrequency: "monthly" },
    { url: "/newsletter",          priority: 0.5,  changeFrequency: "monthly" },
  ] as const;

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
