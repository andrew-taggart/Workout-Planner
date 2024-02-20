const db = require('../db')
const { Mobility } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    mobilityExercises = [
    { 
    name: 'Cobra',
    type: 'yoga',
    notes: 'push hips towards ground, chest up', //include video??
    reps: 1,
    time: 30,
    rest: 0,
    timeUnit: 'seconds'},
    {
    name: 'Cat Cow',
    type: 'yoga',
    notes: 'push hips towards ground, chest up', //include video??
    reps: 10,
    time: 5,  //change to string??? 
    rest: 0,
    timeUnit: 'seconds'}
]

await Mobility.insertMany(mobilityExercises)
await Mobility.deleteMany({})
await Mobility.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
