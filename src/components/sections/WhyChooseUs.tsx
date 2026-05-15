import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChoose } from "@/data/whyChoose";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <section className="border-y border-white/10 bg-slate-950/20 py-16 backdrop-blur-sm md:py-24">
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
                  "hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]",
                )}
              >
                <h3 className="font-display text-xl font-bold text-cyan-100">
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
