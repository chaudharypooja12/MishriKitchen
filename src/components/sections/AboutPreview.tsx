import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutPreview() {
  return (
    <section className="grain-overlay border-y border-border bg-bg-deep/30 py-16 backdrop-blur-sm md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <div className="glass-panel relative aspect-[4/5] overflow-hidden p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-xl)-4px)]">
              <Image
                src="https://images.unsplash.com/photo-1604707761979-a52407f527b7?w=900&h=1100&q=80&auto=format&fit=crop"
                alt="Interior showroom kitchen detail - Mishri Kitchen & Home Interior"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gradient-to-br from-gold to-wood shadow-[0_0_8px_rgba(201,162,39,0.45)]" />
              <span>
                <strong className="text-text">Quality first</strong> — ISI-grade
                materials and branded hardware on every project.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gradient-to-br from-gold to-wood shadow-[0_0_8px_rgba(201,162,39,0.45)]" />
              <span>
                <strong className="text-text">10+ years on ground</strong> in
                Paschim Vihar and across Delhi NCR.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-gradient-to-br from-gold to-wood shadow-[0_0_8px_rgba(201,162,39,0.45)]" />
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
