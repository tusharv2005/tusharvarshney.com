import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get("title") || "Tushar Varshney"
  const description =
    searchParams.get("description") || "Developer, Entrepreneur, Creator"
  const type = searchParams.get("type") || "default" // default, game, content, code, business

  // Different gradient backgrounds for different blog types
  const gradients = {
    default: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    game: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    content: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    code: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    business: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    ar: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  }

  const background =
    gradients[type as keyof typeof gradients] || gradients.default

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background,
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            T
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            tusharvarshney.com
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 50 ? "56px" : "72px",
              fontWeight: "800",
              color: "white",
              lineHeight: "1.1",
              margin: 0,
              textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: "28px",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: "1.4",
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
            gap: "16px",
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span>📚 Blog</span>
          <span>•</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
