import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Phone, CalendarClock, CheckCircle2, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { ReviewsBar } from "@/components/site/ReviewsBar";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { FinalCta } from "@/components/site/FinalCta";
import { JobyBookingWidget, JOBY_BOOKING_URL } from "@/components/site/JobyBookingWidget";
import { getSiteSettings } from "@/lib/site.functions";
import {
  trackApplianceRepairCallConversion,
  trackApplianceRepairFormConversion,
  trackApplianceRepairPageViewConversion,
} from "@/lib/analytics";
import { buildMetaDescription, absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const AREAS = [
  "Trenton",
  "Newark",
  "Camden",
  "Jersey City",
  "Elizabeth, NJ",
  "Philadelphia, PA",
  "Bucks County, PA",
  "North & Central NJ",
];

// General (non-laundry) Google Ads landing page, built around the "best
// appliance repair near me", "appliance repair company near me" and "urgent
// appliance repair" keywords. Those were "Rarely shown (low Quality Score)"
// while pointed at pages that talk almost entirely about Sub-Zero/Viking —
// Quality Score's landing-page-experience and ad-relevance parts reward a
// page whose H1, title and copy echo the searcher's words, so this page
// repeats those phrases naturally in the headings and body.
const APPLIANCES = [
  "Refrigerators & freezers",
  "Washing machines",
  "Dryers",
  "Ranges & stoves",
  "Ovens & wall ovens",
  "Cooktops",
  "Dishwashers",
  "Microwaves",
  "Ice makers",
  "Wine coolers",
  "Range hoods & ventilation",
  "Warming drawers",
  "Outdoor kitchens & BBQ grills",
];

const URGENT_PROBLEMS = [
  "Refrigerator or freezer not cooling — food at risk",
  "Water leaking onto the floor",
  "Washer won't drain, dryer won't heat",
  "Oven, range or cooktop won't light or heat",
  "Burning smell, sparking or tripped breaker",
  "Ice maker or dishwasher stopped working",
];

const REASONS = [
  {
    title: "Fast, urgent response",
    body: "Same-day or next-day appointments, depending on technician schedule and parts. Online booking 24/7, service 7 days a week.",
  },
  {
    title: "Upfront pricing",
    body: "$95 diagnostic fee, waived when you complete the repair with us. You approve the price before any work starts.",
  },
  {
    title: "Insured, experienced technicians",
    body: "A local appliance repair company serving NJ & PA homes — from everyday brands to Sub-Zero, Viking and Wolf.",
  },
  {
    title: "Warranty on parts & labor",
    body: "OEM or manufacturer-approved parts whenever available, backed by a warranty on the repair.",
  },
];

export const Route = createFileRoute("/appliance-repair")({
  head: () => {
    const title = "Appliance Repair Near Me | Urgent Same-Day Service NJ & PA";
    const shortDescription =
      "Urgent appliance repair near you in NJ & PA — fridges, washers, dryers, ovens and more.";
    const description = buildMetaDescription(
      shortDescription,
      "Local appliance repair company, same-day or next-day visits, $95 diagnostic waived with repair. Call or book online.",
    );
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Appliance Repair Near You — Ajaxtec" },
        { property: "og:description", content: shortDescription },
        { property: "og:url", content: absUrl("/appliance-repair") },
        { property: "og:image", content: DEFAULT_OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: absUrl("/appliance-repair") }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Appliance Repair",
            serviceType: "Home appliance repair",
            description,
            provider: {
              "@type": "LocalBusiness",
              name: "Ajaxtec Appliance Repair",
              telephone: "+1-267-447-8580",
              url: absUrl("/"),
            },
            areaServed: AREAS,
          }),
        },
      ],
    };
  },
  component: ApplianceRepairLanding,
});

function ApplianceRepairLanding() {
  const { data: s } = useQuery({ queryKey: ["site-settings"], queryFn: () => getSiteSettings() });
  const phone = s?.phone ?? "+1 (267) 447-8580";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  useEffect(() => {
    trackApplianceRepairPageViewConversion();
  }, []);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Local appliance repair company · NJ &amp; PA
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Appliance Repair <span className="text-accent">Near You</span> — Fast &amp; Urgent
              Service
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Refrigerator not cooling, washer won't drain, oven won't heat? Our technicians repair
              all home appliances across New Jersey and Pennsylvania, with same-day or next-day
              visits for urgent appliance repair.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} onClick={trackApplianceRepairCallConversion(telHref)}>
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
            <p className="mt-4 text-sm text-muted-foreground">
              $95 diagnostic fee —{" "}
              <span className="font-medium text-foreground">
                waived when the repair is completed
              </span>
              .
            </p>
            <ReviewsBar className="mt-6" />
          </div>
          <ImagePlaceholder
            aspect="video"
            label="Appliance repair"
            src="/images/hero.webp"
            alt="Kitchen with a built-in refrigerator and range serviced by Ajaxtec Appliance Repair"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <Zap className="h-6 w-6 text-accent" aria-hidden /> Urgent appliance repair
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              When an appliance breaks, it can't wait a week. Call now and we'll get a technician
              out as fast as the schedule allows — often the same day.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {URGENT_PROBLEMS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Appliances we repair</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Residential appliances of every brand except Samsung, LG and Liebherr. Repairs and
              maintenance only — we don't install new appliances.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {APPLIANCES.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Looking for the best appliance repair <span className="text-accent">near you?</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Here's why homeowners across NJ &amp; PA choose Ajaxtec as their appliance repair
            company.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Book your repair</h2>
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
                <JobyBookingWidget trackBooking={trackApplianceRepairFormConversion} />
              </div>
              <a
                href={JOBY_BOOKING_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex text-sm text-accent hover:underline sm:hidden"
              >
                Open the scheduler in a new tab →
              </a>
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

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Appliance repair near me — <span className="text-accent">areas we cover</span>
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Based in Trenton, we send technicians to homes throughout New Jersey and
                Pennsylvania.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                {AREAS.map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <GuaranteeBadge className="self-start" />
          </div>
        </div>
      </section>

      <FinalCta
        heading={
          <>
            Need urgent appliance <span className="text-accent">repair?</span>
          </>
        }
        subtitle="Call now for the fastest appointment, or book online any time."
        trackCall={trackApplianceRepairCallConversion}
      />
    </div>
  );
}
