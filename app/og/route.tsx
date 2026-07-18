import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0d0f1a 0%, #111827 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* accent blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          }}
        />

        {/* role */}
        <p style={{ color: "#8b5cf6", fontSize: "22px", margin: "0 0 16px", letterSpacing: "0.05em" }}>
          {siteConfig.role}
        </p>

        {/* name */}
        <h1 style={{ color: "#f8fafc", fontSize: "72px", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.1 }}>
          {siteConfig.name}
        </h1>

        {/* tagline */}
        <p style={{ color: "#94a3b8", fontSize: "24px", margin: "0 0 48px", maxWidth: "800px", lineHeight: 1.5 }}>
          {siteConfig.tagline}
        </p>

        {/* url */}
        <p style={{ color: "#475569", fontSize: "18px", margin: 0 }}>
          {siteConfig.url.replace("https://", "")}
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
