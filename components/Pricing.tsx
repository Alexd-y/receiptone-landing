import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "PRO — Week",
      price: "CAD 4.99",
      period: "per week",
      badge: "7-day free trial",
      description: "Discover for free what ReceiptOne can do for you. Great for personal use.",
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
      period: "per month",
      badge: "Best value for most users",
      description: "Boost productivity with our pro tools for small business owners and entrepreneurs.",
      planIncludes: [
        "Advanced analytics dashboard",
        "Better filtering & faster review flows",
        "Priority support"
      ],
      includesAllFrom: "PRO — Week",
      keyFeatures: null
    },
    {
      name: "ELITE",
      price: "CAD 129.99",
      period: "/ month / seat, billed annually at $1,560",
      description: "Enjoy our premium features. For businesses who take pre-accounting seriously.",
      planIncludes: [
        "Long-term audit readiness",
        "Team-friendly workflows (lightweight)",
        "Roadmap access program"
      ],
      includesAllFrom: "PRO",
      bestDeal: true,
      keyFeatures: null
    }
  ];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-medium opacity-80">Pricing</div>
          <h2 className="mt-2 font-[var(--font-ibm)] text-3xl font-semibold">
            Start free for 7 days, then choose your plan
          </h2>
          <p className="mt-3 max-w-2xl text-sm opacity-80">
            Pricing in CAD. Built for operators in the US and Canada. You can adjust plans as the product evolves.
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
            className="relative flex flex-col rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
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
              {(p.name === "PRO — Week" || p.name === "PRO — Month") && (
                <div className="rounded-xl bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/10">
                  PRO
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mt-4">
              <div className="font-[var(--font-ibm)] text-3xl font-bold text-accent-primary">
                {p.price}
              </div>
              <div className="mt-1 text-sm opacity-75">{p.period}</div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm opacity-80">{p.description}</p>

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
              className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
            >
              START FOR FREE
            </a>

            {/* Footer */}
            <div className="mt-6 space-y-1 text-center text-xs opacity-70">
              <div>No Credit Card Required</div>
              <div>60-Day-Money-Back Guarantee</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl2 bg-white/60 p-5 text-sm shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
        <strong>Coming soon:</strong> QuickBooks / Plaid integrations, deeper accountant workflows, and expanded exports —
        shipped as "opt-in" improvements.
      </div>
    </section>
  );
}
