import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get("title") || "Tushar Varshney"
  const description =
    searchParams.get("description") || "Developer, Entrepreneur, Creator"
  const type = searchParams.get("type") || "default"

  // Your brand logo SVG path
  const logoPath =
    "M0 0h192v64h-64v128h32v64H32v-64h32V64H0ZM256 0v64h32v64h32v64h32v64h64v-64h32v-64h32v-64h32v-64h-64v64h-32v64h-64v-64h-32v-64Z"

  // Clean, minimal design matching your portfolio
  const isDark = true // Your site uses dark mode by default

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: isDark ? "#09090b" : "#ffffff",
          padding: "80px",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Header with Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {/* Your Logo */}
          <svg
            width="80"
            height="40"
            viewBox="0 0 512 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill={isDark ? "#ffffff" : "#09090b"} d={logoPath} />
          </svg>

          {/* Brand Name */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
              color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
              letterSpacing: "-0.02em",
            }}
          >
            tusharvarshney.com
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: title.length > 50 ? "64px" : "80px",
              fontWeight: "700",
              color: isDark ? "#ffffff" : "#09090b",
              lineHeight: "1.1",
              margin: 0,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              style={{
                fontSize: "32px",
                fontWeight: "400",
                color: isDark
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(0, 0, 0, 0.6)",
                lineHeight: "1.5",
                margin: 0,
                maxWidth: "900px",
              }}
            >
              {description.slice(0, 120)}
              {description.length > 120 ? "..." : ""}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "20px",
              color: isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
            }}
          >
            <span>📚 Blog</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
          </div>

          {/* Type indicator */}
          {type !== "default" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                borderRadius: "8px",
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.05)",
                fontSize: "18px",
                fontWeight: "500",
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {type === "game" && "🎮 Game Dev"}
              {type === "content" && "📱 Content"}
              {type === "code" && "💻 Development"}
              {type === "business" && "💼 Business"}
              {type === "ar" && "🥽 AR/VR"}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
