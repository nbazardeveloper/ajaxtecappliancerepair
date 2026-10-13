import { createFileRoute } from "@tanstack/react-router";
import {
  ServicePage,
  servicePageHead,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const CONFIG: ServicePageConfig = {
  path: "/gas-stove-repair",
  eyebrow: "Cooking Appliance Repair",
  titleLead: "Gas Stove & Range",
  titleAccent: "Repair",
  name: "Gas Stove Repair",
  serviceType: "Gas stove and range repair",
  intro:
    "Burners won't light, igniter keeps clicking or the oven won't heat? Licensed technicians repair gas and dual-fuel stoves and ranges, with upfront pricing and a diagnostic fee waived when you complete the repair with us.",
  shortDescription:
    "Gas stove and range repair across NJ & PA — burners, igniters, valves and ovens.",
  metaDetail:
    "Burner won't light, constant clicking, weak flame or oven not heating — we fix igniters, spark modules, valves and controls on Wolf, Viking and more.",
  brandNote:
    "We repair gas stoves and ranges from every brand, including Wolf, Viking, Thermador, Bertazzoni, Dacor, GE, Whirlpool, Samsung and LG.",
  image: "/images/services/range-stove-repair.webp",
  imageAlt: "Technician repairing a gas range",
  issuesIntro:
    "Freestanding, slide-in and pro-style gas and dual-fuel ranges — we diagnose and repair both the cooktop burners and the oven.",
  issueGroups: [
    {
      heading: "Burner & cooktop issues",
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
      heading: "Gas oven issues",
      issues: [
        "Oven won't light or won't heat",
        "Oven takes too long to preheat",
        "Temperature runs too hot or too cold",
        "Broiler not working",
        "Control panel or display not responding",
        "Oven door won't close or seal properly",
      ],
    },
  ],
  issuesFooter:
    "Smell gas strongly? Leave the house and call your gas utility first. For everything else, call us — if it's a stove or range problem, we can almost certainly help.",
  ctaHeading: (
    <>
      Stove burner won't <span className="text-accent">light?</span>
    </>
  ),
};

export const Route = createFileRoute("/gas-stove-repair")({
  head: () => servicePageHead(CONFIG),
  component: () => <ServicePage config={CONFIG} />,
});
