"use client"

import FormField from "@/components/ui/FormField"
import FormFeedback from "@/components/ui/FormFeedback"
import SubmitButton from "@/components/ui/SubmitButton"
import Honeypot from "@/components/ui/Honeypot"
import { useInquiryForm } from "@/hooks/useInquiryForm"

type Props = {
  defaults?: {
    topic?: string
    message?: string
  }
}

export default function SpeakerInquiryForm({ defaults = {} }: Props) {
  const { status, feedback, errors, handleSubmit } = useInquiryForm()

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-8 sm:grid-cols-2" aria-label="Speaking invitation">
      <input type="hidden" name="kind" value="speaking" />
      <Honeypot />
      <FormField name="name" label="Name" required autoComplete="name" error={errors.name} />
      <FormField name="organisation" label="Organisation" autoComplete="organization" error={errors.organisation} />
      <FormField name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
      <FormField name="eventName" label="Event / Programme" error={errors.eventName} />
      <FormField name="proposedDate" label="Proposed date" type="date" error={errors.proposedDate} />
      <FormField name="location" label="Location" placeholder="City, country or online" error={errors.location} />
      <FormField
        name="topic"
        label="Speaking topic"
        placeholder="e.g. Youth leadership, networking and career progress"
        defaultValue={defaults.topic}
        error={errors.topic}
        className="sm:col-span-2"
      />
      <FormField
        name="message"
        label="Message"
        type="textarea"
        required
        placeholder="Tell us about the audience, format and what you hope participants take away."
        defaultValue={defaults.message}
        error={errors.message}
        className="sm:col-span-2"
      />
      <div className="flex flex-col gap-6 sm:col-span-2">
        <FormFeedback status={status} message={feedback} />
        <div>
          <SubmitButton label="Send Invitation" submitting={status === "submitting"} />
        </div>
      </div>
    </form>
  )
}
