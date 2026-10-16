import { cn } from "@/lib/utils"
import type { Book } from "@/types"

type Props = {
  book: Book
  author: string
  className?: string
}

/** Typographic cover placeholder. Swap for the real cover artwork when supplied. */
export default function BookCover({ book, author, className }: Props) {
  return (
    <div
      role="img"
      aria-label={`Cover placeholder for ${book.title}`}
      className={cn(
        "relative flex aspect-[2/3] flex-col justify-between overflow-hidden p-7 shadow-[0_30px_60px_-20px_rgba(18,20,18,0.45)] transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:p-9",
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
