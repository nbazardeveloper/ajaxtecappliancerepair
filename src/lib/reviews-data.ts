import type { Testimonial } from "@/components/site/TestimonialCarousel";

// Real Google reviews for this business, pulled directly from the AjaxTec
// Appliance Repair Google Business Profile (Newtown, PA — 4.9★, 88 reviews):
// https://www.google.com/maps/place/AjaxTec+Appliance+Repair/@40.2339745,-75.0458739,17z/data=!4m8!3m7!1s0x89c6b3c19d3b9243:0x9898463ffa3952c6!8m2!3d40.2339745!4d-75.0458739!9m1!1b1!16s%2Fg%2F11lgxc35kb
export const SITE_REVIEWS: Testimonial[] = [
  {
    quote:
      "Jonathan did an amazing job with our refrigerator. He was able to quickly assess the issue and talked us through the whole process. He's a top tier technician.",
    author: "Marcus C.",
    meta: "Verified customer",
    time: "Google review",
    service: "Refrigerator Repair",
  },
  {
    quote:
      "Great service. Jonathan showed me and explained in detail why my refrigerator wasn't working, and he was able to fix it right away! Would recommend if you have appliance issues.",
    author: "Jason X.",
    meta: "Local Guide",
    time: "Google review",
    service: "Refrigerator Repair",
  },
  {
    quote:
      "Jonathan came quickly and was able to repair my dryer in less than 24 hours! He communicated thoroughly and was a pleasure to work with. I would definitely use him again for any future needs.",
    author: "Haley Johnson",
    meta: "Verified customer",
    time: "Google review",
    service: "Dryer Repair",
  },
  {
    quote:
      "We have used this company more than once and every time we are impressed by their quick response time, efficiency, and good communication. With each repair they have saved us from buying new appliances, and their prices are affordable. I have and will continue to refer them to others!",
    author: "A. Laken",
    meta: "Verified customer",
    time: "Google review",
  },
  {
    quote:
      "Amazing service — called back in a timely manner, very accommodating with schedule, fair pricing, highly recommended!! Overall... outstanding!!",
    author: "Karen Damato",
    meta: "Verified customer",
    time: "Google review",
  },
];
