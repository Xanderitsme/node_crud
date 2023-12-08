const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

console.log(process.env)

const desiredPort = process.env.port ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Es el final')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})