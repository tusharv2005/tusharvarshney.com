"use client"

import { AnimatePresence } from "motion/react"
import { useState } from "react"

import { TusharHelloEffect } from "@/components/tushar-hello-effect"

const NAMES = [
  { key: "english", text: "Tushar", font: "font-name-latin" },
  { key: "hindi", text: "तुषार", font: "font-name-hindi" },
  { key: "gujarati", text: "તુષાર", font: "font-name-gujarati" },
  { key: "japanese", text: "トゥシャール", font: "font-name-japanese" },
  { key: "korean", text: "투샤르", font: "font-name-korean" },
  { key: "thai", text: "ทูชาร์", font: "font-name-thai" },
] as const

export default function AppleHelloEffectLanguagesDemo() {
  const [index, setIndex] = useState(0)

  const handleAnimationEnd = () => {
    setIndex((prev) => (prev + 1) % NAMES.length)
  }

  const current = NAMES[index]

  return (
    <AnimatePresence mode="wait">
      <TusharHelloEffect
        key={current.key}
        text={current.text}
        className={current.font}
        onAnimationComplete={handleAnimationEnd}
      />
    </AnimatePresence>
  )
}
