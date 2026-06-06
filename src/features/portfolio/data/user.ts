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
  website: "https://tusharvarshney.vercel.app",
  websiteDisplay: "tusharvarshney.com",
  jobTitle: "AI Engineer",
  jobs: [
    {
      title: "Founder",
      company: "Horizn Games",
      website:
        "https://play.google.com/store/apps/details?id=com.horizngames.blockpuzzlemaster",
      experienceId: "HoriznGames",
    },
    // {
    //   title: "Content Creator",
    //   company: "Independent",
    //   website: "https://www.instagram.com/tusharvarshney",
    //   experienceId: "freelance",
    // },
  ],
  about: `
- AI Engineer and indie builder focused on creating AI-native software, developer tools, and interactive digital experiences with strong attention to execution.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [horizngames.com](https://play.google.com/store/apps/details?id=com.horizngames.blockpuzzlemaster&pcampaignid=web_share) , [Zode.ai](https://github.com/tusharv2005/zode.ai) (AI coding) , and [PetalUI](https://github.com/tusharv2005/PetalUI) - building products that scale globally.
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
  namePronunciationUrl: "/tvarshney_make_me_an_vid.mp4",
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
