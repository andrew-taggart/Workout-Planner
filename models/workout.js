const { Schema } = require('mongoose')
const Exercise = require('./exercise')

const Workout = new Schema(
    {
        title : {type: String, required: true},
        description : {type: String, required: true},
        description : {type: String, required: true},
        exercises: [{type: Schema.Types.ObjectId, ref:'Exercise'}],
        createdBy: { type: Schema.Types.ObjectId, ref: 'User'}
    },
    { timestamps: true }
)

module.exports = Workout