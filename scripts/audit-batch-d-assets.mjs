import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const files = ['data/site.ts', 'data/modelMedia.ts']
const text = files.map((f) => fs.readFileSync(path.join(root, f), 'utf8')).join('\n')

const pattern =
  /\/voyah-resources\/images\/car\/(?:newDreamer26|dreamer-champion|newDreamer|dreamriver|dreamer|car_logo\/newDreamer26|car_logo\/dreamer-champion|car_logo\/newDreamer|car_logo\/dreamriver|car_logo\/dreamer|h56d)[^'"\s)]+/g
const refs = [...new Set(text.match(pattern) ?? [])].sort()

const missing = refs.filter((asset) => {
  const local = path.join(root, 'public', asset.replace(/^\//, ''))
  return !fs.existsSync(local)
})

console.log(
  JSON.stringify(
    {
      totalReferences: refs.length,
      missingCount: missing.length,
      missing
    },
    null,
    2
  )
)
