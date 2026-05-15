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
        <span
          className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-fuchsia-400"
          aria-hidden
        />
        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-xs font-bold uppercase tracking-[0.28em] text-transparent">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl md:leading-tight">
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
