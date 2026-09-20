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

// Google Ads "Click to call" conversion — fired on click of any tel: link
// site-wide so a phone call started from the site counts as a conversion in
// the AW-990368648 account.
export function trackCallConversion(telHref: string) {
  return reportCallConversion(telHref, {
    send_to: "AW-990368648/N7DWCOv_gv8cEIinn9gD",
    value: 95.0,
    currency: "USD",
  });
}

// Google Ads "Click to call (3)" conversion — the dedicated click-to-call
// conversion action set up in Ads specifically for the washer/dryer landing
// page, so calls started from that page report separately from the rest of
// the site's phone links (see trackLandingPageViewConversion below for the
// same page-specific-conversion-action pattern).
export function trackLandingCallConversion(telHref: string) {
  return reportCallConversion(telHref, {
    send_to: "AW-990368648/AUu5COK8iv8cEIinn9gD",
    value: 1.0,
    currency: "USD",
  });
}

// Google Ads "Page view (3)" conversion — a proxy conversion for the
// /contact page. The actual booking happens inside Joby's embedded iframe (a
// different origin), which doesn't expose a "booking completed" signal we
// can listen for, so this counts every visit to the booking page instead of
// the real completed booking. Less precise, but the only client-side signal
// available until Joby offers a postMessage/webhook on success.
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

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
