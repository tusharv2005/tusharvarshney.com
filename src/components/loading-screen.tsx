"use client"

import { useEffect, useState } from "react"

function shouldShowLoading() {
  if (typeof window === "undefined") return true
  const hasSeenLoading = sessionStorage.getItem("hasSeenLoading")
  return hasSeenLoading !== "true"
}

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(shouldShowLoading)

  useEffect(() => {
    // If already marked as seen, don't show at all
    if (!isVisible) return undefined

    // Mark as seen immediately to prevent showing on next refresh
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenLoading", "true")
    }

    // Show loading screen for 500ms, then hide
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [isVisible])

  // Don't render anything if not visible
  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      {/* 4-pointed star with blur/glow effect */}
      <div className="relative flex items-center justify-center">
        {/* Blurred background star for glow effect */}
        <div
          className="animate-spin-slow absolute h-64 w-64"
          style={{ filter: "blur(20px)" }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Sharp star on top */}
        <div className="animate-spin-slow relative h-48 w-48">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
