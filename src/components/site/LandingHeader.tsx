import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSiteSettings } from "@/lib/site.functions";
import { trackLandingCallConversion } from "@/lib/analytics";

// Stripped-down header for standalone ad landing pages — logo + phone only,
// no site nav / hamburger menu. A PPC visitor who can click away into the
// full site (services, blog, etc.) instead of calling or booking is a
// conversion the ad spend already paid for and lost, so this keeps the page
// a single-path funnel instead of just another content page with a header.
export function LandingHeader() {
  const { data: settings } = useQuery({
    queryKey: ["site-settings"],
    queryFn: () => getSiteSettings(),
    staleTime: 5 * 60 * 1000,
  });
  const phone = settings?.phone ?? "+1 (267) 447-8580";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:h-24 md:px-8">
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
            className="h-9 w-auto flex-shrink-0 md:h-12"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-semibold tracking-tight">Ajaxtec Appliance Repair</span>
            <span className="hidden text-sm text-muted-foreground md:block">
              Premium appliance repair · NJ &amp; PA
            </span>
          </span>
        </Link>

        <a href={telHref} onClick={trackLandingCallConversion(telHref)}>
          <Button size="lg" className="gap-2">
            <Phone className="h-4 w-4" /> {phone}
          </Button>
        </a>
      </div>
    </header>
  );
}
