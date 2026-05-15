"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
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

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

const MOBILE_MENU_Z = 100;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setCatOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const linkBase =
    "rounded-full px-3 py-2 text-sm font-medium text-text-muted transition hover:bg-wood/5 hover:text-wood";
  const linkActive =
    "bg-gradient-to-r from-amber-50 to-orange-50/90 text-wood-dark shadow-sm ring-1 ring-gold/25";

  return (
    <>
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
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {isClient &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 flex flex-col lg:hidden"
            style={{ zIndex: MOBILE_MENU_Z }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              type="button"
              className="absolute inset-0 bg-wood-dark/55"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="relative z-[1] flex min-h-0 flex-1 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4rem))]">
              <div className="glass-panel mx-auto mt-2 flex max-h-[min(78vh,calc(100dvh-8rem))] w-full max-w-lg flex-col gap-1 overflow-y-auto rounded-2xl border-2 border-gold/30 p-3 shadow-2xl shadow-amber-900/15">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3.5 text-lg font-semibold text-wood-dark transition hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-3 px-4 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-700">
                  Categories
                </p>
                {categoryLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-text transition hover:bg-violet-50 hover:text-violet-950"
                  >
                    {c.label}
                  </Link>
                ))}
                <Link
                  href="/categories"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-amber-800 transition hover:bg-amber-100"
                >
                  All categories →
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative z-[1] mx-auto mt-4 flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/90 px-6 py-3 text-sm font-bold text-wood-dark shadow-lg"
              >
                <X className="size-5" />
                Close
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
