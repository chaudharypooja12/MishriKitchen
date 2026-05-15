"use client";

import { CalendarPlus, MessageCircle } from "lucide-react";
import Link from "next/link";

import { CONTACT } from "@/lib/constants";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-28 right-4 z-30 hidden flex-col gap-3 md:flex">
      <Link
        href="/contact"
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-fuchsia-500/35 bg-gradient-to-br from-cyan-500/95 to-violet-600/95 text-white shadow-lg shadow-fuchsia-600/25 transition hover:scale-105 hover:brightness-110"
        aria-label="Book free appointment"
      >
        <CalendarPlus className="size-6" aria-hidden />
      </Link>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex size-14 items-center justify-center rounded-2xl border border-emerald-600/25 bg-whatsapp text-white shadow-lg transition hover:scale-105 hover:brightness-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
    </div>
  );
}
