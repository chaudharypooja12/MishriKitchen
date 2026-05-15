import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "gold"
  | "ghost"
  | "whatsapp"
  | "outlineGold"
  | "link";

const variants: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-teal-500 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 hover:shadow-cyan-500/40 active:scale-[0.98]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-text backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] active:scale-[0.98]",
  gold: "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110 active:scale-[0.98]",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] active:scale-[0.98]",
  whatsapp:
    "inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:brightness-110 active:scale-[0.98]",
  outlineGold:
    "inline-flex items-center justify-center rounded-full border-2 border-amber-400/80 bg-transparent px-6 py-3 text-center text-sm font-semibold text-amber-300 transition hover:bg-amber-400/10 hover:shadow-[0_0_24px_rgba(251,191,36,0.2)] active:scale-[0.98]",
  link: "inline-flex text-sm font-semibold text-cyan-300 underline-offset-4 transition hover:text-cyan-200 hover:underline",
};

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href?: string;
};

export type ButtonProps = Common &
  (
    | (Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined })
    | (Omit<ComponentProps<typeof Link>, "className" | "children" | "href"> & {
        href: string;
      })
    | (Omit<ComponentProps<"a">, "className" | "children" | "href"> & {
        href: string;
      })
  );

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const styles = cn(variants[variant], className);

  if (href?.startsWith("/")) {
    const linkRest = rest as Omit<
      ComponentProps<typeof Link>,
      "href" | "className" | "children"
    >;
    return (
      <Link href={href} className={styles} {...linkRest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external =
      href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:");
    const anchorRest = rest as Omit<
      ComponentProps<"a">,
      "href" | "className" | "children"
    >;
    return (
      <a
        href={href}
        className={styles}
        {...anchorRest}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;
  return (
    <button type="button" className={styles} {...buttonRest}>
      {children}
    </button>
  );
}
