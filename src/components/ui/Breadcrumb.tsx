import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumb({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-2 text-sm text-text-muted",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-wood/40">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="font-medium text-teal-800 transition hover:text-fuchsia-700 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-text">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
