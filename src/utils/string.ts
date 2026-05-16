import { formatIncompletePhoneNumber } from "@/lib/libphonenumber"

export function decodeEmail(email: string) {
  if (!email) return ""

  // Check if it's already decoded (contains @ symbol)
  if (email.includes("@")) return email

  try {
    return atob(email)
  } catch {
    return email
  }
}

export function decodePhoneNumber(phone: string) {
  if (!phone) return ""

  // Check if it's already decoded (starts with + or is numeric)
  if (phone.startsWith("+") || /^\d+$/.test(phone)) return phone

  try {
    return atob(phone)
  } catch {
    return phone
  }
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone)
}
