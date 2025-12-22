import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CookieBanner from "@/components/CookieBanner";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://receipt-one.com";
const company = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "FLUTTER HORIZON";
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title: `${appName} Web — Receipts, mileage & reports for self-employed and small business`,
  description:
    `${appName} helps self-employed professionals and small businesses in the US/Canada organize receipts and mileage, and generate clean reports for accounting — powered by the same backend as the mobile app.`,
  alternates: {
    canonical: canonical
  },
  openGraph: {
    title: `${appName} Web — stay audit-ready`,
    description:
      `A web workspace for ${appName} mobile users: upload receipts, track mileage, and export reports in minutes.`,
    url: canonical,
    siteName: `${appName}`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} Web`,
    description: `Receipts, mileage & reports — built for US/Canada self-employed and small business.`
  },
  authors: [{ name: company }],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org structured data for LocalBusiness/Service
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": appName,
    "description": `${appName} helps self-employed professionals and small businesses in the US/Canada organize receipts and mileage, and generate clean reports for accounting.`,
    "provider": {
      "@type": "Organization",
      "name": company,
      "url": canonical
    },
    "areaServed": {
      "@type": "Country",
      "name": ["United States", "Canada"]
    },
    "serviceType": "Financial Software",
    "audience": {
      "@type": "Audience",
      "audienceType": "Self-employed professionals and small businesses"
    },
    "url": canonical,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${canonical}/#lead`,
        "actionPlatform": "https://schema.org/WebPlatform"
      },
      "result": {
        "@type": "Reservation",
        "name": "Early Access Request"
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${ibm.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-[var(--font-roboto)] text-ink-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
