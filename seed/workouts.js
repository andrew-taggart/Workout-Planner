const db = require('../db')
const { Cardio, Strength, Mobility, Workout, User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const adminTag = await User.find({ type: 'admin' })
    workCollections = [
        {
            user: adminTag[0]._id,
            name: 'Test 1',
            description: 'fix later',
            exercises: [
                { exerciseType: 'Cardio', exerciseId: '65d6195d3419ec6bd5b2dd35' },
                { exerciseType: 'Strength', exerciseId: '65d61a293e973b4384419388' },
                { exerciseType: 'Mobility', exerciseId: '65d619c6d43c928f93a34aaa' }
            ]
        },
        {
            user: adminTag[0]._id,
            name: 'Test 2',
            description: 'fix later',
            exercises: [
                { exerciseType: 'Cardio', exerciseId: '65d6195d3419ec6bd5b2dd36' },
                { exerciseType: 'Strength', exerciseId: '65d61a293e973b4384419387' },
                { exerciseType: 'Mobility', exerciseId: '65d619c6d43c928f93a34aab' }
            ]
        },
        {
            user: adminTag[0]._id,
            name: 'Test 3',
            description: 'fix later',
            exercises: [
                { exerciseType: 'Cardio', exerciseId: '65d6195d3419ec6bd5b2dd37' },
                { exerciseType: 'Strength', exerciseId: '65d61a293e973b4384419389' },
                { exerciseType: 'Mobility', exerciseId: '65d619c6d43c928f93a34aac' },
                { exerciseType: 'Strength', exerciseId: '65d61a293e973b438441938f' },
            ]
        },
        {
            user: adminTag[0]._id,
            name: 'Test 4',
            description: 'fix later',
            exercises: [
                { exerciseType: 'Cardio', exerciseId: '65d6195d3419ec6bd5b2dd38' },
                { exerciseType: 'Strength', exerciseId: '65d61a293e973b438441938a' },
                { exerciseType: 'Mobility', exerciseId: '65d619c6d43c928f93a34aac' },
                { exerciseType: 'Mobility', exerciseId: '65d619c6d43c928f93a34aad' }
            ]
        },
    ]
    await Workout.insertMany(workCollections)
    console.log('Created Workouts')

}
const run = async () => {
    await main()
    db.close()
}

run()
