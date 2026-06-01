"use client"

import { animate, motion, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type Stat = {
  /** Final value to count up to. */
  value: number
  /** Suffix appended after the formatted number (e.g. "M+", "K+"). */
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { value: 2.96, suffix: "M+", label: "Lens Plays" },
  { value: 70, suffix: "M+", label: "Views" },
  { value: 350, suffix: "K+", label: "Followers" },
]

function formatValue(value: number, target: number) {
  // Keep two decimals for sub-10 values (e.g. 2.96), whole numbers otherwise.
  return target < 10 ? value.toFixed(2) : Math.round(value).toString()
}

function StatCounter({ stat, delay }: { stat: Stat; delay: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView) return

    const controls = animate(0, stat.value, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [inView, stat.value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center gap-0.5"
    >
      <span className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">
        {formatValue(display, stat.value)}
        <span className="text-info">{stat.suffix}</span>
      </span>
      <span className="text-[11px] tracking-wide text-muted-foreground uppercase">
        {stat.label}
      </span>
    </motion.div>
  )
}

export function ReachStats({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 select-none",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="font-mono text-xs tracking-[0.2em] uppercase">
          Total Reach
        </span>
      </div>

      <div className="grid w-full grid-cols-3 gap-2">
        {STATS.map((stat, i) => (
          <StatCounter key={stat.label} stat={stat} delay={i * 0.15} />
        ))}
      </div>
    </div>
  )
}
