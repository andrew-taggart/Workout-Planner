const { Schema } = require('mongoose')

const Exercise = new Schema(
    {
        name : {type: String, required: true},
        sets : {type: Number, required: true},
        reps : {type: Number, required: true},
        weight : {type: Number, required: true},
        rest : {type: Number, required: true},
        notes : {type: String, required: true},
        createdBy: { type: Schema.Types.ObjectId, ref: 'User'}
        
    },
    { timestamps: true }
)

module.exports = Exercise