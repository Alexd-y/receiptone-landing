import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://receipt-one.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${canonical}/sitemap.xml`
  };
}
