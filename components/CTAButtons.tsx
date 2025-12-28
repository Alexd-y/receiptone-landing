"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, Sparkles } from "lucide-react";
import { useState } from "react";

type Props = {
  onPrimaryClick?: () => void;
};

// Компонент стрелки с петлей (по спецификации iOS: размеры 263.32x70.35, цвет RGB(0.494, 0.533, 0.565), alpha 0.5, stroke width 2)
function LoopArrow() {
  // Цвет из iOS кода: UIColor(red: 0.494, green: 0.533, blue: 0.565, alpha: 1)
  const arrowColor = "rgb(126, 136, 144)"; // RGB(0.494*255, 0.533*255, 0.565*255)
  const arrowAlpha = 0.5;
  const strokeWidth = 2;
  
  return (
    <motion.div
      className="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <svg
        width="180"
        height="60"
        viewBox="0 0 180 60"
        className="opacity-50"
      >
        {/* Основная кривая стрелки - единый путь с элегантной петлей как курсивная 'e' или спираль */}
        {/* Начинается сверху слева, образует петлю в верхней части, идет вниз вправо к кнопке "Get early access" */}
        <motion.path
          d="M 5 5 Q 12 12, 20 18 Q 25 22, 30 25 Q 32 27, 30 29 Q 28 31, 26 29 Q 24 27, 26 25 Q 28 23, 35 26 Q 45 30, 60 35 Q 80 42, 105 48 Q 130 53, 155 55 Q 170 56, 175 55"
          stroke={arrowColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4
          }}
        />
        {/* Стрелка на конце - указывает на центр кнопки "Get early access" */}
        <motion.polygon
          points="170,53 175,55 170,57"
          fill={arrowColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7] }}
          transition={{
            duration: 1.5,
            delay: 2.5,
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
    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center pl-8 lg:pl-28 overflow-visible">
      {/* Loop Arrow - слева, указывает на кнопку "Get early access" */}
      <LoopArrow />

      {/* Primary Button - Get early access */}
      <motion.button
        type="button"
        onClick={onPrimaryClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className="group relative z-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent-primary px-6 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
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

        {/* Sparkles icon with animation */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Sparkles size={18} className="relative z-10" />
        </motion.div>

        <span className="relative z-10 whitespace-nowrap">Get early access</span>

        {/* Arrow with slide animation */}
        <motion.div
          className="relative z-10"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <ArrowRight size={18} />
        </motion.div>

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
        {/* Start free */}
        <motion.a
          href="#pricing"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white/80 px-6 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="relative z-10 whitespace-nowrap">Start free</span>
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </motion.a>

        {/* Book a demo */}
        <motion.a
          href="#lead"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white/80 px-6 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
          >
            <Calendar size={18} className="relative z-10" />
          </motion.div>
          <span className="relative z-10 whitespace-nowrap">Book a demo</span>
        </motion.a>

        {/* Download app */}
        <motion.a
          href="#stores"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white/80 px-6 py-4 font-medium text-ink-900 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Download size={18} className="relative z-10" />
          </motion.div>
          <span className="relative z-10 whitespace-nowrap">Download app</span>
        </motion.a>
      </div>
    </div>
  );
}
