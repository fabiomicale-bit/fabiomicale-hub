import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const svgPath = path.join(__dirname, '../public/logo-fabio-micale.svg')
const appDir = path.join(__dirname, '../src/app')
const publicDir = path.join(__dirname, '../public')

const svgBuffer = fs.readFileSync(svgPath)

// favicon.ico in src/app/ (Next.js App Router lo serve automaticamente)
await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(appDir, 'favicon.ico'))

// icon.png 32x32 in src/app/
await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(appDir, 'icon.png'))

// apple-icon.png 180x180 in src/app/
await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'))

// favicon-16x16.png in public/
await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'))

// favicon-32x32.png in public/
await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'))

// icon-192.png in public/ (PWA / Android)
await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'))

console.log('Favicon generati con successo')
