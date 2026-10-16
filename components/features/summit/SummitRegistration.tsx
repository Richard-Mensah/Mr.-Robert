"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import FormFeedback from "@/components/ui/FormFeedback"
import Honeypot from "@/components/ui/Honeypot"
import SubmitButton from "@/components/ui/SubmitButton"
import DelegatePass from "@/components/features/summit/DelegatePass"
import { useApiForm } from "@/hooks/useApiForm"
import { cn } from "@/lib/utils"

const ROLES = ["Student", "Young professional", "Entrepreneur", "Partner organisation"]

const inputClass =
  "mt-2 min-h-12 w-full border border-ivory/20 bg-ivory/5 px-4 text-base text-ivory placeholder:text-ivory/35 focus:border-gold-light focus:outline-none"

/** Personalise a delegate pass, then register interest in the next Summit (stored in Neon). */
export default function SummitRegistration() {
  const [name, setName] = useState("")
  const [role, setRole] = useState(ROLES[0])
  const { status, feedback, errors, handleSubmit } = useApiForm("/api/subscribe")

  return (
    <section id="pass" aria-labelledby="pass-title" data-checkpoint="Your Pass" className="starfield aurora relative scroll-mt-20 overflow-hidden bg-night py-24 text-ivory lg:py-36">
      <Container size="wide" className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="lg:order-2">
          <DelegatePass name={name} role={role} />
        </div>

        <div>
          <Eyebrow tone="light">Your delegate pass</Eyebrow>
          <h2 id="pass-title" className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Claim your place at the next Summit.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/70">
            Make your pass, then register your interest. You&apos;ll be among the first to hear when the next edition
            is announced.
          </p>

          <form onSubmit={handleSubmit} noValidate className="relative mt-10 space-y-6">
            <input type="hidden" name="interest" value="summit" />
            <input type="hidden" name="role" value={role} />
            <Honeypot />
            <div>
              <label htmlFor="pass-name" className="font-display text-xs tracking-eyebrow text-gold-light">
                Name on your pass
              </label>
              <input
                id="pass-name"
                name="name"
                value={name}
                maxLength={60}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <fieldset>
              <legend className="font-display text-xs tracking-eyebrow text-gold-light">I am a…</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {ROLES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={role === item}
                    onClick={() => setRole(item)}
                    className={cn(
                      "min-h-11 border px-4 text-sm transition-colors",
                      role === item ? "border-gold-light bg-gold-light text-ink" : "border-ivory/20 text-ivory/80 hover:border-gold-light",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="pass-email" className="font-display text-xs tracking-eyebrow text-gold-light">
                Email <span className="text-ivory/50">*</span>
              </label>
              <input
                id="pass-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "pass-email-error" : undefined}
                className={inputClass}
              />
              {errors.email && (
                <p id="pass-email-error" className="mt-2 text-sm text-red-300">
                  {errors.email}
                </p>
              )}
            </div>
            <FormFeedback status={status} message={feedback} />
            <SubmitButton label="Register my interest" submitting={status === "submitting"} />
          </form>
        </div>
      </Container>
    </section>
  )
}
