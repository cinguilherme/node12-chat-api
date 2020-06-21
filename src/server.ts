import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'hello' })
})

app.listen(3333)

console.log('server app on port 3333')
