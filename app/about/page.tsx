import PageHero from "@/components/sections/PageHero"
import Chapters from "@/components/sections/Chapters"
import BiographySection from "@/components/sections/BiographySection"
import MottoManifesto from "@/components/sections/MottoManifesto"
import CTASection from "@/components/sections/CTASection"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "About",
  description:
    "The biography of Robert Kampi Laari: Ghanaian youth development advocate, Regional Director of the National Youth Authority in the North East Region, author, speaker and founder of the Tamale Youth Summit.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Robert"
        title={
          <>
            A life built around purpose and <em className="text-gold-shimmer">possibility.</em>
          </>
        }
      />
      <Chapters />
      <BiographySection />
      <MottoManifesto />
      <CTASection />
    </>
  )
}
