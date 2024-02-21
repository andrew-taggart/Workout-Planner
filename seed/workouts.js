const db = require('../db')
const { Workout } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const adminTag = await User.find({ type: 'admin' })
    workCollection = [
        {
            user_id: adminTag[0]._id,
            name: 'Cardio Blast',
            description: 'High-intensity cardio session',
            exercises: [
                // Warm-up
                { name: "Jumping Jacks", type: "Warm-up", notes: "Start slow, gradually increase speed", sets: 1, reps: 50, weight: 0, rest: 0 },
                // Main Workout
                { name: "Running", type: "Cardio", notes: "Run at a steady pace", sets: 1, reps: 1, time: 20, timeUnit: "minutes", rest: 0 },
                { name: "Bike Sprint", type: "Cardio", notes: "High intensity", sets: 4, reps: 1, time: 2, timeUnit: "minutes", rest: 1, restUnit: "minutes" },
                // Cooldown
                { name: "Walk", type: "Cooldown", notes: "Slow pace", sets: 1, reps: 1, time: 5, timeUnit: "minutes", rest: 0 }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Leg Day Strength',
            description: 'Focus on lower body strength',
            exercises: [
                // Warm-up
                { name: "Air Squats", type: "Warm-up", notes: "Focus on form", sets: 2, reps: 15, weight: 0, rest: 30 },
                // Main Workout
                { name: "Back Squat", type: "Legs", notes: "Keep your back straight", sets: 4, reps: 10, weight: 0, rest: 120 },
                { name: "Lunges", type: "Legs", notes: "Alternate legs", sets: 3, reps: 12, weight: 0, rest: 60 },
                // Cooldown
                { name: "Leg Stretch", type: "Cooldown", notes: "Hold each stretch for 30 seconds", sets: 3, reps: 1, time: 30, timeUnit: "seconds", rest: 0 }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Full Body Mobility',
            description: 'Enhance overall flexibility',
            exercises: [
                // Warm-up
                { name: "Arm Circles", type: "Warm-up", notes: "Forward and backward", sets: 1, reps: 20, weight: 0, rest: 0 },
                // Main Workout
                { name: "Cat Cow", type: "Mobility", notes: "Focus on spine mobility", sets: 3, reps: 10, weight: 0, rest: 30 },
                { name: "Pigeon Pose", type: "Mobility", notes: "Each side", sets: 2, reps: 1, time: 60, timeUnit: "seconds", rest: 30 },
                // Cooldown
                { name: "Child's Pose", type: "Cooldown", notes: "Relax and stretch", sets: 1, reps: 1, time: 120, timeUnit: "seconds", rest: 0 }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Cardio Intensity',
            description: 'High-intensity cardio session',
            exercises: [
                // Warm-up
                { name: "Jump Rope", type: "Warm-up", notes: "Steady pace to get the heart rate up", sets: 1, reps: 5, weight: 0, weightUnit: "lbs", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "HIIT Sprints", type: "Cardio", notes: "Sprint for 30 seconds, rest for 30 seconds", sets: 10, reps: 1, weight: 0, weightUnit: "", rest: 30, timeUnit: "seconds" },
                { name: "Stair Climber", type: "Cardio", notes: "Medium pace", sets: 1, reps: 15, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Cooldown
                { name: "Walking", type: "Cooldown", notes: "Slow pace", sets: 1, reps: 5, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Strength Powerlifting',
            description: 'Focused on powerlifting fundamentals',
            exercises: [
                // Warm-up
                { name: "Dynamic Stretching", type: "Warm-up", notes: "Full body stretches", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "Bench Press", type: "Chest", notes: "Heavy lifting", sets: 5, reps: 5, weight: 0, weightUnit: "lbs", rest: 120, timeUnit: "seconds" },
                { name: "Squat", type: "Legs", notes: "Heavy back squats", sets: 5, reps: 5, weight: 0, weightUnit: "lbs", rest: 120, timeUnit: "seconds" },
                { name: "Deadlift", type: "Back", notes: "Focus on form", sets: 5, reps: 5, weight: 0, weightUnit: "lbs", rest: 120, timeUnit: "seconds" },
                // Cooldown
                { name: "Foam Rolling", type: "Cooldown", notes: "Lower body focus", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Mobility Yoga Flow',
            description: 'Yoga sequence for flexibility and recovery',
            exercises: [
                // Warm-up
                { name: "Sun Salutations", type: "Warm-up", notes: "Gentle flow to warm up the body", sets: 3, reps: 1, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "Pigeon Pose", type: "Mobility", notes: "Hip opener", sets: 2, reps: 1, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                { name: "Forward Fold", type: "Mobility", notes: "Hamstring stretch", sets: 2, reps: 1, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                { name: "Twisted Lunge", type: "Mobility", notes: "Spinal rotation and hip flexor stretch", sets: 2, reps: 1, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Cooldown
                { name: "Deep Breathing", type: "Cooldown", notes: "Focus on slow, deep breaths", sets: 1, reps: 5, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Mixed Circuit Training',
            description: 'Combination of strength, cardio, and mobility',
            exercises: [
                // Warm-up
                { name: "Light Jogging", type: "Warm-up", notes: "5-minute easy pace", sets: 1, reps: 5, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "Kettlebell Swings", type: "Cardio/Strength", notes: "High intensity", sets: 3, reps: 15, weight: 0, weightUnit: "lbs", rest: 60, timeUnit: "seconds" },
                { name: "Bodyweight Squats", type: "Strength", notes: "Focus on depth and form", sets: 3, reps: 20, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                { name: "Plank", type: "Core", notes: "Hold for stability", sets: 3, reps: 1, weight: 0, weightUnit: "", rest: 60, timeUnit: "minutes" },
                // Cooldown
                { name: "Stretching", type: "Cooldown", notes: "Full body stretch", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Bodyweight Mastery',
            description: 'Focus on bodyweight exercises for strength and agility',
            exercises: [
                // Warm-up
                { name: "Dynamic Stretching", type: "Warm-up", notes: "Full body dynamic stretches to prepare for movement", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "Push-ups", type: "Chest", notes: "Standard push-ups to work on upper body strength", sets: 4, reps: 15, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                { name: "Pull-ups", type: "Back", notes: "Work on back and arm strength", sets: 4, reps: 10, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                { name: "Air Squats", type: "Legs", notes: "Focus on form and depth", sets: 4, reps: 20, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                // Cooldown
                { name: "Static Stretching", type: "Cooldown", notes: "Hold stretches for 30 seconds each to cool down", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Agility and Speed',
            description: 'Quick movements and sprints to improve agility and speed',
            exercises: [
                // Warm-up
                { name: "Dynamic Leg Swings", type: "Warm-up", notes: "Front and side leg swings to warm up the legs", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" },
                // Main Workout
                { name: "Ladder Drills", type: "Agility", notes: "Various ladder drills for footwork and speed", sets: 4, reps: 1, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                { name: "Short Sprints", type: "Cardio", notes: "30-meter sprints with full recovery", sets: 6, reps: 1, weight: 0, weightUnit: "", rest: 90, timeUnit: "seconds" },
                // Cooldown
                { name: "Walk", type: "Cooldown", notes: "5-minute walk to cool down", sets: 1, reps: 5, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
            ]
        },
        {
            user_id: adminTag[0]._id,
            name: 'Core Stability',
            description: 'Exercises focused on strengthening the core muscles',
            exercises: [
                // Warm-up
                { name: "Plank", type: "Warm-up", notes: "Front plank to activate the core", sets: 2, reps: 30, weight: 0, weightUnit: "", rest: 30, timeUnit: "seconds" },
                // Main Workout
                { name: "Russian Twists", type: "Core", notes: "Sit on the floor, lean back slightly, twist side to side", sets: 3, reps: 20, weight: 0, weightUnit: "lbs", rest: 60, timeUnit: "seconds" },
                { name: "Leg Raises", type: "Core", notes: "Lie on back, raise legs up and down without touching the floor", sets: 3, reps: 15, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                { name: "Bicycle Crunches", type: "Core", notes: "Alternate touching elbow to opposite knee", sets: 3, reps: 20, weight: 0, weightUnit: "", rest: 60, timeUnit: "seconds" },
                // Cooldown
                { name: "Cat-Cow Stretch", type: "Cooldown", notes: "Gently transition between arching and rounding your back", sets: 1, reps: 10, weight: 0, weightUnit: "", rest: 0, timeUnit: "seconds" },
                { name: "Child's Pose", type: "Cooldown", notes: "Sit back on heels, stretch arms forward", sets: 1, reps: 5, weight: 0, weightUnit: "", rest: 0, timeUnit: "minutes" }
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
