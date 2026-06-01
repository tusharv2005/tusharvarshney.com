"use client"

import { useTheme } from "next-themes"
import QRCode from "qrcode"
import { useEffect, useState } from "react"

import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"

// Build a self-contained vCard string. Encoding the contact directly into the
// QR means scanning works offline and never depends on the site/domain/SSL.
function buildVCard(): string {
  const phone = decodePhoneNumber(USER.phoneNumber).replace(/\s+/g, "")
  const email = decodeEmail(USER.email)
  const job = USER.jobs[0]

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${USER.lastName};${USER.firstName};;;`,
    `FN:${USER.displayName}`,
    job ? `ORG:${job.company}` : "",
    `TITLE:${USER.jobTitle}`,
    phone ? `TEL;TYPE=CELL:${phone}` : "",
    email ? `EMAIL;TYPE=INTERNET:${email}` : "",
    `URL:${USER.website}`,
    USER.address ? `ADR;TYPE=HOME:;;${USER.address};;;;` : "",
    "END:VCARD",
  ]

  return lines.filter(Boolean).join("\n")
}

export function VCardQR({ className, ...props }: React.ComponentProps<"div">) {
  const { resolvedTheme } = useTheme()
  const [dataUrl, setDataUrl] = useState<string | null>(null)

  useEffect(() => {
    const isDark = resolvedTheme === "dark"

    QRCode.toDataURL(buildVCard(), {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 320,
      color: {
        // Invert for dark mode so the code stays scannable.
        dark: isDark ? "#fafafa" : "#09090b",
        light: "#00000000", // transparent background
      },
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(null))
  }, [resolvedTheme])

  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-4 text-center select-none",
        className
      )}
      {...props}
    >
      <div className="rounded-2xl border border-line bg-background p-3 shadow-sm transition-colors hover:border-border retina:border-[0.5px]">
        {dataUrl ? (
          <img
            src={dataUrl}
            alt="QR code to save Tushar Varshney's contact card"
            className="size-40 sm:size-44"
            width={176}
            height={176}
          />
        ) : (
          <div className="size-40 animate-pulse rounded-lg bg-muted sm:size-44" />
        )}
      </div>

      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">
          Scan to save my contact
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Point your camera here 📷
        </p>
      </div>
    </div>
  )
}
