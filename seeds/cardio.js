const db = require('../db')
const { Cardio } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () =>

    cardioExercises = [

        {
            name: '8 Mile Run',
            type: 'distance',
            notes: 'slower pace',
            reps: 1,
            time: 0,
            pace: 8,
            paceUnit: 'min/mile',
            distance: 8,
            distanceUnit: 'miles',
            rest: 0,
            timeUnit: 'minutes'
        },
        {
            name: '4x400m Sprints',
            type: 'sprint', //change to enum??
            notes: 'full effort on each',
            reps: 4,
            time: 0,
            pace: 0,
            paceUnit: '',
            distance: 400,
            distanceUnit: 'meters',
            rest: 120,
            timeUnit: 'seconds'
        },
        {
            name: '5k Tempo Run',
            type: 'distance',
            notes: 'steady, moderate pace',
            reps: 1,
            time: 0,
            pace: 7,
            paceUnit: 'min/mile',
            distance: 5,
            distanceUnit: 'km',
            rest: 0,
            timeUnit: 'seconds'
        },
        {
            name: '1 Hour Cycle',
            type: 'time',
            notes: 'steady, state',
            reps: 1,
            time: 60,
            pace: 0,
            paceUnit: '',
            distance: 0,
            distanceUnit: '',
            rest: 0,
            timeUnit: 'minutes'
        },
        {
            name: 'Stair Climber 20min',
            type: 'time',
            notes: 'moderate intensity',
            reps: 1,
            time: 20,
            pace: 7,
            paceUnit: '',
            distance: 5,
            distanceUnit: '',
            rest: 0,
            timeUnit: 'minute'
        },
        {
            name: '4x400',
            type: 'sprint', //change to enum??
            notes: '',
            reps: 4,
            time: 0,
            pace: 8,
            paceUnit: 'min/mile',
            distance: 400,
            distanceUnit: 'meters',
            rest: 120,
            timeUnit: 'seconds'
        },
        {
            name: '4x400',
            type: 'sprint', //change to enum??
            notes: '',
            reps: 4,
            time: 0,
            pace: 8,
            paceUnit: 'min/mile',
            distance: 400,
            distanceUnit: 'meters',
            rest: 120,
            timeUnit: 'seconds'
        },
        {
            name: '2 Hour Long Ride',
            type: 'time', //change to enum??
            notes: 'long, slow distance',
            reps: 1,
            time: 120,
            pace: 0,
            paceUnit: '',
            distance: '',
            distanceUnit: '',
            rest: 0,
            timeUnit: 'minutes'
        },
        {
            name: '45min Swim',
            type: 'time',
            notes: '',
            reps: 1,
            time: 45,
            pace: 8,
            paceUnit: 'min/mile',
            distance: 400,
            distanceUnit: 'meters',
            rest: 120,
            timeUnit: 'minutes'
        },
        {
            name: 'Hill Repeats 10x',
            type: 'interval',
            notes: 'hard effort up, jog down',
            reps: 10,
            time: 120,
            pace: 0,
            paceUnit: '',
            distance: 0,
            distanceUnit: '0',
            rest: 90,
            timeUnit: 'seconds'
        },
        {
            name: '4x400',
            type: 'sprint', //change to enum??
            notes: '',
            reps: 4,
            time: 0,
            pace: 8,
            paceUnit: 'min/mile',
            distance: 400,
            distanceUnit: 'meters',
            rest: 120,
            timeUnit: 'seconds'
        },
        {
            name: "Full Body Rowing Session",
            type: "time",
            notes: "consistent pace, focus onform",
            reps: 1,
            time: 30,
            pace: 0,
            paceUnit: "",
            distance: 0,
            distanceUnit: "",
            rest: 0,
            timeUnit: "minutes"
        },
        {
            name: "Cross-Country Skiing",
            type: "distance",
            notes: "moderate pace through varieterrain",
            reps: 1,
            time: 90,
            pace: 0,
            paceUnit: "",
            distance: 0,
            distanceUnit: "",
            rest: 0,
            timeUnit: "minutes"
        },
        {
            name: "Mountain Biking Trail Ride",
            type: "time",
            notes: "challenging terrain, keep steady effort",
            reps: 1,
            time: 90,
            pace: 0,
            paceUnit: "",
            distance: 0,
            distanceUnit: "",
            rest: 0,
            timeUnit: "minutes"
        },
    ]

await Cardio.insertMany(cardioExercises)
await Cardio.deleteMany({})
await Cardio.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run()
