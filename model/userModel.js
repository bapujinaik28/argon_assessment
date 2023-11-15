const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "username field must be filled"],
        trim: true
    },
    firstName: {
        type: String,
        required:[true, "first_name field must be filled"],
        trim: true
    },
    lastName: {
        type: String,
        required:[true, "last_name field must be filled"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email field must be filled"],
        trim: true,
        unique: [true, "email already exists."]
    },
    password: {
        type: String,
        required: [true, "password field must be filled"],
        trim: true
    }
}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)