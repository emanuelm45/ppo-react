import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import express from 'express'
import routerUser from './routes/user'
import routerClass from './routes/class'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  )
  res.header('Access-Control-Allow-Headers', '*')
  app.use(cors())
  next()
})

app.use('/user', routerUser)
app.use('/class', routerClass)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
