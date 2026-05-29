"use client"

import { useEffect, useState } from "react"

const LOADING_KEY = "site-loading-shown"

export function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false
    return window.sessionStorage.getItem(LOADING_KEY) !== "yes"
  })
  const [isExpanding, setIsExpanding] = useState(false)
  const [typedText, setTypedText] = useState("")

  const fullText = "Almost there..."

  useEffect(() => {
    if (!show) {
      document.documentElement.style.visibility = "visible"
      return undefined
    }

    window.sessionStorage.setItem(LOADING_KEY, "yes")

    // Typing effect
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    // Wait 3 seconds before starting expansion
    const expandTimer = setTimeout(() => {
      setIsExpanding(true)
    }, 3000)

    // Remove overlay after expansion completes (3s wait + 1.5s animation)
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.documentElement.style.visibility = "visible"
    }, 4500)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
      document.documentElement.style.visibility = "visible"
    }
  }, [show])

  if (!show) return null

  const starPath =
    "M50 10 C 45 35, 35 45, 10 50 C 35 55, 45 65, 50 90 C 55 65, 65 55, 90 50 C 65 45, 55 35, 50 10 Z"
  const maskSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${starPath}' fill='white'/%3E%3C/svg%3E`

  return (
    <>
      {/* Black overlay with star cutout */}
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
            "mask-size 1.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-mask-size 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Visible rotating star and loading text */}
      <div
        className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center gap-8"
        style={{ zIndex: 10000 }}
      >
        <div
          className="animate-spin-slow relative"
          style={{
            width: isExpanding ? "400vw" : "12rem",
            height: isExpanding ? "400vw" : "12rem",
            opacity: isExpanding ? 0 : 1,
            transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
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

        {/* Loading text with typing effect */}
        <div
          className="font-mono text-sm font-medium tracking-wider text-white"
          style={{
            opacity: isExpanding ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </>
  )
}
