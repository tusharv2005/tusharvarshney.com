import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://tusharvarshney.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Sponsors",
    href: "/#sponsors",
  },
  {
    title: "Showcase",
    href: "/#showcase",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@tusharv369"
export const GITHUB_USERNAME = "tusharv2005"
export const SOURCE_CODE_GITHUB_REPO = "tusharv2005/tusharvarshney.me"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/tusharv2005/tusharvarshney.me"

export const SPONSORSHIP_URL = "https://github.com/sponsors/tusharv2005"

export const UTM_PARAMS = {
  utm_source: "tusharvarshney.com",
}
