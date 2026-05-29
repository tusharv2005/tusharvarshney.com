let audioContext: AudioContext | null = null

// Cache the Promise itself to deduplicate concurrent fetch calls for the same URL.
const bufferCache = new Map<string, Promise<AudioBuffer>>()

export function getAudioContext(): AudioContext {
  if (typeof window === "undefined") {
    throw new Error("AudioContext can only be created in browser")
  }
  if (!audioContext) {
    audioContext = new AudioContext()
  }
  return audioContext
}

export function fetchAndDecodeAudio(url: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(url)
  if (cached) return cached

  // Ensure we're in a browser environment
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Audio can only be loaded in browser"))
  }

  const ctx = getAudioContext()

  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch audio: ${res.status}`)
      return res.arrayBuffer()
    })
    .then((data) => ctx.decodeAudioData(data))
    .catch((err) => {
      // Remove failed entry so subsequent calls can retry.
      bufferCache.delete(url)
      throw err
    })

  bufferCache.set(url, promise)
  return promise
}
