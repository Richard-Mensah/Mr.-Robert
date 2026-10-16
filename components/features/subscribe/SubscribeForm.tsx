"use client"

import { ArrowRight, Loader2 } from "lucide-react"
import FormFeedback from "@/components/ui/FormFeedback"
import Honeypot from "@/components/ui/Honeypot"
import { useApiForm } from "@/hooks/useApiForm"
import { cn } from "@/lib/utils"
import type { SubscribeInterest } from "@/types"

type Props = {
  interest: SubscribeInterest
  label: string
  buttonLabel?: string
  tone?: "dark" | "light"
}

/** Compact one-field opt-in that stores the subscriber in Neon under an interest. */
export default function SubscribeForm({ interest, label, buttonLabel = "Notify me", tone = "light" }: Props) {
  const { status, feedback, errors, handleSubmit } = useApiForm("/api/subscribe")
  const dark = tone === "dark"
  const id = `subscribe-${interest}`

  return (
    <form onSubmit={handleSubmit} noValidate className="relative w-full max-w-xl">
      <input type="hidden" name="interest" value={interest} />
      <Honeypot />
      <label htmlFor={id} className={cn("font-display text-xs tracking-eyebrow", dark ? "text-gold-light" : "text-gold-deep")}>
        {label}
      </label>
      <div
        className={cn(
          "mt-3 flex items-stretch border transition-colors focus-within:border-gold",
          dark ? "border-ivory/20 bg-ivory/5" : "border-ink/20 bg-paper",
        )}
      >
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          className={cn(
            "min-h-12 w-full bg-transparent px-4 text-base focus:outline-none",
            dark ? "text-ivory placeholder:text-ivory/40" : "text-ink placeholder:text-muted-light",
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-sweep inline-flex shrink-0 items-center gap-2 bg-gold-light px-5 text-sm font-medium text-ink transition-colors hover:bg-ivory disabled:opacity-60"
        >
          {status === "submitting" ? <Loader2 aria-hidden="true" className="size-4 animate-spin" /> : buttonLabel}
          {status !== "submitting" && <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />}
        </button>
      </div>
      {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email}</p>}
      <div className="mt-3">
        <FormFeedback status={status} message={feedback} />
      </div>
    </form>
  )
}
