const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')


//import Routes
const workoutRoutes = require('./routes/workoutRoute')
const usersRoutes = require('./routes/userRoute')
const cardioRoutes = require('./routes/cardioRoute')
const mobilityRoutes = require('./routes/mobilityRoute')
const strengthRoutes = require('./routes/strengthRoutes')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// link Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/cardios', cardioRoutes)
app.use('/api/mobilitys', mobilityRoutes)
app.use('/api/strengths', strengthRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke!')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))