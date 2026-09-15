// Static content for the site — services, projects, blog posts and site
// settings, frozen as of the last live sync with Supabase (see git history
// for when). The site no longer has a database or admin panel: content
// changes now happen by editing this file (and blog-data.ts for article
// bodies) and redeploying.

import { BLOG_ARTICLES } from "./blog-data";

export type SiteSettings = {
  business_name: string;
  phone: string;
  email: string;
  address: string | null;
  hours: string | null;
  diagnostic_fee: string | null;
  social_links: Record<string, string>;
  review_count: number | null;
  review_rating: number | null;
  yelp_review_count: number | null;
  yelp_review_rating: number | null;
};

export const SITE_SETTINGS: SiteSettings = {
  business_name: "Ajaxtec Appliance Repair",
  phone: "+1 (267) 447-8580",
  email: "ajaxtecappliancerepair@gmail.com",
  address: null,
  hours: null,
  diagnostic_fee: "$95, waived when the repair is completed ($125 in Philadelphia, also waived)",
  social_links: {
    facebook: "https://www.facebook.com/AjaxTec-107763788061097/",
    google_reviews:
      "https://www.google.com/maps/place/AjaxTec+Appliance+Repair/@40.2339745,-75.0458739,17z/data=!4m8!3m7!1s0x89c6b3c19d3b9243:0x9898463ffa3952c6!8m2!3d40.2339745!4d-75.0458739!9m1!1b1!16s%2Fg%2F11lgxc35kb",
  },
  review_count: 88,
  review_rating: 4.9,
  yelp_review_count: null,
  yelp_review_rating: 4.9,
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  brands: string[];
  category: string;
  short_description: string;
  description: string;
  image_url: string | null;
  is_published: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
};

