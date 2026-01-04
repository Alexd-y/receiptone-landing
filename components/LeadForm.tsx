"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const enableAnalyticsConsent = (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT ?? "true") === "true";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [persona, setPersona] = useState<string>("Self-employed");
  const [consentMarketing, setConsentMarketing] = useState<boolean>(false);
  const [consentAnalytics, setConsentAnalytics] = useState<boolean>(false);
  // Honeypot field (hidden from users, bots will fill it)
  const [website, setWebsite] = useState<string>("");

  const canSubmit = useMemo(() => {
    const e = email.trim();
    if (!e.includes("@") || e.length < 6) return false;
    return consentMarketing;
  }, [email, consentMarketing]);

  async function submit() {
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name.trim() ? name.trim() : null,
          persona,
          consentMarketing,
          consentAnalytics,
          source: "landing",
          website // Honeypot field
        })
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Submission failed");
      }

      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Unknown error");
    }
  }

  return (
    <section id="lead" className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl2 bg-white/70 p-7 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 px-4 py-1.5 text-xs font-bold text-accent-secondary mb-3">
            <span>🎯</span>
            <span>Claim Your Free Trial</span>
          </div>
          <h3 className="mt-2 font-[var(--font-ibm)] text-4xl font-extrabold tracking-tight">
            Start Saving Money <span className="sexy-gradient">Today</span>
          </h3>
          <p className="mt-4 text-lg opacity-95 font-semibold">
            Join <span className="font-extrabold text-accent-secondary text-2xl">50,000+</span> smart business owners who are maximizing their tax refunds.
            <br />
            <span className="text-base opacity-90 mt-2 block font-medium">
              🇺🇸 🇨🇦 No credit card required. Start your 7-day free trial now.
            </span>
            <span className="text-sm opacity-75 mt-1 block font-normal">
              Average user saves $3,200+ per year • IRS & CRA compliant
            </span>
          </p>

          <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); submit(); }}>
            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
              <label htmlFor="website">Website (leave blank)</label>
              <input
                id="website"
                name="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label className="text-sm font-medium">Email (required)</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            />

            <label className="mt-2 text-sm font-medium">Name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Your name"
              className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            />

            <label className="mt-2 text-sm font-medium">I am</label>
            <select
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            >
              <option>Self-employed</option>
              <option>Small business</option>
              <option>Accountant/Bookkeeper</option>
            </select>

            <div className="mt-3 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={consentMarketing}
                  onChange={(e) => setConsentMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                <span className="opacity-90">
                  I agree to receive early access and product emails from ReceiptOne.
                  <span className="block text-xs opacity-70">
                    Required to be contacted about access and onboarding.
                  </span>
                </span>
              </label>

              {enableAnalyticsConsent && (
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={consentAnalytics}
                    onChange={(e) => setConsentAnalytics(e.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span className="opacity-90">
                    I consent to anonymous analytics cookies to improve the product experience.
                    <span className="block text-xs opacity-70">
                      Optional. You can still join early access without this consent.
                    </span>
                  </span>
                </label>
              )}
            </div>

            <button
              type="submit"
              disabled={!canSubmit || status === "loading" || status === "success"}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-primary to-accent-primary/90 px-6 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Processing...</span>
                </>
              ) : status === "success" ? (
                <>
                  <span>✅</span>
                  <span>You're In!</span>
                </>
              ) : (
                <>
                  <span>🚀</span>
                  <span>Start Free Trial Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {status === "success" && (
              <div className="rounded-2xl bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 p-5 text-base font-semibold text-accent-secondary border border-accent-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎉</span>
                  <span>You're In! Check Your Email</span>
                </div>
                <p className="text-sm opacity-90 font-normal">
                  We've sent you early access details. Start saving money on taxes today!
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-200">
                Error: {error}
              </div>
            )}

            <p className="mt-2 text-xs opacity-70">
              By submitting, you agree to the{" "}
              <a href="/terms" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>

        <div className="rounded-xl2 bg-white/60 p-7 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
          <div className="text-sm font-medium opacity-80" id="stores">
            Mobile app stores
          </div>
          <h3 className="mt-2 font-[var(--font-ibm)] text-2xl font-semibold">
            Use the mobile app today, add the web workspace next
          </h3>
          <p className="mt-3 text-sm opacity-80">
            You asked me to prepare the store buttons but you will insert the final links later — below are functional
            buttons that stay on-page until you replace the href values.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl transition hover:translate-y-[-1px] hover:opacity-90"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl transition hover:translate-y-[-1px] hover:opacity-90"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>
          </div>

          <div className="mt-8 rounded-xl bg-black/5 p-5 text-sm dark:bg-white/10">
            <div className="font-[var(--font-ibm)] font-semibold">Referral links</div>
            <div className="mt-2 opacity-80">
              Your referral format is supported:{" "}
              <span className="font-mono text-xs">https://receiptone.com/r/&lt;code&gt;</span>
            </div>
            <div className="mt-2 opacity-80">
              Add this to your product onboarding emails and accountant partnerships to create a clean viral loop.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
