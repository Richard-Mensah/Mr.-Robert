import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  label: string
  variant?: "primary" | "outline" | "light" | "text"
  className?: string
}

export default function ButtonLink({ href, label, variant = "primary", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 text-sm font-medium tracking-wide transition-all duration-300",
        variant !== "text" && "min-h-12 px-7 py-3.5",
        variant === "primary" &&
          "btn-sweep bg-gold-light text-ink shadow-[0_10px_30px_-12px_rgba(230,199,126,0.7)] hover:bg-ivory hover:shadow-[0_14px_40px_-12px_rgba(230,199,126,0.9)]",
        variant === "outline" && "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
        variant === "light" && "border border-ivory/30 text-ivory hover:border-gold-light hover:text-gold-light",
        variant === "text" && "border-b border-current pb-1 text-forest hover:text-gold-deep",
        className,
      )}
    >
      {label}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </Link>
  )
}
