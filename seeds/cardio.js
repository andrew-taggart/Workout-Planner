const db = require('../db')
const { Cardio } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    cardioExercises = [

    { 
    name: '8 mile',
    type: 'distance',
    notes : 'slower pace',
    reps: 1,
    time: 0,
    pace: 8,
    paceUnit: 'min/mile',
    distance: 8,
    distanceUnit: 'miles',
    rest: 0 ,
    timeUnit: 'seconds'},
    {
    name: '4x400',
    type: 'sprint', //change to enum??
    notes : '',
    reps: 4,
    time: 0,
    pace: 8,
    paceUnit: 'min/mile',
    distance: 400,
    distanceUnit: 'meters',
    rest: 120,
    timeUnit: 'seconds'},
]

await Cardio.insertMany(cardioExercises)
await Cardio.deleteMany({})
await Cardio.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
