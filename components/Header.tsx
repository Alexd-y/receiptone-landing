import Brand from "@/components/Brand";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 liquid-glass-header dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Brand />
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:opacity-100 sm:inline"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:opacity-100 sm:inline"
          >
            FAQ
          </a>
          <a
            href="#lead"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:opacity-100 sm:inline"
          >
            Get access
          </a>
          <a
            href="/signin"
            className="hidden rounded-xl px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100 sm:inline"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="hidden rounded-2xl bg-accent-primary px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:inline"
          >
            Sign up
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
