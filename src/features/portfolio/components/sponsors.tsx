import { PlusIcon } from "@/components/animated-icons/plus"
import { SPONSORSHIP_URL } from "@/config/site"
import { SponsorItem } from "@/features/sponsor/components/sponsor-item"

import { Panel, PanelDescription, PanelHeader, PanelTitle } from "./panel"

export function Sponsors() {
  return (
    <Panel id="sponsors">
      <PanelHeader className="after:content-none">
        <PanelTitle>Sponsors</PanelTitle>
        <PanelDescription>
          Like what I build? Your support helps me keep creating, shipping, and
          sharing more. Become a sponsor and be the first one here.
        </PanelDescription>
      </PanelHeader>

      <div className="p-4">
        <SponsorItem
          className="min-h-22.5"
          href={SPONSORSHIP_URL}
          aria-label="Sponsor My Work"
        >
          <PlusIcon
            className="flex size-full items-center justify-center text-muted-foreground"
            size={24}
            aria-hidden
          />
        </SponsorItem>
      </div>
    </Panel>
  )
}
