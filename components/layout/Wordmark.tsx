import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  tone?: "dark" | "light"
  onNavigate?: () => void
}

export default function Wordmark({ tone = "dark", onNavigate }: Props) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Robert Kampi Laari, home"
      className={cn("group inline-flex items-center gap-3", tone === "dark" ? "text-ink" : "text-ivory")}
    >
      <Image
        src="/brand/monogram.png"
        alt=""
        width={40}
        height={40}
        className="size-9 ring-1 ring-gold-light/30 transition-transform duration-500 group-hover:scale-105 sm:size-10"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] tracking-[0.12em] sm:text-base">Robert Kampi Laari</span>
        <span className="mt-1 hidden font-script text-lg leading-none text-gold-light sm:block">See you at the top.</span>
      </span>
    </Link>
  )
}