export const SERVICES: Service[] = [
  {
    id: "d78ebae1-8f85-412c-bc63-46d7c0c395eb",
    slug: "refrigerator-freezer-repair",
    title: "Refrigerator & Freezer Repair",
    brands: ["Sub-Zero", "Viking", "Thermador", "GE Monogram"],
    category: "Refrigeration",
    short_description: "Expert repair for built-in and freestanding refrigerators and freezers.",
    description:
      "We service Sub-Zero, Viking, Thermador and other premium built-in and freestanding refrigerators and freezers. Common issues we resolve include temperature problems, compressor failures, evaporator icing, condenser cleaning, control board faults, door seal replacement and drainage issues.",
    image_url: "/images/services/refrigerator-freezer-repair.webp",
    is_published: true,
    is_featured: true,
    sort_order: 1,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "cce96f68-53fa-406e-baf9-69ffd54b9f7a",
    slug: "wine-cooler-repair",
    title: "Wine Cooler Repair",
    brands: ["Sub-Zero", "Viking", "Thermador"],
    category: "Refrigeration",
    short_description: "Precision service for wine preservation units and dual-zone wine coolers.",
    description:
      "Wine coolers require careful diagnostics to protect your collection. We repair cooling systems, thermostats, dual-zone controls, humidity issues, door seals and lighting on Sub-Zero, Viking and other premium wine preservation units.",
    image_url: "/images/services/wine-cooler-repair.webp",
    is_published: true,
    is_featured: true,
    sort_order: 2,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "021c6e5f-c3b2-4722-9e6d-e2d768ee03c8",
    slug: "ice-maker-repair",
    title: "Ice Maker Repair",
    brands: [
      "Sub-Zero",
      "Scotsman",
      "Hoshizaki",
      "U-Line",
      "Marvel",
      "KitchenAid",
      "GE Monogram",
      "Viking",
      "Manitowoc",
    ],
    category: "Refrigeration",
    short_description: "Repair for built-in and clear-ice ice makers.",
    description:
      "From dedicated built-in ice makers to in-refrigerator ice systems, we diagnose water inlet valves, ice mold heaters, augers, control modules and clear-ice production issues.",
    image_url: "/images/services/ice-maker-repair.webp",
    is_published: true,
    is_featured: true,
    sort_order: 3,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "9c108b75-3c8c-45e6-b450-84a8185a5316",
    slug: "range-stove-repair",
    title: "Range & Stove Repair",
    brands: ["Viking", "Wolf", "Thermador", "Bertazzoni", "Dacor"],
    category: "Cooking",
    short_description: "Gas and electric range and stove repair for premium brands.",
    description:
      "We repair gas and dual-fuel ranges, sealed burners, ignition modules, safety valves, oven igniters, electric elements and control boards on Viking, Wolf, Thermador, Bertazzoni and Dacor equipment.",
    image_url: "/images/services/range-stove-repair.webp",
    is_published: true,
    is_featured: true,
    sort_order: 4,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "33365d41-6d0b-46a9-b2a0-fe430ddbd66c",
    slug: "oven-repair",
    title: "Oven Repair",
    brands: ["Wolf", "Viking", "Thermador", "Bosch"],
    category: "Cooking",
    short_description: "Wall oven and range oven diagnostics and repair.",
    description:
      "Wall ovens, double ovens, convection and steam ovens — we address heating faults, thermostat calibration, door hinges, glass replacement, control boards and fan systems.",
    image_url: "/images/services/oven-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 5,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "8e5fcd53-3de4-49f3-a501-0709a398c85d",
    slug: "cooktop-repair",
    title: "Cooktop Repair",
    brands: ["Wolf", "Viking", "Thermador", "Bosch"],
    category: "Cooking",
    short_description: "Gas, induction and electric cooktop repair.",
    description:
      "Cooktop repair for gas, induction and radiant electric surfaces. We handle burner ignition, sealed-burner cleaning and rebuild, induction coil replacement, glass-top replacement and touch controls.",
    image_url: "/images/services/cooktop-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 6,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "0fb786e2-e322-4c98-8c28-c0f7cf7a718f",
    slug: "range-hood-repair",
    title: "Range Hood & Ventilation Repair",
    brands: ["Wolf", "Viking", "Thermador"],
    category: "Ventilation",
    short_description: "Repair for professional range hoods, blowers and downdraft ventilation.",
    description:
      "We service internal and external blowers, downdraft systems, lighting, dampers and controls on professional-grade range hoods.",
    image_url: "/images/services/range-hood-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 7,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "81c07b23-1ec9-47df-9626-a21aadc25b72",
    slug: "outdoor-kitchen-bbq-repair",
    title: "Outdoor Kitchen & BBQ Repair",
    brands: ["Wolf", "Viking", "Sub-Zero"],
    category: "Outdoor",
    short_description: "Repair for outdoor grills, outdoor refrigeration and BBQ islands.",
    description:
      "We repair outdoor grills, outdoor refrigeration, warming drawers and outdoor kitchen components — burners, ignition, gas systems and weather-related failures.",
    image_url: "/images/services/outdoor-kitchen-bbq-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 8,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "135f0d69-d099-467f-873a-a5abc9c1dc6b",
    slug: "warming-drawer-repair",
    title: "Warming Drawer & Food Warmer Repair",
    brands: ["Wolf", "Viking", "Thermador"],
    category: "Cooking",
    short_description: "Precise repair for built-in warming drawers.",
    description:
      "Warming drawer heating elements, controls, thermostats and drawer mechanisms serviced on Wolf, Viking and Thermador units.",
    image_url: "/images/services/warming-drawer-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 9,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "bb6e2449-5151-4567-a221-163dc01bbb11",
    slug: "microwave-repair",
    title: "Microwave Repair",
    brands: ["Wolf", "Viking", "Thermador", "GE Monogram"],
    category: "Cooking",
    short_description: "Built-in and speed-oven microwave repair.",
    description:
      "We repair built-in microwaves, drawer microwaves, speed ovens and convection microwaves, including magnetrons, high-voltage components, door interlocks and control boards.",
    image_url: "/images/services/microwave-repair.webp",
    is_published: true,
    is_featured: false,
    sort_order: 10,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "84dacca6-e651-4b41-b070-b4ce2df54253",
    slug: "preventive-maintenance",
    title: "Preventive Maintenance & Diagnostics",
    brands: [
      "Sub-Zero",
      "Viking",
      "Wolf",
      "Thermador",
      "Bosch",
      "Dacor",
      "GE Monogram",
      "Bertazzoni",
    ],
    category: "Maintenance",
    short_description: "Scheduled maintenance to extend the life of premium appliances.",
    description:
      "Preventive maintenance for refrigeration and cooking appliances: condenser cleaning, seal inspection, calibration, safety checks and full diagnostics to prevent costly failures.",
    image_url: "/images/services/preventive-maintenance.webp",
    is_published: true,
    is_featured: true,
    sort_order: 11,
    created_at: "2026-07-17T16:31:20.095328+00:00",
  },
  {
    id: "f3a9c1e2-7b4d-4a6f-9c2e-1d8b5a7f6c3e",
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    brands: ["Any Brand"],
    category: "Laundry",
    short_description: "Repair for washing machines of any brand.",
    description:
      "We repair washing machines of any brand — front-load, top-load and stackable units. Common issues we resolve include drainage and drum problems, leaks, spin cycle failures, control board faults and door seal replacement.",
    image_url: "/images/services/washingmachinrepair.webp",
    is_published: true,
    is_featured: true,
    sort_order: 12,
    created_at: "2026-09-14T00:00:00.000000+00:00",
  },
];

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  brands: string[];
  service_area: string | null;
  image_urls: string[];
  completed_on: string | null;
  is_published: boolean;
  created_at: string;
};

