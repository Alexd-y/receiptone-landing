"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (consent === null) {
      setShowBanner(true);
    } else {
      setConsentGiven(consent === "true");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setConsentGiven(true);
    setShowBanner(false);
    // Trigger analytics initialization if consent is given
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted"
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "false");
    setConsentGiven(false);
    setShowBanner(false);
    // Disable analytics if consent is rejected
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied"
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-ink-900/95"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 text-sm">
            <div className="font-[var(--font-ibm)] font-semibold">Cookie Consent</div>
            <p className="mt-1 opacity-80">
              We use cookies to improve your experience and analyze site usage. You can accept or reject non-essential cookies.
              See our{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="rounded-xl border border-black/20 bg-white/80 px-4 py-2 text-sm font-medium transition hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="rounded-xl bg-accent-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

