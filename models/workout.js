const { Schema } = require('mongoose')
const Workout = require('./models')

const Workout = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true}, 
        name: {type: String, required: true},
        description : {type: String, required: true},
        exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
    },
    { timestamps: true }
)


module.exports = Workout