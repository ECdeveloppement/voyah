import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const targetSlugs = ['titan', 'titan_blackedition', 'titan_X8']
const files = ['data/site.ts', 'data/modelMedia.ts']

const content = files
  .map((file) => fs.readFileSync(path.join(root, file), 'utf8'))
  .join('\n')

const pattern = /\/voyah-resources\/images\/car\/(?:titan|titan_blackedition|titan_X8|car_logo\/titan|car_logo\/titan_blackedition|car_logo\/titan_X8)[^'"\s)]+/g
const refs = [...new Set(content.match(pattern) ?? [])].sort()

const missing = refs.filter((asset) => {
  const local = path.join(root, 'public', asset.replace(/^\//, ''))
  return !fs.existsSync(local)
})

console.log(
  JSON.stringify(
    {
      slugs: targetSlugs,
      totalReferences: refs.length,
      missingCount: missing.length,
      missing
    },
    null,
    2
  )
)
