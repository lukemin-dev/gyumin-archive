import { ImageResponse } from "next/og";

export const alt = "Gyumin Lee — Backend, Cloud, and Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#111827",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#111827",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            G
          </div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>GYUMIN LEE</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#2563eb", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
            BACKEND · CLOUD · AUTOMATION
          </div>
          <div style={{ marginTop: 22, maxWidth: 950, fontSize: 62, lineHeight: 1.12, fontWeight: 800 }}>
            Building repeatable systems from real operational problems.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#64748b", fontSize: 24 }}>
          <span>Python · Java · AWS · AI Vision</span>
          <span>gyumin-archive.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
