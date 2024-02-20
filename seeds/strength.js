const db = require('../db')
const { Strength } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    StrengthExercises = [
    { 
    user: '',
    name: 'Bench Press',
    description: 'add specificaitions in. DB, Barbell, etc',
    sets: 4,
    reps: 10,
    weight: 100},
    {
    user: '',
    name: 'Back Squat',
    description: 'pick thing up, put thing down',
    sets: 4,
    reps: 10,
    weight: 200}, //multiple? string and number??
]

await Strength.insertMany(strengthExercises)
await Strength.deleteMany({})
await Strength.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
