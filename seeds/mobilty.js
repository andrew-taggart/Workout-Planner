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
            timeUnit: 'seconds'
        },
        {
            name: 'Cat Cow',
            type: 'yoga',
            notes: 'alternate between arching and rounding your back', //include video??
            reps: 10,
            time: 5,  //change to string??? 
            rest: 0,
            timeUnit: 'seconds'
        },
        {
            name: "Downward Dog",
            type: "yoga",
            notes: "press hands and feet into the ground, lift hips up and back",
            reps: 1,
            time: 30,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Child's Pose",
            type: "yoga",
            notes: "sit back on your heels, stretch arms forward",
            reps: 1,
            time: 30,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Pigeon Pose",
            type: "yoga",
            notes: "front leg bent, back leg straight, lean forward for deeper stretch",
            reps: 1,
            time: 30,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Pigeon Pose",
            type: "yoga",
            notes: "front leg bent, back leg straight, lean forward for deeper stretch",
            reps: 1,
            time: 30,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Hip Circles",
            type: "mobility",
            notes: "stand, place hands on hips, rotate hips in a circle",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Shoulder Rolls",
            type: "mobility",
            notes: "roll shoulders forward and backward",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Thoracic Spine Rotation",
            type: "mobility",
            notes: "seated, twist upper body side to side",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Leg Swings",
            type: "mobility",
            notes: "hold onto something for support, swing one leg forward and back",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Ankle Circles",
            type: "mobility",
            notes: "lift one foot, rotate the ankle, switch feet",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Wrist Stretches",
            type: "mobility",
            notes: "extend arm, gently pull on fingers, switch hands",
            reps: 1,
            time: 30,
            rest: 0,
            timeUnit: "seconds"
        },
        {
            name: "Neck Tilts",
            type: "mobility",
            notes: "gently tilt head towards each shoulder",
            reps: 10,
            time: 5,
            rest: 0,
            timeUnit: "seconds"
        },
    ]

await Mobility.insertMany(mobilityExercises)
await Mobility.deleteMany({})
await Mobility.updateeMany({})

const run = async () => {
    await main()
    db.close()
}

run()
