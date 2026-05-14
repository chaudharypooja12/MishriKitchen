import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChoose } from "@/data/whyChoose";

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Why Mishri"
            title="Why families choose us"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-semibold text-wood">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
