import { ImageResponse } from "next/og";

export const alt = "Aina Raphaël Rakotonaivo — Développeur Fullstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div style={{ width: 64, height: 2, background: "#d4a853", marginBottom: 48 }} />

        {/* Name block */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              color: "#f4f4f5",
              lineHeight: 0.9,
              letterSpacing: "-3px",
            }}
          >
            Aina Raphaël
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              color: "transparent",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              marginBottom: 40,
              WebkitTextStroke: "2px #d4a853",
            }}
          >
            Rakotonaivo
          </div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 300,
              color: "#a1a1aa",
              marginTop: 32,
              letterSpacing: "2px",
            }}
          >
            DÉVELOPPEUR FULLSTACK
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 20,
            }}
          >
            {["React Native", "Next.js", "NestJS", "TypeScript", "Docker"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 14,
                  color: "#52525b",
                  border: "1px solid #27272a",
                  padding: "4px 12px",
                  letterSpacing: "1px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #27272a",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 16, color: "#52525b", letterSpacing: "1px" }}>
            LA RÉUNION · REMOTE · PARIS · LYON · TOULOUSE
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: "#d4a853",
              letterSpacing: "6px",
            }}
          >
            RAR
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
