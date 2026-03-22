import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Patrick Group | Southeast Michigan Real Estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Red accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#c70000",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#c70000",
            fontSize: "18px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Southeast Michigan Real Estate
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          The Patrick Group
        </div>

        {/* Subheadline */}
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "28px",
            lineHeight: 1.4,
            maxWidth: "700px",
            display: "flex",
          }}
        >
          Boutique real estate service. Led by Sarah Patrick, Principal Broker.
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px", display: "flex" }}>
            thepatrickgrp.com
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px", display: "flex" }}>
            📞 248.755.3545
          </div>
        </div>

        {/* Right red accent */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            bottom: "80px",
            right: "80px",
            width: "4px",
            background: "#c70000",
            opacity: 0.4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
