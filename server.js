const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')


//import Routes
const workoutRoutes = require('./routes/workoutRoute')
const userController = require('./controllers/userController')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

mongoose.connect('//127.0.0.1:27017/fitnessDatabase', { userNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use('/api/workouts', workoutRoutes)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

module.exports = app