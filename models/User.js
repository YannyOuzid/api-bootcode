const mongoose = require("mongoose");

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Array,
        default: ['ROLE_CLIENT']
    }
})

module.exports = mongoose.model('User', User);