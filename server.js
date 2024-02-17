const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001

const exerciseController = require('./controllers/exerciseController')
const workoutController = require('/controllers/workoutController')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

