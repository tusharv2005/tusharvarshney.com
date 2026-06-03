"use client"

import { SparklesIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Lens = {
  name: string
  image: string
  link: string
}

// Drop the lens preview screenshots into /public/lenses/ with these names.
const LENSES: Lens[] = [
  {
    name: "Bitmoji Game",
    image: "/lenses/lens-1.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d7553cb4afbe49aea90b9f6a92c43d75&metadata=01",
  },
  {
    name: "Bare Minimum",
    image: "/lenses/lens-2.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa69b5afb0b493789264a900430fa7c&metadata=01",
  },
  {
    name: "Daily Vibe X",
    image: "/lenses/lens-3.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=99bca4d448c547bb9dd1b01a8f10aae5&metadata=01",
  },
  {
    name: "Glassy Pop",
    image: "/lenses/lens-5.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7f49d8ef435a45b6a5aa50d31267f991&metadata=01",
  },
  {
    name: "TODAY",
    image: "/lenses/lens-4.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7c0def47945648e2be326c1450a9783d&metadata=01",
  },
]

const ROTATE_INTERVAL = 3500

export function ARLensGallery({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % LENSES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, ROTATE_INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const current = LENSES[index]

  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-4 p-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <SparklesIcon className="size-4 text-[#FFFC00]" />
        <span className="font-mono text-xs tracking-wide">
          Snap AR Lenses · 2.96M+ plays
        </span>
      </div>

      <div className="flex items-center justify-center gap-3">
        {LENSES.map((lens, i) => {
          const isActive = i === index
          return (
            <motion.a
              key={lens.name}
              href={lens.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${lens.name} lens on Snapchat`}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line bg-muted",
                "aspect-9/16 w-24 shrink-0 transition-all duration-500 sm:w-28",
                isActive
                  ? "scale-105 opacity-100 shadow-lg ring-1 ring-border"
                  : "scale-95 opacity-50 hover:opacity-80"
              )}
            >
              <Image
                src={lens.image}
                alt={`${lens.name} Snapchat AR lens preview`}
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-2">
                <p className="truncate text-[10px] font-medium text-white">
                  {lens.name}
                </p>
              </div>
            </motion.a>
          )
        })}
      </div>

      <div className="flex h-5 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-sm font-medium text-foreground"
          >
            {current.name}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5">
        {LENSES.map((lens, i) => (
          <button
            key={lens.name}
            type="button"
            aria-label={`Show ${lens.name}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-4 bg-foreground" : "w-1.5 bg-border"
            )}
          />
        ))}
      </div>
    </div>
  )
}
