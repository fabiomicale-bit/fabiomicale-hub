import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sourcePath = path.join(__dirname, '../public/fm-shield-icon-512.png')
const publicDir = path.join(__dirname, '../public')

const sourceBuffer = fs.readFileSync(sourcePath)

const renderPng = async (name, size) => {
  await sharp(sourceBuffer).resize(size, size).png().toFile(path.join(publicDir, name))
}

await renderPng('favicon-16x16.png', 16)
await renderPng('favicon-32x32.png', 32)
await renderPng('favicon-48x48.png', 48)
await renderPng('favicon-96x96.png', 96)
await renderPng('favicon-192x192.png', 192)
await renderPng('apple-touch-icon.png', 180)
await renderPng('apple-icon.png', 180)
await renderPng('icon-192.png', 192)
await renderPng('icon.png', 512)

console.log('Favicon generati dallo shield FM nero/gold')
