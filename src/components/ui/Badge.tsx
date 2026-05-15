import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-fuchsia-300/50 bg-gradient-to-r from-amber-50 to-fuchsia-50 px-3 py-1 text-xs font-semibold text-wood-dark shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
