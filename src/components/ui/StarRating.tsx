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
              ? "fill-gold text-gold drop-shadow-[0_0_4px_rgba(201,162,39,0.45)]"
              : "fill-transparent text-wood/15",
          )}
        />
      ))}
    </div>
  );
}
