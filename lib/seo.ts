import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/constants"

type PageMeta = {
  title: string
  description: string
  path: string
}

/** Builds consistent per-page metadata with canonical, Open Graph and Twitter tags. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#person` },
  }
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Robert Kampi Laari",
    url: SITE_URL,
    image: `${SITE_URL}/brand/monogram.png`,
    logo: `${SITE_URL}/brand/logo.png`,
    nationality: { "@type": "Country", name: "Ghana" },
    description:
      "Ghanaian youth development advocate, public sector leader, author, motivational speaker and founder of the Tamale Youth Summit.",
    jobTitle: "Regional Director, North East Region",
    worksFor: { "@type": "GovernmentOrganization", name: "National Youth Authority (Ghana)" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University for Development Studies" },
    knowsAbout: [
      "Youth development",
      "Youth empowerment",
      "Leadership development",
      "Entrepreneurship",
      "Digital inclusion",
      "Peacebuilding",
      "Sustainable livelihoods",
      "Development planning",
    ],
  }
}

export function booksJsonLd(books: { title: string; subtitle?: string }[]) {
  return books.map((book) => ({
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.subtitle ? `${book.title}: ${book.subtitle}` : book.title,
    author: { "@id": `${SITE_URL}/#person` },
  }))
}
