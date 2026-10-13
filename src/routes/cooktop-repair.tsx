import { createFileRoute } from "@tanstack/react-router";
import {
  ServicePage,
  servicePageHead,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const CONFIG: ServicePageConfig = {
  path: "/cooktop-repair",
  eyebrow: "Cooking Appliance Repair",
  titleLead: "Cooktop",
  titleAccent: "Repair",
  name: "Cooktop Repair",
  serviceType: "Cooktop repair",
  intro:
    "Burner won't light, induction zone won't heat or the touch controls stopped responding? We repair gas, induction and electric cooktops — with upfront pricing and a diagnostic fee waived when you complete the repair with us.",
  shortDescription: "Gas, induction and electric cooktop repair across NJ & PA — all major brands.",
  metaDetail:
    "Burner won't light, element or induction zone not heating, cracked glass or dead touch controls — we fix igniters, coils, elements and boards on Wolf, Thermador and more.",
  brandNote:
    "We repair cooktops from every brand, including Wolf, Viking, Thermador, Bosch, Miele, GE, Whirlpool, Samsung and LG.",
  image: "/images/services/cooktop-repair.webp",
  imageAlt: "Technician repairing a cooktop",
  issuesIntro:
    "Gas, induction and radiant electric — built-in and rangetop models. We diagnose and repair the full range of cooktop problems.",
  issueGroups: [
    {
      heading: "Gas cooktop issues",
      issues: [
        "Burner won't light",
        "Igniter keeps clicking after the burner lights",
        "Weak, uneven or yellow flame",
        "Burner lights then goes out",
        "Knobs loose, stuck or not turning",
        "Gas smell when a burner is on",
      ],
    },
    {
      heading: "Induction & electric cooktop issues",
      issues: [
        "Element or induction zone won't heat",
        "Burner stuck on high or won't turn off",
        "Touch controls not responding or locked",
        "Error code or flashing display",
        "Pan not detected on an induction zone",
        "Cracked or chipped glass top",
      ],
    },
  ],
  issuesFooter:
    "Smell gas strongly? Leave the house and call your gas utility first. For everything else, call us — if it's a cooktop problem, we can almost certainly help.",
  ctaHeading: (
    <>
      Cooktop not <span className="text-accent">heating?</span>
    </>
  ),
};

export const Route = createFileRoute("/cooktop-repair")({
  head: () => servicePageHead(CONFIG),
  component: () => <ServicePage config={CONFIG} />,
});
