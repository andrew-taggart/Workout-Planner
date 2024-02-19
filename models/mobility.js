const { Schema } = require('mongoose')

const Mobility = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        description : {type: Number, required: true},
        sets: {type: Number, required: true},
        time: {type: Number, required: true},
        rest: {type: Number, required: true},
    },
    { timestamps: true }
)

module.exports = Mobility