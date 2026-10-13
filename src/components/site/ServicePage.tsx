import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Phone, CalendarClock, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { ReviewsBar } from "@/components/site/ReviewsBar";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { FinalCta } from "@/components/site/FinalCta";
import { JobyBookingWidget, JOBY_BOOKING_URL } from "@/components/site/JobyBookingWidget";
import { getSiteSettings } from "@/lib/site.functions";
import { trackCallConversion, trackContactFormStartConversion } from "@/lib/analytics";
import { buildTitle, buildMetaDescription, absUrl } from "@/lib/seo";

export const SERVICE_AREAS = [
  "Trenton",
  "Newark",
  "Camden",
  "Jersey City",
  "Elizabeth, NJ",
  "Philadelphia, PA",
  "Bucks County, PA",
  "North & Central NJ",
];

export type ServicePageConfig = {
  path: string;
  eyebrow: string;
  /** H1 text before the accent-colored last word ("Repair"). */
  titleLead: string;
  titleAccent: string;
  /** Plain title for <title>, og:title and JSON-LD. */
  name: string;
  serviceType: string;
  intro: string;
  shortDescription: string;
  metaDetail: string;
  brandNote: string;
  image: string;
  imageAlt: string;
  issuesIntro: string;
  /** One or two symptom columns, each with its own heading. */
  issueGroups: { heading: string; issues: string[] }[];
  issuesFooter: string;
  ctaHeading: ReactNode;
};

// Shared head() for the dedicated per-appliance service pages
// (/refrigerator-repair, /ice-maker-repair, /gas-stove-repair, /oven-repair).
export function servicePageHead(c: ServicePageConfig) {
  const title = buildTitle(c.name);
  const description = buildMetaDescription(c.shortDescription, c.metaDetail);
  const image = absUrl(c.image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: c.name },
      { property: "og:description", content: c.shortDescription },
      { property: "og:url", content: absUrl(c.path) },
      { property: "og:image", content: image },
    ],
    links: [{ rel: "canonical", href: absUrl(c.path) }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: c.name,
          serviceType: c.serviceType,
          description,
          provider: {
            "@type": "LocalBusiness",
            name: "Ajaxtec Appliance Repair",
            telephone: "+1-267-447-8580",
          },
          areaServed: SERVICE_AREAS,
        }),
      },
    ],
  };
}

// Same layout as the washer/dryer landing page, but rendered inside the
// normal site chrome (SiteHeader/SiteFooter) and wired to the site-wide
// call and booking-form conversions, since these pages are linked from the
// /services cards rather than being standalone ad landing pages.
export function ServicePage({ config: c }: { config: ServicePageConfig }) {
  const { data: s } = useQuery({ queryKey: ["site-settings"], queryFn: () => getSiteSettings() });
  const phone = s?.phone ?? "+1 (267) 447-8580";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">{c.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {c.titleLead} <span className="text-accent">{c.titleAccent}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} onClick={trackCallConversion(telHref)}>
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" /> Call {phone}
                </Button>
              </a>
              <a href="#book">
                <Button size="lg" variant="outline" className="gap-2">
                  <CalendarClock className="h-4 w-4" /> Book online
                </Button>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{c.brandNote}</p>
            <ReviewsBar className="mt-6" />
          </div>
          <ImagePlaceholder aspect="video" label={c.name} src={c.image} alt={c.imageAlt} priority />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Any of these sound <span className="text-accent">familiar?</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{c.issuesIntro}</p>
        <div className={`mt-10 grid gap-8 ${c.issueGroups.length > 1 ? "md:grid-cols-2" : ""}`}>
          {c.issueGroups.map((g) => (
            <div key={g.heading} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{g.heading}</h3>
              <ul
                className={`mt-4 grid gap-2.5 text-sm ${c.issueGroups.length > 1 ? "" : "md:grid-cols-2"}`}
              >
                {g.issues.map((issue) => (
                  <li key={issue} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                      aria-hidden
                    />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{c.issuesFooter}</p>
      </section>

      <section id="book" className="border-y border-border bg-muted/30 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Book your service</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pick a time that works for you — our online scheduler books your diagnostic
                    appointment directly.
                  </p>
                </div>
                <a
                  href={JOBY_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hidden sm:inline-flex"
                >
                  <Button variant="outline" className="gap-2">
                    <CalendarClock className="h-4 w-4" /> Open scheduler
                  </Button>
                </a>
              </div>
              <div className="mt-6 overflow-hidden rounded-lg border border-border">
                <JobyBookingWidget onFormStart={trackContactFormStartConversion} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Trouble loading the scheduler above?{" "}
                <a
                  href={JOBY_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  Open it in a new tab
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Areas we <span className="text-accent">cover</span>
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
              {SERVICE_AREAS.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden /> {a}
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-6 inline-flex text-sm text-accent hover:underline">
              See all appliance repair services →
            </Link>
          </div>
          <GuaranteeBadge className="self-start" />
        </div>
      </section>

      <FinalCta heading={c.ctaHeading} />
    </div>
  );
}
