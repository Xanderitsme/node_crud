const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files

  const fileTypeSpace = 6
  const nameColSpace = 40
  const sizeColSpace = 10

  const isDir = '-d'
  const isFile = '-f'
  const fileTypeCol = 'Type'
  const nameCol = 'Name'
  const sizeCol = 'Size'
  const lastModifiedCol = 'Last modified'

  console.log(`${fileTypeCol.padStart(fileTypeSpace)} ${nameCol.padEnd(nameColSpace)} ${sizeCol.padStart(sizeColSpace)} ${lastModifiedCol}`)

  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`No se pudo leer el directorio ${folder}`)
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? isDir : isFile
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType.padStart(fileTypeSpace)} ${file.padEnd(nameColSpace, '.')} ${fileSize.padStart(sizeColSpace)} ${fileModified}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
