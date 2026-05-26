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

    // Wait 2 seconds before starting expansion
    const expandTimer = setTimeout(() => {
      setIsExpanding(true)
    }, 2000)

    // Remove overlay after expansion completes (2s wait + 1.2s animation)
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 3200)

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

  // Create SVG data URL for mask
  const maskSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${starPath}' fill='white'/%3E%3C/svg%3E`

  return (
    <div
      className="fixed inset-0 bg-black"
      style={{
        zIndex: 9999,
        maskImage: maskSvg,
        maskSize: isExpanding ? "400vw 400vw" : "12rem 12rem",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskComposite: "exclude",
        WebkitMaskImage: maskSvg,
        WebkitMaskSize: isExpanding ? "400vw 400vw" : "12rem 12rem",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskComposite: "destination-out",
        transition:
          "mask-size 1.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-mask-size 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  )
}
