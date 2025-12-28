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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 text-xs font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10"
            >
              Built for US/Canada self-employed & small business
            </motion.div>

            <h1 className="mt-4 font-[var(--font-ibm)] text-4xl font-semibold leading-tight sm:text-5xl">
              Track receipts and mileage. Export tax-ready reports.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-80">
              Keep receipts organized, eliminate "lost receipt" stress, and generate accountant-ready reports in minutes.
              <br />
              Built for speed and clarity — without extra admin.
            </p>

            <div className="relative mt-6 overflow-visible">
              <CTAButtons onPrimaryClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })} />
            </div>

            <div className="mt-6 rounded-xl2 bg-white/60 p-5 text-sm shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="font-[var(--font-ibm)] font-semibold">What you get with ReceiptOne Web</div>
              <ul className="mt-2 list-disc pl-5 opacity-85">
                <li><strong>Bulk receipt upload & quick review</strong></li>
                <li><strong>Expense analytics with CSV & PDF exports</strong></li>
                <li><strong>Mileage and trip tracking</strong></li>
                <li><strong>Tax-ready reports and document storage</strong></li>
                <li><strong>Built-in referral system</strong></li>
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

      {/* Stats Marquee */}
      <section className="mx-auto max-w-full overflow-hidden border-y border-black/5 py-6 dark:border-white/10">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set - правильный порядок как на картинке */}
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">50K+</span>
              <span className="text-sm opacity-75">Active users</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-xl">★</span>
              <span className="text-sm opacity-75">Average rating</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">2M+</span>
              <span className="text-sm opacity-75">Miles tracked</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">100K+</span>
              <span className="text-sm opacity-75">Reports generated</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">500K+</span>
              <span className="text-sm opacity-75">Receipts scanned</span>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">50K+</span>
              <span className="text-sm opacity-75">Active users</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-xl">★</span>
              <span className="text-sm opacity-75">Average rating</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">2M+</span>
              <span className="text-sm opacity-75">Miles tracked</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">100K+</span>
              <span className="text-sm opacity-75">Reports generated</span>
            </div>
            <div className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-2xl font-bold">500K+</span>
              <span className="text-sm opacity-75">Receipts scanned</span>
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

      {/* Receipt Organization */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Your Receipts, Always Organized and Easy to Find
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Snap photos or upload files of receipts and invoices. ReceiptOne processes and categorizes them with high accuracy, storing them neatly for easy searching, reporting, and tax purposes. Eliminate manual work and keep everything at your fingertips.
            </p>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">Scan & Organize</div>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs opacity-60">04/30/2025</div>
                <div className="font-semibold mt-1">Currys PC World</div>
                <div className="text-xs mt-1 opacity-75">IT Supplies • $229</div>
              </div>
              <div className="rounded-lg bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs opacity-60">04/29/2025</div>
                <div className="font-semibold mt-1">SHELL GAS STATION</div>
                <div className="text-xs mt-1 opacity-75">Fuel & Transportation • $29.50</div>
              </div>
              <div className="rounded-lg bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs opacity-60">04/28/2025</div>
                <div className="font-semibold mt-1">Cafe Morgenrot</div>
                <div className="text-xs mt-1 opacity-75">Miscellaneous • $6.50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Receipts */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-green-500/20 p-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Email Receipt Processing</div>
                  <div className="text-xs opacity-60 mt-1">Automatic categorization</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="opacity-80">MERCHANT</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="opacity-80">DATE</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="opacity-80">TOTAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="opacity-80">PAYMENT METHOD</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="opacity-80">CATEGORY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Organize Email Receipts Without Lifting a Finger
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Forward email receipts to ReceiptOne and they're automatically stored, organized, and categorized alongside your paper receipts. Set up auto-forwarding for a completely hands-off organization experience.
            </p>
          </div>
        </div>
      </section>

      {/* Global Receipts & Reports */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Organize Receipts from Anywhere in the World
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Store and categorize receipts in any language. ReceiptOne uses AI and OCR for Latin-based scripts, supporting English, French, German, Spanish, Japanese, and Finnish. Manage receipts in 150+ currencies with automatic exchange rates and apply local tax rules — including multi-rate systems like GST and PST — for compliant records.
            </p>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">Multi-Currency Support</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5 text-center">
                <div className="text-2xl font-bold">$</div>
                <div className="text-xs opacity-60 mt-1">USD</div>
              </div>
              <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5 text-center">
                <div className="text-2xl font-bold">€</div>
                <div className="text-xs opacity-60 mt-1">EUR</div>
              </div>
              <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5 text-center">
                <div className="text-2xl font-bold">£</div>
                <div className="text-xs opacity-60 mt-1">GBP</div>
              </div>
              <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5 text-center">
                <div className="text-2xl font-bold">¥</div>
                <div className="text-xs opacity-60 mt-1">JPY</div>
              </div>
            </div>
            <div className="mt-4 text-xs opacity-60 text-center">+ 150+ more currencies</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80 mb-4">Expense Report</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-2 border-b border-black/5 dark:border-white/10">
                  <span className="opacity-80">Professional Services (EUR)</span>
                  <span className="font-semibold">€2,100.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5 dark:border-white/10">
                  <span className="opacity-80">Marketing (EUR)</span>
                  <span className="font-semibold">€1,255.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-black/5 dark:border-white/10">
                  <span className="opacity-80">Subscriptions (USD)</span>
                  <span className="font-semibold">$66.59</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="opacity-80">Healthcare (EUR)</span>
                  <span className="font-semibold">€240.00</span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-accent-primary px-4 py-2 text-sm font-medium text-white">
                EXPORT
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Turn Organized Receipts into Audit-Ready Reports
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Export clean, structured reports in PDF or Excel with totals, categories, taxes, and links to original receipts — ready for your accountant or tax authorities. Filter by date, category, tag, user, vendor, tax breakdown, document type, and currency conversions. Generate audit-ready reports with one click.
            </p>
          </div>
        </div>
      </section>

      {/* Accountant & Integrations */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Invite Your Accountant for Maximum Efficiency
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              ReceiptOne organizes your receipts and gives your accountant free access to your archive without using a seat. Everything is matched and ready, helping your accountant save time and focus on what matters most.
            </p>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">Team Collaboration</div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-500/20 p-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold">Accountant Access</div>
                <div className="text-xs opacity-60 mt-1">Free access to your archive</div>
              </div>
              <button className="rounded-xl bg-accent-primary px-4 py-2 text-sm font-medium text-white">
                INVITE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80 mb-4">Integrations</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-500/20 p-2">
                    <div className="text-green-600 dark:text-green-400 font-bold text-xs">qb</div>
                  </div>
                  <span className="font-semibold text-sm">QuickBooks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/20 p-2">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold text-xs">Zapier</span>
                  </div>
                  <span className="font-semibold text-sm">Zapier</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs">Make</span>
                  </div>
                  <span className="font-semibold text-sm">Make.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-500/20 p-2">
                    <span className="text-green-600 dark:text-green-400 font-semibold text-xs">Pabbly</span>
                  </div>
                  <span className="font-semibold text-sm">Pabbly Connect</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-[var(--font-ibm)] text-3xl font-semibold">
              Integrate Seamlessly with Your Favorite Tools
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Sync with QuickBooks Online to keep organized receipts, expenses, and transactions flowing smoothly. Use webhooks to connect with Zapier, Make.com, or Pabbly to send receipts to Google Drive, create bills, or automate back-office tasks. Export your data anytime in PDF, Excel, CSV, or ZIP formats.
            </p>
          </div>
        </div>
      </section>

      {/* Receipt Tracking Made Magical */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-ibm)] text-4xl font-bold">
            Receipt tracking made magical
          </h2>
          <p className="mt-3 text-sm opacity-80">
            ReceiptOne has already found over $500 million in tax deductions and reimbursements.
          </p>
        </div>

        {/* Stay compliant & audit-ready */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mt-12">
          <div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Stay compliant & audit-ready
            </div>
            <h3 className="font-[var(--font-ibm)] text-3xl font-semibold mb-4">
              Turn your receipts into tax savings
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>AI automatically labels the tax category, vendor, total tax, date and payment method</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Smart capture automatically crops receipts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Protect your data with automatic cloud backups</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">Receipt Capture</div>
            <div className="rounded-lg bg-white/60 p-4 dark:bg-white/5">
              <div className="text-xs opacity-60 mb-2">Rigoberto's</div>
              <div className="text-2xl font-bold mb-1">$26.54</div>
              <div className="text-xs opacity-75 mb-3">Business Meals</div>
              <div className="flex items-center gap-2 rounded-lg bg-green-500/20 px-3 py-2">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Receipt Saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Organize your digital receipts */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mt-12">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80 mb-4">Organized Receipts</div>
              <div className="space-y-3">
                <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-black p-1.5">
                        <span className="text-white text-xs font-bold">a</span>
                      </div>
                      <span className="font-semibold text-sm">Amazon</span>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400">Tax Write-Off</span>
                  </div>
                  <div className="text-xs opacity-60 mb-1">Office Supplies</div>
                  <div className="font-bold">$182.28</div>
                </div>
                <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-500 p-1.5">
                        <span className="text-white text-xs">Δ</span>
                      </div>
                      <span className="font-semibold text-sm">Delta</span>
                    </div>
                  </div>
                  <div className="text-xs opacity-60 mb-1">Business Travel</div>
                  <div className="font-bold">$921.17</div>
                </div>
                <div className="rounded-lg bg-white/60 p-3 dark:bg-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-500 p-1.5">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span className="font-semibold text-sm">Geico</span>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400">Tax Write-Off</span>
                  </div>
                  <div className="text-xs opacity-60 mb-1">Insurance</div>
                  <div className="font-bold">$217.28</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Organize your digital receipts
            </div>
            <h3 className="font-[var(--font-ibm)] text-3xl font-semibold mb-4">
              Automatically import email receipts
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Connect your Gmail account to auto scan for receipts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Forward receipts to upload@receiptone.com to automatically add them to your account</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Automatic Mileage Tracker & Deductions */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        {/* Automatic mileage tracker */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Automatic mileage tracker
            </div>
            <h3 className="font-[var(--font-ibm)] text-3xl font-semibold mb-4">
              Write off $0.67 per mile you drive
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Automatically track drives with GPS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Save and classify trips in seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Set custom mileage deduction rates</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">Mileage Tracking</div>
            <div className="rounded-lg bg-gray-100 h-32 mb-4 flex items-center justify-center dark:bg-gray-800">
              <span className="text-xs opacity-60">Map View</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="rounded-full bg-orange-500 p-1.5">
                  <span className="text-white text-xs">🏗</span>
                </div>
                <span className="font-semibold">Work Site #2</span>
                <span className="text-xs opacity-60 ml-auto">8:51 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="rounded-full bg-orange-500 p-1.5">
                  <span className="text-white text-xs">🏠</span>
                </div>
                <span className="font-semibold">Home Depot</span>
                <span className="text-xs opacity-60 ml-auto">9:05 PM</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$7.49</div>
              <div className="text-sm opacity-75">12.3 Miles</div>
            </div>
          </div>
        </div>

        {/* Connect accounts and find deductions */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mt-12">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
              <div className="text-sm font-medium opacity-80 mb-4">Tax Deductions</div>
              <div className="space-y-3">
                <div className="rounded-lg bg-blue-500/10 p-3 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-black p-1.5">
                        <span className="text-white text-xs font-bold">a</span>
                      </div>
                      <span className="font-semibold text-sm text-white">Amazon</span>
                    </div>
                    <span className="text-xs text-green-400">Tax Write-Off</span>
                  </div>
                  <div className="text-xs opacity-80 mb-1">Office Supplies</div>
                  <div className="font-bold text-white">$182.28</div>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-3 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-500 p-1.5">
                        <span className="text-white text-xs">Δ</span>
                      </div>
                      <span className="font-semibold text-sm text-white">Delta</span>
                    </div>
                    <span className="text-xs text-green-400">Tax Write-Off</span>
                  </div>
                  <div className="text-xs opacity-80 mb-1">Business Travel</div>
                  <div className="font-bold text-white">$921.17</div>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-3 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-500 p-1.5">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span className="font-semibold text-sm text-white">Geico</span>
                    </div>
                    <span className="text-xs text-green-400">Tax Write-Off</span>
                  </div>
                  <div className="text-xs opacity-80 mb-1">Insurance</div>
                  <div className="font-bold text-white">$217.28</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Never miss a deduction
            </div>
            <h3 className="font-[var(--font-ibm)] text-3xl font-semibold mb-4">
              Connect your accounts and find deductions
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Link your bank accounts, credit cards, or emails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>AI scans transactions and classifies tax deductions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Save an average of $2,192 per year on taxes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional PDF and Excel reports */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Professional PDF and Excel reports
            </div>
            <h3 className="font-[var(--font-ibm)] text-3xl font-semibold mb-4">
              Download reports at the tap of a button
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Summary reports that make filing taxes easy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Create PDF expense reports for reimbursement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                <span>Export your data to CSV or Excel</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white/70 p-6 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
            <div className="text-sm font-medium opacity-80 mb-4">2024 Summary</div>
            <div className="flex items-center justify-center h-32 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-center">
                <div className="text-xs opacity-60 mb-2">Pie Chart</div>
                <div className="flex gap-2">
                  <div className="w-16 h-16 rounded-full bg-red-500"></div>
                  <div className="w-16 h-16 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="opacity-80">Supplies and Materials</span>
                <span className="ml-auto font-semibold">$15,729</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="opacity-80">Business Travel</span>
                <span className="ml-auto font-semibold">$2,540</span>
              </div>
            </div>
            <div className="text-sm font-medium opacity-80 mb-2">Top Vendors</div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded bg-orange-500"></div>
                <span className="opacity-80">Home Depot</span>
                <span className="ml-auto font-semibold">$7,529</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded bg-red-500"></div>
                <span className="opacity-80">Delta Airlines</span>
              </div>
            </div>
            <div className="flex gap-3 pt-4 border-t border-black/5 dark:border-white/10">
              <button className="flex-1 flex flex-col items-center gap-2 rounded-lg bg-green-500/20 p-3 hover:bg-green-500/30 transition">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Excel (CSV)</span>
              </button>
              <button className="flex-1 flex flex-col items-center gap-2 rounded-lg bg-blue-500/20 p-3 hover:bg-blue-500/30 transition">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Report (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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
