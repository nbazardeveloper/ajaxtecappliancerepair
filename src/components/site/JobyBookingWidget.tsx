import { useEffect, useRef } from "react";

export const JOBY_BOOKING_ORIGIN = "https://ajaxtec-appliance-repair.joby.io";
export const JOBY_BOOKING_URL = `${JOBY_BOOKING_ORIGIN}/book-appointment/newshortform`;
const JOBY_BOOKING_EMBED_URL = `${JOBY_BOOKING_URL}?embed=1`;

// Joby doesn't publicly document a "submission complete" postMessage event.
// Joby's widget runs on GoHighLevel under the hood, so this matches every
// success signal seen documented for GoHighLevel-based embeds in the wild: a
// `msgsndr-booking-complete` array event, and any payload carrying an
// explicit success code/type. Best-effort — if Joby ever changes their event
// shape this simply stops firing, and visitors just see the widget's own
// on-page confirmation instead of being sent to /thank-you.
function isBookingSuccessMessage(data: unknown): boolean {
  if (Array.isArray(data)) return data[0] === "msgsndr-booking-complete";
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    if (d.code === "success") return true;
    if (typeof d.type === "string" && /submit|success|complete|booked/i.test(d.type)) return true;
  }
  return false;
}

// Joby booking widget: listens for postMessage resize events from the embedded
// iframe and grows/shrinks the iframe to match its content height, and
// forwards visitors to the shared /thank-you page once a booking succeeds.
// Shared by every page that embeds the scheduler (contact page, service
// landing pages) so they all point at the same form and behave the same way.
export function JobyBookingWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== JOBY_BOOKING_ORIGIN) return;
      const iframe = iframeRef.current;
      const data = event.data;
      if (!iframe) return;

      if (data && typeof data === "object" && data.type === "joby-booking-widget-resize") {
        const height = Number(data.height);
        if (!Number.isFinite(height)) return;
        const nextHeight = Math.max(220, Math.ceil(height));
        iframe.height = String(nextHeight);
        iframe.style.height = `${nextHeight}px`;
        return;
      }

      if (isBookingSuccessMessage(data)) {
        window.location.href = "/thank-you";
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="joby-booking-widget-4091b958"
      src={JOBY_BOOKING_EMBED_URL}
      width="100%"
      height={900}
      frameBorder={0}
      style={{ border: 0, maxWidth: 640, display: "block", margin: "0 auto" }}
      title="Book an appointment"
    />
  );
}