export const PROJECTS: Project[] = [
  {
    id: "81c22014-1f2b-40ea-be2a-1aaf9523cabb",
    slug: "sub-zero-model-424-wine-storage-repair",
    title: "Sub-Zero Model 424 Wine Storage Repair",
    description:
      "Diagnosed cooling failure and temperature fluctuation on a Sub-Zero Model 424 under-counter wine cooler. Repaired sealed system components and calibrated digital thermostat controls.",
    brands: ["Sub-Zero"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/sub-zero-model-424-wine-storage-repair-1.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-21T06:19:31.461314+00:00",
  },
  {
    id: "cde5fc12-82ef-4484-a882-4e27b11e887f",
    slug: "sub-zero-built-in-wine-cooler-refrigerator-service",
    title: "Sub-Zero Built-In Wine Cooler & Refrigerator Service",
    description:
      "Diagnosed and serviced a custom Sub-Zero dual-zone wine preservation unit and integrated refrigerator. Restored precise dual-zone temperature control and optimal cooling efficiency.",
    brands: ["Sub-Zero"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/sub-zero-built-in-wine-cooler-refrigerator-service-1.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-21T06:16:37.48957+00:00",
  },
  {
    id: "0db5fdcf-2970-4e33-b7cb-ee09c2119bdf",
    slug: "WolfRangeIgniter",
    title: "Wolf Range Igniter & Control Board Repair",
    description:
      "Diagnosed a faulty igniter and failing control board on a Wolf gas range causing intermittent burner ignition. Replaced both components and verified consistent ignition and flame stability across all burners.",
    brands: ["Wolf"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/wolf-range-igniter-repair-1.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-19T17:29:58.534909+00:00",
  },
  {
    id: "dc4c305f-aaa8-490d-a62d-b7edac576c91",
    slug: "viking-wine-cooler-refrigerant-repair",
    title: "Viking Wine Cooler Refrigerant Repair",
    description:
      "Diagnosed and recharged the sealed refrigeration system on a built-in Viking wine cooler.",
    brands: ["Viking"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-wine-cooler-refrigerant-repair-1.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-wine-cooler-refrigerant-repair-2.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-wine-cooler-refrigerant-repair-3.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-17T17:19:42.59958+00:00",
  },
  {
    id: "08afe62b-73d8-4ede-b929-21654d6912c6",
    slug: "viking-refrigeration-repair",
    title: "Viking Refrigeration Repair",
    description:
      "Diagnosed and repaired a Viking built-in refrigeration unit, restoring normal cooling operation.",
    brands: ["Viking"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-1.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-2.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-3.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-4.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-5.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-refrigeration-repair-6.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-17T17:19:42.59958+00:00",
  },
  {
    id: "a2f3ffce-c8bd-4591-9673-9bbc36925da0",
    slug: "viking-range-repair",
    title: "Viking Range Repair",
    description:
      "Diagnosed and repaired a Viking gas range, addressing an ignition/wiring issue at the base panel.",
    brands: ["Viking"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-range-repair-1.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-range-repair-2.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/viking-range-repair-3.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-17T17:19:42.59958+00:00",
  },
  {
    id: "16e2c050-f3e6-4e85-9ee6-6212602ed2f3",
    slug: "sub-zero-built-in-refrigerator-service",
    title: "Sub-Zero Built-In Refrigerator Service",
    description:
      "Serviced a built-in stainless refrigerator, restoring full functionality after cooling issues.",
    brands: ["Sub-Zero"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/sub-zero-built-in-refrigerator-service-1.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/sub-zero-built-in-refrigerator-service-2.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-17T17:19:42.59958+00:00",
  },
  {
    id: "c4de7202-6697-4a2d-a7c3-4d3c0159a13a",
    slug: "dcs-outdoor-grill-cleaning-repair",
    title: "DCS Outdoor Grill Cleaning & Repair",
    description:
      "Serviced a built-in DCS outdoor grill — cleaned burners and grates and restored proper ignition.",
    brands: ["DCS"],
    service_area: null,
    image_urls: [
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/dcs-outdoor-grill-cleaning-repair-1.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/dcs-outdoor-grill-cleaning-repair-2.webp",
      "https://iuthigfkpmrppknefnju.supabase.co/storage/v1/object/public/site-media/projects/dcs-outdoor-grill-cleaning-repair-3.webp",
    ],
    completed_on: null,
    is_published: true,
    created_at: "2026-07-17T17:19:42.59958+00:00",
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  hero_image: string | null;
  paragraphs: string[];
  is_published: boolean;
  source: string;
  published_at: string;
  created_at: string;
};

// Article bodies are kept in blog-data.ts (BLOG_ARTICLES, keyed by slug)
// so long paragraph arrays don't bloat this file; this just maps them
// into the same row shape the old Supabase-backed blog_posts table used.
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "sub-zero-ice-maker-repair-when-ice-stops",
    slug: "sub-zero-ice-maker-repair-when-ice-stops",
    title: "Sub-Zero Ice Maker Repair When Ice Stops",
    meta_description:
      "Need sub-zero ice maker repair? Learn why premium ice systems fail, what a professional diagnosis covers, and when fast service protects your appliance.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-ice-maker-repair-when-ice-stops"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-15T00:00:00+00:00",
    created_at: "2026-07-15T00:00:00+00:00",
  },
  {
    id: "wolf-oven-repair-in-new-jersey-when-heat-fails",
    slug: "wolf-oven-repair-in-new-jersey-when-heat-fails",
    title: "Wolf Oven Repair in New Jersey When Heat Fails",
    meta_description:
      "Need Wolf oven repair in New Jersey? Get clear diagnostics, prompt service, and brand-specific care for your premium kitchen appliance today in your home.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-oven-repair-in-new-jersey-when-heat-fails"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-14T00:00:00+00:00",
    created_at: "2026-07-14T00:00:00+00:00",
  },
  {
    id: "viking-stove-repair-new-jersey-homeowners-trust",
    slug: "viking-stove-repair-new-jersey-homeowners-trust",
    title: "Viking Stove Repair New Jersey Homeowners Trust",
    meta_description:
      "Need Viking stove repair New Jersey homeowners can trust? Get fast service for burner, ignition, oven, and control issues with clear pricing expert care.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-stove-repair-new-jersey-homeowners-trust"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-13T00:00:00+00:00",
    created_at: "2026-07-13T00:00:00+00:00",
  },
  {
    id: "wolf-oven-repair-in-brooklyn-when-heat-fails",
    slug: "wolf-oven-repair-in-brooklyn-when-heat-fails",
    title: "Wolf Oven Repair in Brooklyn When Heat Fails",
    meta_description:
      "Need wolf oven repair in brooklyn? Get prompt in-home diagnostics, clear repair options, and careful service for premium built-in cooking equipment today.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-oven-repair-in-brooklyn-when-heat-fails"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-12T00:00:00+00:00",
    created_at: "2026-07-12T00:00:00+00:00",
  },
  {
    id: "viking-stove-repair-in-brooklyn-done-right",
    slug: "viking-stove-repair-in-brooklyn-done-right",
    title: "Viking Stove Repair in Brooklyn Done Right",
    meta_description:
      "Need Viking stove repair in Brooklyn? Get brand-specific service for ignition, burner, oven, and control problems, with clear pricing and care.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-stove-repair-in-brooklyn-done-right"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-11T00:00:00+00:00",
    created_at: "2026-07-11T00:00:00+00:00",
  },
  {
    id: "sub-zero-repair-in-new-jersey-done-right",
    slug: "sub-zero-repair-in-new-jersey-done-right",
    title: "Sub-Zero Repair in New Jersey Done Right",
    meta_description:
      "Need sub-zero repair in new jersey? Get fast, expert service for luxury refrigerators, freezers, and ice makers with clear pricing.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-repair-in-new-jersey-done-right"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-10T00:00:00+00:00",
    created_at: "2026-07-10T00:00:00+00:00",
  },
  {
    id: "sub-zero-repair-soho-ny-what-to-expect",
    slug: "sub-zero-repair-soho-ny-what-to-expect",
    title: "Sub-Zero Repair Soho NY: What to Expect",
    meta_description:
      "Need sub-zero repair soho ny? Learn common issues, service expectations, pricing, and how expert technicians protect premium appliances.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-repair-soho-ny-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-09T00:00:00+00:00",
    created_at: "2026-07-09T00:00:00+00:00",
  },
  {
    id: "wolf-vs-viking-ranges-which-fits-best",
    slug: "wolf-vs-viking-ranges-which-fits-best",
    title: "Wolf vs Viking Ranges: Which Fits Best?",
    meta_description:
      "Comparing wolf vs viking ranges? See how performance, heat control, design, maintenance, and long-term ownership really stack up.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-vs-viking-ranges-which-fits-best"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-08T00:00:00+00:00",
    created_at: "2026-07-08T00:00:00+00:00",
  },
  {
    id: "wolf-oven-repair-in-staten-island",
    slug: "wolf-oven-repair-in-staten-island",
    title: "Wolf Oven Repair in Staten Island",
    meta_description:
      "Need wolf oven repair in staten island? Get fast, expert service for heating, ignition, and control issues with clear pricing and no surprise fees.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-oven-repair-in-staten-island"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-07T00:00:00+00:00",
    created_at: "2026-07-07T00:00:00+00:00",
  },
  {
    id: "why-a-certified-sub-zero-repair-technician-matters",
    slug: "why-a-certified-sub-zero-repair-technician-matters",
    title: "Why a Certified Sub Zero Repair Technician Matters",
    meta_description:
      "Learn why hiring a certified Sub Zero repair technician protects performance, prevents repeat issues, and ensures expert service.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["why-a-certified-sub-zero-repair-technician-matters"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-06T00:00:00+00:00",
    created_at: "2026-07-06T00:00:00+00:00",
  },
  {
    id: "viking-stove-repair-in-staten-island",
    slug: "viking-stove-repair-in-staten-island",
    title: "Viking Stove Repair in Staten Island",
    meta_description:
      "Need Viking stove repair in Staten Island? Get fast, expert service for ignition, burner, oven, and control issues with clear pricing.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-stove-repair-in-staten-island"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-05T00:00:00+00:00",
    created_at: "2026-07-05T00:00:00+00:00",
  },
  {
    id: "same-day-refrigerator-service-that-makes-sense",
    slug: "same-day-refrigerator-service-that-makes-sense",
    title: "Same Day Refrigerator Service That Makes Sense",
    meta_description:
      "Need same day refrigerator service? Learn what to expect, when to call, and why brand-specific repair matters for premium built-in refrigerators.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["same-day-refrigerator-service-that-makes-sense"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-04T00:00:00+00:00",
    created_at: "2026-07-04T00:00:00+00:00",
  },
  {
    id: "sub-zero-repair-in-brooklyn-what-to-expect",
    slug: "sub-zero-repair-in-brooklyn-what-to-expect",
    title: "Sub-Zero Repair in Brooklyn: What to Expect",
    meta_description:
      "Need sub-zero repair in Brooklyn? Learn the common issues, what expert service should include, and how to protect your premium refrigerator.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-repair-in-brooklyn-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-03T00:00:00+00:00",
    created_at: "2026-07-03T00:00:00+00:00",
  },
  {
    id: "same-day-appliance-repair-nyc-done-right",
    slug: "same-day-appliance-repair-nyc-done-right",
    title: "Same Day Appliance Repair NYC Done Right",
    meta_description:
      "Need same day appliance repair NYC homeowners trust? Get fast expert service for luxury kitchen appliances with clear pricing and skilled care.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["same-day-appliance-repair-nyc-done-right"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-02T00:00:00+00:00",
    created_at: "2026-07-02T00:00:00+00:00",
  },
  {
    id: "sub-zero-repair-in-staten-island",
    slug: "sub-zero-repair-in-staten-island",
    title: "Sub-Zero Repair in Staten Island",
    meta_description:
      "Need sub-zero repair in Staten Island? Get fast, expert service for cooling issues, leaks, ice maker problems, and built-in system failures.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-repair-in-staten-island"],
    is_published: true,
    source: "soro",
    published_at: "2026-07-01T00:00:00+00:00",
    created_at: "2026-07-01T00:00:00+00:00",
  },
  {
    id: "built-in-refrigerator-repair-nyc-what-to-expect",
    slug: "built-in-refrigerator-repair-nyc-what-to-expect",
    title: "Built In Refrigerator Repair NYC: What to Expect",
    meta_description:
      "Need built in refrigerator repair NYC? Learn common problems, service expectations, pricing, and why brand-specific expertise matters most.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["built-in-refrigerator-repair-nyc-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-30T00:00:00+00:00",
    created_at: "2026-06-30T00:00:00+00:00",
  },
  {
    id: "sub-zero-wine-cooler-repair-guide",
    slug: "sub-zero-wine-cooler-repair-guide",
    title: "Sub Zero Wine Cooler Repair Guide",
    meta_description:
      "Need sub zero wine cooler repair? Learn common warning signs, likely causes, repair timing, and when to call a brand-trained service expert fast.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-wine-cooler-repair-guide"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-29T00:00:00+00:00",
    created_at: "2026-06-29T00:00:00+00:00",
  },
  {
    id: "sub-zero-ice-maker-repair-what-to-expect",
    slug: "sub-zero-ice-maker-repair-what-to-expect",
    title: "Sub Zero Ice Maker Repair: What to Expect",
    meta_description:
      "Need sub zero ice maker repair? Learn common causes, warning signs, repair timelines, and what to expect from expert service for your unit.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-ice-maker-repair-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-28T00:00:00+00:00",
    created_at: "2026-06-28T00:00:00+00:00",
  },
  {
    id: "wolf-oven-not-heating-what-it-usually-means",
    slug: "wolf-oven-not-heating-what-it-usually-means",
    title: "Wolf Oven Not Heating? What It Usually Means",
    meta_description:
      "Wolf oven not heating? Learn the most common causes, what the symptoms usually mean, and when to schedule expert Wolf oven repair service fast.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-oven-not-heating-what-it-usually-means"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-27T00:00:00+00:00",
    created_at: "2026-06-27T00:00:00+00:00",
  },
  {
    id: "wolf-cooktop-repair-nyc-what-to-expect",
    slug: "wolf-cooktop-repair-nyc-what-to-expect",
    title: "Wolf Cooktop Repair NYC: What to Expect",
    meta_description:
      "Need wolf cooktop repair nyc homeowners trust? Learn common issues, what service should include, and when to schedule expert help fast.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["wolf-cooktop-repair-nyc-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-26T00:00:00+00:00",
    created_at: "2026-06-26T00:00:00+00:00",
  },
  {
    id: "viking-range-repair-manhattan-homeowners-trust",
    slug: "viking-range-repair-manhattan-homeowners-trust",
    title: "Viking Range Repair Manhattan Homeowners Trust",
    meta_description:
      "Need viking range repair manhattan service? Get fast expert diagnosis, brand-specific repairs, same-day availability, and no surprise fees.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-range-repair-manhattan-homeowners-trust"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-25T00:00:00+00:00",
    created_at: "2026-06-25T00:00:00+00:00",
  },
  {
    id: "viking-oven-repair-near-me-what-matters",
    slug: "viking-oven-repair-near-me-what-matters",
    title: "Viking Oven Repair Near Me: What Matters",
    meta_description:
      "Need viking oven repair near me? Learn what to look for in a qualified service company, common issues, pricing, and when fast expert help matters.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-oven-repair-near-me-what-matters"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-24T00:00:00+00:00",
    created_at: "2026-06-24T00:00:00+00:00",
  },
  {
    id: "viking-stove-repair-nyc-what-to-expect",
    slug: "viking-stove-repair-nyc-what-to-expect",
    title: "Viking Stove Repair NYC: What to Expect",
    meta_description:
      "Need Viking stove repair NYC? Learn common issues, what expert service should include, and how to protect your premium range with fast help.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["viking-stove-repair-nyc-what-to-expect"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-23T00:00:00+00:00",
    created_at: "2026-06-23T00:00:00+00:00",
  },
  {
    id: "are-sub-zero-refrigerators-worth-the-money",
    slug: "are-sub-zero-refrigerators-worth-the-money",
    title: "Are Sub-Zero Refrigerators Worth the Money?",
    meta_description:
      "Are Sub-Zero refrigerators worth the money? Learn what you get for the price, who benefits most, and when the investment makes sense.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["are-sub-zero-refrigerators-worth-the-money"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-22T00:00:00+00:00",
    created_at: "2026-06-22T00:00:00+00:00",
  },
  {
    id: "is-sub-zero-the-best-refrigerator",
    slug: "is-sub-zero-the-best-refrigerator",
    title: "Is Sub-Zero the Best Refrigerator?",
    meta_description:
      "Is Sub-Zero the best refrigerator? Learn where it stands on performance, longevity, design, and service before you invest in a luxury kitchen.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["is-sub-zero-the-best-refrigerator"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-21T00:00:00+00:00",
    created_at: "2026-06-21T00:00:00+00:00",
  },
  {
    id: "how-to-repair-sub-zero-refrigerator-problems",
    slug: "how-to-repair-sub-zero-refrigerator-problems",
    title: "How to Repair Sub Zero Refrigerator Problems",
    meta_description:
      "Learn how to repair Sub Zero refrigerator problems, what symptoms mean, when service is urgent, and how expert diagnosis protects your system.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["how-to-repair-sub-zero-refrigerator-problems"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-20T00:00:00+00:00",
    created_at: "2026-06-20T00:00:00+00:00",
  },
  {
    id: "how-much-does-it-cost-to-repair-a-sub-zero-refrigerator",
    slug: "how-much-does-it-cost-to-repair-a-sub-zero-refrigerator",
    title: "How Much Does It Cost to Repair a Sub-Zero Refrigerator?",
    meta_description:
      "How much does it cost to repair a Sub-Zero refrigerator? See typical repair prices, what affects cost, and when expert service makes sense.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["how-much-does-it-cost-to-repair-a-sub-zero-refrigerator"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-19T00:00:00+00:00",
    created_at: "2026-06-19T00:00:00+00:00",
  },
  {
    id: "best-sub-zero-refrigerator-repair-near-me",
    slug: "best-sub-zero-refrigerator-repair-near-me",
    title: "Best Sub Zero Refrigerator Repair Near Me",
    meta_description:
      "Searching for the best sub zero refrigerator repair near me? Learn what to look for in a specialist, what to expect, and how to avoid costly mistakes.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["best-sub-zero-refrigerator-repair-near-me"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-18T00:00:00+00:00",
    created_at: "2026-06-18T00:00:00+00:00",
  },
  {
    id: "sub-zero-refrigerator-repair-nyc",
    slug: "sub-zero-refrigerator-repair-nyc",
    title: "Sub Zero Refrigerator Repair NYC",
    meta_description:
      "Need sub zero refrigerator repair nyc homeowners trust? Get fast, expert service for leaks, warm temps, ice issues, and built-in cooling failures.",
    hero_image: null,
    paragraphs: BLOG_ARTICLES["sub-zero-refrigerator-repair-nyc"],
    is_published: true,
    source: "soro",
    published_at: "2026-06-17T00:00:00+00:00",
    created_at: "2026-06-17T00:00:00+00:00",
  },
];
