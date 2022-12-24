export function errorHandler(error, req, res) {
  const { message } = error
  res.statusCode = 500
  res.write(JSON.stringify({ message }))
  res.end()
}
