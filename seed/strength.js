const db = require('../db')
const { Strength } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const strengthExercises = [
        {
            name: 'Bench Press',
            type: 'Chest',
            notes: 'Lie on the bench, lower bar to chest, press up',
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: 'lbs',
            rest: 90,
            timeUnit: 'seconds'
        },
        {
            name: 'Back Squat',
            type: 'legs',
            notes: 'Bar on shoulders, squat until thighs are parallel to floor. ',
            sets: 4,
            reps: 10,
            weight: 0, //multiple? string and number??
            weightUnit: 'lbs',
            rest: 120,
            timeUnit: 'seconds'
        },
        {
            name: "Deadlift",
            type: "Back",
            notes: "Lift barbell from floor to hip level, keep back straight.",
            sets: 3,
            reps: 8,
            weight: 0,
            weightUnit: "lbs",
            rest: 120,
            timeUnit: "seconds"
        },
        {
            name: "Shoulder Press",
            type: "Shoulders",
            notes: "Press barbell from shoulders above head",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "lbs",
            rest: 90,
            timeUnit: "seconds"
        },
        {
            name: "Barbell Row",
            type: "Back",
            notes: "Bend over, pull barbell towards lower chest",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "lbs",
            rest: 90,
            timeUnit: "seconds"
        },
        {
            name: "Pull-ups",
            type: "Back",
            notes: "Grip bar, pull body up until chin clears the bar",
            sets: 3,
            reps: 10, // As Many Reps As Possible
            weight: 0,
            weightUnit: "",
            rest: 90,
            timeUnit: "seconds"
        },
        {
            name: "Push-ups",
            type: "Chest",
            notes: "Body straight, lower until chest nearly touches the ground",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "",
            rest: 60,
            timeUnit: "seconds"
        },
        {
            name: "Lunges",
            type: "Legs",
            notes: "Step forward, lower hips until both knees are bent at 90 degrees",
            sets: 3,
            reps: 12,
            weight: 0,
            weightUnit: "",
            rest: 60,
            timeUnit: "seconds"
        },
        {
            name: "Leg Press",
            type: "Legs",
            notes: "Sit in machine, press weight away with feet",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "lbs",
            rest: 90,
            timeUnit: "seconds"
        },
        {
            name: "Leg Press",
            type: "Legs",
            notes: "Sit in machine, press weight away with feet",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "lbs",
            rest: 90,
            timeUnit: "seconds"
        },
        {
            name: "Bicep Curl",
            type: "Arms",
            notes: "Curl barbell towards shoulders, keep elbows stationary",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "lbs",
            rest: 60,
            timeUnit: "seconds"
        },
        {
            name: "Tricep Dips",
            type: "Arms",
            notes: "Lower body by bending arms, push up to start",
            sets: 3,
            reps: 10,
            weight: 0,
            weightUnit: "",
            rest: 60,
            timeUnit: "seconds"
        },
        {
            name: "Plank",
            type: "Core",
            notes: "Hold plank position, keep body straight and core tight",
            sets: 3,
            reps: 1,
            weight: 0,
            weightUnit: "",
            rest: 60,
            timeUnit: "seconds"
        },
        {
            name: "Farmers Walk",
            type: "Core",
            notes: "Hold heavy weights in each hand, walk for distance or time",
            sets: 3,
            reps: 1,
            weight: 0,
            weightUnit: "lbs",
            rest: 60,
            timeUnit: "seconds"
        },
    ]

await Strength.insertMany(strengthExercises)
}
const run = async () => {
    await main()
    db.close()
}

run()
