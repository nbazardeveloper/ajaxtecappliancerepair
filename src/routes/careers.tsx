import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getSiteSettings } from "@/lib/site.functions";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Button } from "@/components/ui/button";

const PERKS = [
  {
    title: "Premium equipment",
    body: "Work on Sub-Zero, Viking, Wolf and other high-end brands — not builder-grade volume calls.",
  },
  {
    title: "Competitive pay",
    body: "Compensation that reflects your experience and skill, discussed openly in the interview.",
  },
  {
    title: "Steady schedule",
    body: "A consistent flow of booked appointments across New Jersey and Pennsylvania.",
  },
  {
    title: "Room to grow",
    body: "Learn premium refrigeration and cooking systems alongside technicians with 17 years in the trade.",
  },
];

const REQUIREMENTS = [
  "Hands-on experience repairing residential appliances (refrigeration and/or cooking).",
  "Ability to diagnose electrical, mechanical and sealed-system issues.",
  "Valid driver's license and a clean driving record.",
  "EPA Section 608 certification preferred (or willingness to obtain it).",
  "Professional, respectful communication with homeowners.",
  "Located in or willing to cover our NJ & PA service area.",
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Appliance Repair Technician Jobs in NJ & PA" },
      {
        name: "description",
        content:
          "Join Ajaxtec Appliance Repair. We're hiring experienced appliance repair technicians to service Sub-Zero, Viking and Wolf appliances across NJ & PA.",
      },
      { property: "og:title", content: "Careers at Ajaxtec Appliance Repair" },
      {
        property: "og:description",
        content: "We're hiring appliance repair technicians in NJ & PA.",
      },
      { property: "og:url", content: absUrl("/careers") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/careers") }],
  }),
  component: Careers,
});

function Careers() {
  const { data: s } = useQuery({ queryKey: ["site-settings"], queryFn: () => getSiteSettings() });

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              We're hiring
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Appliance repair <span className="text-accent">technician</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              We're looking for skilled technicians to join our team servicing premium kitchen
              appliances across New Jersey and Pennsylvania.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              If you take pride in accurate diagnostics, clean work and honest communication with
              customers, we'd like to hear from you.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="#apply">Apply now</a>
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            aspect="video"
            label="Premium kitchen appliances"
            src="/images/hero5.webp"
            alt="Built-in Sub-Zero wine cooler and refrigerator in a premium kitchen"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Why work <span className="text-accent">with us</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What we're <span className="text-accent">looking for</span>
          </h2>
          <ul className="mt-8 grid gap-3">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex items-start gap-3 text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-20 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          <span className="text-accent">Apply</span> today
        </h2>
        <p className="mt-3 text-muted-foreground">
          Send your résumé by email or give us a call — tell us about your experience, the brands
          you've worked on and your availability.
        </p>

        {s && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={`mailto:${s.email}?subject=${encodeURIComponent("Technician application")}`}>
                <Mail className="h-4 w-4" aria-hidden />
                {s.email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${s.phone.replace(/[^\d+]/g, "")}`}>
                <Phone className="h-4 w-4" aria-hidden />
                {s.phone}
              </a>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
