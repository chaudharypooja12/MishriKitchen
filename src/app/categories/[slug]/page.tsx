import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";
import { categories } from "@/data/categories";
import { categoryAccentClass } from "@/lib/categoryAccent";
import { cn } from "@/lib/utils";
import { pageMetadata, type SeoKey } from "@/data/seo";

const slugToSeo: Record<string, SeoKey> = {
  "modular-kitchen": "categoryModular",
  interiors: "categoryInteriors",
  wardrobes: "categoryWardrobes",
  appliances: "categoryAppliances",
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slugToSeo[slug];
  if (!key) return {};
  return pageMetadata(key);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const accent = categoryAccentClass[category.accent];

  return (
    <div>
      <section className="relative h-[42vh] min-h-[280px] border-b border-border">
        <Image
          src={category.heroImage}
          alt={`${category.title} - Misri Kitchen & Home Interior`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t to-transparent",
            accent.overlay,
          )}
        />
      </section>

      <section className="section-band-amber border-b border-amber-200/40 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/categories" },
              { label: category.title },
            ]}
            className="mb-6"
          />
          <h1 className="font-display text-4xl font-bold text-wood-dark md:text-5xl">
            {category.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-gold">{category.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
            {category.description}
          </p>
          <p className="mt-3 text-sm font-semibold text-wood">
            14+ years designing and installing {category.title.toLowerCase()} across
            Delhi NCR.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category.safetyFeatures.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-full border border-emerald-300/60 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-900"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-24 py-16 md:py-24">
        {category.subcategories.map((sub, i) => (
          <section
            key={sub.id}
            id={sub.id}
            className="mx-auto max-w-6xl scroll-mt-28 px-4"
          >
            <FadeIn delay={i * 0.04}>
              <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div className="glass-panel--sm relative aspect-[4/3] overflow-hidden p-0.5">
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-lg)-2px)]">
                    <Image
                      src={sub.image}
                      alt={`${sub.name} - Misri Kitchen & Home Interior`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-wood-dark">
                    {sub.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">
                    {sub.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.safetyFeatures.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/60 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-900"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          className="size-3"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-wood">
                    Benefits
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {sub.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-text">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-gold to-wood" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-wood">
                    Materials
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {sub.materials.map((m) => (
                      <li key={m} className="flex gap-2 text-sm text-text">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400/80" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button href={CONTACT.whatsappWithMessage} variant="whatsapp">
                      Get a quote
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        ))}
      </div>
    </div>
  );
}
