import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "PRO — Week",
      price: "CAD 4.99",
      period: "per week",
      badge: "7-day free trial",
      features: [
        "Web workspace synced with mobile backend",
        "Bulk upload (drag & drop)",
        "Mileage tracking & trip organization",
        "Reports export for accountant"
      ]
    },
    {
      name: "PRO — Month",
      price: "CAD 11.99",
      period: "per month",
      badge: "Best value for most users",
      features: [
        "Everything in Weekly",
        "Advanced analytics dashboard",
        "Better filtering & faster review flows",
        "Priority support"
      ]
    },
    {
      name: "PRO — Year",
      price: "CAD 129.99",
      period: "per year",
      badge: "Most cost-effective",
      bestDeal: true,
      features: [
        "Everything in Monthly",
        "Long-term audit readiness",
        "Team-friendly workflows (lightweight)",
        "Roadmap access program"
      ]
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
            className="relative rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
          >
            {p.bestDeal && (
              <div className="absolute -right-2 -top-2 z-10 rotate-[-3deg]">
                <div className="rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  BEST DEAL
                </div>
              </div>
            )}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-[var(--font-ibm)] text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-sm opacity-75">{p.badge}</div>
              </div>
              <div className="rounded-xl bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/10">
                PRO
              </div>
            </div>

            <div className="mt-6">
              <div className="font-[var(--font-ibm)] text-3xl font-semibold">{p.price}</div>
              <div className="mt-1 text-sm opacity-75">{p.period}</div>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-lg bg-accent-secondary/15 text-accent-secondary">
                    <Check size={14} />
                  </span>
                  <span className="opacity-90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#lead"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-ink-900 px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95 dark:bg-white dark:text-ink-900"
            >
              Start free
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl2 bg-white/60 p-5 text-sm shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
        <strong>Coming soon:</strong> QuickBooks / Plaid integrations, deeper accountant workflows, and expanded exports —
        shipped as “opt-in” improvements.
      </div>
    </section>
  );
}
