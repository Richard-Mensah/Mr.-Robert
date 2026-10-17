import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Book, ImageAsset } from "@/types"

type Props = {
  book: Book
  author: string
  className?: string
  /** Overrides the book cover, e.g. a different photo of the book on another page. */
  image?: ImageAsset
}

const FRAME =
  "relative overflow-hidden shadow-[0_30px_60px_-20px_rgba(18,20,18,0.45)] transition-transform duration-700 ease-out group-hover:-translate-y-2"

/**
 * The book's cover photograph (a 4:5 staged shot), or a typographic 2:3 cover
 * when no image has been supplied.
 */
export default function BookCover({ book, author, className, image }: Props) {
  const cover = image ?? book.cover
  if (cover) {
    return (
      <div className={cn(FRAME, "aspect-[4/5] bg-night", className)}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 20rem, 80vw"
          className="object-cover"
          style={cover.position ? { objectPosition: cover.position } : undefined}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Cover of ${book.title}`}
      className={cn(
        FRAME,
        "flex aspect-[2/3] flex-col justify-between p-7 sm:p-9",
        book.coverTone === "ink" && "bg-ink text-ivory",
        book.coverTone === "forest" && "bg-forest-deep text-ivory",
        book.coverTone === "gold" && "bg-gold text-ivory",
        className,
      )}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-black/25" />
      <span aria-hidden="true" className="absolute inset-4 border border-ivory/15" />
      <p className="relative text-[0.6rem] font-semibold uppercase tracking-eyebrow text-ivory/60">
        {author}
      </p>
      <div className="relative">
        <p className="font-serif text-3xl leading-[1.05] tracking-tight sm:text-4xl">{book.title}</p>
        {book.subtitle && (
          <p className="mt-4 text-xs leading-relaxed text-ivory/70 sm:text-sm">{book.subtitle}</p>
        )}
      </div>
      <span aria-hidden="true" className="relative h-px w-12 bg-gold-light" />
    </div>
  )
}
