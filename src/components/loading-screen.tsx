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

    // Start expanding animation after 400ms
    const expandTimer = setTimeout(() => {
      setIsExpanding(true)
    }, 400)

    // Hide after expansion completes (400ms + 800ms animation)
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 1200)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
      document.documentElement.style.visibility = "visible"
    }
  }, [show])

  if (!show) return null

  return (
    <>
      {/* Black overlay with star-shaped mask that expands */}
      <div
        className="fixed inset-0 z-[9999] bg-black"
        style={{
          maskImage: isExpanding
            ? "radial-gradient(circle, black 100%, transparent 100%)"
            : "url('data:image/svg+xml;base64," +
              btoa(`
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z" fill="white"/>
                </svg>
              `) +
              "')",
          maskSize: isExpanding ? "300%" : "12rem",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskImage: isExpanding
            ? "radial-gradient(circle, black 100%, transparent 100%)"
            : "url('data:image/svg+xml;base64," +
              btoa(`
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z" fill="white"/>
                </svg>
              `) +
              "')",
          WebkitMaskSize: isExpanding ? "300%" : "12rem",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Rotating star visible in the center */}
        <div className="flex h-full w-full items-center justify-center">
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
    </>
  )
}
