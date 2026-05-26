"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  // Check if this is the first visit on initial render
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return true
    return !sessionStorage.getItem("hasVisited")
  })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            sessionStorage.setItem("hasVisited", "true")
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex items-center gap-4">
        {/* Loading text */}
        <span className="text-sm font-medium tracking-wider text-white">
          LOADING
        </span>

        {/* Sparkle/Star animation */}
        <div className="relative h-8 w-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin-slow h-full w-full"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="white"
              className="animate-pulse"
            />
            <path
              d="M12 6L12.75 9.25L16 10L12.75 10.75L12 14L11.25 10.75L8 10L11.25 9.25L12 6Z"
              fill="white"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Progress percentage */}
        <span className="text-sm font-medium tracking-wider text-white">
          {progress}%
        </span>
      </div>
    </div>
  )
}
