import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getSiteSettings } from "@/lib/site.functions";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/service-area", label: "Service Area" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { data: settings } = useQuery({
    queryKey: ["site-settings"],
    queryFn: () => getSiteSettings(),
    staleTime: 5 * 60 * 1000,
  });
  const phone = settings?.phone ?? "+1 (267) 699-2599";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background">
      <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-4 md:h-28 md:px-8">
        {/* Logo + business name, one normal flex item in the header row —
            no absolute positioning, no overlap with the CTA bar below.
            The logo's real aspect ratio is 283x77 (wide, short), so it's
            sized by height only and left to size itself proportionally. */}
        <Link
          to="/"
          aria-label="Ajaxtec Appliance Repair — home"
          className="flex flex-shrink-0 items-center gap-3"
        >
          <img
            src="/images/logo.webp"
            alt=""
            width={283}
            height={77}
            className="h-10 w-auto flex-shrink-0 md:h-14"
          />
          {/* Business name/tagline. Hidden once the full nav takes over (xl+)
              so the 9 nav items get the whole row instead of fighting the
              name text for space. */}
          <span className="flex flex-col leading-tight xl:hidden">
            <span className="text-base font-semibold tracking-tight">Ajaxtec Appliance Repair</span>
            <span className="hidden text-sm text-muted-foreground md:block">
              Premium appliance repair · NJ &amp; PA
            </span>
          </span>
        </Link>

        {/* Wrapper takes the remaining row width and centers the nav within
            that space, rather than the nav hugging the logo's edge. */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-center">
          <nav aria-label="Primary" className="flex items-center gap-5 text-base font-semibold">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
                inactiveProps={{ className: "text-foreground hover:text-accent after:scale-x-0" }}
                className="relative py-1 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-accent after:transition-transform"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          {/* Mobile-only quick-call icon — mobile has no room for the desktop
              CTA bar's phone number, so this gives phone-first visitors a
              one-tap call action directly in the header. */}
          <a
            href={telHref}
            aria-label={`Call ${phone}`}
            className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground md:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* CTA bar — phone + primary action, full width, high contrast. */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-end gap-6 px-4 md:px-8">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 text-lg font-semibold tabular-nums hover:text-accent"
          >
            <Phone className="h-4 w-4" aria-hidden /> {phone}
          </a>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request Service Online
            </Button>
          </Link>
        </div>
      </div>

      {open ? (
        <div className="xl:hidden border-t border-border bg-background">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm"
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={telHref}>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" /> Call {phone}
                </Button>
              </a>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full">Request Service</Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
