import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data/categories";

export function CategoryCards() {
  return (
    <section className="border-y border-border bg-beige/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeader
            label="Explore"
            title="Signature categories"
            subtitle="Deep expertise across kitchens, full interiors, wardrobes, and appliances."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={i * 0.08}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group relative block min-h-[220px] overflow-hidden rounded-2xl md:min-h-[260px]"
              >
                <Image
                  src={cat.heroImage}
                  alt={`${cat.title} - Mishri Kitchen & Home Interior`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                    {cat.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/85">{cat.tagline}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-gold-light">
                    Explore →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/categories" variant="secondary">
            View all categories
          </Button>
        </div>
      </div>
    </section>
  );
}
