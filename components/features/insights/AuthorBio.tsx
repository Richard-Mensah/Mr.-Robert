import Link from "next/link"
import { PROFILE } from "@/data/profile"
import { ROLE_LINE } from "@/constants"

export default function AuthorBio() {
  return (
    <aside aria-label="About the author" className="border-t border-ink/15 pt-10">
      <p className="font-display text-sm tracking-eyebrow text-muted">Written by</p>
      <p className="mt-4 font-serif text-3xl tracking-tight text-ink">{PROFILE.name}</p>
      <p className="mt-2 text-sm text-muted">{ROLE_LINE}</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">
        Regional Director of the National Youth Authority in Ghana&apos;s North East Region and founder and convener
        of the Tamale Youth Summit.
      </p>
      <Link href="/about" className="mt-6 inline-block border-b border-current pb-1 text-sm text-forest hover:text-forest-deep">
        More about Robert
      </Link>
    </aside>
  )
}
