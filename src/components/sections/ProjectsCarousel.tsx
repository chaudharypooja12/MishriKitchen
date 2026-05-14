"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { featuredProjects } from "@/data/portfolio";

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              className="rounded-full border border-border bg-surface p-3 text-wood shadow-sm transition hover:bg-beige"
              aria-label="Previous"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="rounded-full border border-border bg-surface p-3 text-wood shadow-sm transition hover:bg-beige"
              aria-label="Next"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="min-w-0 shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[31%]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                  <Image
                    src={p.image}
                    alt={`${p.title} - Mishri Kitchen & Home Interior`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="mb-2 border-white/20 bg-white/10 text-white">
                      {p.type}
                    </Badge>
                    <p className="font-display text-lg font-semibold text-white">
                      {p.title}
                    </p>
                    <p className="text-sm text-white/80">{p.location}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
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
