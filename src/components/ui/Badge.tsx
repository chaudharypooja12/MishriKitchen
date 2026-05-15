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
        "inline-flex items-center rounded-full border border-wood/15 bg-beige px-3 py-1 text-xs font-medium text-wood-dark backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
