// Google Ads "Calls from website" conversion — fired on click of any tel:
// link so a phone call started from the site counts as a conversion in the
// AW-990368648 account. gtag is loaded in __root.tsx; guarded here since it
// isn't defined during SSR or if the tag ever fails to load.
export function trackCallConversion() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "conversion", {
    send_to: "AW-990368648/_T0rCJPSvIkYEIinn9gD",
  });
}

// Google Ads "Page view (3)" conversion — a proxy conversion for the
// /contact page. The actual booking happens inside Joby's embedded iframe
// (a different origin), which doesn't expose a "booking completed" signal
// we can listen for, so this counts every visit to the booking page instead
// of the real completed booking. Less precise, but the only client-side
// signal available until Joby offers a postMessage/webhook on success.
export function trackContactPageViewConversion() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "conversion", {
    send_to: "AW-990368648/cnAUCJWq7PUcEIinn9gD",
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
