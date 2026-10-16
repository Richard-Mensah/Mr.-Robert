import type { ReactNode } from "react"
import Eyebrow from "@/components/ui/Eyebrow"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  eyebrow: string
  title: string
  intro?: ReactNode
  tone?: "dark" | "light"
  as?: "h1" | "h2"
  align?: "left" | "split"
  className?: string
}

export default function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  tone = "dark",
  as: Heading = "h2",
  align = "left",
  className,
}: Props) {
  return (
    <header
      data-reveal
      className={cn(
        "grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end lg:gap-12",
        className,
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <Heading
          id={id}
          className={cn(
            "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl",
            tone === "dark" ? "text-ink" : "text-ivory",
          )}
        >
          {title}
        </Heading>
      </div>
      {intro && (
        <div
          className={cn(
            "max-w-xl text-lg leading-relaxed",
            tone === "dark" ? "text-muted" : "text-ivory/75",
            align === "split" && "lg:col-span-5 lg:pb-2",
          )}
        >
          {intro}
        </div>
      )}
    </header>
  )
}
