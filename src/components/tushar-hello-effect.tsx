"use client"

import { motion } from "motion/react"
import type { ComponentProps } from "react"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

export type TusharHelloEffectProps = Omit<
  ComponentProps<typeof motion.div>,
  "durationScale" | "onAnimationComplete"
> & {
  /**
   * The name/text to render.
   * @defaultValue "Tushar"
   */
  text?: string
  /**
   * Scales the duration of the reveal animation.
   * Values below 1 speed up, values above 1 slow down.
   * @defaultValue 1
   */
  durationScale?: number
  /** Called when the reveal animation completes (after a short hold). */
  onAnimationComplete?: () => void
}

export function TusharHelloEffect({
  className,
  text = "Tushar",
  durationScale = 1,
  onAnimationComplete,
  ...props
}: TusharHelloEffectProps) {
  const revealDuration = 0.8 * durationScale
  const holdMs = 1100
  const totalMs = revealDuration * 1000 + holdMs

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!onAnimationComplete) return undefined
    timerRef.current = setTimeout(onAnimationComplete, totalMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [onAnimationComplete, totalMs])

  return (
    <motion.div
      // Generous vertical padding + relaxed line-height so tall scripts
      // (Devanagari matras, Thai/Korean ascenders & descenders) never clip.
      className={cn(
        "inline-flex items-center justify-center px-2 py-6 leading-[1.6] font-medium text-foreground",
        "text-5xl whitespace-nowrap sm:text-6xl",
        className
      )}
      initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: 0.4 } }}
      transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1] }}
      aria-label={text}
      {...props}
    >
      {text}
    </motion.div>
  )
}
