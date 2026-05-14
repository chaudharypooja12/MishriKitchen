import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { categories } from "@/data/categories";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("categories");

export default function CategoriesIndexPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Categories" },
            ]}
            className="mb-8"
          />
          <h1 className="font-display text-4xl font-semibold text-wood md:text-5xl">
            Categories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Explore how we design modular kitchens, full interiors, wardrobes, and
            appliance packages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={i * 0.06}>
              <Link
                href={`/categories/${cat.slug}`}
                className="group flex overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
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
                  <h2 className="font-display text-2xl font-semibold text-wood">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-sm text-gold">{cat.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    {cat.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-wood">
                    View details →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
