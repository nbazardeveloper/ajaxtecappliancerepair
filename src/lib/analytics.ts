// Fires a Google Ads click-to-call conversion, then sends the browser to
// telHref. gtag is loaded in __root.tsx; guarded here since it isn't defined
// during SSR or if the tag ever fails to load.
//
// Clicking a tel: link hands off to the OS dialer immediately, which can cut
// the async gtag beacon off before it sends — this is why Google Ads wasn't
// registering these clicks. The fix (Google's own recommended pattern for
// click-to-call conversions) is to prevent the default navigation, fire the
// conversion with an event_callback, and only then send the browser to the
// tel: link — with a short fallback timeout so a blocked/slow beacon never
// stops the call from going through.
function reportCallConversion(
  telHref: string,
  params: { send_to: string; value: number; currency: string },
) {
  return (event: { preventDefault: () => void }) => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    event.preventDefault();

    let navigated = false;
    const goToPhone = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = telHref;
    };

    const fallback = window.setTimeout(goToPhone, 1000);
    window.gtag("event", "conversion", {
      ...params,
      event_callback: () => {
        window.clearTimeout(fallback);
        goToPhone();
      },
    });
  };
}

// Google Ads "Click to call (3)" conversion — fired on click of any tel: link
// site-wide (every page except the two ad landing pages, which have their own
// actions) so a phone call started from the site counts as a conversion in
// the AW-990368648 account. Replaced the earlier "Click to call" action.
export function trackCallConversion(telHref: string) {
  return reportCallConversion(telHref, {
    send_to: "AW-990368648/8SXaCOT6mYsdEIinn9gD",
    value: 95.0,
    currency: "USD",
  });
}

// Google Ads click-to-call conversion (label 95YTCNvbmIsdEIinn9gD) — the
// dedicated click-to-call conversion action for the washer/dryer landing
// page, so calls started from that page report separately from the rest of
// the site's phone links (see trackLandingPageViewConversion below for the
// same page-specific-conversion-action pattern). Replaced the earlier
// "Click to call (3)" action.
export function trackLandingCallConversion(telHref: string) {
  return reportCallConversion(telHref, {
    send_to: "AW-990368648/95YTCNvbmIsdEIinn9gD",
    value: 95.0,
    currency: "USD",
  });
}

// Google Ads "Page view (3)" conversion — a proxy conversion for the
// /contact page: counts every visit to the contact page. The real completed
// booking is tracked separately on /thank-you (see trackBookingSubmitted).
export function trackBookingPageViewConversion() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "conversion", {
    send_to: "AW-990368648/cnAUCJWq7PUcEIinn9gD",
  });
}

// Google Ads "Page view (4)" conversion — the dedicated page-load conversion
// action set up in Ads specifically for the washer/dryer landing page (same
// proxy-conversion rationale as trackBookingPageViewConversion above, just
// its own conversion action so this page's traffic reports separately from
// /contact's).
export function trackLandingPageViewConversion() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "conversion", {
    send_to: "AW-990368648/BS6rCKauif8cEIinn9gD",
    value: 1.0,
    currency: "USD",
  });
}

// Google Ads "Click to call (2)" conversion — the dedicated click-to-call
// conversion action for the /appliance-repair landing page, kept separate
// from the washer/dryer page's "Click to call (3)" so the two ad groups
// report independently. Replaced the earlier "Click to call (4)" action.
export function trackApplianceRepairCallConversion(telHref: string) {
  return reportCallConversion(telHref, {
    send_to: "AW-990368648/lrUhCJLck4sdEIinn9gD",
    value: 1.0,
    currency: "USD",
  });
}

// Page-load conversion for /appliance-repair — intentionally a no-op until
// that page gets its own page-view conversion action in Ads (firing the
// washer/dryer page's "Page view (4)" here would mix the two pages' numbers).
export function trackApplianceRepairPageViewConversion() {}

// OpenAI Ads pixel "appointment_scheduled" event — fired on /thank-you,
// where the Joby booking form (BOOKING_FORM_URL) sends visitors after a
// successful booking. The base oaiq snippet is loaded in __root.tsx.
export function trackAppointmentScheduled() {
  if (typeof window === "undefined") return;
  window.oaiq?.("measure", "appointment_scheduled", { type: "customer_action" });
}

// Completed booking — fired on /thank-you. Pushes a `booking_submitted` event
// to dataLayer (for GTM/GA) and fires the Google Ads "PA Booking Thank-you"
// page-load conversion. dataLayer/gtag are defined in __root.tsx's <head>.
export function trackBookingSubmitted() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "booking_submitted" });
  window.gtag?.("event", "conversion", {
    send_to: "AW-990368648/c5CNCLquo6wdEIinn9gD",
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    oaiq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
