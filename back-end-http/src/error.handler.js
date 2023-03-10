import { Prisma } from '@prisma/client'

export function errorHandler(error, req, res) {
  const { message } = error

  if (error instanceof Prisma.NotFoundError) {
    res.statusCode = 404
  } else {
    res.statusCode = 500
  }
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ message }))
  res.end()
}
