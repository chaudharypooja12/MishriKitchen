import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { heroStats } from "@/data/stats";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&q=80&auto=format&fit=crop"
        alt="L-shaped modular kitchen in warm wood tones - Mishri Kitchen & Home Interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-36 pt-28 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            Delhi NCR · Since 2012
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.08]">
            Crafting Premium Kitchens & Interiors That Feel Like Home
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            10+ years of creating modular kitchens and elegant living spaces
            across Delhi NCR
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href={CONTACT.tel1}>
              Call Now
            </Button>
            <Button variant="outlineGold" href={CONTACT.whatsapp}>
              WhatsApp Us
            </Button>
            <Button variant="ghost" href="/portfolio">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-8 md:right-8">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md md:grid-cols-4 md:gap-4 md:p-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                  {s.value}
                </p>
                <p className="text-xs text-white/75 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
