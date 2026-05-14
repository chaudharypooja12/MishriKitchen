"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

const categoryLinks = [
  { href: "/categories/modular-kitchen", label: "Modular Kitchens" },
  { href: "/categories/interiors", label: "Home Interiors" },
  { href: "/categories/wardrobes", label: "Wardrobes" },
  { href: "/categories/appliances", label: "Kitchen Appliances" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setCatOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const isHome = pathname === "/";
  const glass =
    isHome && !scrolled
      ? "border-transparent bg-transparent text-white"
      : "border-border/60 bg-surface/95 text-text shadow-[var(--shadow-card)] backdrop-blur-md";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        glass,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-semibold tracking-tight md:text-xl",
            isHome && !scrolled ? "text-white" : "text-wood",
          )}
        >
          Mishri Kitchen
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-wood/10 text-wood"
                  : "text-text-muted hover:bg-wood/5 hover:text-wood",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setCatOpen(!catOpen)}
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/categories")
                  ? "bg-wood/10 text-wood"
                  : "text-text-muted hover:bg-wood/5 hover:text-wood",
              )}
              aria-expanded={catOpen}
            >
              Categories
              <ChevronDown className="size-4 opacity-70" />
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-border bg-surface py-2 shadow-[var(--shadow-hover)]">
                {categoryLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-2 text-sm text-text hover:bg-beige/80"
                  >
                    {c.label}
                  </Link>
                ))}
                <Link
                  href="/categories"
                  className="block border-t border-border px-4 py-2 text-sm font-medium text-gold hover:bg-beige/80"
                >
                  All categories
                </Link>
              </div>
            )}
          </div>

          {primaryNav.slice(4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-wood/10 text-wood"
                  : "text-text-muted hover:bg-wood/5 hover:text-wood",
              )}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={CONTACT.tel1}
            className="ml-2 rounded-full bg-wood px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-float)] transition hover:bg-wood-dark"
          >
            Call Now
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={CONTACT.tel1}
            className="rounded-full bg-wood px-3 py-2 text-xs font-semibold text-white"
          >
            Call
          </a>
          <button
            type="button"
            className={cn(
              "rounded-full p-2",
              isHome && !scrolled
                ? "text-white hover:bg-white/10"
                : "text-wood hover:bg-wood/10",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-wood-dark/98 px-6 pb-24 pt-20 text-white lg:hidden">
          <nav className="flex flex-col gap-2 overflow-y-auto">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-lg font-medium hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-light">
              Categories
            </p>
            {categoryLinks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-lg px-2 py-2 text-base hover:bg-white/10"
              >
                {c.label}
              </Link>
            ))}
            <Link
              href="/categories"
              className="rounded-lg px-2 py-2 text-base text-gold-light hover:bg-white/10"
            >
              Categories overview
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
