import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Phone, Mail, Banknote, CreditCard } from "lucide-react";
import { VenmoIcon, ZelleIcon } from "@/components/site/icons/PaymentIcons";
import { GoogleIcon, PatchIcon } from "@/components/site/BrandIcons";
import { getSiteSettings } from "@/lib/site.functions";
import { trackLandingCallConversion } from "@/lib/analytics";

const PAYMENT_METHODS = [
  { label: "Cash", icon: Banknote },
  { label: "Credit cards", icon: CreditCard },
  { label: "Zelle", icon: ZelleIcon },
  { label: "Venmo", icon: VenmoIcon },
];

// Minimal footer for standalone ad landing pages — NAP + payment trust
// signals + the legally-expected privacy link, but none of the "Site"
// navigation (services, blog, reviews, etc.) SiteFooter normally carries.
// Those links are exactly the kind of exit a paid landing page shouldn't
// offer; see LandingHeader for the same reasoning.
export function LandingFooter() {
  const { data: s } = useQuery({
    queryKey: ["site-settings"],
    queryFn: () => getSiteSettings(),
    staleTime: 5 * 60 * 1000,
  });
  const year = new Date().getFullYear();
  const phone = s?.phone ?? "+1 (267) 447-8580";

  return (
    <footer className="border-t border-white/10 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center md:px-8">
        <img
          src="/images/logo.webp"
          alt="Ajaxtec Appliance Repair"
          width={283}
          height={77}
          className="h-9 w-auto"
        />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            onClick={trackLandingCallConversion(`tel:${phone.replace(/[^+\d]/g, "")}`)}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4 flex-shrink-0" aria-hidden /> {phone}
          </a>
          {s?.email ? (
            <a
              href={`mailto:${s.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden /> {s.email}
            </a>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {s?.social_links?.google_reviews ? (
            <a
              href={s.social_links.google_reviews}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent"
            >
              <GoogleIcon className="h-3.5 w-3.5 flex-shrink-0" /> Google Reviews
            </a>
          ) : null}
          <a
            href="https://patch.com/pennsylvania/philadelphia/business/listing/593941/ajaxtec-appliance-repair"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent"
          >
            <PatchIcon className="h-3 w-auto flex-shrink-0" /> Listing
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PAYMENT_METHODS.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium"
            >
              <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs text-primary-foreground/60 md:flex-row md:items-center md:gap-4">
          <span>
            © {year} Ajaxtec Appliance Repair. Independent appliance repair service. Not affiliated
            with Sub-Zero Group, Inc. or Viking Range, LLC.
          </span>
          <Link to="/privacy-policy" className="underline hover:text-primary-foreground/80">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
