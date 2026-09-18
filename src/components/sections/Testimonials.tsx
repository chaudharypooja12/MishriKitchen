import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { testimonialsHome } from "@/data/testimonials";

function TestimonialCard({
  t,
}: {
  t: (typeof testimonialsHome)[0];
}) {
  return (
    <article className="glass-panel flex h-full w-[320px] flex-col border-2 border-fuchsia-100 p-6 sm:w-[360px]">
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
  );
}

/**
 * Continuous testimonial marquee — cards glide nonstop and pause on hover.
 * The track is rendered twice for a seamless -50% translation loop.
 */
export function Testimonials() {
  return (
    <section className="section-band-coral overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Testimonials"
            title="Loved across Delhi NCR"
            subtitle="Real feedback from homeowners who trusted Misri with their spaces — 14+ years of referrals and repeat families."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div
          className="marquee-hover group mt-14 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          aria-label="Customer testimonials carousel"
        >
          <div className="animate-marquee flex w-max gap-6 pr-6">
            {[...testimonialsHome, ...testimonialsHome].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                aria-hidden={i >= testimonialsHome.length}
                className="flex"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="mt-10 text-center">
        <Button href="/reviews" variant="secondary">
          See all reviews →
        </Button>
      </div>
    </section>
  );
}
