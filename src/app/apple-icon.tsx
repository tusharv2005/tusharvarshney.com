import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "110px",
            fontWeight: 700,
            color: "black",
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          TV
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
