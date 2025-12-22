export default function Brand() {
  const company = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "FLUTTER HORIZON";
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 shadow-glass ring-1 ring-black/5 backdrop-blur-md dark:bg-white/10 dark:ring-white/10">
        <span className="font-[var(--font-ibm)] text-sm font-semibold tracking-tight text-ink-900 dark:text-white">
          R1
        </span>
      </div>
      <div className="leading-tight">
        <div className="font-[var(--font-ibm)] text-sm font-semibold">{appName}</div>
        <div className="text-xs opacity-70">{company}</div>
      </div>
    </div>
  );
}
