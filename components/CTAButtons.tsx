"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
  onPrimaryClick?: () => void;
};

// Компонент стрелки с петлей в виде буквы 'e' (точный SVG путь из дизайна, указывает на кнопку "Get early access")
// Стрелка без фона, сливается с фоном страницы, тонкая и с пониженной непрозрачностью
// Позиционируется левее всех кнопок и полей
function LoopArrow() {
  return (
    <motion.div
      className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{ background: "transparent" }}
    >
      <svg
        width="214"
        height="170"
        viewBox="0 0 214 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(0.4)", background: "transparent" }}
      >
        <motion.path
          d="M1.00086 1.0002C5 47.5 90.9121 76.0476 125.491 67.7791C130.884 66.4897 143.009 61.3843 138.817 53.2959C135.138 46.1976 122.209 39.6256 115.289 40.8747C97.278 44.126 76.2063 54.1059 90.1515 77.0838C105.333 102.098 136.601 124.212 161.168 139.266C173.085 146.568 187.88 154.495 200.975 158.366C209.667 160.937 203.071 156.485 198.794 152.327C192.711 146.413 178.665 132.758 192.132 145.85C197.605 151.17 204.311 156.241 210.401 159.8C216.911 163.605 203.761 161.216 202.01 161.442C196.491 162.154 188.757 164.463 185.007 168.321"
          stroke="#7E8890"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
}

export default function CTAButtons({ onPrimaryClick }: Props) {
  return (
    <div className="relative flex flex-nowrap gap-3 items-center pl-8 lg:pl-0 overflow-visible">
      {/* Loop Arrow - левее всех кнопок и полей, указывает на кнопку "Get early access", без фона, тонкая с пониженной непрозрачностью */}
      <LoopArrow />

      {/* Primary Button - Get early access (черная кнопка с белым текстом) */}
      <button
        type="button"
        onClick={onPrimaryClick}
        className="relative z-10 inline-flex flex-row items-center justify-center gap-3 rounded-xl bg-accent-primary px-6 py-4 font-medium text-white shadow-md transition-all hover:shadow-lg min-w-0"
      >
        {/* Sparkles icon слева */}
        <Sparkles size={18} />
        <span className="text-base leading-tight text-left">Get early<br />access</span>
      </button>

      {/* Secondary Buttons - светлые бежевые кнопки в одну строчку */}
      <div className="flex flex-nowrap gap-3">
        {/* Start free - светлая бежевая кнопка с темным текстом */}
        <a
          href="#pricing"
          className="relative z-10 inline-flex flex-col items-center justify-center rounded-xl bg-sand-100 px-5 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 text-center min-w-0"
        >
          <span className="text-base leading-tight">Start<br />free</span>
        </a>

        {/* Book a demo - светлая бежевая кнопка с темным текстом, без иконки */}
        <a
          href="#lead"
          className="relative z-10 inline-flex flex-col items-center justify-center rounded-xl bg-sand-100 px-5 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 text-center min-w-0"
        >
          <span className="text-base leading-tight">Book a<br />demo</span>
        </a>

        {/* Download app - светлая бежевая кнопка с темным текстом, без иконки */}
        <a
          href="#stores"
          className="relative z-10 inline-flex flex-col items-center justify-center rounded-xl bg-sand-100 px-5 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 text-center min-w-0"
        >
          <span className="text-base leading-tight">Download<br />app</span>
        </a>
      </div>
    </div>
  );
}
