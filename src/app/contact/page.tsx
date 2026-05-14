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
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-semibold text-wood md:text-5xl">
            Get in touch — we&apos;d love to help
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            No forms — reach us directly by phone, WhatsApp, or visit our Paschim
            Vihar studio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <FadeIn>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]">
              <span className="text-2xl" aria-hidden>
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
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]">
              <span className="text-2xl" aria-hidden>
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
                Call now
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]">
              <span className="text-2xl" aria-hidden>
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
            <h2 className="font-display text-2xl font-semibold text-wood">
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
            <h2 className="font-display text-2xl font-semibold text-wood">
              Factory / workshop
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {CONTACT.factory}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Mishri Kitchen location map"
            src={CONTACT.mapsEmbed}
            className="h-[500px] w-full bg-surface"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-wood p-10 text-center text-white">
          <h2 className="font-display text-3xl font-semibold">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
            Our team is available Mon–Sat, 10 AM – 7 PM. Walk in or call ahead.
          </p>
          <div className="mt-8 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
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
