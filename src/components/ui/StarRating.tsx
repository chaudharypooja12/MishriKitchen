import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value = 5,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < value
              ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
              : "fill-transparent text-white/15",
          )}
        />
      ))}
    </div>
  );
}
