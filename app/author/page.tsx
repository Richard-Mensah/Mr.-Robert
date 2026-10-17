import PageHero from "@/components/sections/PageHero"
import BookShowcase from "@/components/sections/BookShowcase"
import ReadingThemes from "@/components/sections/ReadingThemes"
import CTASection from "@/components/sections/CTASection"
import JsonLd from "@/components/ui/JsonLd"
import { BOOKS } from "@/data/books"
import PageMoments from "@/components/features/gallery/PageMoments"
import { booksJsonLd, pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Author",
  description:
    "Books by Robert Kampi Laari: If I Knew Then, and Beyond Handshakes: From Potential to Proof — Networking for Career & Life Progress.",
  path: "/author",
})

export default function AuthorPage() {
  return (
    <>
      <JsonLd data={booksJsonLd(BOOKS)} />
      <PageHero
        eyebrow="Author"
        title={
          <>
            Ideas that help people <em className="text-gold-shimmer">move forward.</em>
          </>
        }
        intro={
          <p>
            Robert writes to encourage personal growth, meaningful relationships and purposeful lives. His works
            include <cite>If I Knew Then</cite> and <cite>Beyond Handshakes</cite>.
          </p>
        }
      />
      <BookShowcase />
      <PageMoments page="author" tone="dark" />
      <ReadingThemes />
      <CTASection
        eyebrow="Book conversations"
        title="Bring the ideas to your audience."
        body="Invite Robert to speak about the themes of his books at your event, programme or institution."
      />
    </>
  )
}
