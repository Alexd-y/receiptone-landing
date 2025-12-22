import Brand from "@/components/Brand";
import ThemeToggle from "@/components/ThemeToggle";

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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
