import Brand from "@/components/Brand";

export default function Footer() {
  const year = new Date().getFullYear();
  const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://receipt-one.com";

  return (
    <footer className="border-t border-black/5 bg-sand-100/60 py-10 dark:border-white/10 dark:bg-ink-900/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3 md:items-start">
        <div>
          <Brand />
          <p className="mt-3 text-sm opacity-75">
            A web companion for ReceiptOne mobile users — receipts, mileage, and reports for US/Canada.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-[var(--font-ibm)] font-semibold">Product</div>
          <ul className="mt-3 space-y-2 opacity-80">
            <li><a href="#pricing" className="underline-offset-4 hover:underline">Pricing</a></li>
            <li><a href="#faq" className="underline-offset-4 hover:underline">FAQ</a></li>
            <li><a href="#lead" className="underline-offset-4 hover:underline">Early access</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-[var(--font-ibm)] font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 opacity-80">
            <li><a href="/privacy" className="underline-offset-4 hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="underline-offset-4 hover:underline">Terms of Service</a></li>
            <li>
              <span className="opacity-70">Canonical:</span> <span className="font-mono text-xs">{canonical}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-6 text-xs opacity-70">
        © {year}. All rights reserved.
      </div>
    </footer>
  );
}
