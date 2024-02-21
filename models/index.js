const mongoose = require('mongoose')
const userSchema = require('./user')
const workoutSchema = require('./workout')
const cardioSchema = require('./cardio')
const strengthSchema = require('./strength')
const mobilitySchema = require('./mobility')
const exerciseSchema = require('./exercise')


const User = mongoose.model('User', userSchema)
const Workout = mongoose.model('Workout', workoutSchema)
const Cardio = mongoose.model('Cardio', cardioSchema)
const Strength = mongoose.model('Strength', strengthSchema)
const Mobility = mongoose.model('Mobility', mobilitySchema)
const Exercise = mongoose.model('Exercise', exerciseSchema)


module.exports = {
    User,
    Workout,
    Cardio,
    Strength,
    Mobility,
    Exercise,
}