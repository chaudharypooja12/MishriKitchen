import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";

export function GoogleMapSection() {
  return (
    <section className="border-t border-border bg-bg-deep/30 py-16 backdrop-blur-sm md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Visit"
            title="Find us in Paschim Vihar"
            subtitle="Walk-ins welcome Mon–Sat. Call ahead for Sunday appointments."
          />
        </FadeIn>
        <div className="glass-panel mt-10 overflow-hidden p-1">
          <iframe
            title="Mishri Kitchen on Google Maps"
            src={CONTACT.mapsEmbed}
            className="h-[min(400px,55vh)] w-full rounded-[calc(var(--radius-xl)-4px)] bg-bg-deep md:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="glass-panel mt-8 flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-wood">
              Office
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {CONTACT.address.line1}, {CONTACT.address.line2}
              <br />
              {CONTACT.address.city} – {CONTACT.address.pin}
            </p>
          </div>
          <Button href={CONTACT.mapsDirections} variant="primary">
            Get directions
          </Button>
        </div>
      </div>
    </section>
  );
}
