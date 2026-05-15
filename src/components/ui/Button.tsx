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
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-700 via-wood to-wood-dark px-6 py-3 text-center text-sm font-bold text-[#fff8f0] shadow-lg shadow-amber-900/20 transition hover:brightness-110 hover:shadow-amber-900/30 active:scale-[0.98]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-wood/25 bg-surface px-6 py-3 text-center text-sm font-semibold text-wood-dark backdrop-blur-sm transition hover:border-gold/50 hover:bg-surface-elevated hover:shadow-md active:scale-[0.98]",
  gold:
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-center text-sm font-bold text-wood-dark shadow-lg shadow-amber-800/15 transition hover:brightness-110 active:scale-[0.98]",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/70 bg-white/40 px-6 py-3 text-center text-sm font-semibold text-wood-dark shadow-sm backdrop-blur-md transition hover:bg-white/65 hover:shadow-md active:scale-[0.98]",
  whatsapp:
    "inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:brightness-110 active:scale-[0.98]",
  outlineGold:
    "inline-flex items-center justify-center rounded-full border-2 border-gold/80 bg-transparent px-6 py-3 text-center text-sm font-semibold text-wood-dark transition hover:bg-amber-50 hover:shadow-md active:scale-[0.98]",
  link: "inline-flex text-sm font-semibold text-wood underline-offset-4 transition hover:text-gold hover:underline",
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
