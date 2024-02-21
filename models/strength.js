const { Schema } = require('mongoose')

const Strength = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        sets: {type: Number, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        weightUnit: {type: String, enum: ['lbs', 'kg'], required: true},
    },
    { timestamps: true }
)

module.exports = ('strength', Strength)