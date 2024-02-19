const { Schema } = require('mongoose')

const Cardio = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        description : {type: Number, required: true},
        sets: {type: Number, required: true},
        time: {type: Number, required: true},
        pace: {type: Number, required: true},
        distance: {type: Number, required: true},
        rest: {type: Number, required: true},
    },
    { timestamps: true }
)

module.exports = Cardio