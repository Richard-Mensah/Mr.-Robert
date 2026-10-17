const EMPTY = "[]"

function parse(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw)
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
  } catch {
    return []
  }
}

/**
 * A list of string ids kept in the visitor's localStorage, shaped for useSyncExternalStore.
 * Storage can be unavailable (private mode, blocked site data), so every access is guarded.
 */
export function createStoredList(storageKey: string) {
  const changeEvent = `${storageKey}-change`

  function readRaw() {
    try {
      return window.localStorage.getItem(storageKey) ?? EMPTY
    } catch {
      return EMPTY
    }
  }

  function subscribe(callback: () => void) {
    window.addEventListener(changeEvent, callback)
    window.addEventListener("storage", callback)
    return () => {
      window.removeEventListener(changeEvent, callback)
      window.removeEventListener("storage", callback)
    }
  }

  /** Adds an id. Returns true only when it was newly stored. */
  function add(id: string): boolean {
    const current = parse(readRaw())
    if (current.includes(id)) return false
    try {
      window.localStorage.setItem(storageKey, JSON.stringify([...current, id]))
    } catch {
      return false
    }
    window.dispatchEvent(new Event(changeEvent))
    return true
  }

  return { readRaw, subscribe, add, parse, serverSnapshot: () => EMPTY }
}
