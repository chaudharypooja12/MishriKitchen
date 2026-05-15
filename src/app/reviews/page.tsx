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
      <section className="border-b border-border bg-bg-deep/40 py-16 backdrop-blur-md md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
            className="mb-8 justify-center"
          />
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Customer love
            </p>
            <h1 className="mt-4 bg-gradient-to-br from-wood-dark via-wood to-gold bg-clip-text font-display text-5xl font-bold text-transparent md:text-6xl">
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
              <article className="glass-panel flex h-full flex-col p-6 transition hover:border-gold/30">
                <StarRating value={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex size-10 items-center justify-center rounded-full border border-gold/35 bg-gradient-to-br from-amber-50 to-orange-50 font-display text-sm font-bold text-wood-dark">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <p className="mt-3 font-bold text-wood-dark">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge className="border-accent-fuchsia/25 bg-accent-fuchsia/10 text-accent-fuchsia">
                      {t.projectType}
                    </Badge>
                    {t.date && (
                      <Badge className="border-border">{t.date}</Badge>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-bg-deep/35 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="font-display text-2xl font-bold text-wood-dark">Video reviews</p>
          <p className="mt-2 text-sm text-text-muted">Coming soon</p>
          <div className="glass-panel mx-auto mt-8 max-w-md border-dashed border-border p-10 text-text-muted">
            Placeholder for client video testimonials.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <h2 className="font-display text-3xl font-bold text-wood-dark">
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
