import { createFileRoute } from "@tanstack/react-router";
import {
  ServicePage,
  servicePageHead,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const CONFIG: ServicePageConfig = {
  path: "/oven-repair",
  eyebrow: "Cooking Appliance Repair",
  titleLead: "Oven",
  titleAccent: "Repair",
  name: "Oven Repair",
  serviceType: "Oven repair",
  intro:
    "Oven not heating, cooking unevenly or showing an error code? We repair wall ovens, double ovens, range ovens, convection and steam ovens — with upfront pricing and a diagnostic fee waived when you complete the repair with us.",
  shortDescription: "Gas and electric oven repair across NJ & PA — wall, double and range ovens.",
  metaDetail:
    "Not heating, uneven baking, wrong temperature or broken door — we fix elements, igniters, sensors, fans and control boards on Wolf, Viking and more.",
  brandNote:
    "We repair ovens from every brand, including Wolf, Viking, Thermador, Bosch, Miele, GE, Whirlpool, Samsung and LG.",
  image: "/images/services/oven-repair.webp",
  imageAlt: "Technician repairing a wall oven",
  issuesIntro:
    "Gas and electric, single and double, convection and steam — we diagnose and repair the full range of oven problems.",
  issueGroups: [
    {
      heading: "Common oven problems",
      issues: [
        "Oven won't turn on or won't heat",
        "Bake or broil element not working",
        "Gas oven igniter glows but won't light",
        "Temperature too hot, too cold or uneven",
        "Takes too long to preheat",
        "Convection fan not running or noisy",
        "Error code or flashing display",
        "Control panel or touch controls not responding",
        "Self-clean cycle not working, or door stuck locked",
        "Door won't close, hinge broken or glass cracked",
        "Oven light not working",
        "Steam oven not producing steam",
      ],
    },
  ],
  issuesFooter:
    "Don't see your exact issue listed? Call us anyway — if your oven isn't working right, we can almost certainly help.",
  ctaHeading: (
    <>
      Oven not <span className="text-accent">heating?</span>
    </>
  ),
};

export const Route = createFileRoute("/oven-repair")({
  head: () => servicePageHead(CONFIG),
  component: () => <ServicePage config={CONFIG} />,
});
