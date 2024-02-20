const { Schema } = require('mongoose')

const Cardio = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        notes : {type: String, required: true},
        sets: {type: Number, required: true},
        time: {type: Number, required: true},
        pace: {type: Number, required: true},
        paceUnit: {type: String, pUnit: ['min/mile', 'km/mile', 'mph', 'km/hr'], required: true},
        distance: {type: Number, required: true},
        distanceUnit: {type: String, dUnit: ['meters', 'km', 'miles', 'yards'], required: true},
        rest: {type: Number, required: true},
        timeUnit: {type: String, tUnit: ['seconds', 'minutes']}
    },
    { timestamps: true }
)

module.exports = Cardio