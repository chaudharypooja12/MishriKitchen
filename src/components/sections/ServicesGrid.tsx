import {
  ChefHat,
  ClipboardList,
  DoorClosed,
  Flame,
  Layers,
  Ruler,
  Sofa,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Sofa,
  DoorClosed,
  Flame,
  Ruler,
  Layers,
  ClipboardList,
};

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Services"
            title="Everything your kitchen and home needs"
            subtitle="Seven focused disciplines — from first sketch to final handover."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? ChefHat;
            return (
              <FadeIn key={s.id} delay={i * 0.05}>
                <Link
                  href="/services"
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] transition",
                    "hover:-translate-y-1 hover:border-wood/25 hover:shadow-[var(--shadow-hover)]",
                  )}
                >
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-beige text-wood transition group-hover:bg-wood group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-wood">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {s.shortDesc}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-gold transition group-hover:text-wood">
                    Learn more →
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
