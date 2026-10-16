"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import FormField from "@/components/ui/FormField"
import FormFeedback from "@/components/ui/FormFeedback"
import SubmitButton from "@/components/ui/SubmitButton"
import Honeypot from "@/components/ui/Honeypot"
import WizardProgress from "@/components/features/forms/WizardProgress"
import PathwayChoice from "@/components/features/forms/PathwayChoice"
import { useInquiryForm } from "@/hooks/useInquiryForm"
import { CONTACT_PATHWAYS } from "@/data/contact"
import type { InquiryKind } from "@/types"

const STEPS = ["Pathway", "Your details", "Message"]

type Props = {
  defaultKind?: InquiryKind
}

/** Three-step contact wizard. All steps stay mounted, so one submit sends every field. */
export default function ContactForm({ defaultKind = "general" }: Props) {
  const { status, feedback, errors, handleSubmit } = useInquiryForm()
  const [kind, setKind] = useState<InquiryKind>(defaultKind)
  const [step, setStep] = useState(0)
  const [summary, setSummary] = useState({ name: "", email: "", organisation: "" })
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  // Native constraint validation for the fields in the current step.
  const stepIsValid = () => {
    const fields = stepRefs.current[step]?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
    return Array.from(fields ?? []).every((field) => field.reportValidity())
  }

  const next = () => {
    if (!stepIsValid()) return
    if (formRef.current) {
      const data = new FormData(formRef.current)
      setSummary({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        organisation: String(data.get("organisation") ?? ""),
      })
    }
    setStep((value) => Math.min(value + 1, STEPS.length - 1))
  }

  const pathway = CONTACT_PATHWAYS.find((item) => item.kind === kind)

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative" aria-label="Contact Robert">
      <Honeypot />
      <WizardProgress steps={STEPS} current={step} />

      <div className="mt-10 min-h-[22rem]">
        <div ref={(node) => { stepRefs.current[0] = node }} hidden={step !== 0} className="animate-toast">
          <PathwayChoice value={kind} onChange={setKind} />
        </div>

        <div ref={(node) => { stepRefs.current[1] = node }} hidden={step !== 1} className="animate-toast space-y-8">
          <p className="font-serif text-3xl tracking-tight text-ink">Who should we reply to?</p>
          <FormField name="name" label="Name" required autoComplete="name" error={errors.name} />
          <FormField name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
          <FormField name="organisation" label="Organisation" autoComplete="organization" error={errors.organisation} />
        </div>

        <div ref={(node) => { stepRefs.current[2] = node }} hidden={step !== 2} className="animate-toast space-y-8">
          <div className="border border-ink/10 bg-paper p-5 text-sm">
            <p className="font-display text-[0.6rem] tracking-[0.2em] text-gold-deep">Review</p>
            <p className="mt-2 text-ink">
              <span className="font-medium">{pathway?.title}</span> enquiry from {summary.name || "you"}
              {summary.organisation && ` (${summary.organisation})`}. Reply to {summary.email || "your email"}.
            </p>
          </div>
          <FormField name="message" label="Message" type="textarea" required error={errors.message} />
          <FormFeedback status={status} message={feedback} />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
        {step > 0 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back
          </button>
        ) : (
          <span />
        )}
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="btn-sweep inline-flex min-h-12 items-center gap-3 bg-night px-7 text-sm font-medium text-gold-light hover:bg-ink"
          >
            Continue
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </button>
        ) : (
          <SubmitButton label="Send message" submitting={status === "submitting"} />
        )}
      </div>
    </form>
  )
}
