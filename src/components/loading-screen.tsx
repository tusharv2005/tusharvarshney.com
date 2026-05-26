"use client"

import { useEffect, useState } from "react"

const LOADING_KEY = "site-loading-shown"

export function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false
    return window.sessionStorage.getItem(LOADING_KEY) !== "yes"
  })
  const [isExpanding, setIsExpanding] = useState(false)

  useEffect(() => {
    if (!show) {
      // Make sure html is visible if not showing loading
      document.documentElement.style.visibility = "visible"
      return undefined
    }

    // Mark as shown immediately
    window.sessionStorage.setItem(LOADING_KEY, "yes")

    // Start expanding animation after 300ms
    const expandTimer = setTimeout(() => {
      setIsExpanding(true)
    }, 300)

    // Hide after expansion completes (300ms + 700ms animation)
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 1000)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
      document.documentElement.style.visibility = "visible"
    }
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      {/* Star that expands to reveal content */}
      <div
        className="animate-spin-slow relative"
        style={{
          width: isExpanding ? "300vmax" : "12rem",
          height: isExpanding ? "300vmax" : "12rem",
          transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
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
    </div>
  )
}
