"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, Gauge, UploadCloud, Wallet } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import { DoodleMileage, DoodleReceipt } from "@/components/Doodles";

export default function Sections() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

  const features = [
    {
      icon: <UploadCloud size={18} />,
      title: "Less admin, more billable time",
      desc: "Drag & drop receipts in bulk and review them fast — stop losing hours to manual organization."
    },
    {
      icon: <Gauge size={18} />,
      title: "Mileage and trips stay consistent",
      desc: "Track drives with clean categorization so deductions and reports don’t turn into guesswork."
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Reports that accountants can use",
      desc: "Generate exports and summaries that reduce back-and-forth and speed up month-end."
    },
    {
      icon: <FileText size={18} />,
      title: "Audit-ready documentation habits",
      desc: "Receipts + metadata + consistent logs — structured to reduce “missing proof” risk."
    },
    {
      icon: <Wallet size={18} />,
      title: "One ecosystem: mobile + web",
      desc: `Web workspace complements the ${appName} mobile app using the same backend data.`
    }
  ];

  const faqs = [
    {
      q: "Does ReceiptOne calculate taxes?",
      a: "ReceiptOne focuses on capturing data, organizing receipts/mileage, and generating reports. It is not a tax engine and does not replace professional tax advice."
    },
    {
      q: "Who is ReceiptOne Web for?",
      a: "Self-employed contractors, small business owners, and accountants/bookkeepers who need clean, structured expense evidence and fast reports."
    },
    {
      q: "Can I use it if I already use accounting software?",
      a: "Yes. The intent is to reduce manual input and improve evidence quality. Integrations like QuickBooks/Plaid can be added as “Coming soon” items."
    },
    {
      q: "Is there a free trial?",
      a: "Yes. PRO includes a 7-day free trial, then you can choose Weekly, Monthly, or Yearly billing."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 text-xs font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
            >
              Built for US/Canada self-employed & small business
            </motion.div>

            <h1 className="mt-4 font-[var(--font-ibm)] text-4xl font-semibold leading-tight sm:text-5xl">
              Receipts, mileage & reports —
              <span className="block opacity-90">a web workspace that complements your mobile app</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-80">
              Keep evidence structured, reduce “lost receipt” stress, and export accountant-friendly reports. Designed for
              operators who want speed and clarity — not more admin.
            </p>

            <div className="mt-6">
              <CTAButtons onPrimaryClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })} />
            </div>

            <div className="mt-6 rounded-xl2 bg-white/60 p-5 text-sm shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="font-[var(--font-ibm)] font-semibold">What you get in MVP Web</div>
              <ul className="mt-2 list-disc pl-5 opacity-85">
                <li>Bulk upload + fast review</li>
                <li>Analytics & exports</li>
                <li>Mileage / trips tracking</li>
                <li>Reports & documentation workflows</li>
                <li>Referral-ready ecosystem</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80">Receipt organization</div>
              <div className="mt-2 h-40 text-ink-900/70 dark:text-white/70">
                <DoodleReceipt />
              </div>
              <div className="mt-2 text-sm opacity-80">
                Upload, tag, and keep receipts consistently — stop digging through inboxes and photo rolls.
              </div>
            </div>

            <div className="rounded-xl2 bg-white/60 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80">Mileage tracking</div>
              <div className="mt-2 h-40 text-ink-900/70 dark:text-white/70">
                <DoodleMileage />
              </div>
              <div className="mt-2 text-sm opacity-80">
                Trip logs that stay coherent over time — deductions become straightforward, not chaotic.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-medium opacity-80">Benefits</div>
            <h2 className="mt-2 font-[var(--font-ibm)] text-3xl font-semibold">
              A calm workflow for receipts and reporting
            </h2>
            <p className="mt-3 max-w-2xl text-sm opacity-80">
              The point is not “more features.” The point is fewer errors, faster month-end, and better evidence quality.
            </p>
          </div>
          <a
            href="#lead"
            className="inline-flex items-center justify-center rounded-xl bg-white/70 px-5 py-3 font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md transition hover:translate-y-[-1px] hover:shadow-soft dark:bg-white/10 dark:ring-white/10"
          >
            Get early access
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">
                {f.icon}
              </div>
              <div className="mt-4 font-[var(--font-ibm)] text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SocialProof />
      <Pricing />

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-14">
        <div>
          <div className="text-sm font-medium opacity-80">FAQ</div>
          <h2 className="mt-2 font-[var(--font-ibm)] text-3xl font-semibold">Questions you’ll likely ask</h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((x) => (
            <div
              key={x.q}
              className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
            >
              <div className="font-[var(--font-ibm)] text-lg font-semibold">{x.q}</div>
              <p className="mt-2 text-sm opacity-80">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadForm />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl2 bg-ink-900 p-8 text-white shadow-soft dark:bg-white dark:text-ink-900">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm opacity-85">Ready to simplify month-end?</div>
              <div className="mt-2 font-[var(--font-ibm)] text-3xl font-semibold">
                Build your receipts and mileage workflow once — then reuse it every month
              </div>
              <p className="mt-3 text-sm opacity-85">
                Join early access to ReceiptOne Web and get a guided onboarding plan for your role.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="#lead"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-ink-900 transition hover:translate-y-[-1px] hover:opacity-95 dark:bg-ink-900 dark:text-white"
              >
                Request early access
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
