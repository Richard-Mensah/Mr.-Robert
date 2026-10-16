import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  steps: string[]
  current: number
}

/** Step indicator with a connecting progress line. */
export default function WizardProgress({ steps, current }: Props) {
  return (
    <ol className="flex items-center gap-3" aria-label="Progress">
      {steps.map((label, index) => {
        const done = index < current
        const active = index === current
        return (
          <li key={label} className="flex flex-1 items-center gap-3" aria-current={active ? "step" : undefined}>
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-all duration-500",
                done && "border-forest bg-forest text-ivory",
                active && "border-gold bg-gold-light text-ink shadow-[0_0_20px_rgba(230,199,126,0.6)]",
                !done && !active && "border-ink/20 text-muted",
              )}
            >
              {done ? <Check aria-hidden="true" className="size-4" /> : index + 1}
            </span>
            <span className={cn("hidden text-sm sm:block", active ? "font-medium text-ink" : "text-muted")}>{label}</span>
            {index < steps.length - 1 && (
              <span aria-hidden="true" className="h-px flex-1 bg-ink/10">
                <span className={cn("block h-full bg-gold transition-all duration-700", done ? "w-full" : "w-0")} />
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
