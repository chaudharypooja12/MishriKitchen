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

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setCatOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const linkBase =
    "rounded-full px-3 py-2 text-sm font-medium text-text-muted transition hover:bg-wood/5 hover:text-wood";
  const linkActive =
    "bg-gradient-to-r from-amber-50 to-orange-50/90 text-wood-dark shadow-sm ring-1 ring-gold/25";

  return (
    <header className="glass-nav sticky top-0 z-50 transition-shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className="font-display bg-gradient-to-r from-wood-dark via-wood to-gold bg-clip-text text-lg font-bold tracking-tight text-transparent md:text-xl"
        >
          Mishri Kitchen
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(linkBase, pathname === item.href && linkActive)}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setCatOpen(!catOpen)}
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-text-muted transition hover:bg-wood/5 hover:text-wood",
                pathname.startsWith("/categories") && linkActive,
              )}
              aria-expanded={catOpen}
            >
              Categories
              <ChevronDown className="size-4 opacity-70" />
            </button>
            {catOpen && (
              <div className="glass-panel absolute left-0 top-full z-50 mt-2 min-w-[240px] py-2 shadow-lg">
                {categoryLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-2.5 text-sm text-text transition hover:bg-amber-50/80 hover:text-wood-dark"
                  >
                    {c.label}
                  </Link>
                ))}
                <Link
                  href="/categories"
                  className="block border-t border-border px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-amber-50/60"
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
              className={cn(linkBase, pathname === item.href && linkActive)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={CONTACT.tel1}
            className="ml-2 rounded-full bg-gradient-to-r from-amber-700 to-wood px-4 py-2 text-sm font-bold text-[#fff8f0] shadow-md shadow-amber-900/20 transition hover:brightness-110"
          >
            Call Now
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={CONTACT.tel1}
            className="rounded-full bg-gradient-to-r from-amber-700 to-wood px-3 py-2 text-xs font-bold text-[#fff8f0] shadow-md"
          >
            Call
          </a>
          <button
            type="button"
            className="rounded-full border border-wood/15 bg-surface p-2 text-text backdrop-blur-sm transition hover:bg-surface-elevated"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-wood-dark/35 px-6 pb-28 pt-20 backdrop-blur-md lg:hidden">
          <nav className="glass-panel flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto p-4 shadow-xl">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-lg font-medium text-text transition hover:bg-amber-50/90 hover:text-wood-dark"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-4 px-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Categories
            </p>
            {categoryLinks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-xl px-3 py-2.5 text-base text-text-muted transition hover:bg-amber-50/80 hover:text-wood-dark"
              >
                {c.label}
              </Link>
            ))}
            <Link
              href="/categories"
              className="rounded-xl px-3 py-2.5 text-base font-medium text-wood transition hover:bg-amber-50/60"
            >
              Categories overview
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
