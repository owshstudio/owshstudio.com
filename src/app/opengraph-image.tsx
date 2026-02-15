import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OWSH Studio - Websites for Local Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              OWSH
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "-0.02em",
              }}
            >
              Studio
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "8px",
            }}
          >
            Websites for local businesses
          </p>

          {/* Value prop */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              color: "rgba(255,255,255,0.4)",
              fontSize: "20px",
            }}
          >
            <span>Free build</span>
            <span>•</span>
            <span
              style={{
                background: "linear-gradient(90deg, #f97316, #ec4899, #a855f7)",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
              }}
            >Starting at $75/month</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #f97316, #ec4899, #a855f7)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
