"use client"

import { RotateCcwIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { useSound as useSoundAsset } from "@/hooks/soundcn/use-sound"
import { uMiniMapOpenSound } from "@/lib/soundcn/u-mini-map-open"
import { cn } from "@/lib/utils"
import { ShimmeringText } from "@/registry/components/shimmering-text"
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/registry/components/slide-to-unlock"
import { useSound } from "@/registry/hooks/sound/use-sound"

// A quiet note for the one who never knew.
// One-sided, unspoken — the kind of feeling that stays a draft forever.
// No name. The "07.12" mark below is the only tell. 🤍
const MESSAGE = "She'll probably never read this."
const SUBTEXT = "Loving quietly is still loving, after all. 🤍🩵"
const MARK = "07.12"

export function SecretMessage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [unlocked, setUnlocked] = useState(false)
  const [play] = useSound(
    "https://assets.tusharvarshney.com/sounds/ios/unlock.mp3",
    { volume: 0.5 }
  )
  // A soft, airy chime the moment the handle is grabbed.
  const [playSlide] = useSoundAsset(uMiniMapOpenSound, { volume: 0.25 })

  return (
    <div
      className={cn("flex items-center justify-center select-none", className)}
      {...props}
    >
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <SlideToUnlock
              onUnlock={() => {
                play()
                setUnlocked(true)
              }}
            >
              <SlideToUnlockTrack>
                <SlideToUnlockText>
                  {({ isDragging }) => (
                    <ShimmeringText
                      text="slide to reveal"
                      isStopped={isDragging}
                    />
                  )}
                </SlideToUnlockText>
                <SlideToUnlockHandle onPointerDown={() => playSlide()} />
              </SlideToUnlockTrack>
            </SlideToUnlock>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-54 flex-col items-center gap-1.5 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm leading-snug text-foreground"
            >
              {MESSAGE}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-sm leading-snug text-muted-foreground"
            >
              {SUBTEXT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-1 flex items-center gap-2"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-info">
                {MARK}
              </span>
              <button
                type="button"
                onClick={() => setUnlocked(false)}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Reset"
              >
                <RotateCcwIcon className="size-3" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
