import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { ARLensGallery } from "@/components/ar-lens-gallery"
import { Button } from "@/components/base/ui/button"
import { CurrentlyBuilding } from "@/components/currently-building"
import { PlayerGlobe } from "@/components/player-globe"
import { ReachStats } from "@/components/reach-stats"
import { RemountOnThemeChange } from "@/components/remount-on-theme-change"
import { SecretMessage } from "@/components/secret-message"
import { VCardQR } from "@/components/vcard-qr"
import { VisitorCounter } from "@/components/visitor-counter"
import { ZodeTerminal } from "@/components/zode-terminal"
import { cn } from "@/lib/utils"
import AppleHelloEffectAllDemo from "@/registry/examples/apple-hello-effect-languages-demo"
import GitHubContributionsDemo1 from "@/registry/examples/github-contributions-demo-01"
import TestimonialSpotlightDemo from "@/registry/examples/testimonial-spotlight-demo-01"
import TextFlipDemo from "@/registry/examples/text-flip-demo"
import ThemeToggleEffectDemo from "@/registry/examples/theme-toggle-effect-demo/theme-toggle-effect-demo"
import TwemojiDemo from "@/registry/examples/twemoji-demo"

import { Panel, PanelHeader, PanelTitle } from "./panel"

export function ComponentsShowcase() {
  return (
    <Panel id="showcase">
      <PanelHeader>
        <PanelTitle>Showcase</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 gap-1 p-1 md:grid-cols-3">
        <GridItem className="md:row-span-2">
          <AppleHelloEffectAllDemo />
        </GridItem>

        <GridItem>
          <RemountOnThemeChange>
            <SecretMessage />
          </RemountOnThemeChange>
        </GridItem>

        <GridItem>
          <CurrentlyBuilding />
        </GridItem>

        <GridItem className="md:row-span-2">
          <PlayerGlobe />
        </GridItem>

        <GridItem>
          <div className="flex min-h-12 items-center">
            <ThemeToggleEffectDemo />
          </div>
        </GridItem>

        <GridItem className="md:row-span-2">
          <ZodeTerminal />
        </GridItem>

        <GridItem className="md:row-span-2">
          <VCardQR />
        </GridItem>

        <GridItem>
          <TestimonialSpotlightDemo />
        </GridItem>

        <GridItem className="p-0 md:col-span-2 md:row-span-2">
          <GitHubContributionsDemo1 />
        </GridItem>

        <GridItem>
          <TextFlipDemo />
        </GridItem>

        <GridItem>
          <VisitorCounter />
        </GridItem>

        <GridItem>
          <TwemojiDemo />
        </GridItem>

        <GridItem className="p-0 pb-4 md:col-span-2 md:row-span-2">
          <ARLensGallery />
        </GridItem>

        <GridItem>
          <ReachStats />
        </GridItem>
      </div>

      <div className="screen-line-bottom h-px" />

      <div className="flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/components" />}
        >
          All Components
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}

function GridItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-line bg-background p-4 transition-[border-color] hover:border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
