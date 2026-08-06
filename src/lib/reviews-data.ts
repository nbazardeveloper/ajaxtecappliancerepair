import type { Testimonial } from "@/components/site/TestimonialCarousel";

// Real Google reviews for this business (AjaxTec Appliance Repair, 780
// Newtown-Yardley Rd, Newtown PA — same listing linked from the Google Maps
// place page), pulled from the reviews already published on their own site
// at ajaxtec.com. Exact review dates aren't exposed there, so `time` says
// "Google review" instead of a fabricated relative date.
export const SITE_REVIEWS: Testimonial[] = [
  {
    quote:
      "I hired this service to repair my Frigidaire refrigerator. I'm extremely pleased with the result. Kevin and his assistant came on time (and made two trips), took off their shoes at the front door without being asked, and informed me about each issue they found, showed me the new parts that were ordered, and showed me how to install the filter. He gave me a time window for his arrival, was prompt, efficient, and always respectful, polite, and professional. The price was fair. I highly recommend this service.",
    author: "Sonia S.",
    meta: "Verified customer",
    time: "Google review",
    service: "Refrigerator Repair",
  },
  {
    quote:
      "I was desperate to have my dryer repaired as I had wet clothes that needed drying. I called and they got back to me almost immediately and scheduled an appointment for the next day. Jonathan kept me informed as to his arrival. When he got to my home he was extremely professional, told me what he was going to do ahead of time, then told me what he found and offered his thoughts on repairing my dryer. He appeared to be knowledgeable in the appliance industry. Yes, I would definitely call Ajaxtec again.",
    author: "Amy C.",
    meta: "Verified customer",
    time: "Google review",
    service: "Dryer Repair",
  },
  {
    quote:
      "Great job! Quickly identified the challenge and fixed the issue. He also took the time to explain what went wrong and how to troubleshoot other potential challenges. Asked him to look at a few other items as well. Do yourself a favor and hire Ajaxtec!",
    author: "Sarah H.",
    meta: "Verified customer",
    time: "Google review",
  },
];
