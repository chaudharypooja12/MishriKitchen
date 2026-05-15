"use client";

import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-28 right-4 z-30 hidden flex-col gap-3 md:flex">
      <a
        href={CONTACT.tel1}
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/50 text-cyan-300 shadow-lg shadow-cyan-500/20 backdrop-blur-xl transition hover:scale-105 hover:border-cyan-400/40 hover:shadow-cyan-500/35"
        aria-label="Call now"
      >
        <Phone className="size-6" />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/25 backdrop-blur-xl transition hover:scale-105 hover:bg-emerald-500/30"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
