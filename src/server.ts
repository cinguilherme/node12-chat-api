import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'hello' })
})

const port = process.env.PORT || 8080
app.listen(port)

console.log(`server app on port ${port}`)
