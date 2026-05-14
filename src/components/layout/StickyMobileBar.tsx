import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <a
        href={CONTACT.tel1}
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-wood",
        )}
      >
        <Phone className="size-5" />
        Call
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-whatsapp"
      >
        <MessageCircle className="size-5" />
        WhatsApp
      </a>
      <a
        href={CONTACT.mapsDirections}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-text-muted"
      >
        <MapPin className="size-5 text-gold" />
        Directions
      </a>
    </div>
  );
}
