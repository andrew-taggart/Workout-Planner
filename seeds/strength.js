const db = require('../db')
const { Strength } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    StrengthExercises = [
    { 
    name: 'Bench Press',
    type: 'Chest',
    notes: 'pick thing up, put thing down',
    sets: 3,
    reps: 10,
    weight: 225,
    weightUnit: 'lbs',
    rest: 90,
    timeUnit: 'seconds'},
    {
    name: 'Back Squat',
    type: 'legs',
    notes: 'pick thing up, put thing down',
    sets: 4,
    reps: 10,
    weight: 300, //multiple? string and number??
    weightUnit: 'lbs',
    rest: 120,
    timeUnit: 'seconds'}
]

await Strength.insertMany(strengthExercises)
await Strength.deleteMany({})
await Strength.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
