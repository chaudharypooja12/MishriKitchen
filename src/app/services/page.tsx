import type { Metadata } from "next";
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
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("services");

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Sofa,
  DoorClosed,
  Flame,
  Ruler,
  Layers,
  ClipboardList,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950/40 py-16 backdrop-blur-md md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-bold text-cyan-100 md:text-5xl">
            Our services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Modular kitchens, interiors, wardrobes, appliances, and the planning
            discipline that holds it all together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16 md:py-24">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] ?? ChefHat;
          return (
            <FadeIn key={s.id} delay={i * 0.04}>
              <article className="glass-panel grid gap-10 p-8 md:grid-cols-[auto_1fr] md:p-10">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/10 text-cyan-200">
                  <Icon className="size-8" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-cyan-100 md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-text">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={CONTACT.whatsappWithMessage} variant="whatsapp">
                      Enquire now
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </section>
    </div>
  );
}
