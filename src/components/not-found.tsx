import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 514 258"
        fill="currentColor"
      >
        <path d="M0 0h192v64h-64v128h32v64H32v-64h32V64H0ZM256 0v64h32v64h32v64h32v64h64v-64h32v-64h32v-64h32v-64h-64v64h-32v64h-64v-64h-32v-64Z" />
      </svg>

      <h1 className="my-6 text-8xl font-medium tracking-tighter tabular-nums">
        404
      </h1>

      <Button asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  )
}
