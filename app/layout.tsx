import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Allura, Cinzel, Inter, Newsreader } from "next/font/google"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import RevealProvider from "@/components/ui/RevealProvider"
import JsonLd from "@/components/ui/JsonLd"
import AltitudeMeter from "@/components/features/journey/AltitudeMeter"
import JourneyTracker from "@/components/features/journey/JourneyTracker"
import CommandPalette from "@/components/features/command/CommandPalette"
import { personJsonLd, websiteJsonLd } from "@/lib/seo"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/constants"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
})
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" })
const allura = Allura({ subsets: ["latin"], weight: "400", variable: "--font-allura", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "profile",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: "#0b2a20",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${newsreader.variable} ${cinzel.variable} ${allura.variable}`}
    >
      <body>
        <JsonLd data={[websiteJsonLd(), personJsonLd()]} />
        <Header />
        <AltitudeMeter />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <RevealProvider />
        <JourneyTracker />
        <CommandPalette />
      </body>
    </html>
  )
}
