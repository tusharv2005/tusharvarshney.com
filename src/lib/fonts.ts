import { GeistMono } from "geist/font/mono"
import { GeistPixelSquare } from "geist/font/pixel"
import { GeistSans } from "geist/font/sans"
import {
  Bitcount_Single,
  Charmonman,
  Kalam,
  Nanum_Brush_Script,
  Noto_Sans_Gujarati,
  Yuji_Syuku,
} from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

// Primary display font for the name effect — dotted/expressive (Latin only).
const fontNameBitcount = Bitcount_Single({
  subsets: ["latin"],
  variable: "--font-name-bitcount",
})

// Per-script fallbacks so non-Latin scripts render cleanly (Bitcount lacks them).
const fontNameHindi = Kalam({
  subsets: ["devanagari", "latin"],
  weight: ["700"],
  variable: "--font-name-hindi",
})

const fontNameGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati", "latin"],
  weight: ["700"],
  variable: "--font-name-gujarati",
})

const fontNameJapanese = Yuji_Syuku({
  subsets: ["japanese"],
  weight: ["400"],
  preload: false,
  variable: "--font-name-japanese",
})

const fontNameKorean = Nanum_Brush_Script({
  subsets: ["korean"],
  weight: ["400"],
  preload: false,
  variable: "--font-name-korean",
})

const fontNameThai = Charmonman({
  subsets: ["thai", "latin"],
  weight: ["700"],
  variable: "--font-name-thai",
})

const fontSerif = localFont({
  src: "../assets/fonts/charter_regular.woff2",
  weight: "400",
  fallback: ["Georgia", "serif"],
  variable: "--font-serif",
})

const fontPixel = localFont({
  src: "../assets/fonts/DepartureMono-Regular.woff2",
  weight: "400",
  fallback: ["monospace"],
  variable: "--font-pixel",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontPixel.variable,
  fontNameBitcount.variable,
  fontNameHindi.variable,
  fontNameGujarati.variable,
  fontNameJapanese.variable,
  fontNameKorean.variable,
  fontNameThai.variable,
  GeistPixelSquare.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
)
