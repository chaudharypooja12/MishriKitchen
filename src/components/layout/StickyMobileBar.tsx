import { CalendarPlus, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Icon row is min 4.5rem; safe-area strip is separate so icons never compress on scroll. */
export function StickyMobileBar() {
  const cell =
    "flex flex-1 touch-manipulation flex-col items-center justify-center gap-1 py-2 transition select-none";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div
        className={cn(
          "border-t border-cyan-400/30 bg-gradient-to-t from-white/98 via-indigo-50/95 to-violet-100/90",
          "shadow-[0_-10px_40px_rgba(79,70,229,0.14),0_-1px_0_rgba(255,255,255,0.9)_inset]",
          "backdrop-blur-xl backdrop-saturate-150",
        )}
      >
        <div className="flex min-h-[4.5rem] items-stretch divide-x divide-indigo-200/50">
          <Link
            href="/contact"
            className={cn(
              cell,
              "font-bold hover:bg-gradient-to-t hover:from-cyan-500/12 hover:to-fuchsia-500/8 active:opacity-90",
            )}
            aria-label="Book free appointment"
          >
            <CalendarPlus
              className="size-7 shrink-0 text-fuchsia-600"
              strokeWidth={2.25}
              aria-hidden
            />
            <span className="bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-violet-700 bg-clip-text text-sm font-bold text-transparent">
              Book
            </span>
          </Link>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={cn(
              cell,
              "font-bold text-emerald-700 hover:bg-emerald-500/10 active:opacity-90",
            )}
            aria-label="WhatsApp"
          >
            <MessageCircle
              className="size-7 shrink-0 text-[#25D366]"
              strokeWidth={2.25}
              aria-hidden
            />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href={CONTACT.mapsDirections}
            target="_blank"
            rel="noreferrer"
            className={cn(
              cell,
              "font-semibold text-violet-900/80 hover:bg-violet-500/10 active:opacity-90",
            )}
            aria-label="Open directions in maps"
          >
            <MapPin
              className="size-7 shrink-0 text-cyan-600"
              strokeWidth={2.25}
              aria-hidden
            />
            <span className="text-sm">Map</span>
          </a>
        </div>
      </div>
    </div>
  );
}
