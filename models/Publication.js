const mongoose = require('mongoose');

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
  },
  description: {
    type: String,
  },
  tags: [{
    type: String,
  }],
  creationDate: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = mongoose.model('Publication', Publication);
