"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";
import {
  portfolioFilters,
  portfolioItems,
  type PortfolioFilter,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() => {
    if (filter === "All") return portfolioItems;
    return portfolioItems.filter((p) => p.filter === filter);
  }, [filter]);

  const slides = useMemo(
    () => filtered.map((p) => ({ src: p.image, title: p.title })),
    [filtered],
  );

  const openAt = useCallback(
    (id: string) => {
      const idx = filtered.findIndex((p) => p.id === id);
      if (idx >= 0) {
        setLightboxIndex(idx);
        setLightboxOpen(true);
      }
    },
    [filtered],
  );

  return (
    <div>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-semibold text-wood md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Kitchens, living spaces, wardrobes, and more — delivered with Mishri
            rigour.
          </p>
        </div>
      </section>

      <div className="sticky top-[57px] z-20 border-b border-border bg-background/95 py-3 backdrop-blur md:top-[73px]">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-1">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                filter === f
                  ? "bg-wood text-white"
                  : "bg-surface text-text-muted hover:bg-beige",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 6) * 0.04}>
              <button
                type="button"
                onClick={() => openAt(p.id)}
                className={cn(
                  "group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-surface text-left shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-hover)]",
                  p.span === "wide" && "sm:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    p.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} - Mishri Kitchen & Home Interior`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-light">
                      {p.type}
                    </p>
                    <p className="font-display text-lg font-semibold text-white">
                      {p.title}
                    </p>
                    <p className="text-sm text-white/85">{p.location}</p>
                    <p className="mt-2 text-xs text-white/80">View →</p>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="font-display text-2xl text-wood">Like what you see?</p>
          <p className="mt-2 text-text-muted">Let&apos;s design yours.</p>
          <div className="mt-6 flex justify-center">
            <Button href={CONTACT.whatsappWithMessage} variant="whatsapp">
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </div>
  );
}
