import { MessageCircle, Phone } from "lucide-react";

export default function TalkToSales() {
  return (
    <button
      className="group flex flex-col items-center justify-center rounded-full bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-white"
      aria-label="Talk to sales"
    >
      <div className="flex items-center gap-2">
        <Phone className="h-5 w-5 text-green-600 dark:text-green-500" strokeWidth={2} />
        <div className="h-6 w-px bg-green-600 dark:bg-green-500" />
        <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-500" strokeWidth={2} />
      </div>
      <span className="mt-2 text-xs font-bold text-black">Talk to sales</span>
    </button>
  );
}

