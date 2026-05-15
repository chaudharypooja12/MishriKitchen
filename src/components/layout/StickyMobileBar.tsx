import { MapPin, MessageCircle, Phone } from "lucide-react";

import { CONTACT } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_24px_rgba(61,41,20,0.08)] backdrop-blur-xl md:hidden">
      <a
        href={CONTACT.tel1}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-bold text-wood transition active:scale-95"
      >
        <Phone className="size-5" />
        Call
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-bold text-whatsapp transition active:scale-95"
      >
        <MessageCircle className="size-5" />
        WhatsApp
      </a>
      <a
        href={CONTACT.mapsDirections}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-text-muted transition hover:text-wood active:scale-95"
      >
        <MapPin className="size-5 text-gold" />
        Map
      </a>
    </div>
  );
}
