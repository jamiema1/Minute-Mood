import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'

import journalRoutes from './routes/journals.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/journal', journalRoutes)

app.get('/', (req, res) => {
  res.json('This is the backend')
})



app.listen(process.env.PORT, () => {
  console.log('Connected to backend')
  console.log('Running on port: ' + process.env.PORT)
})