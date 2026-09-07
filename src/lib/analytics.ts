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

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
