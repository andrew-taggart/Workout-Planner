const db = require('../db')
const { Workout } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 

    collections = [
    { 
    user: '',
    name: 'Workout 1',
    description: 'heavy',
    exercises: [] },
    {
    user: '',
    name: 'Workout 2',
    description: 'light',
    exercises: [] },
    
]

await Workout.insertMany(collections)
await Workout.deleteMany({})
await Workout.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run ()
