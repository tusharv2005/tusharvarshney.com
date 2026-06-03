import { Brain, Gamepad2, Rocket, Sparkles, Video } from "lucide-react"

import { Icons } from "@/components/icons"

import type { Bookmark } from "../types/bookmarks"

export const BOOKMARKS: Bookmark[] = [
  // AR/VR Design Resources
  {
    title: "Snap AR Lens Studio Documentation",
    url: "https://docs.snap.com/lens-studio",
    author: "Snap Inc.",
    icon: <Sparkles />,
    bookmarkedAt: "2025-09-15",
  },
  {
    title: "Meta Spark AR Documentation",
    url: "https://spark.meta.com/learn",
    author: "Meta",
    icon: <Sparkles />,
    bookmarkedAt: "2025-10-20",
  },
  {
    title: "WebXR Device API",
    url: "https://immersiveweb.dev",
    author: "Immersive Web",
    icon: <Sparkles />,
    bookmarkedAt: "2025-11-05",
  },

  // Game Development
  {
    title: "Unity Learn - Game Development",
    url: "https://learn.unity.com",
    author: "Unity Technologies",
    icon: <Gamepad2 />,
    bookmarkedAt: "2026-01-10",
  },
  {
    title: "Game Design Patterns",
    url: "https://gameprogrammingpatterns.com",
    author: "Robert Nystrom",
    icon: <Gamepad2 />,
    bookmarkedAt: "2026-01-25",
  },
  {
    title: "Mobile Game Monetization Guide",
    url: "https://unity.com/solutions/mobile-game-monetization",
    author: "Unity",
    icon: <Gamepad2 />,
    bookmarkedAt: "2026-02-15",
  },

  // AI/ML Resources
  {
    title: "Anthropic Claude Documentation",
    url: "https://docs.anthropic.com",
    author: "Anthropic",
    icon: <Brain />,
    bookmarkedAt: "2025-12-01",
  },
  {
    title: "OpenAI API Platform",
    url: "https://platform.openai.com/docs",
    author: "OpenAI",
    icon: <Brain />,
    bookmarkedAt: "2025-12-05",
  },
  {
    title: "Hugging Face Transformers",
    url: "https://huggingface.co/docs/transformers",
    author: "Hugging Face",
    icon: <Brain />,
    bookmarkedAt: "2026-01-20",
  },
  {
    title: "LangChain Documentation",
    url: "https://python.langchain.com/docs/introduction",
    author: "LangChain",
    icon: <Brain />,
    bookmarkedAt: "2026-03-10",
  },

  // Content Creation
  {
    title: "YouTube Creator Academy",
    url: "https://creatoracademy.youtube.com",
    author: "YouTube",
    icon: <Video />,
    bookmarkedAt: "2023-06-15",
  },
  {
    title: "Hook Point: How to Stand Out",
    url: "https://www.hookpoint.com",
    author: "Brendan Kane",
    icon: <Video />,
    bookmarkedAt: "2024-03-20",
  },
  {
    title: "MrBeast's Content Strategy",
    url: "https://www.youtube.com/@MrBeast",
    author: "MrBeast",
    icon: <Video />,
    bookmarkedAt: "2024-08-10",
  },

  // Business & Startup
  {
    title: "Y Combinator Startup Library",
    url: "https://www.ycombinator.com/library",
    author: "Y Combinator",
    icon: <Rocket />,
    bookmarkedAt: "2026-01-05",
  },
  {
    title: "Zero to One",
    url: "https://blakemasters.com/peter-thiels-cs183-startup",
    author: "Peter Thiel",
    icon: <Rocket />,
    bookmarkedAt: "2026-02-01",
  },
  {
    title: "Indie Hackers Community",
    url: "https://www.indiehackers.com",
    author: "Indie Hackers",
    icon: <Rocket />,
    bookmarkedAt: "2026-03-15",
  },
  {
    title: "Product Hunt Launch Guide",
    url: "https://www.producthunt.com/launch",
    author: "Product Hunt",
    icon: <Rocket />,
    bookmarkedAt: "2026-04-20",
  },

  // Design & Development
  {
    title: "Design Engineering at Vercel",
    url: "https://vercel.com/blog/design-engineering-at-vercel",
    author: "Vercel",
    icon: <Icons.vercel />,
    bookmarkedAt: "2025-12-01",
  },
  {
    title: "Developing Taste",
    url: "https://emilkowal.ski/ui/developing-taste",
    author: "Emil Kowalski",
    icon: <Icons.animationsdev />,
    bookmarkedAt: "2026-04-09",
  },
]
