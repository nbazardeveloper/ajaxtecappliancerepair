import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// A high-contrast, hard-to-miss visual callout for the three brands we
// specialize in. Brand names alone in body copy get skimmed past — this is
// a standalone band (bold display type + icon + dividers, on an inverted
// background) so the specialization reads instantly, not just as a sentence
// buried in a paragraph. No manufacturer logos are used (see BrandIcons.tsx
// for why), so the visual weight comes from scale, contrast and a
// consistent badge icon instead.
const SPECIALTY_BRANDS = ["Sub-Zero", "Viking", "Wolf"];

export function SpecialistBrandsBand({ className }: { className?: string }) {
  return (
    <section className={cn("border-y border-border bg-primary text-primary-foreground", className)}>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
          Certified specialists in
        </p>
        {/* Each brand name is a different length, so centering every row on
            its own (items-center) let the icons drift into a staircase —
            each row's left edge landed somewhere different. Centering the
            whole fixed-width block instead and left-aligning rows within it
            keeps the icons on one straight line while the group still reads
            as centered on the page. */}
        <div className="mx-auto mt-5 flex w-fit flex-col items-start gap-5 sm:w-full sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-primary-foreground/20">
          {SPECIALTY_BRANDS.map((b) => (
            <div key={b} className="flex items-center gap-3 sm:px-10 sm:first:pl-0 sm:last:pr-0">
              <BadgeCheck className="h-7 w-7 flex-shrink-0 text-accent" aria-hidden />
              <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {b}
              </span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-lg text-center text-sm text-primary-foreground/70">
          We also service other premium brands — Thermador, Bosch, Dacor, GE Monogram, Bertazzoni
          and Blue Star.
        </p>
      </div>
    </section>
  );
}
