"use client";

import { useEffect, useRef, useState } from "react";

const SIERRA_ORIGIN = "sierrasellersites.com";
const DEFAULT_HEIGHT = 900;

export default function SierraValuationFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // Only accept messages from the Sierra seller site domain
      if (!event.origin.includes(SIERRA_ORIGIN)) return;

      let newHeight: number | null = null;

      if (typeof event.data === "number" && event.data > 100) {
        // Raw number payload
        newHeight = event.data;
      } else if (event.data && typeof event.data === "object") {
        // Object payload: { height: 1200 } or { frameHeight: 1200 }
        const h = event.data.height ?? event.data.frameHeight ?? null;
        if (typeof h === "number" && h > 100) newHeight = h;
      } else if (typeof event.data === "string") {
        // String payload: JSON or plain number
        try {
          const parsed = JSON.parse(event.data);
          const h = parsed.height ?? parsed.frameHeight ?? null;
          if (typeof h === "number" && h > 100) newHeight = h;
        } catch {
          const n = Number(event.data);
          if (!isNaN(n) && n > 100) newHeight = n;
        }
      }

      if (newHeight) setHeight(newHeight + 32); // +32px padding buffer
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://9b0ccdbd79e34649b94c438625c4294f.sierrasellersites.com/"
      title="Instant Home Valuation Tool"
      width="100%"
      height={height}
      frameBorder="0"
      className="block w-full transition-[height] duration-300"
    />
  );
}
