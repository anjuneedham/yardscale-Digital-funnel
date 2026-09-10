import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/** The brand mark, inlined at build time so the card needs no network fetch. */
const markDataUri = `data:image/svg+xml;base64,${Buffer.from(
  readFileSync(join(process.cwd(), "src/app/icon.svg")),
).toString("base64")}`;

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
          background: "#070707",
          backgroundImage:
            "linear-gradient(to right, rgba(55,55,55,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(55,55,55,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={markDataUri} width={72} height={72} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                display: "flex",
                color: "#f7f6f2",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Yard<span style={{ color: "#bdfa09" }}>Scale</span>
            </div>
            <div
              style={{
                color: "#9d9b95",
                fontSize: 17,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Digital
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#f7f6f2",
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
                    border: "1px solid #373737",
                    borderRadius: 8,
                    background: "#111111",
                    color: i === stages.length - 1 ? "#bdfa09" : "#cac8c2",
                    fontSize: 20,
                  }}
                >
                  {stage}
                </div>
                {i < stages.length - 1 ? (
                  <div style={{ display: "flex", width: 18, height: 1, background: "#373737" }} />
                ) : null}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 26 }}>
            <div style={{ display: "flex", color: "#9d9b95" }}>
              {site.disciplines.join("  /  ")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
