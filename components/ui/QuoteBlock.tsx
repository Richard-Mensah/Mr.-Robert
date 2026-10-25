import { cn } from "@/lib/utils"

type Props = {
  quote: string
  attribution?: string
  tone?: "dark" | "light"
  size?: "default" | "large"
  className?: string
}

export default function QuoteBlock({ quote, attribution, tone = "dark", size = "default", className }: Props) {
  return (
    <figure data-reveal className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "block font-serif leading-none",
          size === "large" ? "text-8xl sm:text-9xl" : "text-6xl",
          tone === "dark" ? "text-gold-deep" : "text-gold-light",
        )}
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "-mt-4 font-serif tracking-tight text-balance",
          size === "large"
            ? "text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
            : "text-2xl leading-snug sm:text-3xl",
          tone === "dark" ? "text-ink" : "text-ivory",
        )}
      >
        <p>{quote}</p>
      </blockquote>
      {attribution && (
        <figcaption
          className={cn(
            "mt-8 font-display text-sm tracking-eyebrow",
            tone === "dark" ? "text-muted" : "text-ivory/60",
          )}
        >
          {attribution}
        </figcaption>
      )}
    </figure>
  )
}
