import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-wood-dark via-amber-900 to-stone-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_120%,rgba(212,168,75,0.28),transparent)]" />
      <div className="grain-overlay absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <FadeIn>
          <h2 className="font-display bg-gradient-to-r from-[#fffaf5] via-amber-100 to-orange-100 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-50/95">
            Get a free consultation. Our team visits your site and designs a plan
            — no charge.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={CONTACT.tel1} variant="gold">
              Call Now
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
