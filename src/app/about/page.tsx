import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";
import { heroStats } from "@/data/stats";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("about");

const timeline = [
  { year: "2012", text: "Founded in Paschim Vihar with a focus on modular kitchens." },
  { year: "2015", text: "First 50 kitchens delivered — word-of-mouth across West Delhi." },
  { year: "2018", text: "Expanded into full home interiors and wardrobes." },
  { year: "2021", text: "100+ projects milestone with repeat client families." },
  { year: "2024", text: "Premium appliance division launched with install support." },
] as const;

export default function AboutPage() {
  return (
    <div className="grain-overlay">
      <section className="relative border-b border-fuchsia-200/40 bg-gradient-to-br from-amber-50 via-white to-teal-50 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&q=80&auto=format&fit=crop"
            alt="About Mishri Kitchen & Home Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-bold text-wood-dark md:text-5xl">
            About Mishri Kitchen & Home Interior
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            A Delhi studio obsessed with honest materials, clear timelines, and
            kitchens you actually cook in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            label="Story"
            title="Built on site experience, not showroom promises"
            subtitle="Mishri began as a small workshop serving Paschim Vihar neighbours. Today we design across Delhi NCR — still with the same hands-on founder oversight."
          />
        </FadeIn>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text-muted">
          <p>
            Every project starts with listening: how you move in the kitchen, how
            light enters your living room, how storage habits differ in your family.
            That empathy, paired with disciplined execution, is why clients return
            for second and third phases.
          </p>
          <p>
            Under {CONTACT.founder}, our team coordinates carpentry, electrical
            touchpoints, and appliance installs so you are not chasing vendors.
          </p>
        </div>
      </section>

      <section className="border-y border-violet-200/40 section-band-violet py-16 backdrop-blur-sm md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <SectionHeader
              label="Philosophy"
              title="Precision, quality, personalisation"
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Precision",
                body: "Layouts measured twice — tolerances planned for real Indian walls.",
              },
              {
                title: "Quality",
                body: "Materials we would use in our own homes — no mystery grades.",
              },
              {
                title: "Personalisation",
                body: "Your habits drive storage, not a catalogue module list.",
              },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="glass-panel p-6">
                  <h3 className="font-display text-xl font-bold text-wood-dark">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <div className="glass-panel relative aspect-square overflow-hidden p-1">
              <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-xl)-4px)]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&q=80&auto=format&fit=crop"
                  alt={CONTACT.founder}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeader
              label="Founder"
              title={`A note from ${CONTACT.founder}`}
            />
            <blockquote className="mt-6 border-l-4 border-gold pl-6 text-lg italic leading-relaxed text-text">
              &ldquo;We do not chase volume — we chase referrals. That only happens
              when the last 5% of finishing is as tight as the first drawing.&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <section className="section-band-teal border-y border-teal-200/40 py-16 backdrop-blur-sm md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <SectionHeader label="Journey" title="Milestones" align="center" className="mx-auto" />
          </FadeIn>
          <ol className="mx-auto mt-12 max-w-3xl space-y-6">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 0.05}>
                <li className="glass-panel flex gap-6 p-5">
                  <span className="font-display text-2xl font-bold text-gold">
                    {t.year}
                  </span>
                  <p className="text-sm leading-relaxed text-text-muted">{t.text}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <FadeIn>
          <SectionHeader label="Expertise" title="Numbers that reflect trust" align="center" className="mx-auto" />
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="glass-panel p-6 text-center">
              <p className="font-display bg-gradient-to-br from-wood-dark to-gold bg-clip-text text-3xl font-bold text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-r from-wood-dark via-amber-900 to-stone-900 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold text-[#fffaf5] md:text-4xl">
            Let&apos;s build something beautiful together
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={CONTACT.tel1} variant="gold">
              Call {CONTACT.phone1_display}
            </Button>
            <Button href={CONTACT.whatsapp} variant="whatsapp">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
