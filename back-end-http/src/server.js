import http from 'http'
import { jsonBodyParserMiddleware } from './middleware/json-body-parser.middleware.js'
import { urlParserMiddleware } from './middleware/url-parser.middleware.js'
import { requestHandler } from './request.handler.js'
import { errorHandler } from './error.handler.js'
const { PORT = 3000 } = process.env

const server = http.createServer(async (req, res) => {
  urlParserMiddleware(req)
  try {
    await jsonBodyParserMiddleware(req)
    const body = await requestHandler(req, res)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(body))
    res.end()
  } catch (error) {
    errorHandler(error, req, res)
  }
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

process.on('uncaughtException', (err) => {
  console.log('uncaughtException')
  console.log(err)
})
