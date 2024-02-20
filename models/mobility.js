const { Schema } = require('mongoose')

const Mobility = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        notes : {type: String, required: true},
        reps: {type: Number, required: true},
        time: {type: Number, required: true},
        rest: {type: Number, required: true},
        timeUnit: {type: String, tUnit: ['seconds', 'minutes']}
    },
    { timestamps: true }
)

module.exports = Mobility