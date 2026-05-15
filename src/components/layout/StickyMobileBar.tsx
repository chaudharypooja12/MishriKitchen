import { MapPin, MessageCircle, Phone } from "lucide-react";

import { CONTACT } from "@/lib/constants";

/** Icon row is min 4.5rem; safe-area strip is separate so icons never compress on scroll. */
export function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="border-t border-border bg-surface shadow-[0_-4px_24px_rgba(61,41,20,0.1)]">
        <div className="flex min-h-[4.5rem] items-stretch">
          <a
            href={CONTACT.tel1}
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-bold text-wood transition active:opacity-90"
          >
            <Phone className="size-7 shrink-0" strokeWidth={2.25} />
            Call
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-bold text-whatsapp transition active:opacity-90"
          >
            <MessageCircle className="size-7 shrink-0" strokeWidth={2.25} />
            WhatsApp
          </a>
          <a
            href={CONTACT.mapsDirections}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-sm font-semibold text-text-muted transition hover:text-wood active:opacity-90"
          >
            <MapPin className="size-7 shrink-0 text-gold" strokeWidth={2.25} />
            Map
          </a>
        </div>
      </div>
    </div>
  );
}
