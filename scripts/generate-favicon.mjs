import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const svgPath = path.join(__dirname, '../public/logo-fabio-micale.svg')
const publicDir = path.join(__dirname, '../public')

const svgBuffer = fs.readFileSync(svgPath)
const bg = { r: 17, g: 17, b: 17 } // #111111

// favicon-16x16.png in public/
await sharp(svgBuffer).flatten({ background: bg }).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'))

// favicon-32x32.png in public/
await sharp(svgBuffer).flatten({ background: bg }).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'))

// apple-icon.png 180x180 in public/
await sharp(svgBuffer).flatten({ background: bg }).resize(180, 180).png().toFile(path.join(publicDir, 'apple-icon.png'))

// icon-192.png in public/ (PWA / Android)
await sharp(svgBuffer).flatten({ background: bg }).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'))

console.log('Favicon generati con sfondo #111111')
