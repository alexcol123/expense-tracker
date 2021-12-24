const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const transactions = require('./routes/transactions')
const connectDB = require('./config/db')

const app = express()
app.use(express.json())
dotenv.config({ path: './config/config.env' })

//Connect to Mongo Atlas
connectDB()

const PORT = process.env.PORT
const enviroment = process.env.NODE_ENV

if (enviroment === 'development') app.use(morgan('dev'))

// Routes
app.use('/api/v1/transactions', transactions)

app.listen(5000, () =>
  console.log(`Server running in ${enviroment} port: ${PORT}`.yellow.bold)
)
