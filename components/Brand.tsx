import Image from "next/image";

export default function Brand() {
  const company = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "FLUTTER HORIZON";
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

  return (
    <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/receiptone-icon.svg"
          alt={`${appName} logo`}
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className="font-[var(--font-ibm)] text-sm font-semibold">{appName}</div>
        <div className="text-xs opacity-70">{company}</div>
      </div>
    </a>
  );
}
