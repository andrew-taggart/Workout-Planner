const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001

//import Controllers
const exerciseController = require('./controllers/exerciseController')
const workoutController = require('./controllers/workoutController')
const userController = require('./controllers/userController')


const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('Landing Page. Setup html'))
//Get Users
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
//Create User
app.post('/users', userController.createUser)
//Update User
app.put('/users/:id', userController.updateUser)
//delete User
app.delete('/users/:id', userController.deleteUser)

module.exports = app