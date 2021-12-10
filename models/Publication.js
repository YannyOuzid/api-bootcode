const mongoose = require("mongoose");

const Publication = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    html: {
        type: String,
    },
    css: {
        type: String,
    },
    javascript: {
        type: String,
    }
})

module.exports = mongoose.model('Publication', Publication);