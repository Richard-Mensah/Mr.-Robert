import { cn } from "@/lib/utils"

type Props = {
  name: string
  label: string
  checked: boolean
  onChange: () => void
}

/** A large, card-like radio option for the event planner. */
export default function PlannerOption({ name, label, checked, onChange }: Props) {
  return (
    <label
      className={cn(
        "flex min-h-14 cursor-pointer items-center gap-3 border px-4 text-sm transition-colors",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold",
        checked ? "border-night bg-night text-ivory" : "border-ink/15 bg-paper text-ink hover:border-gold",
      )}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span
        aria-hidden="true"
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border",
          checked ? "border-gold-light" : "border-ink/30",
        )}
      >
        {checked && <span className="size-2 rounded-full bg-gold-light" />}
      </span>
      {label}
    </label>
  )
}
