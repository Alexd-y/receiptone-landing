import Brand from "@/components/Brand";
import ThemeToggle from "@/components/ThemeToggle";
import TalkToSales from "@/components/TalkToSales";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-sand-100/70 backdrop-blur-md dark:border-white/10 dark:bg-ink-900/40">
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
            className="hidden rounded-xl bg-accent-primary px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95 sm:inline"
          >
            Sign up
          </a>
          <div className="hidden sm:block">
            <TalkToSales />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
