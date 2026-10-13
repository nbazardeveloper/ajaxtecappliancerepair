import { createFileRoute } from "@tanstack/react-router";
import {
  ServicePage,
  servicePageHead,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const CONFIG: ServicePageConfig = {
  path: "/refrigerator-repair",
  eyebrow: "Refrigeration Repair",
  titleLead: "Refrigerator & Freezer",
  titleAccent: "Repair",
  name: "Refrigerator Repair",
  serviceType: "Refrigerator repair",
  intro:
    "Fridge not cooling, freezer frosting up or water on the floor? Licensed technicians, upfront pricing, and a diagnostic fee that's waived when you complete the repair with us.",
  shortDescription:
    "Same-day refrigerator and freezer repair across NJ & PA — built-in and freestanding.",
  metaDetail:
    "Not cooling, leaking, icing up or noisy — we fix compressors, fans, defrost systems, control boards and door seals. $95 diagnostic waived with repair.",
  brandNote:
    "We repair refrigerators from most brands, including Sub-Zero, Viking, Thermador, GE, Whirlpool and KitchenAid — except Samsung, LG and Liebherr.",
  image: "/images/services/refrigerator-freezer-repair.webp",
  imageAlt: "Technician repairing a built-in refrigerator",
  issuesIntro:
    "We diagnose and repair the full range of refrigerator and freezer problems — built-in, French-door, side-by-side, top- and bottom-freezer models.",
  issueGroups: [
    {
      heading: "Refrigerator issues",
      issues: [
        "Not cooling, or running warm",
        "Too cold — freezing food in the fresh-food section",
        "Water leaking inside or onto the floor",
        "Loud buzzing, clicking or humming noises",
        "Runs constantly or cycles on and off",
        "Door seal (gasket) torn or not sealing",
        "Water dispenser not working",
        "Lights or display not working",
      ],
    },
    {
      heading: "Freezer issues",
      issues: [
        "Freezer not freezing — ice cream soft",
        "Frost or ice buildup on the back wall",
        "Defrost system failure",
        "Evaporator or condenser fan not running",
        "Compressor not starting",
        "Temperature alarm going off",
      ],
    },
  ],
  issuesFooter:
    "Don't see your exact issue listed? Call us anyway — if your fridge or freezer isn't right, we can almost certainly help.",
  ctaHeading: (
    <>
      Refrigerator not <span className="text-accent">cooling?</span>
    </>
  ),
};

export const Route = createFileRoute("/refrigerator-repair")({
  head: () => servicePageHead(CONFIG),
  component: () => <ServicePage config={CONFIG} />,
});
