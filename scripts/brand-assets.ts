import { mkdir } from "node:fs/promises"
import sharp from "sharp"

/**
 * Generates favicon, Apple touch icon, monogram and social images from logo.png.
 * Run once after replacing the logo: node scripts/brand-assets.ts
 */
const SOURCE = "logo.png"

// Square region around the RK monogram inside the 1774x887 logo; the logo's own
// background fills the margins, so no padding colour is needed.
const MONOGRAM = { left: 150, top: 90, width: 600, height: 600 }

const monogram = (size: number) => sharp(SOURCE).extract(MONOGRAM).resize(size, size).png()

async function run() {
  await mkdir("public/brand", { recursive: true })
  await sharp(SOURCE).resize({ width: 1200 }).png().toFile("public/brand/logo.png")
  await monogram(256).toFile("public/brand/monogram.png")
  await monogram(192).toFile("app/icon.png")
  await monogram(180).toFile("app/apple-icon.png")
  for (const file of ["app/opengraph-image.jpg", "app/twitter-image.jpg"]) {
    await sharp(SOURCE).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 86, mozjpeg: true }).toFile(file)
  }
  console.log("Brand assets generated.")
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
