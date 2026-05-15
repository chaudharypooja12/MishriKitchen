"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryCards() {
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

  function CategoryCard({
    cat,
    i,
    className,
  }: {
    cat: (typeof categories)[0];
    i: number;
    className?: string;
  }) {
    return (
      <FadeIn delay={i * 0.06}>
        <Link
          href={`/categories/${cat.slug}`}
          className={`group relative block min-h-[220px] overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-hover)] transition hover:border-cyan-400/30 md:min-h-[260px] ${className ?? ""}`}
        >
          <Image
            src={cat.heroImage}
            alt={`${cat.title} - Mishri Kitchen & Home Interior`}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-violet-900/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              {cat.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-cyan-100/90">{cat.tagline}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-amber-300">
              Explore →
            </span>
          </div>
        </Link>
      </FadeIn>
    );
  }

  return (
    <section className="border-y border-white/10 bg-slate-950/30 py-16 backdrop-blur-sm md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Explore"
            title="Signature categories"
            subtitle="Deep expertise across kitchens, full interiors, wardrobes, and appliances."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} i={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="overflow-hidden pb-2" ref={emblaRef}>
            <div className="flex gap-4">
              {categories.map((cat, i) => (
                <div
                  key={cat.slug}
                  className="min-w-0 shrink-0 basis-[88%]"
                >
                  <CategoryCard cat={cat} i={i} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {categories.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Category ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  "carousel-dot",
                  i === selected && "carousel-dot--active",
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/categories" variant="secondary">
            View all categories
          </Button>
        </div>
      </div>
    </section>
  );
}
