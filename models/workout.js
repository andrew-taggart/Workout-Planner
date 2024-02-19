const { Schema } = require('mongoose')
const Exercise = require('./exercise')

const Workout = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name : {type: String, required: true},
        description : {type: String, required: true},
        exercises: [{type: String, ref: ['cardio', 'strength', 'mobility'], required: true }],
    },
    { timestamps: true }
)

module.exports = Workout