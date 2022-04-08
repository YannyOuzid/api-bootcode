const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  publication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publication',
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Comment', Contact);
