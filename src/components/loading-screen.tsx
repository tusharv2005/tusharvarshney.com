"use client"

import { useEffect, useState } from "react"

const LOADING_KEY = "site-loading-shown"

export function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false
    return window.sessionStorage.getItem(LOADING_KEY) !== "yes"
  })

  useEffect(() => {
    if (!show) {
      // Make sure html is visible if not showing loading
      document.documentElement.style.visibility = "visible"
      return undefined
    }

    // Mark as shown immediately
    window.sessionStorage.setItem(LOADING_KEY, "yes")

    // Hide after 500ms
    const timer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 500)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.visibility = "visible"
    }
  }, [show])

  if (!show) return null

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
