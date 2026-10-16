import Image from "next/image"
import { ILLUSTRATIONS } from "@/components/illustrations"
import { cn } from "@/lib/utils"
import type { ImageAsset } from "@/types"

type Props = {
  image: ImageAsset
  className?: string
  sizes?: string
  priority?: boolean
  caption?: string
  showTag?: boolean
}

/**
 * Renders an optimised photograph, or a cartoon illustration placeholder
 * until authentic photography is supplied (see data/images.ts).
 */
export default function ImagePanel({
  image,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  caption,
  showTag = true,
}: Props) {
  const Illustration = ILLUSTRATIONS[image.illustration]

  return (
    <figure className={cn("relative overflow-hidden bg-night", className)}>
      {image.ready ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={`Illustration: ${image.alt}`} className="absolute inset-0">
          <Illustration />
          {showTag && (
            <span className="absolute right-3 top-3 border border-gold-light/30 bg-ink/60 px-2.5 py-1 font-display text-[0.55rem] tracking-[0.2em] text-gold-light/80 backdrop-blur-sm">
              ILLUSTRATION
            </span>
          )}
        </div>
      )}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 bg-ink/80 px-4 py-2 text-xs text-ivory/80">{caption}</figcaption>
      )}
    </figure>
  )
}
