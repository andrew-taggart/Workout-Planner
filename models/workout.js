const { Schema } = require('mongoose')
const Workout = require('./models')
const Exercise = require('./exercise')

const Workout = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true}, 
        name: {type: String, required: true},
        description : {type: String, required: true},
        exercises: [Exercise],
    },
    { timestamps: true }
)


module.exports = ('workout', Workout)