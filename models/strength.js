const { Schema } = require('mongoose')

const Strength = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        sets: {type: Number, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, },
        weightUnit: {type: String, enum: ['lbs', 'kg', '']},
    },
    { timestamps: true }
)

module.exports = Strength