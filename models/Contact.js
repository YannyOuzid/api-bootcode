const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
  mail: {
    type: String,
  },
  object: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Contact', Contact);
