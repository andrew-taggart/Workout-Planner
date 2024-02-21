const { Schema } = require('mongoose')
const Exercise = require('./models')

const Exercise = new Schema(
    {
        name : {type: String, required: true},
        description : {type: String, required: true},
        timeUnit: {type: String, enum: ['seconds', 'minutes']},
        notes: {type: String, required: true},
        rest: {type: Number, required: true},
        type: [{type: String, required: true, enum: ['cardio', 'strength', 'mobility'], required: true }],
    },
    { discriminatorKey: 'type', _id: false},
    { timestamps: true }
)

module.exports = Exercise