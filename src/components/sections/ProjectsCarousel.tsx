"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { featuredProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  const navBtnClass =
    "rounded-full border border-wood/20 bg-surface p-3 text-wood shadow-md backdrop-blur-md transition hover:border-gold/50 hover:bg-surface-elevated hover:text-wood-dark active:scale-95";

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <FadeIn className="max-w-xl">
            <SectionHeader
              label="Portfolio"
              title="Featured transformations"
              subtitle="A glimpse of recent kitchens and interiors across Delhi."
            />
          </FadeIn>
          <div className="flex items-center justify-between gap-3 md:justify-end">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className={navBtnClass}
                aria-label="Previous"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className={navBtnClass}
                aria-label="Next"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden md:mt-12" ref={emblaRef}>
          <div className="flex touch-pan-y gap-4 md:gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="min-w-0 shrink-0 basis-[88%] sm:basis-[55%] lg:basis-[31%]"
              >
                <div className="glass-panel--sm relative aspect-[4/3] overflow-hidden border-border p-0.5 shadow-[var(--shadow-hover)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-lg)-2px)]">
                    <Image
                      src={p.image}
                      alt={`${p.title} - Mishri Kitchen & Home Interior`}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 88vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-stone-900/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge className="mb-2 border-gold/40 bg-amber-50/90 text-wood-dark">
                        {p.type}
                      </Badge>
                      <p className="font-display text-lg font-bold text-[#fffaf5]">
                        {p.title}
                      </p>
                      <p className="text-sm text-amber-100/90">{p.location}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2 md:mt-8">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn("carousel-dot", i === selected && "carousel-dot--active")}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <Button href="/portfolio" variant="secondary">
            View all projects →
          </Button>
        </div>
      </div>
    </section>
  );
}
