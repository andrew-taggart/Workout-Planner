const db = require('../db')
const { Cardio } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    cardioExercises = [
    { 
    user: '',
    name: 'Run',
    description: 'long',
    sets: 1,
    time: 30,
    distance: 5,
    speed: 0, },
    {
    user: '',
    name: 'Sprint',
    description: 'short',
    sets: 4,
    time: 60, //change to string???
    distance: 400,  //include units
    speed: 70, }, //change to string?
]

await Cardio.insertMany(cardioExercises)
await Cardio.deleteMany({})
await Cardio.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
