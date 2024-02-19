const { Schema } = require('mongoose')

const User = new Schema(
    {
        username : {type: String, required: true, unique: true},
        password : {type: Number, required: true},
    },
    { timestamps: true }
)

module.exports = User