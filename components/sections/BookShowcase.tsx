import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import FlipBook from "@/components/features/books/FlipBook"
import SubscribeForm from "@/components/features/subscribe/SubscribeForm"
import { BOOKS } from "@/data/books"
import { PROFILE } from "@/data/profile"
import { revealDelay } from "@/lib/utils"

/** Author page showcase: interactive 3D books with details, and an opt-in for availability. */
export default function BookShowcase() {
  return (
    <section aria-labelledby="books-title" data-checkpoint="Books" className="bg-paper py-24 lg:py-36">
      <Container size="wide">
        <SectionHeader
          id="books-title"
          eyebrow={`Books by ${PROFILE.name}`}
          title="The books."
          align="split"
          intro={<p>Two works on growth, relationships and progress. Turn each book over for more.</p>}
        />

        <ul className="mt-20 grid gap-20 lg:grid-cols-2 lg:gap-12">
          {BOOKS.map((book, index) => (
            <li key={book.slug} id={book.slug} data-reveal style={revealDelay(index, 150)} className="grid scroll-mt-28 gap-10 sm:grid-cols-2 sm:items-center">
              <FlipBook book={book} />
              <div>
                <p className="font-display text-xs tracking-eyebrow text-gold-deep">Book {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                  <cite className="not-italic">{book.title}</cite>
                </h3>
                {book.subtitle && <p className="mt-3 font-serif text-lg italic text-muted">{book.subtitle}</p>}
                <p className="mt-6 leading-relaxed text-muted">{book.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal className="grid-chancery aurora relative mt-24 grid gap-8 overflow-hidden bg-night p-8 text-ivory sm:p-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <p className="font-display text-xs tracking-eyebrow text-gold-light">Be first to know</p>
            <p className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Get a note when the books are available to order.
            </p>
          </div>
          <div className="relative">
            <SubscribeForm interest="books" label="Your email" buttonLabel="Notify me" tone="dark" />
          </div>
        </div>
      </Container>
    </section>
  )
}
