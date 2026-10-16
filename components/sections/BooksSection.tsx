import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import ButtonLink from "@/components/ui/ButtonLink"
import BookCard from "@/components/sections/BookCard"
import { BOOKS } from "@/data/books"

type Props = {
  title?: string
  detailed?: boolean
  showLink?: boolean
}

export default function BooksSection({
  title = "Ideas that help people move forward.",
  detailed = false,
  showLink = true,
}: Props) {
  return (
    <section aria-labelledby="books-title" data-checkpoint="Books" className="bg-paper py-24 lg:py-36">
      <Container size="wide">
        <SectionHeader
            id="books-title"
            eyebrow="Books by Robert Kampi Laari"
            title={title}
            align="split"
            intro={
              <p>
                Through his writing, Robert encourages readers to embrace personal growth, cultivate meaningful
                relationships, develop their abilities and pursue purposeful lives.
              </p>
            }
          />
        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:gap-16">
          {BOOKS.map((book) => (
            <div key={book.slug} data-reveal>
              <BookCard book={book} detailed={detailed} />
            </div>
          ))}
        </div>
        {showLink && (
          <div data-reveal className="mt-20">
            <ButtonLink href="/author" label="About the books" variant="outline" />
          </div>
        )}
      </Container>
    </section>
  )
}
