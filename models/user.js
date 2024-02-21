const { Schema } = require('mongoose')

const User = new Schema(
    {
        username : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        type: {type: String, enum: ['admin', 'user'], required: true},
        email: {type: String, required: true},
        name: {type: String, required: true},
    },
    { timestamps: true }
)

module.exports = User