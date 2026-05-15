import type { CategoryAccent } from "@/data/categories";

/** Per-category colorful overlays (Aby: controlled accents, not rainbow). */
export const categoryAccentClass: Record<
  CategoryAccent,
  { overlay: string; border: string; explore: string; tagline: string }
> = {
  ember: {
    overlay:
      "from-amber-950/90 via-orange-900/50 to-amber-700/15",
    border: "border-amber-400/35 hover:border-amber-500/55",
    explore: "text-amber-100",
    tagline: "text-amber-50/95",
  },
  moss: {
    overlay:
      "from-emerald-950/88 via-green-900/45 to-lime-800/12",
    border: "border-emerald-400/35 hover:border-emerald-500/50",
    explore: "text-emerald-100",
    tagline: "text-emerald-50/95",
  },
  copper: {
    overlay:
      "from-rose-950/90 via-orange-950/48 to-amber-800/12",
    border: "border-rose-400/35 hover:border-orange-400/50",
    explore: "text-orange-100",
    tagline: "text-rose-50/95",
  },
  indigo: {
    overlay:
      "from-slate-900/92 via-indigo-950/52 to-blue-900/18",
    border: "border-indigo-400/35 hover:border-sky-400/45",
    explore: "text-sky-100",
    tagline: "text-indigo-50/95",
  },
};
