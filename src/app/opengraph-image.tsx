import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Build the growth system behind your business`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card. Generated, so it never drifts from the brand. */
export default function OpengraphImage() {
  const stages = ["Attention", "Offer", "System", "Conversion", "Customer", "Growth"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070a",
          backgroundImage:
            "linear-gradient(to right, rgba(42,55,71,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(42,55,71,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#4fe3b0",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#8b98a8",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Growth Operator Agency
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#eef3f9",
            fontSize: 82,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            maxWidth: 950,
          }}
        >
          Build the growth system behind your business.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {stages.map((stage, i) => (
              <div key={stage} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "10px 16px",
                    border: "1px solid #22303f",
                    borderRadius: 8,
                    background: "#0c1118",
                    color: i === stages.length - 1 ? "#4fe3b0" : "#b8c4d2",
                    fontSize: 20,
                  }}
                >
                  {stage}
                </div>
                {i < stages.length - 1 ? (
                  <div style={{ display: "flex", width: 18, height: 1, background: "#2a3747" }} />
                ) : null}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", color: "#8b98a8", fontSize: 26 }}>
            {site.name.toLowerCase().replace(" ", "")}.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
