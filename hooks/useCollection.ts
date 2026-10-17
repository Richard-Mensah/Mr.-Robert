"use client"

import { useCallback, useSyncExternalStore } from "react"
import { COLLECTION_STORAGE_KEY, IMPACT_STORIES, PHOTOS } from "@/data/gallery"
import { useJourney } from "@/hooks/useJourney"
import { createStoredList } from "@/lib/storedList"

const store = createStoredList(COLLECTION_STORAGE_KEY)
const PHOTO_STORY = new Map(PHOTOS.map((photo) => [photo.id, photo.story]))

/**
 * Photos the visitor has opened in the gallery ("moments collected"), kept in their own browser.
 * Collecting at least one moment from every impact story unlocks the Curator milestone.
 */
export function useCollection() {
  const raw = useSyncExternalStore(store.subscribe, store.readRaw, store.serverSnapshot)
  const collected = store.parse(raw)
  const { unlockMilestone } = useJourney()

  const collect = useCallback(
    (photoId: string) => {
      if (!store.add(photoId)) return
      const stories = new Set(store.parse(store.readRaw()).map((id) => PHOTO_STORY.get(id)))
      if (IMPACT_STORIES.every((story) => stories.has(story.slug))) unlockMilestone("curator")
    },
    [unlockMilestone],
  )

  return { collected, total: PHOTOS.length, collect }
}
