const { Schema } = require('mongoose')

const Cardio = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        reps: {type: Number, required: true},
        time: {type: Number, required: true},
        pace: {type: Number, required: true},
        paceUnit: {type: String, enum: ['min/mile', 'km/mile', 'mph', 'km/hr'], required: true},
        distance: {type: Number, required: true},
        distanceUnit: {type: String, enum: ['meters', 'km', 'miles', 'yards'], required: true},
        
        
    },
    { timestamps: true }
)

module.exports = Cardio