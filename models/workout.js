const { Schema } = require('mongoose')

const Workout = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true}, 
        name: {type: String, required: true},
        description : {type: String, required: true},
        exercises: [{
            exerciseType: { type: String, enum: ['Cardio', 'Mobility', 'Strength']},
            exerciseId: { type: Schema.Types.ObjectId, ref: 'Exercises'}
        }]
    },
    { timestamps: true }
)


module.exports = Workout