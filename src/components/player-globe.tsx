"use client"

import createGlobe from "cobe"
import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

// Real Block Puzzle Master player locations (Google Play Console).
// [latitude, longitude, weight] — weight scales the marker size.
const PLAYER_MARKERS: { location: [number, number]; size: number }[] = [
  { location: [20.5937, 78.9629], size: 0.12 }, // India (34)
  { location: [37.0902, -95.7129], size: 0.06 }, // United States (8)
  { location: [-0.7893, 113.9213], size: 0.06 }, // Indonesia (7)
  { location: [-14.235, -51.9253], size: 0.05 }, // Brazil (6)
  { location: [30.3753, 69.3451], size: 0.05 }, // Pakistan (5)
  { location: [12.8797, 121.774], size: 0.04 }, // Philippines (4)
  { location: [61.524, 105.3188], size: 0.04 }, // Russia (4)
  { location: [51.1657, 10.4515], size: 0.03 }, // Germany (2)
  { location: [48.0196, 66.9237], size: 0.03 }, // Kazakhstan (2)
  { location: [-25.2744, 133.7751], size: 0.03 }, // Australia
  { location: [56.1304, -106.3468], size: 0.03 }, // Canada
  { location: [40.4637, -3.7492], size: 0.03 }, // Spain
  { location: [46.6034, 1.8883], size: 0.03 }, // France
  { location: [41.8719, 12.5674], size: 0.03 }, // Italy
  { location: [36.2048, 138.2529], size: 0.03 }, // Japan
  { location: [35.9078, 127.7669], size: 0.03 }, // South Korea
  { location: [21.9162, 95.956], size: 0.03 }, // Myanmar
  { location: [4.2105, 101.9758], size: 0.03 }, // Malaysia
  { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
  { location: [38.9637, 35.2433], size: 0.03 }, // Türkiye
  { location: [14.0583, 108.2772], size: 0.03 }, // Vietnam
]

export function PlayerGlobe({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let phi = 0
    let width = 0
    let rafId = 0
    const canvas = canvasRef.current
    if (!canvas) return

    const onResize = () => {
      width = canvas.offsetWidth
    }
    window.addEventListener("resize", onResize)
    onResize()

    const isDark = resolvedTheme === "dark"

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: isDark ? 6 : 3,
      baseColor: isDark ? [0.3, 0.3, 0.32] : [0.85, 0.85, 0.88],
      markerColor: [0.4, 0.55, 1], // matches --info accent
      glowColor: isDark ? [0.1, 0.1, 0.12] : [1, 1, 1],
      markers: PLAYER_MARKERS,
    })

    // Auto-rotate via the update loop.
    const render = () => {
      phi += 0.004
      globe.update({
        phi,
        width: width * 2,
        height: width * 2,
      })
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    // Fade the canvas in once it's ready.
    const fadeTimer = setTimeout(() => {
      if (canvas) canvas.style.opacity = "1"
    }, 100)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(fadeTimer)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [resolvedTheme])

  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-3 overflow-hidden select-none",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-0.5 text-center">
        <span className="text-sm font-medium text-foreground">
          Players Worldwide
        </span>
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
          Block Puzzle Master · 20+ countries 🌍
        </span>
      </div>

      <div className="relative aspect-square w-full max-w-64">
        <canvas
          ref={canvasRef}
          className="size-full opacity-0 transition-opacity duration-700"
          style={{ contain: "layout paint size" }}
        />
      </div>
    </div>
  )
}
