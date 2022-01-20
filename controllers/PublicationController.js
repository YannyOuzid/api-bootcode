const Publication = require('../models/Publication');
const User = require('../models/User');

module.exports = {
  post: async (req, res) => {
    const { userId } = req.params;
    const publi = new Publication(req.body);
    const user = await User.findById(userId);

    publi.author = user;

    await publi.save();
    user.publication.push(publi);

    await user.save();
    res.status(201).json(publi);
  },

  getAll: async (req, res) => {
    try {
      const publications = await Publication.find();
      res.json(publications);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getUserPublication: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('publication');
    res.status(200).json(user.publication);
  },

  getOne: async (req, res) => {
    try {
      const publication = await Publication.findById(req.params.postId);
      res.json(publication);
    } catch (err) {
      res.json({ message: err });
    }
  },

  update: async (req, res) => {
    try {
      const post = await Publication.findOne({ _id: req.params.postId });

      if (req.body.title) {
        post.title = req.body.title;
      }

      if (req.body.html) {
        post.html = req.body.html;
      }

      if (req.body.css) {
        post.css = req.body.css;
      }

      if (req.body.javascript) {
        post.javascript = req.body.javascript;
      }

      await post.save();
      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  },

  delete: async (req, res) => {
    try {
      const post = await Publication.deleteOne({ _id: req.params.postId });
      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
