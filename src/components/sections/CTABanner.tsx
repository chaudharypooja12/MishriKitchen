import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-violet-900 to-cyan-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_20%_0%,rgba(251,191,36,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_30%,rgba(192,38,211,0.2),transparent)]" />
      <div className="grain-overlay absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <FadeIn>
          <h2 className="font-display bg-gradient-to-r from-white via-cyan-100 to-fuchsia-100 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100/95">
            Get a free consultation from a team with 14+ years on site. We visit,
            measure, and design a plan — no charge.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Book Free Appointment
            </Button>
            <Button href={CONTACT.whatsapp} variant="whatsapp">
              WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
