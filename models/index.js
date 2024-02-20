const mongoose = require('mongoose')
const userSchema = require('./user')
const workoutSchema = require('./workout')
const cardioSchema = require('./cardio')
const strengthSchema = require('./strength')
const mobilitySchema = require('./mobility')
const exerciseSchema = require('./exercise')


const User = mongoose.model('user', userSchema)
const Workout = mongoose.model('workout', workoutSchema)
const Cardio = mongoose.model('cardio', cardioSchema)
const Strength = mongoose.model('strength', strengthSchema)
const Mobility = mongoose.model('mobility', mobilitySchema)
const Exercise = mongoose.model('mobility', exerciseSchema)


module.exports = {
    User,
    Workout,
    Cardio,
    Strength,
    Mobility,
    Exercise,
}