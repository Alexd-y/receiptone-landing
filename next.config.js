/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    // CSP Extended: supports analytics (GA/GTM/Meta Pixel) and external resources
    // Add domains to allowlist as needed
    const analyticsDomains = [
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://www.google.com",
      "https://www.gstatic.com",
      "https://connect.facebook.net", // Meta Pixel
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
    ].join(" ");

    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      `img-src 'self' data: blob: ${analyticsDomains}`,
      `font-src 'self' data: ${analyticsDomains}`,
      `style-src 'self' 'unsafe-inline' ${analyticsDomains}`,
      `script-src 'self' 'unsafe-inline' ${analyticsDomains}`,
      `connect-src 'self' ${analyticsDomains}`,
      "upgrade-insecure-requests"
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Content-Security-Policy", value: csp }
        ]
      }
    ];
  }
};

export default nextConfig;
