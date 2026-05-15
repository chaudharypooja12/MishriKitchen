"use client";

import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-28 right-4 z-30 hidden flex-col gap-3 md:flex">
      <a
        href={CONTACT.tel1}
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-wood/20 bg-surface text-wood shadow-lg backdrop-blur-xl transition hover:scale-105 hover:border-gold/40 hover:shadow-md"
        aria-label="Call now"
      >
        <Phone className="size-6" />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-emerald-600/25 bg-whatsapp text-white shadow-lg transition hover:scale-105 hover:brightness-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
