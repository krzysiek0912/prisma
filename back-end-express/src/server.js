import express from 'express'

const { PORT = 3000 } = process.env
const app = express()

app.use(express.json())

app.post('/user/sign-in', (req, res) => {
  console.log('The body is', req.body)
  res.json({ hello: req.body })
})

app.all('*', (req, res) => {
  const { method, originalUrl } = req
  res
    .status(404)
    .json({ message: `Path ${originalUrl} for method ${method} not found :( ` })
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
