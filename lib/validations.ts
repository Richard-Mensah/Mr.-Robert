import { z } from "zod"
import { MAX_MESSAGE_LENGTH } from "@/constants"

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => (value ? value : null))

export const inquirySchema = z.object({
  kind: z.enum(["speaking", "partnership", "media", "general"]),
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  organisation: optionalText(200),
  eventName: optionalText(200),
  proposedDate: optionalText(60),
  location: optionalText(200),
  topic: optionalText(200),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(MAX_MESSAGE_LENGTH),
  website: z.string().max(500).optional(),
})

export type InquiryInput = z.infer<typeof inquirySchema>

export const subscribeSchema = z.object({
  interest: z.enum(["insights", "books", "summit"]),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  name: optionalText(120),
  role: optionalText(60),
  website: z.string().max(500).optional(),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>

const level = z.enum(["discover", "develop", "connect", "lead", "transform"])

export const compassSchema = z.object({
  answers: z.array(level).min(1).max(10),
})
