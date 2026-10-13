import { createFileRoute } from "@tanstack/react-router";
import {
  ServicePage,
  servicePageHead,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const CONFIG: ServicePageConfig = {
  path: "/ice-maker-repair",
  eyebrow: "Ice Maker Repair",
  titleLead: "Ice Maker",
  titleAccent: "Repair",
  name: "Ice Maker Repair",
  serviceType: "Ice maker repair",
  intro:
    "No ice, small or cloudy cubes, or water leaking from the ice maker? We repair built-in, undercounter and in-refrigerator ice makers — with upfront pricing and a diagnostic fee waived when you complete the repair with us.",
  shortDescription:
    "Ice maker repair across NJ & PA — built-in, undercounter and in-fridge ice makers.",
  metaDetail:
    "Not making ice, leaking or making small cubes — we fix water valves, augers, mold heaters and control modules on Sub-Zero, Scotsman, U-Line and more.",
  brandNote:
    "We repair Sub-Zero, Scotsman, Hoshizaki, U-Line, Marvel, KitchenAid, GE Monogram, Viking, Manitowoc and more — except in Samsung, LG and Liebherr refrigerators.",
  image: "/images/services/ice-maker-repair.webp",
  imageAlt: "Technician repairing a built-in ice maker",
  issuesIntro:
    "Standalone and built-in ice machines, clear-ice makers and the ice makers inside your refrigerator — we diagnose and repair them all.",
  issueGroups: [
    {
      heading: "Common ice maker problems",
      issues: [
        "Not making ice at all",
        "Making very little ice, or small/hollow cubes",
        "Cloudy ice from a clear-ice maker",
        "Ice clumping or melting together in the bin",
        "Water leaking under or around the ice maker",
        "Ice tastes or smells bad",
        "Ice dispenser not dispensing",
        "Auger or motor jammed or grinding",
        "Water inlet valve or water line frozen",
        "Drain pump not draining",
        "Ice maker won't stop making ice",
        "Error light or control module fault",
      ],
    },
  ],
  issuesFooter:
    "Don't see your exact issue listed? Call us anyway — if your ice maker isn't working right, we can almost certainly help.",
  ctaHeading: (
    <>
      Ice maker stopped <span className="text-accent">working?</span>
    </>
  ),
};

export const Route = createFileRoute("/ice-maker-repair")({
  head: () => servicePageHead(CONFIG),
  component: () => <ServicePage config={CONFIG} />,
});
