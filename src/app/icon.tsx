import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

// Image generation
export default function Icon() {
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
            fontSize: "20px",
            fontWeight: 700,
            color: "black",
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-0.5px",
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
