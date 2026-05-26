"use client"

import { useEffect, useState } from "react"

function checkFirstVisit() {
  if (typeof window === "undefined") return true
  return !sessionStorage.getItem("hasVisited")
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(checkFirstVisit)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return undefined

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            if (typeof window !== "undefined") {
              sessionStorage.setItem("hasVisited", "true")
            }
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => {
      clearInterval(interval)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex items-center gap-8">
        {/* Loading text */}
        <span className="text-base font-normal tracking-[0.2em] text-white/80">
          LOADING
        </span>

        {/* 4-pointed sparkle/star animation */}
        <div className="relative h-16 w-16">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin-slow h-full w-full"
          >
            {/* 4-pointed star shape */}
            <path
              d="M50 0 C55 25, 55 25, 50 50 C25 45, 25 45, 0 50 C25 55, 25 55, 50 50 C55 75, 55 75, 50 100 C45 75, 45 75, 50 50 C75 55, 75 55, 100 50 C75 45, 75 45, 50 50 C45 25, 45 25, 50 0 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Progress percentage with border */}
        <div className="rounded-full border-2 border-white/40 px-6 py-2">
          <span className="text-base font-normal tracking-wider text-white/80">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}
