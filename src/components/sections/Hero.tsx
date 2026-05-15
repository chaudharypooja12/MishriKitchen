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
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/75 via-amber-950/35 to-stone-950/88" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,168,75,0.25),transparent)]" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-40 pt-28 md:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-amber-200/95">
            Delhi NCR · Since 2012
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-[#fffaf5] drop-shadow-lg md:text-6xl md:leading-[1.06]">
            Crafting Premium Kitchens & Interiors That Feel Like Home
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-amber-50/95 md:text-xl">
            10+ years of creating modular kitchens and elegant living spaces
            across Delhi NCR
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
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
          <div className="glass-panel mx-auto grid max-w-5xl grid-cols-2 gap-3 p-4 md:grid-cols-4 md:gap-4 md:p-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display bg-gradient-to-br from-wood-dark to-gold bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {s.value}
                </p>
                <p className="text-xs text-text-muted md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
