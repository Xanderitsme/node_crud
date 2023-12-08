const os = require('node:os')

console.log('Informacion del OS')
console.log('___________________________________________________')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Architectura: ', os.arch())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Uptime: ', os.uptime() / 60 / 60)
console.log('CPUs: ', os.cpus())
