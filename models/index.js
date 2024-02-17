const mongoose = require('mongoose')
const exerciseSchema = require('./exercise')
const userSchema = require('./user')
const workoutSchema = require('./workout')


const Exercise = mongoose.model('exercise', exerciseSchema)
const User = mongoose.model('user', userSchema)
const Workout = mongoose.model('workout', workoutSchema)

module.exports = {
    Exercise,
    User,
    Workout
}