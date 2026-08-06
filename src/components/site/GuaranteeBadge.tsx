import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  /** Use "dark" when placed over a photo/dark background (e.g. the hero). */
  variant?: "light" | "dark";
}

// Generic trust-seal badge (icon + copy only). The previous version used an
// image that was another company's established/bespoke guarantee-badge
// artwork carried over from the old site — swapped for a plain icon so this
// isn't presenting someone else's trust mark as Ajaxtec's own.
export function GuaranteeBadge({ className, variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-lg border px-4 py-3",
        dark ? "border-white/20 bg-black/30" : "border-accent/30 bg-accent/5",
        className,
      )}
    >
      <ShieldCheck
        className={cn("h-9 w-9 flex-shrink-0", dark ? "text-white" : "text-accent")}
        aria-hidden
      />
      <div>
        <p className={cn("text-sm font-semibold leading-tight", dark && "text-white")}>
          We stand behind every repair
        </p>
        <p className={cn("mt-0.5 text-xs", dark ? "text-white/70" : "text-muted-foreground")}>
          If something isn't right, we'll make it right.
        </p>
      </div>
    </div>
  );
}
