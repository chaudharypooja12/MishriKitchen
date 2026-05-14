import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutPreview() {
  return (
    <section className="grain-overlay border-y border-border bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-hover)]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=1100&q=80&auto=format&fit=crop"
              alt="Interior showroom kitchen detail - Mishri Kitchen & Home Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeader
            label="Our story"
            title="Delhi craftsmanship with a personal touch"
            subtitle="Led by Sandeep Singh, Mishri Kitchen blends rigorous site planning with warm materials — so your home feels considered, not catalogued."
          />
          <ul className="mt-8 space-y-4 text-text-muted">
            <li className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gold" />
              <span>
                <strong className="text-text">Quality first</strong> — ISI-grade
                materials and branded hardware on every project.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gold" />
              <span>
                <strong className="text-text">10+ years on ground</strong> in
                Paschim Vihar and across Delhi NCR.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gold" />
              <span>
                <strong className="text-text">Trust by transparency</strong> —
                clear timelines, visible milestones, no surprise shortcuts.
              </span>
            </li>
          </ul>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Read Our Story →
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
