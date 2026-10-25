import BookCover from "@/components/ui/BookCover"
import { PROFILE } from "@/data/profile"
import type { Book, ImageAsset } from "@/types"

type Props = {
  book: Book
  detailed?: boolean
  image?: ImageAsset
}

export default function BookCard({ book, detailed = false, image }: Props) {
  return (
    <article id={book.slug} className="group grid scroll-mt-28 gap-10 sm:grid-cols-12 sm:items-end">
      <div className="sm:col-span-5">
        <div className="book-3d">
          <BookCover book={book} author={PROFILE.name} image={image} />
        </div>
      </div>
      <div className="sm:col-span-7 sm:pb-4">
        <p className="font-display text-sm tracking-eyebrow text-gold-deep">A book by {PROFILE.name}</p>
        <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
          <cite className="not-italic">{book.title}</cite>
        </h3>
        {book.subtitle && <p className="mt-3 font-serif text-lg italic text-muted">{book.subtitle}</p>}
        <p className="mt-6 leading-relaxed text-muted">{book.description}</p>
        {detailed && (
          <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-muted">
            Publication details, excerpts and where to buy will be listed here when available.
          </p>
        )}
      </div>
    </article>
  )
}
