import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://receipt-one.com";
  const now = new Date();
  return [
    { url: `${canonical}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${canonical}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${canonical}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 }
  ];
}
