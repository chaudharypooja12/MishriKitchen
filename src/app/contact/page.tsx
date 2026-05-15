import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("contact");

const hours = [
  { day: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="section-band-teal border-b border-teal-200/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-bold text-wood-dark md:text-5xl">
            Get in touch — we&apos;d love to help
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            No forms — reach us directly by phone, WhatsApp, or visit our Paschim
            Vihar studio. 14+ years of modular kitchen & interior experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <FadeIn>
            <div className="glass-panel flex h-full flex-col border-2 border-teal-200/50 p-8">
              <span className="text-sm font-bold uppercase tracking-wider text-teal-800">
                Visit us
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                {CONTACT.address.line1}
                <br />
                {CONTACT.address.line2}
                <br />
                {CONTACT.address.city} – {CONTACT.address.pin}
              </p>
              <Button href={CONTACT.mapsDirections} variant="secondary" className="mt-6">
                Get directions
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="glass-panel flex h-full flex-col border-2 border-fuchsia-200/50 p-8">
              <span className="text-sm font-bold uppercase tracking-wider text-fuchsia-800">
                Call us
              </span>
              <div className="mt-4 flex-1 space-y-2 text-sm">
                <a className="block font-semibold text-wood hover:underline" href={CONTACT.tel1}>
                  {CONTACT.phone1_display}
                </a>
                <a className="block font-semibold text-wood hover:underline" href={CONTACT.tel2}>
                  {CONTACT.phone2_display}
                </a>
              </div>
              <Button href={CONTACT.tel1} variant="primary" className="mt-6">
                Tap to call
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-panel flex h-full flex-col border-2 border-emerald-200/60 p-8">
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                WhatsApp
              </span>
              <p className="mt-4 flex-1 text-sm text-text-muted">
                Chat instantly for quotes, site visit requests, and material
                questions.
              </p>
              <Button href={CONTACT.whatsapp} variant="whatsapp" className="mt-6">
                WhatsApp us
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-wood-dark">
              Business hours
            </h2>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className="border-b border-border">
                    <td className="py-3 font-medium text-text">{row.day}</td>
                    <td className="py-3 text-text-muted">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display text-2xl font-bold text-wood-dark">
              Factory / workshop
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {CONTACT.factory}
            </p>
          </FadeIn>
        </div>

        <div className="glass-panel mt-12 overflow-hidden p-1">
          <iframe
            title="Mishri Kitchen location map"
            src={CONTACT.mapsEmbed}
            className="h-[min(500px,60vh)] w-full rounded-[calc(var(--radius-xl)-4px)] bg-bg-deep md:h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="glass-panel mt-16 overflow-hidden border border-cyan-400/25 bg-gradient-to-br from-indigo-950 via-violet-900 to-cyan-950 p-10 text-center shadow-[0_0_48px_rgba(99,102,241,0.25)]">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-indigo-100/95">
            Our team is available Mon–Sat, 10 AM – 7 PM. Walk in or call ahead.
          </p>
          <div className="mt-8 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Book Free Appointment
            </Button>
            <Button href={CONTACT.tel1} variant="gold">
              Call {CONTACT.phone1_display}
            </Button>
            <Button href={CONTACT.whatsapp} variant="whatsapp">
              WhatsApp us
            </Button>
            <Button href={CONTACT.mapsDirections} variant="outlineGold">
              Get directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
