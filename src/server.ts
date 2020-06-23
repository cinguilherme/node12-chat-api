import express from 'express'
import dotenv from 'dotenv'

const envLoad = dotenv.config()
if (envLoad.error) {
  throw envLoad
}

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'hello' })
})

const port = process.env.PORT || 8080
app.listen(port)

console.log(`server app on port ${port}`)
