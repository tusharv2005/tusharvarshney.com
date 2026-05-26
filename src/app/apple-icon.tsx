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
          fontSize: 24,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 448 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h192v64h-64v128h32v64H32v-64h32V64H0ZM256 0v64h32v64h32v64h32v64h64v-64h32v-64h32v-64h32v-64h-64v64h-32v64h-64v-64h-32v-64Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
