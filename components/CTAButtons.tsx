"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, Sparkles } from "lucide-react";
import { useState } from "react";

type Props = {
  onPrimaryClick?: () => void;
};

// Компонент стрелки с петлей (точный SVG путь из дизайна, указывает на кнопку "Get early access")
function LoopArrow() {
  return (
    <motion.div
      className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <svg
        width="214"
        height="170"
        viewBox="0 0 214 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-50"
        style={{ transform: "scale(0.6)" }}
      >
        <motion.path
          d="M1.00086 1.0002C5 47.5 90.9121 76.0476 125.491 67.7791C130.884 66.4897 143.009 61.3843 138.817 53.2959C135.138 46.1976 122.209 39.6256 115.289 40.8747C97.278 44.126 76.2063 54.1059 90.1515 77.0838C105.333 102.098 136.601 124.212 161.168 139.266C173.085 146.568 187.88 154.495 200.975 158.366C209.667 160.937 203.071 156.485 198.794 152.327C192.711 146.413 178.665 132.758 192.132 145.85C197.605 151.17 204.311 156.241 210.401 159.8C216.911 163.605 203.761 161.216 202.01 161.442C196.491 162.154 188.757 164.463 185.007 168.321"
          stroke="#7E8890"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 2.5,
            delay: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4
          }}
        />
      </svg>
    </motion.div>
  );
}

export default function CTAButtons({ onPrimaryClick }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center pl-8 lg:pl-32 overflow-visible">
      {/* Loop Arrow - слева, указывает на кнопку "Get early access" */}
      <LoopArrow />

      {/* Primary Button - Get early access (черная кнопка с белым текстом) */}
      <motion.button
        type="button"
        onClick={onPrimaryClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className="group relative z-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Sparkles icon слева */}
        <Sparkles size={18} className="relative z-10" />

        <span className="relative z-10 whitespace-nowrap">Get early access</span>

        {/* Arrow справа */}
        <ArrowRight size={18} className="relative z-10" />

        {/* Ripple effect on click */}
        {isPressed && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/30"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </motion.button>

      {/* Secondary Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Start free - белая кнопка с черным текстом, стрелка справа */}
        <motion.a
          href="#pricing"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="relative z-10 whitespace-nowrap">Start free</span>
          <ArrowRight size={18} className="relative z-10" />
        </motion.a>

        {/* Book a demo - белая кнопка с черным текстом, календарь слева */}
        <motion.a
          href="#lead"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Calendar size={18} className="relative z-10" />
          <span className="relative z-10 whitespace-nowrap">Book a demo</span>
        </motion.a>

        {/* Download app - белая кнопка с черным текстом, иконка загрузки слева */}
        <motion.a
          href="#stores"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3 font-medium text-ink-900 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Download size={18} className="relative z-10" />
          <span className="relative z-10 whitespace-nowrap">Download app</span>
        </motion.a>
      </div>
    </div>
  );
}
