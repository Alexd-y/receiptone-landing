"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "@/components/Brand";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 liquid-glass-header dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Brand />
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href="#pricing"
              className="rounded-xl px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="rounded-xl px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              FAQ
            </a>
            <a
              href="#lead"
              className="rounded-xl px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              Get access
            </a>
            <a
              href="/signin"
              className="rounded-xl px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium opacity-80 transition hover:opacity-100"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="rounded-2xl bg-ink-900 dark:bg-ink-800 px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 active:scale-95 liquid-glass-button"
            >
              Sign up
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl liquid-glass-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 liquid-glass-header">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium opacity-80 transition hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium opacity-80 transition hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5"
            >
              FAQ
            </a>
            <a
              href="#lead"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium opacity-80 transition hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Get access
            </a>
            <a
              href="/signin"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium opacity-80 transition hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Sign in
            </a>
            <a
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl bg-ink-900 dark:bg-ink-800 px-4 py-3 text-base font-semibold text-white shadow-xl transition-all active:scale-95 liquid-glass-button text-center mt-2"
            >
              Sign up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
