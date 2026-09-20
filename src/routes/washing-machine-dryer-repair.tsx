import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Phone, CalendarClock, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { ReviewsBar } from "@/components/site/ReviewsBar";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { FinalCta } from "@/components/site/FinalCta";
import { JobyBookingWidget, JOBY_BOOKING_URL } from "@/components/site/JobyBookingWidget";
import { getSiteSettings } from "@/lib/site.functions";
import { trackCallConversion, trackLandingPageViewConversion } from "@/lib/analytics";
import { buildTitle, buildMetaDescription, absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

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

// Symptom lists a homeowner is likely to search for (and what our Google Ads
// traffic for this page is built around) — kept specific and plain-language
// rather than generic ("won't work") so the page matches real search intent
// and gives visitors an easy "yes, that's my problem" moment.
const WASHER_ISSUES = [
  "Won't turn on or start a cycle",
  "Won't spin or agitate",
  "Won't drain — water stuck in the drum",
  "Won't fill with water",
  "Leaking water from underneath or around the door",
  "Door won't lock, or locks and won't open",
  "Shaking, vibrating or “walking” during spin",
  "Loud banging, grinding or squealing noises",
  "Stops or stalls in the middle of a cycle",
  "Error code on the display",
  "Torn, moldy or leaking door seal (door boot gasket)",
  "Overflowing with water",
  "Musty or moldy odor",
  "Buttons or control panel not responding",
];

const DRYER_ISSUES = [
  "Won't turn on",
  "Runs but produces no heat — clothes come out damp",
  "Drum won't turn or tumble",
  "Takes two or more cycles to fully dry",
  "Shuts off or overheats mid-cycle",
  "Loud squealing, thumping or grinding noise",
  "Burning smell during use",
  "Excess lint buildup or weak airflow",
  "Door won't latch or close properly",
  "Thermal fuse or thermostat failure",
  "Timer or control board won't advance",
  "Gas dryer won't ignite",
];

export const Route = createFileRoute("/washing-machine-dryer-repair")({
  head: () => {
    const title = buildTitle("Washing Machine & Dryer Repair");
    const shortDescription =
      "Same-day washing machine and dryer repair across NJ & PA — most major brands.";
    const description = buildMetaDescription(
      shortDescription,
      "From a washer that won't spin or drain to a dryer that won't heat, plus door seal (gasket) replacement — licensed technicians, upfront pricing, $95 diagnostic waived with repair. We do not currently service Samsung or LG.",
    );
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Washing Machine & Dryer Repair" },
        { property: "og:description", content: shortDescription },
        { property: "og:url", content: absUrl("/washing-machine-dryer-repair") },
        { property: "og:image", content: DEFAULT_OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: absUrl("/washing-machine-dryer-repair") }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Washing Machine & Dryer Repair",
            serviceType: "Laundry appliance repair",
            description,
            provider: {
              "@type": "LocalBusiness",
              name: "Ajaxtec Appliance Repair",
              telephone: "+1-267-447-8580",
            },
            areaServed: AREAS,
          }),
        },
      ],
    };
  },
  component: WasherDryerLanding,
});

function WasherDryerLanding() {
  const { data: s } = useQuery({ queryKey: ["site-settings"], queryFn: () => getSiteSettings() });
  const phone = s?.phone ?? "+1 (267) 447-8580";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  useEffect(() => {
    trackLandingPageViewConversion();
  }, []);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Laundry Repair</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Washing Machine &amp; Dryer <span className="text-accent">Repair</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              From a washer that won't spin or drain to a dryer that runs cold. Licensed
              technicians, upfront pricing, and a diagnostic fee that's waived when you complete the
              repair with us.
            </p>
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
            <p className="mt-4 text-xs text-muted-foreground">
              Note: we do not currently service Samsung or LG washers and dryers.
            </p>
            <ReviewsBar className="mt-6" />
          </div>
          <ImagePlaceholder
            aspect="video"
            label="Washing Machine & Dryer Repair"
            src="/images/services/washingmachinrepair.webp"
            alt="Technician repairing a washing machine"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Any of these sound <span className="text-accent">familiar?</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We diagnose and repair the full range of washer and dryer problems — including the door
          seal (gasket) replacement most shops treat as a whole separate job.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Washing machine issues</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {WASHER_ISSUES.map((issue) => (
                <li key={issue} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Dryer issues</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {DRYER_ISSUES.map((issue) => (
                <li key={issue} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Don't see your exact issue listed? Call us anyway — if it's a washer or dryer problem, we
          can almost certainly help.
        </p>
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
                <JobyBookingWidget />
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

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Areas we <span className="text-accent">cover</span>
            </h2>
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
      </section>

      <FinalCta
        heading={
          <>
            Washer or dryer acting <span className="text-accent">up?</span>
          </>
        }
        subtitle="Book your appointment online, or call us directly for same-day help."
      />
    </div>
  );
}
