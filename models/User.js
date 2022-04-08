const mongoose = require('mongoose');

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
    default: ['ROLE_CLIENT'],
  },
  publication: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publication',
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  publicationliked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publication',
    },
  ],
});

module.exports = mongoose.model('User', User);
