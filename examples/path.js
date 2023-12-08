const path = require('node:path')

console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'image.jpg')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const filename = path.basename(filePath, '.jpg')
console.log(filename)

const extension = path.extname(base)
console.log(extension)
