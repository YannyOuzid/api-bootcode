const Comment = require('../models/Comment');
const User = require('../models/User');
const Publication = require('../models/Publication');

module.exports = {
  post: async (req, res) => {
    const { userId, publicationId } = req.params;
    const comment = new Comment(req.body);
    const user = await User.findById(userId);
    const publication = await Publication.findById(publicationId);

    comment.author = user;
    comment.publication = publication;

    await comment.save();
    user.comment.push(comment);
    publication.comment.push(comment);

    await user.save();
    await publication.save();
    res.status(201).json(comment);
  },
};
