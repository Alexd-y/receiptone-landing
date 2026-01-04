import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "PRO — Week",
      price: "CAD 4.99",
      priceUSD: "USD 3.99",
      period: "/ month / seat, billed annually at CAD 239.52",
      periodUSD: "/ month / seat, billed annually at USD 191.88",
      badge: "🔥 7-Day Free Trial",
      description: "Perfect for freelancers & solopreneurs. Start saving on taxes today — zero risk.",
      keyFeatures: [
        { value: "100", label: "AI Scans / Month" },
        { value: "5", label: "Requests / Month" }
      ],
      planIncludes: [
        "Web workspace synced with mobile backend",
        "Bulk upload (drag & drop)",
        "Mileage tracking & trip organization",
        "Reports export for accountant",
        "AI-Powered Expense & Income Tracking",
        "Mobile and Web App with Real-Time Sync",
        "Auto-Forward Email Receipts",
        "Secure Storage for 10+ Years",
        "Expense Reports (CSV, PDF)",
        "Export Your Data (PDF, CSV)",
        "Invite Your Accountant"
      ]
    },
    {
      name: "PRO — Month",
      price: "CAD 11.99",
      priceUSD: "USD 9.99",
      period: "/ month / seat, billed annually at CAD 143.88",
      periodUSD: "/ month / seat, billed annually at USD 119.88",
      badge: "⭐ Most Popular",
      description: "The smart choice for small businesses. Save $3,200+ per year on average.",
      keyFeatures: [
        { value: "200", label: "AI Scans / Month" },
        { value: "10", label: "Requests / Month" }
      ],
      planIncludes: [
        "Advanced analytics dashboard",
        "Better filtering & faster review flows",
        "Priority support"
      ],
      includesAllFrom: "PRO — Week"
    },
    {
      name: "PRO — Year",
      price: "CAD 10.83",
      priceUSD: "USD 8.99",
      period: "/ month / seat, billed annually at CAD 129.99",
      periodUSD: "/ month / seat, billed annually at USD 107.88",
      badge: "💎 Best Value",
      description: "Maximum savings for serious businesses. Unlimited everything + priority support.",
      keyFeatures: [
        { value: "UNLIMITED", label: "AI Scans / Month" },
        { value: "UNLIMITED", label: "Requests / Month" }
      ],
      planIncludes: [
        "Long-term audit readiness",
        "Team-friendly workflows (lightweight)",
        "Roadmap access program"
      ],
      includesAllFrom: "PRO — Month",
      bestDeal: true
    }
  ];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 px-4 py-1.5 text-xs font-bold text-accent-secondary mb-3">
            <span>💎</span>
            <span>Choose Your Savings Plan</span>
          </div>
          <h2 className="mt-2 font-[var(--font-ibm)] text-5xl font-extrabold tracking-tight">
            Start Free. <span className="bg-gradient-to-r from-accent-secondary via-accent-secondary/90 to-accent-secondary bg-clip-text text-transparent">Save Thousands.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-95 font-semibold">
            <span className="font-extrabold text-accent-secondary text-xl">7-day free trial</span> — no credit card required. 
            <br />
            🇺🇸 🇨🇦 Join <span className="font-bold text-accent-secondary">50,000+</span> US & Canadian business owners saving an average of <span className="font-bold text-accent-secondary text-xl">$3,200+ per year</span> on taxes.
            <br />
            <span className="text-sm opacity-75 mt-2 block font-normal">IRS & CRA compliant • Works in all US states & Canadian provinces</span>
          </p>
        </div>
        <a
          href="#lead"
          className="inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
        >
          Get early access
        </a>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className="relative flex flex-col rounded-3xl liquid-glass-card p-6"
          >
            {p.bestDeal && (
              <div className="absolute -right-2 -top-2 z-10 rotate-[-3deg]">
                <div className="rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  BEST DEAL
                </div>
              </div>
            )}

            {/* Plan Name and Badge */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-[var(--font-ibm)] text-2xl font-bold">{p.name}</div>
                {p.badge && <div className="mt-1 text-sm opacity-75">{p.badge}</div>}
              </div>
              {(p.name === "PRO — Week" || p.name === "PRO — Month" || p.name === "PRO — Year") && (
                <div className="rounded-xl bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/10">
                  PRO
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <div className="font-[var(--font-ibm)] text-4xl font-extrabold text-accent-primary">
                  {p.price}
                </div>
                {p.priceUSD && (
                  <div className="text-xl font-semibold opacity-60">
                    / {p.priceUSD}
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <div className="text-sm font-semibold opacity-90">{p.period}</div>
                {p.periodUSD && (
                  <div className="text-xs opacity-70">({p.periodUSD})</div>
                )}
              </div>
              {p.bestDeal && (
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 px-3 py-1 text-xs font-bold text-accent-secondary">
                  <span>💰</span>
                  <span>Save $240+ per year</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-base font-semibold opacity-90 leading-relaxed">{p.description}</p>

            {/* Key Features */}
            {p.keyFeatures && p.keyFeatures.length > 0 && (
              <div className="mt-4 space-y-2">
                {p.keyFeatures.map((feature: { value: string; label: string }, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-accent-primary">{feature.value}</span>
                    <span className="opacity-75">{feature.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Plan Includes */}
            <div className="mt-6 flex-grow">
              {p.includesAllFrom ? (
                <div className="mb-3 text-sm font-medium opacity-90">
                  All {p.includesAllFrom} Features, Plus:
                </div>
              ) : (
                <div className="mb-3 text-sm font-medium opacity-90">Plan Includes:</div>
              )}
              <ul className="space-y-3 text-sm">
                {p.planIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-600 dark:text-green-400">
                      <Check size={14} />
                    </span>
                    <span className="opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href="#lead"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-primary to-accent-primary/90 px-6 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95 group"
            >
              <span>🚀</span>
              <span>START FREE TRIAL</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Footer */}
            <div className="mt-6 space-y-2 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-xs font-bold text-green-600 dark:text-green-400">
                <span>✅</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>🛡️</span>
                <span>60-Day Money-Back Guarantee</span>
              </div>
              <div className="text-xs opacity-70 mt-2">
                🇺🇸 🇨🇦 Works in all US states & Canadian provinces
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl liquid-glass p-5 text-sm">
        <strong>Coming soon:</strong> QuickBooks / Plaid integrations, deeper accountant workflows, and expanded exports —
        shipped as "opt-in" improvements.
      </div>
    </section>
  );
}
