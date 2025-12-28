"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function TalkToSales() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-center rounded-3xl bg-white px-5 py-4 shadow-lg transition hover:shadow-xl dark:bg-white">
        <div className="flex items-center gap-2">
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center rounded-lg p-2 transition hover:bg-green-50 dark:hover:bg-green-50/20"
            aria-label="Call sales"
          >
            <Phone className="h-5 w-5 text-green-600 dark:text-green-500" strokeWidth={2} />
          </a>
          <div className="h-6 w-px bg-green-600 dark:bg-green-500" />
          <a
            href="mailto:sales@receiptone.com?subject=Sales Inquiry"
            className="flex items-center justify-center rounded-lg p-2 transition hover:bg-green-50 dark:hover:bg-green-50/20"
            aria-label="Chat with sales"
          >
            <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-500" strokeWidth={2} />
          </a>
        </div>
        <span className="mt-2 text-xs font-bold text-black">Talk to sales</span>
      </div>
    </div>
  );
}

