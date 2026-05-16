import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Tushar",
  lastName: "Varshney",
  displayName: "Tushar Varshney",
  username: "tusharvarshney",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Treat AI like a co-founder that never sleeps.",
    "I'd rather ship v1 than plan v10.",
    "Ideas are cheap, execution compounds.",
    "AI Engineer.",
    "Open Source Contributor.",
  ],
  address: "Mumbai, India",
  phoneNumber: "+91 7021871011", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "tvarshney585@gmail.com", // base64 encoded
  website: "https://tusharvarshney.com",
  jobTitle: "Studio Founder",
  jobs: [
    {
      title: "Studio Founder",
      company: "horizngames",
      website: "https://shadcncraft.com?atp=tusharvarshney",
      experienceId: "shadcncraft",
    },
    {
      title: "Founder",
      company: "Horizn Games",
      website:
        "https://play.google.com/store/apps/details?id=com.horizngames.blockpuzzlemaster&pcampaignid=web_share",
      experienceId: "horizngame",
    },
  ],
  about: `
- AI Engineer and indie builder focused on creating AI-native software, developer tools, and interactive digital experiences with strong attention to execution.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [horizngames.com](https://github.com/tusharvarshney/tusharvarshney.com) (1.8k stars), [React Wheel Picker](https://react-wheel-picker.tusharvarshney.com) (16k+ weekly downloads, ▲Vercel OSS Program), and [ZaDark](https://zadark.com) (80k+ downloads, 30k+ users) — peak metrics.
`,
  avatar: "https://assets.tusharvarshney.com/images/tushar-avatar-ghibli.webp",
  avatarVariants: {
    lightOff: "https://avatars.githubusercontent.com/u/170707204?v=4",
    lightOn: "https://avatars.githubusercontent.com/u/170707204?v=4",
    darkOff: "https://avatars.githubusercontent.com/u/170707204?v=4",
    darkOn: "https://avatars.githubusercontent.com/u/170707204?v=4",
  },
  ogImage:
    "https://assets.tusharvarshney.com/images/screenshot-og-image-dark.png?t=1778130487",
  namePronunciationUrl: "https://assets.tusharvarshney.com/audio/tushar.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "tusharvarshney",
    "tushar",
    "tushar varshney",
    "tusharvarshney",
    "quaric",
    "zadark",
  ],
  dateCreated: "2026-6-20", // YYYY-MM-DD
}
