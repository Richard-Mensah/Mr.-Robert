import AscentIllustration from "@/components/illustrations/AscentIllustration"
import AuthorIllustration from "@/components/illustrations/AuthorIllustration"
import LeadershipIllustration from "@/components/illustrations/LeadershipIllustration"
import SpeakingIllustration from "@/components/illustrations/SpeakingIllustration"
import SummitCrowdIllustration from "@/components/illustrations/SummitCrowdIllustration"
import YouthIllustration from "@/components/illustrations/YouthIllustration"
import type { ComponentType } from "react"
import type { IllustrationName } from "@/types"

/** Cartoon placeholders shown until real photography is marked ready in data/images.ts. */
export const ILLUSTRATIONS: Record<IllustrationName, ComponentType> = {
  ascent: AscentIllustration,
  author: AuthorIllustration,
  leadership: LeadershipIllustration,
  speaking: SpeakingIllustration,
  summit: SummitCrowdIllustration,
  youth: YouthIllustration,
}
