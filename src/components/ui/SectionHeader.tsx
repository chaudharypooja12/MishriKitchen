import { cn } from "@/lib/utils";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-10 bg-gold" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-wood md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
