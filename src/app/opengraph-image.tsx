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
          backgroundColor: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "60px 72px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Top: Logo + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                OWSH
              </span>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "-0.01em",
                }}
              >
                Studio
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                }}
              />
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                Accepting new clients
              </span>
            </div>
          </div>

          {/* Center: Main headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              Websites that
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #DF4F15, #F9425F, #A326B5)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              actually work.
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "rgba(255,255,255,0.5)",
                marginTop: "8px",
              }}
            >
              Beautiful sites for local businesses. Free to build.
            </div>
          </div>

          {/* Bottom: Price points + location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "36px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #DF4F15, #F9425F, #A326B5)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  $75/mo
                </span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
                  Starting price
                </span>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "48px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                  No contracts
                </span>
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                  Cancel anytime
                </span>
              </div>
            </div>

            <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)" }}>
              owshstudio.com
            </span>
          </div>
        </div>

        {/* Bottom gradient accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #DF4F15, #F9425F, #A326B5)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
