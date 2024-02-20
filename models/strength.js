const { Schema } = require('mongoose')

const Strength = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        notes: {type: String, required: true},
        sets: {type: Number, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        weightUnit: {type: String, wUnit: ['lbs', 'kg'], required: true},
        rest: {type: Number, required: true},
        timeUnit: {type: String, tUnit: ['seconds', 'minutes']}
    },
    { timestamps: true }
)

module.exports = Strength