import { z } from "zod"

const emptyToUndefined = (value: unknown) => (value === "" ? undefined : value)

const serverSchema = z.object({
  DATABASE_URL: z.preprocess(emptyToUndefined, z.string().url().optional()),
  ADMIN_USERNAME: z.preprocess(emptyToUndefined, z.string().min(3).optional()),
  ADMIN_PASSWORD: z.preprocess(emptyToUndefined, z.string().min(12).optional()),
  NEXT_PUBLIC_SITE_URL: z.preprocess(emptyToUndefined, z.string().url().default("http://localhost:3000")),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.preprocess(emptyToUndefined, z.string().optional()),
})

export type ServerEnv = z.infer<typeof serverSchema>

let cached: ServerEnv | null = null

/**
 * Validated server environment. Invalid values are reported once and treated as unset,
 * so a typo never crashes the public site; features that need them degrade gracefully.
 */
export function env(): ServerEnv {
  if (cached) return cached
  const parsed = serverSchema.safeParse(process.env)
  if (parsed.success) {
    cached = parsed.data
    return cached
  }
  console.warn("Invalid environment variables:", parsed.error.flatten().fieldErrors)
  const fallback: Record<string, unknown> = { ...process.env }
  Object.keys(parsed.error.flatten().fieldErrors).forEach((key) => delete fallback[key])
  cached = serverSchema.parse(fallback)
  return cached
}

export function isAdminConfigured() {
  const { ADMIN_USERNAME, ADMIN_PASSWORD } = env()
  return Boolean(ADMIN_USERNAME && ADMIN_PASSWORD)
}
