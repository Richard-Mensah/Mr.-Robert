import PageHero from "@/components/sections/PageHero"
import MissionSection from "@/components/sections/MissionSection"
import YouthFramework from "@/components/sections/YouthFramework"
import SummitSection from "@/components/sections/SummitSection"
import LeadershipCompass from "@/components/features/compass/LeadershipCompass"
import CTASection from "@/components/sections/CTASection"
import PageMoments from "@/components/features/gallery/PageMoments"
import { IMAGES } from "@/data/images"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Youth Development",
  description:
    "Robert Kampi Laari's approach to youth development: young people as active participants in designing and delivering the solutions that shape their future.",
  path: "/youth-development",
})

export default function YouthDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Youth development"
        title={
          <>
            Young people are not the future alone. <em className="text-gold-shimmer">They are building the present.</em>
          </>
        }
        intro={
          <p>
            At the centre of Robert&apos;s work is a simple conviction: young people should not merely be
            beneficiaries of development, but active participants in designing and delivering the solutions that
            shape their future.
          </p>
        }
      />
      <MissionSection />
      <YouthFramework />
      <PageMoments page="youth-development" />
      <SummitSection image={IMAGES.summitYouth} />
      <LeadershipCompass />
      <CTASection
        eyebrow="Get involved"
        title="Invest in what young people can do."
        body="Institutions, development organisations and private sector partners working with young people are invited to connect."
      />
    </>
  )
}
