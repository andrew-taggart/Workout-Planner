const db = require('../db')
const { Mobility } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    mobilityExercises = [
    { 
    user: '',
    name: 'Cobra',
    description: 'hips down chest up',//vid link?
    sets: 1,
    time: 30,},
    {
    user: '',
    name: 'cat cow',
    description: 'arc back down and curve up',
    sets: 10,
    time: 5, } //change to string??? 
]

await Mobility.insertMany(mobilityExercises)
await Mobility.deleteMany({})
await Mobility.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
