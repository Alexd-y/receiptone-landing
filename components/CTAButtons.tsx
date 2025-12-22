"use client";

import { ArrowRight, Calendar, Download, Sparkles } from "lucide-react";

type Props = {
  onPrimaryClick?: () => void;
};

export default function CTAButtons({ onPrimaryClick }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onPrimaryClick}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
      >
        <Sparkles size={18} />
        Get early access
        <ArrowRight size={18} />
      </button>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md transition hover:translate-y-[-1px] hover:shadow-soft dark:bg-white/10 dark:ring-white/10"
        >
          Start free
          <ArrowRight size={18} />
        </a>

        <a
          href="#lead"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md transition hover:translate-y-[-1px] hover:shadow-soft dark:bg-white/10 dark:ring-white/10"
        >
          <Calendar size={18} />
          Book a demo
        </a>

        <a
          href="#stores"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 font-medium shadow-glass ring-1 ring-black/5 backdrop-blur-md transition hover:translate-y-[-1px] hover:shadow-soft dark:bg-white/10 dark:ring-white/10"
        >
          <Download size={18} />
          Download app
        </a>
      </div>
    </div>
  );
}
