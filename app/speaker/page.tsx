import PageHero from "@/components/sections/PageHero"
import SpeakerThemes from "@/components/sections/SpeakerThemes"
import SpeakerInvite from "@/components/sections/SpeakerInvite"
import EventPlanner from "@/components/features/speaker/EventPlanner"
import ImagePanel from "@/components/ui/ImagePanel"
import Container from "@/components/ui/Container"
import ButtonLink from "@/components/ui/ButtonLink"
import { IMAGES } from "@/data/images"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Speaker",
  description:
    "Invite Robert Kampi Laari to speak on youth leadership, personal growth, networking and career progress, opportunity, responsible citizenship and community transformation.",
  path: "/speaker",
})

type Props = {
  searchParams: Promise<{ audience?: string; format?: string; topic?: string }>
}

const clip = (value?: string) => value?.slice(0, 200)

export default async function SpeakerPage({ searchParams }: Props) {
  const { audience, format, topic } = await searchParams

  return (
    <>
      <PageHero
        eyebrow="Motivational speaker"
        title={
          <>
            Conversations that move people <em className="text-gold-shimmer">forward.</em>
          </>
        }
        intro={
          <p>
            For conferences, leadership events and youth programmes. Robert speaks to help people grow, connect and
            take part in shaping their communities.
          </p>
        }
        aside={
          <div className="flex flex-col gap-3">
            <ButtonLink href="#planner" label="Plan your event" />
            <ButtonLink href="/speaker/one-sheet" label="Speaker one-sheet" variant="light" />
          </div>
        }
      />
      <Container size="wide" className="pt-20 lg:pt-28">
        <div data-reveal className="relative aspect-[16/9] lg:aspect-[21/9]">
          <ImagePanel image={IMAGES.speaking} className="h-full w-full" sizes="100vw" />
        </div>
      </Container>
      <SpeakerThemes title="What Robert speaks about." showFormats ctaHref="#planner" />
      <EventPlanner />
      <SpeakerInvite brief={{ audience: clip(audience), format: clip(format), topic: clip(topic) }} />
    </>
  )
}
