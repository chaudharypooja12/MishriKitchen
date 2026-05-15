"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChefHat,
  ClipboardList,
  DoorClosed,
  Flame,
  Layers,
  Ruler,
  Scan,
  Sofa,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Sofa,
  DoorClosed,
  Flame,
  Ruler,
  Layers,
  ClipboardList,
  Scan,
};

function ServiceCard({ s, i }: { s: (typeof services)[0]; i: number }) {
  const Icon = iconMap[s.icon] ?? ChefHat;
  return (
    <FadeIn delay={i * 0.05}>
      <Link
        href="/services"
        className={cn(
          "group glass-panel flex h-full min-h-[200px] flex-col p-6 transition",
          "hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_12px_40px_rgba(61,41,20,0.1)]",
        )}
      >
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border-2 border-teal-400/40 bg-gradient-to-br from-teal-100 to-fuchsia-100 text-teal-900 transition group-hover:from-teal-200 group-hover:to-fuchsia-200">
          <Icon className="size-6" />
        </div>
        <h3 className="font-display text-xl font-bold text-wood-dark">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {s.shortDesc}
        </p>
        <span className="mt-4 text-sm font-semibold text-teal-700 transition group-hover:text-fuchsia-700">
          Learn more →
        </span>
      </Link>
    </FadeIn>
  );
}

export function ServicesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <section className="section-band-amber py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Services"
            title="Everything your kitchen and home needs"
            subtitle="Eight focused disciplines — from first sketch to final handover — refined over 14+ years in Delhi NCR."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="overflow-hidden pb-2" ref={emblaRef}>
            <div className="flex gap-4">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className="min-w-0 shrink-0 basis-[88%] sm:basis-[70%]"
                >
                  <ServiceCard s={s} i={i} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {services.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Service ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  "carousel-dot",
                  i === selected && "carousel-dot--active",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
