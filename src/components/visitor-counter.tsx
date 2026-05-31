"use client"

import { EyeIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

// Free, no-auth hosted hit counter. Increments once per page load.
const COUNTER_ENDPOINT =
  "https://abacus.jasoncameron.dev/hit/tusharvarshney-com/home-visits"

export function VisitorCounter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [count, setCount] = useState<number | null>(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    // Dedupe in React Strict Mode (dev) so we only count the hit once.
    if (hasFetched.current) return
    hasFetched.current = true

    fetch(COUNTER_ENDPOINT)
      .then((res) => res.json())
      .then((data: unknown) => {
        const value = (data as { value?: number })?.value
        if (typeof value === "number") {
          setCount(value)
        }
      })
      .catch(() => {
        // Silently ignore network errors.
      })
  }, [])

  return (
    <div
      className={cn(
        "flex items-center gap-2 font-mono text-sm text-muted-foreground select-none",
        className
      )}
      {...props}
    >
      <EyeIcon className="size-4 shrink-0" />
      <span>
        You&apos;re visitor{" "}
        <span className="font-medium text-foreground tabular-nums">
          {count === null
            ? "—"
            : `#${new Intl.NumberFormat("en-US").format(count)}`}
        </span>
      </span>
    </div>
  )
}
