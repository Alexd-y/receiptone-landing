import { ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function SocialProof() {
  const items = [
    {
      icon: <Zap size={18} />,
      title: "Fast workflows",
      desc: "From receipt to report in minutes — designed for busy operators."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Audit-ready habits",
      desc: "Consistent capture of receipts and mileage reduces “missing proof” risk."
    },
    {
      icon: <Sparkles size={18} />,
      title: "Built for US/Canada",
      desc: "Self-employed and small business focus with practical reporting."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">
              {it.icon}
            </div>
            <div className="mt-4 font-[var(--font-ibm)] text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-sm opacity-80">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl2 bg-white/60 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
        <div className="text-sm opacity-80">Social proof</div>
        <div className="mt-2 font-[var(--font-ibm)] text-xl font-semibold">
          Add your first testimonials and metrics here (when available)
        </div>
        <p className="mt-2 text-sm opacity-80">
          This block is intentionally structured as “ready-to-publish” once you have real numbers (users, scans, time
          saved) and 2–3 quotes. No design changes needed — only text replacement.
        </p>
      </div>
    </section>
  );
}
