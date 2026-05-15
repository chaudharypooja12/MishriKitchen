import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { categories } from "@/data/categories";
import { categoryAccentClass } from "@/lib/categoryAccent";
import { pageMetadata } from "@/data/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata("categories");

export default function CategoriesIndexPage() {
  return (
    <div>
      <section className="section-band-violet border-b border-violet-200/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Categories" },
            ]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-bold text-wood-dark md:text-5xl">
            Categories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Explore how we design modular kitchens, full interiors, wardrobes, and
            appliance packages — 14+ years of Mishri execution in Delhi NCR.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((cat, i) => {
            const a = categoryAccentClass[cat.accent];
            return (
              <FadeIn key={cat.slug} delay={i * 0.06}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className={cn(
                    "group glass-panel flex overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(61,41,20,0.1)]",
                    a.border,
                  )}
                >
                  <div className="relative hidden w-2/5 shrink-0 sm:block">
                    <Image
                      src={cat.heroImage}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h2 className="font-display text-2xl font-bold text-wood-dark">
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gold">{cat.tagline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                      {cat.description}
                    </p>
                    <span className="mt-4 text-sm font-bold text-wood">
                      View details →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
