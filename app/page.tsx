import Hero from "@/components/sections/Hero"
import RecordSlideshow from "@/components/features/record/RecordSlideshow"
import AtAGlance from "@/components/sections/AtAGlance"
import PathFinder from "@/components/sections/PathFinder"
import AboutPreview from "@/components/sections/AboutPreview"
import PhilosophyStatement from "@/components/sections/PhilosophyStatement"
import LeadershipPillars from "@/components/sections/LeadershipPillars"
import SummitSection from "@/components/sections/SummitSection"
import GalleryTeaser from "@/components/sections/GalleryTeaser"
import BooksSection from "@/components/sections/BooksSection"
import SpeakerThemes from "@/components/sections/SpeakerThemes"
import MottoManifesto from "@/components/sections/MottoManifesto"
import CTASection from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecordSlideshow />
      <AtAGlance />
      <PathFinder />
      <AboutPreview />
      <PhilosophyStatement />
      <LeadershipPillars />
      <SummitSection />
      <GalleryTeaser />
      <BooksSection />
      <SpeakerThemes />
      <MottoManifesto />
      <CTASection />
    </>
  )
}
