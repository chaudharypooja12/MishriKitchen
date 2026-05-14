import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-wood via-wood-dark to-[#2a1810]" />
      <div className="grain-overlay absolute inset-0 opacity-30" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
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
