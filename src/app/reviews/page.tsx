import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { CONTACT } from "@/lib/constants";
import { testimonialsPage } from "@/data/testimonials";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("reviews");

export default function ReviewsPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
            className="mb-8 justify-center"
          />
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Customer love
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold text-wood md:text-6xl">
              4.8 / 5.0
            </h1>
            <StarRating className="mt-4 justify-center" />
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              Based on 100+ completed projects — trusted by families across Delhi
              NCR.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsPage.map((t, i) => (
            <FadeIn key={t.id} delay={(i % 9) * 0.03}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <StarRating value={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-beige font-display text-sm font-semibold text-wood">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <p className="mt-3 font-semibold text-wood">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>{t.projectType}</Badge>
                    {t.date && <Badge>{t.date}</Badge>}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-beige/40 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="font-display text-2xl text-wood">Video reviews</p>
          <p className="mt-2 text-sm text-text-muted">Coming soon</p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-border bg-surface p-10 text-text-muted">
            Placeholder for client video testimonials.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <h2 className="font-display text-3xl font-semibold text-wood">
          Join 100+ happy families
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={CONTACT.tel1} variant="primary">
            Call now
          </Button>
          <Button href={CONTACT.whatsapp} variant="whatsapp">
            WhatsApp us
          </Button>
        </div>
      </section>
    </div>
  );
}
