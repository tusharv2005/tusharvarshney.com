"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { ShimmeringText } from "@/registry/components/shimmering-text"

const PROMPT = `zode "add JWT auth to the API"`

type OutputLine = {
  text: string
  tone: "accent" | "success" | "muted"
  indent?: boolean
}

const OUTPUT: OutputLine[] = [
  { text: "✦ Analyzing codebase…", tone: "accent" },
  { text: "✦ Editing 3 files", tone: "accent" },
  { text: "✓ auth.ts", tone: "success", indent: true },
  { text: "✓ middleware.ts", tone: "success", indent: true },
  { text: "✓ routes.ts", tone: "success", indent: true },
  { text: "✓ Done in 1.2s", tone: "success" },
]

const TYPE_SPEED = 45
const LINE_DELAY = 520
const LOOP_DELAY = 2800

export function ZodeTerminal({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [typed, setTyped] = useState(0)
  const [lines, setLines] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms))
      })

    async function run() {
      while (!cancelled) {
        setTyped(0)
        setLines(0)
        setDone(false)
        await wait(700)

        for (let i = 1; i <= PROMPT.length; i++) {
          if (cancelled) return
          setTyped(i)
          await wait(TYPE_SPEED)
        }
        await wait(450)

        for (let i = 1; i <= OUTPUT.length; i++) {
          if (cancelled) return
          setLines(i)
          await wait(LINE_DELAY)
        }

        if (cancelled) return
        setDone(true)
        await wait(LOOP_DELAY)
      }
    }

    run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  const typingDone = typed >= PROMPT.length

  return (
    <div
      className={cn("flex w-full flex-col gap-3 select-none", className)}
      {...props}
    >
      {/* Window */}
      <div className="overflow-hidden rounded-xl border border-line bg-zinc-950 shadow-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-yellow-500/80" />
            <span className="size-2.5 rounded-full bg-green-500/80" />
          </div>

          <div className="ml-1 flex items-center gap-1.5">
            <span className="flex size-4 items-center justify-center overflow-hidden rounded-[5px] bg-black">
              <Image
                src="/ZODE.png"
                alt="Zode"
                width={16}
                height={16}
                className="size-4 object-contain"
              />
            </span>
            <span className="font-mono text-xs text-zinc-400">
              zode — agent
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex min-h-[148px] flex-col gap-1 px-3.5 py-3 font-mono text-xs leading-relaxed">
          {/* Prompt line */}
          <div className="flex flex-wrap items-center gap-x-1.5">
            <span className="text-emerald-400">$</span>
            <span className="text-yellow-400">{PROMPT.slice(0, typed)}</span>
            {!typingDone && (
              <motion.span
                className="inline-block h-3.5 w-[7px] bg-zinc-300"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {/* Output lines */}
          <AnimatePresence>
            {OUTPUT.slice(0, lines).map((line) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "flex items-center gap-1.5",
                  line.indent && "pl-3.5"
                )}
              >
                <span
                  className={cn(
                    line.tone === "accent" && "text-info",
                    line.tone === "success" && "text-emerald-400",
                    line.tone === "muted" && "text-zinc-500"
                  )}
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Final cursor after done */}
          {done && (
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">$</span>
              <motion.span
                className="inline-block h-3.5 w-[7px] bg-zinc-300"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-center justify-between px-0.5">
        <ShimmeringText
          className="font-mono text-xs font-medium"
          text="✦ Zode AI"
          duration={1.4}
        />
        <a
          href="https://zode.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          zode.ai →
        </a>
      </div>
    </div>
  )
}
