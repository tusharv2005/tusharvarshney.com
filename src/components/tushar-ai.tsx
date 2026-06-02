"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { TusharMark } from "@/components/tushar-mark"
import { cn } from "@/lib/utils"
import { ShimmeringText } from "@/registry/components/shimmering-text"

type QA = {
  q: string
  a: string
}

const QA_LIST: QA[] = [
  {
    q: "Who is Tushar?",
    a: "AI engineer, founder of Horizn Games, and a Snapchat AR creator with 2.96M+ lens plays.",
  },
  {
    q: "What are you building?",
    a: "Zode — an open-source AI coding agent — plus new games and AR lenses.",
  },
  {
    q: "What's your reach?",
    a: "70M+ views and 350K+ followers across Snap, Instagram, and YouTube.",
  },
  {
    q: "What can you do?",
    a: "Ship products end to end — AI, games, web, and content that reaches millions.",
  },
]

const TYPE_SPEED = 26
const READ_DELAY = 2200
const ASK_DELAY = 900

export function TusharAI({ className, ...props }: React.ComponentProps<"div">) {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState(0)
  const [phase, setPhase] = useState<"ask" | "thinking" | "answer">("ask")
  const scrollRef = useRef<HTMLDivElement>(null)

  const current = QA_LIST[index]

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms))
      })

    async function run() {
      while (!cancelled) {
        // Show question
        setPhase("ask")
        setTyped(0)
        await wait(ASK_DELAY)

        // Thinking
        if (cancelled) return
        setPhase("thinking")
        await wait(900)

        // Type answer
        if (cancelled) return
        setPhase("answer")
        for (let i = 1; i <= current.a.length; i++) {
          if (cancelled) return
          setTyped(i)
          await wait(TYPE_SPEED)
        }

        // Read, then next
        await wait(READ_DELAY)
        if (cancelled) return
        setIndex((prev) => (prev + 1) % QA_LIST.length)
      }
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div
      className={cn("flex w-full flex-col gap-2 select-none", className)}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="flex size-4 items-center justify-center rounded-[5px] bg-foreground text-background [&_svg]:size-2.5">
            <TusharMark />
          </span>
          <ShimmeringText
            className="font-mono text-xs font-medium"
            text="Ask Tushar AI"
            duration={1.4}
          />
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          online
        </span>
      </div>

      {/* Chat */}
      <div
        ref={scrollRef}
        className="flex min-h-[92px] flex-col gap-2 rounded-xl border border-line bg-muted/40 p-3"
      >
        {/* Question (user) */}
        <div className="flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={`q-${index}`}
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-w-[85%] rounded-2xl rounded-br-sm bg-foreground px-3 py-1.5 text-xs text-background"
            >
              {current.q}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Answer (AI) */}
        <div className="flex justify-start">
          <div className="flex max-w-[90%] items-end gap-1.5">
            <span className="mb-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background [&_svg]:size-3">
              <TusharMark />
            </span>
            <div className="rounded-2xl rounded-bl-sm bg-background px-3 py-1.5 text-xs text-foreground ring-1 ring-line">
              {phase === "thinking" ? (
                <ThinkingDots />
              ) : phase === "answer" ? (
                <span>
                  {current.a.slice(0, typed)}
                  {typed < current.a.length && (
                    <span className="ml-px inline-block h-3 w-px translate-y-0.5 bg-foreground" />
                  )}
                </span>
              ) : (
                <ThinkingDots />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThinkingDots() {
  return (
    <span className="flex items-center gap-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  )
}
