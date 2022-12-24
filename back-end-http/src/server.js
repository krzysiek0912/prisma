import http from 'http'

const { PORT = 3000 } = process.env

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({ hello: 'world', request: req.url }))
  res.end()
})

server.listen(PORT, () => {
  console.log('listening on port ' + PORT)
  console.log('exec:' + process.execPath + '' + process.argv.slice(1).join(' '))
  console.log('process.argv:' + process.argv.slice(1).join(' '))
  console.log(
    'process.execPath:' +
      process.execPath +
      '' +
      process.argv.slice(1).join(' ')
  )
  console.log(
    'process.execPath:' +
      process.execPath +
      '' +
      process.argv.slice(1).join(' ')
  )
})

server.on('listening', () => {
  console.log('Server listening on port ' + server.address().port)
})
