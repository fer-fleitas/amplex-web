import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 75% 40%, #16336a 0%, #081426 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="80" height="80" viewBox="0 0 40 40">
            <polygon points="17,3 23.5,3 38,36 31.5,36" fill="#2878ff" />
            <polygon points="2,36 17,3 23.5,3 9,36" fill="#ffffff" />
            <polygon points="14.3,24 26.2,24 28,28 12.5,28" fill="#38c6ff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: 6 }}>AMPLEX</span>
            <span style={{ fontSize: 20, letterSpacing: 10, color: "#5a9bff" }}>TECH SOLUTIONS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 60, fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          <span>TRANSFORMAMOS IDEAS</span>
          <span style={{ color: "#2878ff" }}>EN SOLUCIONES DIGITALES</span>
        </div>
        <span style={{ marginTop: 30, fontSize: 28, color: "#9fb0c8" }}>{siteConfig.slogan}</span>
      </div>
    ),
    size,
  );
}
