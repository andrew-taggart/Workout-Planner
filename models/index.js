const mongoose = require('mongoose')
const exerciseSchema = require('./exercise')
const userSchema = require('./user')
const workoutSchema = require('./workout')
const cardioSchema = require('./cardio')
const strengthSchema = require('./strength')
const mobilitySchema = require('./mobility')


const Exercise = mongoose.model('exercise', exerciseSchema)
const User = mongoose.model('user', userSchema)
const Workout = mongoose.model('workout', workoutSchema)
const Cardio = mongoose.model('cardio', cardioSchema)
const Strength = mongoose.model('strength', strengthSchema)
const Mobility = mongoose.model('mobility', mobilitySchema)


module.exports = {
    Exercise,
    User,
    Workout,
    Cardio,
    Strength,
    Mobility,
}