"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { ShimmeringText } from "@/registry/components/shimmering-text"

type BuildingItem = {
  text: string
  href?: string
}

// What I'm actively shipping right now. Update freely.
const BUILDING: BuildingItem[] = [
  // {
  //   text: "Zode — open-source AI coding agent 🤖",
  //   href: "https://zode.ai",
  // },
  {
    text: "a new game for Horizn Games 👨‍💻",
    href: "/puzzlegamevideo.mp4",
  },
  { text: "more AR lenses for Snapchat ✨" },
  { text: "more content for the feed 🤙" },
  { text: "a clipping agency 🎬" },
  { text: "an AI startup 💪" },
]

const ROTATE_INTERVAL = 2600

export function CurrentlyBuilding({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BUILDING.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const current = BUILDING[index]

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 text-center select-none",
        className
      )}
      {...props}
    >
      <ShimmeringText
        className="font-mono text-sm font-medium"
        text="🏗️ Currently Building"
      />

      <div className="flex h-5 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-sm text-foreground"
          >
            {current.href ? (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {current.text}
              </a>
            ) : (
              current.text
            )}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
