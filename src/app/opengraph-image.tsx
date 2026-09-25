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
          <svg width="110" height="90" viewBox="0 0 113 92" fill="none">
            <polygon points="7,86 43,8 95,86 82,86 55,64 26,86" stroke="#ffffff" strokeWidth="9" strokeLinejoin="miter" />
            <path d="M36 60 H46 C53 60 54 51 61 51 H101" stroke="#2878ff" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="31" cy="60" r="5" stroke="#38c6ff" strokeWidth="3.5" />
            <circle cx="106" cy="51" r="5" stroke="#38c6ff" strokeWidth="3.5" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: 2 }}>AMPLEX</span>
            <span style={{ fontSize: 18, letterSpacing: 3, color: "#5a9bff" }}>FUTURE-READY SOLUTIONS</span>
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
