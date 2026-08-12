import { createFileRoute, Link } from "@tanstack/react-router";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { MapPin } from "lucide-react";
import { FinalCta } from "@/components/site/FinalCta";

const AREAS = [
  {
    name: "Trenton",
    blurb:
      "Our home base. We know Trenton neighborhoods and can typically reach customers same day when schedules allow.",
  },
  {
    name: "Newark",
    blurb:
      "Regular routes throughout Newark, from historic brownstones to modern condos with built-in Sub-Zero and Wolf.",
  },
  {
    name: "Camden",
    blurb:
      "Coverage across Camden for premium refrigeration, ranges and ovens in single-family and multi-family homes.",
  },
  {
    name: "Jersey City",
    blurb: "High-rise and townhouse service across Jersey City for premium residential kitchens.",
  },
  {
    name: "Elizabeth, NJ",
    blurb: "Serving Elizabeth NJ homeowners for repair and preventive maintenance.",
  },
  {
    name: "Philadelphia, PA",
    blurb:
      "Frequent service across Philadelphia neighborhoods for built-in and professional-grade kitchen appliances.",
  },
  {
    name: "Bucks County, PA",
    blurb:
      "Coverage limited to the Bucks County communities closest to the Trenton border — Yardley, Morrisville and Langhorne. We don't currently reach central or western Bucks County.",
  },
  {
    name: "North & Central NJ",
    blurb:
      "Broader coverage across North and Central New Jersey for high-end residential appliances.",
  },
];

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area | Sub-Zero & Viking Repair Coverage in NJ & PA" },
      {
        name: "description",
        content:
          "We repair premium kitchen appliances across Trenton, Newark, Camden, Jersey City, Elizabeth NJ, Philadelphia, Bucks County PA and North & Central New Jersey.",
      },
      { property: "og:title", content: "Service Area" },
      { property: "og:description", content: "Where we repair premium kitchen appliances." },
      { property: "og:url", content: absUrl("/service-area") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/service-area") }],
  }),
  component: ServiceArea,
});

function ServiceArea() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Service <span className="text-accent">area</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We serve homeowners across the Trenton area, Philadelphia and Northern &amp; Central New
            Jersey. Same-day service depends on technician availability — we'll tell you honestly
            when we can be there.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a.name} className="rounded-lg border border-border bg-card p-6">
              <MapPin className="h-5 w-5 text-accent" aria-hidden />
              <h2 className="mt-4 text-lg font-semibold">{a.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Where we <span className="text-accent">service</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our coverage spans New Jersey and Pennsylvania, centered on the Trenton area.
          </p>
          <div className="mt-8 h-[420px] overflow-hidden rounded-lg border border-border md:h-[640px]">
            <iframe
              title="Map of NJ and PA service area"
              src="https://maps.google.com/maps?ll=40.927171,-75.77488&z=8&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Not sure if we cover your address?{" "}
            <Link to="/contact" className="text-accent hover:underline">
              Send us a request
            </Link>{" "}
            and we'll confirm.
          </p>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
