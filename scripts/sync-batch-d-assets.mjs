import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

const root = process.cwd()
const sourceFiles = ['data/site.ts', 'data/modelMedia.ts']
const sourceText = sourceFiles.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')

const assetPattern =
  /\/voyah-resources\/images\/car\/(?:newDreamer26|dreamer-champion|newDreamer|dreamriver|dreamer|car_logo\/newDreamer26|car_logo\/dreamer-champion|car_logo\/newDreamer|car_logo\/dreamriver|car_logo\/dreamer|h56d)[^'"\s)]+/g
const assets = [...new Set(sourceText.match(assetPattern) ?? [])].sort()

const download = (assetPath) =>
  new Promise((resolve) => {
    const url = `https://www.voyah.com.cn${assetPath}`
    const destination = path.join(root, 'public', assetPath.replace(/^\//, ''))
    fs.mkdirSync(path.dirname(destination), { recursive: true })

    if (fs.existsSync(destination)) {
      resolve({ assetPath, ok: true, skipped: true })
      return
    }

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          response.resume()
          resolve({ assetPath, ok: false, code: response.statusCode })
          return
        }

        const file = fs.createWriteStream(destination)
        response.pipe(file)
        file.on('finish', () => file.close(() => resolve({ assetPath, ok: true, skipped: false })))
      })
      .on('error', () => resolve({ assetPath, ok: false, code: 'ERR' }))
  })

const main = async () => {
  const results = []
  for (const asset of assets) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await download(asset))
  }
  const failures = results.filter((entry) => !entry.ok)
  console.log(
    JSON.stringify(
      {
        total: results.length,
        succeeded: results.length - failures.length,
        failed: failures.length,
        failures
      },
      null,
      2
    )
  )
}

void main()
