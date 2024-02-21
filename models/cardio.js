const { Schema } = require('mongoose')

const Cardio = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        reps: {type: Number},
        time: {type: Number},
        pace: {type: Number},
        paceUnit: {type: String, enum: ['min/mile', 'km/mile', 'mph', 'km/hr', '']},
        distance: {type: Number},
        distanceUnit: {type: String, enum: ['meters', 'km', 'miles', 'yards', '']},
        
        
    },
    { timestamps: true }
)

module.exports = Cardio