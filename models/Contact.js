const mongoose = require("mongoose");

const Publication = new mongoose.Schema({
    mail: {
        type: String,
    },
    object: {
        type: String,
    },
    message: {
        type: String,
    }
})

module.exports = mongoose.model('Contact', Contact);