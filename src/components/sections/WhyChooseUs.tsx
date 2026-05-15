import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChoose } from "@/data/whyChoose";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-bg-deep/25 py-16 backdrop-blur-sm md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Why Mishri"
            title="Why families choose us"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div
                className={cn(
                  "glass-panel h-full p-6 transition",
                  "hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(61,41,20,0.08)]",
                )}
              >
                <h3 className="font-display text-xl font-bold text-wood-dark">
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
