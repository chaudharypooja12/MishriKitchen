"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroStats } from "@/data/stats";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&q=80&auto=format&fit=crop";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Contemporary modular kitchen with island and premium finishes — Mishri Kitchen & Home Interior, Delhi NCR"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Neo grid + color grade (no muddy brown wash) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/88 via-violet-950/75 to-cyan-950/82" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(6,182,212,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_60%,rgba(217,70,239,0.22),transparent_50%)]" />
      <div className="hero-scanline absolute inset-0" aria-hidden />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-40 pt-28 md:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200/95"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Delhi NCR · Since 2012
          </motion.p>
          <motion.h1
            className="font-display text-pretty text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.35)] md:text-6xl md:leading-[1.06]"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduce ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Crafting Premium Kitchens & Interiors That Feel Like Home
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-indigo-100/95 md:text-xl"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            14+ years of creating modular kitchens and elegant living spaces across
            Delhi NCR
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/contact" variant="primary" className="min-w-[min(100%,280px)]">
              Book Free Appointment
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-8 md:right-8">
          <div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_12px_48px_rgba(0,0,0,0.35)] ring-1 ring-slate-900/10 md:grid-cols-4 md:gap-6 md:rounded-3xl md:p-6"
            role="region"
            aria-label="Key statistics"
          >
            {heroStats.map((s, i) => (
              <motion.div
                key={s.label}
                className="group text-center"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduce ? 0 : 0.28 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="font-display bg-gradient-to-br from-violet-700 via-fuchsia-600 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold leading-snug text-slate-600 md:text-sm">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
