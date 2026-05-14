import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { testimonialsHome } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Testimonials"
            title="Loved across Delhi NCR"
            subtitle="Real feedback from homeowners who trusted Mishri with their spaces."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialsHome.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
                <StarRating value={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-wood">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                  <Badge className="mt-2">{t.projectType}</Badge>
                </div>
              </article>
            </FadeIn>
          ))}
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
