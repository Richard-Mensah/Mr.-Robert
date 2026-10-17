import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ImageAsset } from "@/types"

type Props = {
  image: ImageAsset
  className?: string
  sizes?: string
  priority?: boolean
  caption?: string
}

/** An optimised photograph filling its frame. Images come from data/images.ts. */
export default function ImagePanel({
  image,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  caption,
}: Props) {
  return (
    <figure className={cn("relative overflow-hidden bg-night", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 bg-ink/80 px-4 py-2 text-xs text-ivory/80">{caption}</figcaption>
      )}
    </figure>
  )
}
