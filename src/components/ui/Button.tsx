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
    "inline-flex items-center justify-center rounded-full bg-wood px-6 py-3 text-center font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-wood-dark",
  secondary:
    "inline-flex items-center justify-center rounded-full border-2 border-wood bg-transparent px-6 py-3 text-center font-semibold text-wood transition hover:bg-wood/10",
  gold: "inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-center font-semibold text-text transition hover:bg-gold-light",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10",
  whatsapp:
    "inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-center font-semibold text-white transition hover:brightness-110",
  outlineGold:
    "inline-flex items-center justify-center rounded-full border-2 border-gold bg-transparent px-6 py-3 text-center font-semibold text-gold transition hover:bg-gold/10",
  link: "inline-flex font-semibold text-wood underline-offset-4 hover:underline",
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
