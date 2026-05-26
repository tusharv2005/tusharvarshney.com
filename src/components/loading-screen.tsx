"use client"

import { useEffect, useState } from "react"

function checkFirstVisit() {
  if (typeof window === "undefined") return true
  return !sessionStorage.getItem("hasVisited")
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(checkFirstVisit)

  useEffect(() => {
    if (!isLoading) return undefined

    // Auto-hide after 2 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false)
      if (typeof window !== "undefined") {
        sessionStorage.setItem("hasVisited", "true")
      }
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      {/* 4-pointed star with blur/glow effect */}
      <div className="relative h-64 w-64">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow h-full w-full"
          style={{ filter: "blur(8px)" }}
        >
          {/* 4-pointed star with concave curves */}
          <path
            d="M100 20 Q100 70 130 100 Q100 100 100 180 Q100 100 70 100 Q100 70 100 20 Z M100 20 Q100 70 70 100 Q100 100 100 180 Q100 100 130 100 Q100 70 100 20 Z"
            fill="white"
          />
        </svg>
        {/* Solid star on top for crisp center */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow absolute inset-0 h-full w-full"
        >
          <path
            d="M100 40 Q100 80 120 100 Q100 100 100 160 Q100 100 80 100 Q100 80 100 40 Z M100 40 Q100 80 80 100 Q100 100 100 160 Q100 100 120 100 Q100 80 100 40 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
