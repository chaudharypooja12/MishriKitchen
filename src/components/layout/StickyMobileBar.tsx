import { CalendarPlus, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { CONTACT } from "@/lib/constants";

/** Icon row is min 4.5rem; safe-area strip is separate so icons never compress on scroll. */
export function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="border-t border-border bg-surface/95 shadow-[0_-4px_28px_rgba(15,23,42,0.12)] backdrop-blur-md">
        <div className="flex min-h-[4.5rem] items-stretch">
          <Link
            href="/contact"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-bold text-wood transition active:opacity-90"
          >
            <CalendarPlus className="size-7 shrink-0" strokeWidth={2.25} aria-hidden />
            Book
          </Link>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-bold text-whatsapp transition active:opacity-90"
          >
            <MessageCircle className="size-7 shrink-0" strokeWidth={2.25} aria-hidden />
            WhatsApp
          </a>
          <a
            href={CONTACT.mapsDirections}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-semibold text-text-muted transition hover:text-wood active:opacity-90"
          >
            <MapPin className="size-7 shrink-0 text-gold" strokeWidth={2.25} aria-hidden />
            Map
          </a>
        </div>
      </div>
    </div>
  );
}
