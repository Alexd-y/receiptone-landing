"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, Sparkles } from "lucide-react";
import { useState } from "react";

type Props = {
  onPrimaryClick?: () => void;
};

// Компонент стрелки с петлей (как на картинке - светлая серая, петля вверху, указывает вниз вправо)
function LoopArrow() {
  return (
    <motion.div
      className="absolute -left-20 top-0 bottom-0 hidden lg:flex items-center pointer-events-none z-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        className="text-gray-400 dark:text-gray-500"
      >
        {/* Основная кривая стрелки - начинается сверху слева, петля в верхней части, идет вниз вправо */}
        <motion.path
          d="M 5 5 Q 10 15, 15 25 Q 20 30, 25 28 Q 30 26, 25 30 Q 20 34, 25 40 Q 35 50, 50 60 Q 70 70, 95 80 L 110 85"
          stroke="currentColor"
          strokeWidth="2"
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
        {/* Петля в верхней части (как на картинке) */}
        <motion.path
          d="M 15 25 Q 18 20, 22 22 Q 26 24, 25 28 Q 24 32, 20 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4.5
          }}
        />
        {/* Стрелка на конце - указывает в правый нижний угол на кнопку */}
        <motion.polygon
          points="105,80 110,85 105,90"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8] }}
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
    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Loop Arrow - слева, указывает на кнопку */}
      <LoopArrow />

      {/* Primary Button - Get early access */}
      <motion.button
        type="button"
        onClick={onPrimaryClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent-primary px-6 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
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
