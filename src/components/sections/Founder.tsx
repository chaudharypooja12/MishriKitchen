import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Shared "Meet Our Founder" section — rendered on the home page and the
 * about page with the founder's portrait and the client-approved copy.
 */
export function FounderSection() {
  return (
    <section className="section-band-coral border-y border-orange-200/50 py-16 backdrop-blur-sm md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <div className="glass-panel relative aspect-square overflow-hidden p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-xl)-4px)]">
              <Image
                src="/images/founder.png"
                alt="Sandeep Singh, Managing Director of Misri Kitchen & Home Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeader
            label="Meet Our Founder"
            title="Sandeep Singh"
            subtitle="Managing Director, Misri Kitchen & Home Interior"
          />

          <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
            <p>
              With a vision to transform houses into beautiful, functional, and
              thoughtfully designed spaces, Sandeep Singh leads{" "}
              <strong className="text-text">Misri Kitchen &amp; Home Interior</strong>{" "}
              with a strong focus on quality, innovation, and customer
              satisfaction.
            </p>
            <p>
              His approach combines modern design, practical functionality, and
              attention to detail, ensuring that every project is tailored to
              the unique lifestyle and preferences of its clients.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-gold pl-6 text-lg italic leading-relaxed text-text">
            &ldquo;We believe every home tells a story. Our goal is to bring
            that story to life through thoughtful design, quality
            craftsmanship, and spaces that feel truly yours.&rdquo;
          </blockquote>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold text-wood-dark">
              Our Design Philosophy
            </h3>
            <p className="mt-3 leading-relaxed text-text-muted">
              We believe that every home is a reflection of the people who live
              in it. Our designs bring together functionality, aesthetics,
              quality, and sustainability to create interiors that are
              beautiful, comfortable, and built for everyday living.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
