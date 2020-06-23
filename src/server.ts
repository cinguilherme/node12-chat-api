import express from 'express'
import dotenv from 'dotenv'

const envLoad = dotenv.config()
if (envLoad.error) {
  throw envLoad
}

const configs = envLoad.parsed

console.log(configs)

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'hello' })
})

app.listen(configs.PORT)

console.log(`server app on port ${configs.PORT}`)
