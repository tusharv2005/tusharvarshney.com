"use client"

import { motion, useMotionValue, useSpring } from "motion/react"

const VIEWBOX_WIDTH = 1089
const DEFAULT_GRADIENT_X = 544.5

export function SiteFooterInteractiveLogotype() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1089 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 1H161V33H1V1ZM1 33H33V65H1V33ZM129 33H161V65H129V33ZM65 33H97V257H65V33ZM33 225H65V257H33V225ZM97 225H129V257H97V225ZM193 97H225V225H193V97ZM225 225H321V257H225V225ZM321 97H353V257H321V97ZM417 65H545V97H417V65ZM385 97H417V161H385V97ZM417 129H513V161H417V129ZM513 161H545V225H513V161ZM385 225H513V257H385V225ZM577 1H609V65H705V97H609V257H577V1ZM705 97H737V257H705V97ZM801 65H929V257H897V225H865V193H897V97H801V65ZM801 225H769V97H801V225ZM801 225V257H865V225H801ZM961 65H993V257H961V65ZM993 65H1089V129H1057V97H993V65Z"
              fill="url(#paint0_linear_footer)"
            />
            <path
              className="stroke-foreground/10"
              d="M1 1H161V33H1V1ZM1 33H33V65H1V33ZM129 33H161V65H129V33ZM65 33H97V257H65V33ZM33 225H65V257H33V225ZM97 225H129V257H97V225ZM193 97H225V225H193V97ZM225 225H321V257H225V225ZM321 97H353V257H321V97ZM417 65H545V97H417V65ZM385 97H417V161H385V97ZM417 129H513V161H417V129ZM513 161H545V225H513V161ZM385 225H513V257H385V225ZM577 1H609V65H705V97H609V257H577V1ZM705 97H737V257H705V97ZM801 65H929V257H897V225H865V193H897V97H801V65ZM801 225H769V97H801V225ZM801 225V257H865V225H801ZM961 65H993V257H961V65ZM993 65H1089V129H1057V97H993V65Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_footer"
                x1={gradientX1}
                y1="1"
                x2="544.5"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
