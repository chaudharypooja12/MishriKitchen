"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { testimonialsHome } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof testimonialsHome)[0];
  i: number;
}) {
  return (
    <FadeIn delay={i * 0.06}>
      <article className="glass-panel flex h-full min-h-[240px] flex-col border-2 border-fuchsia-100 p-6 transition hover:border-teal-300/50 hover:shadow-[0_12px_36px_rgba(13,148,136,0.12)]">
        <StarRating value={t.rating} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-6 border-t border-border pt-4">
          <p className="font-bold text-wood-dark">{t.name}</p>
          <p className="text-xs text-text-muted">{t.location}</p>
          <Badge className="mt-2 border-accent-fuchsia/25 bg-accent-fuchsia/10 text-accent-fuchsia">
            {t.projectType}
          </Badge>
        </div>
      </article>
    </FadeIn>
  );
}

export function Testimonials() {
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
    <section className="section-band-coral py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Testimonials"
            title="Loved across Delhi NCR"
            subtitle="Real feedback from homeowners who trusted Mishri with their spaces — 14+ years of referrals and repeat families."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {testimonialsHome.map((t, i) => (
            <TestimonialCard key={t.id} t={t} i={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="overflow-hidden pb-2" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonialsHome.map((t, i) => (
                <div
                  key={t.id}
                  className="min-w-0 shrink-0 basis-[90%]"
                >
                  <TestimonialCard t={t} i={i} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {testimonialsHome.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Testimonial ${i + 1}`}
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
          <Button href="/reviews" variant="secondary">
            See all reviews →
          </Button>
        </div>
      </div>
    </section>
  );
}
