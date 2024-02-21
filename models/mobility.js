const { Schema } = require('mongoose')

const Mobility = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        reps: {type: Number, required: true},
        time: {type: Number, required: true},
    },
    { timestamps: true }
)

module.exports =  Mobility