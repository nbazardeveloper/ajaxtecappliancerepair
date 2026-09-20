import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { getSiteSettings } from "@/lib/site.functions";
import { trackCallConversion } from "@/lib/analytics";

// Shared confirmation page for every booking form on the site (main contact
// scheduler, washer/dryer landing page, and any future ones) — one place to
// land after a successful Joby booking instead of a separate thank-you page
// per form. Not indexed: it's a transient confirmation state, not content.
export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Ajaxtec Appliance Repair" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { data: s } = useQuery({ queryKey: ["site-settings"], queryFn: () => getSiteSettings() });
  const phone = s?.phone ?? "+1 (267) 447-8580";
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center md:px-8">
      <CheckCircle2 className="h-16 w-16 text-accent" aria-hidden />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        Thank <span className="text-accent">you</span>
      </h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Your appointment request has been received. Our team will reach out shortly to confirm the
        date and time — please keep your phone handy.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={telHref} onClick={trackCallConversion(telHref)}>
          <Button size="lg" className="gap-2">
            <Phone className="h-4 w-4" /> Call {phone}
          </Button>
        </a>
        <Link to="/">
          <Button size="lg" variant="outline">
            Back to homepage
          </Button>
        </Link>
      </div>

      <GuaranteeBadge className="mt-10" />
    </div>
  );
}
