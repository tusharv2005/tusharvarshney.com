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
      document.documentElement.style.visibility = "visible"
      return undefined
    }

    window.sessionStorage.setItem(LOADING_KEY, "yes")

    // Start expanding after 300ms
    const expandTimer = setTimeout(() => {
      setIsExpanding(true)
    }, 300)

    // Remove overlay after expansion completes
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 1500)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
      document.documentElement.style.visibility = "visible"
    }
  }, [show])

  if (!show) return null

  // Star SVG path
  const starPath =
    "M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z"

  return (
    <>
      {/* Black overlay with star cutout using clip-path */}
      <div
        className="fixed inset-0 z-[9999] bg-black"
        style={{
          clipPath: isExpanding
            ? `circle(200% at 50% 50%)`
            : `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${starPath}' fill='white'/%3E%3C/svg%3E")`,
          transition: "clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Visible rotating star on top */}
      <div className="pointer-events-none fixed inset-0 z-[10000] flex items-center justify-center">
        <div
          className="animate-spin-slow relative"
          style={{
            width: isExpanding ? "400vw" : "12rem",
            height: isExpanding ? "400vw" : "12rem",
            opacity: isExpanding ? 0 : 1,
            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path d={starPath} fill="white" />
          </svg>
        </div>
      </div>
    </>
  )
}
