const bcrypt = require("bcrypt");
const Publication = require("../models/Publication");

module.exports = {
    post: async (req, res) => {
        let publi = new Publication({title: req.body.title, html: req.body.html, css: req.body.css, javascript: req.body.javascript});

        try {
            const post = await publi.save();
            res.json(post);
        } catch(err){
            res.json({message: err});
        }
    },

    getAll: async (req, res) => {
       try {
           const publications = await Publication.find();
           res.json(publications);
       } catch(err) {
           res.json({ message: err});
       }
    },

    getOne: async (req,res) => {
        try {
            const publication = await Publication.findById(req.params.postId);
            res.json(publication);
        } catch (err) {
            res.json({message: err});
        }
        
    },

    update: async (req,res) => {
        try {
            const post = await Publication.findOne({ _id: req.params.postId })

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
        } catch(err) {
            res.json({ message: err});
        }
    },

    delete: async (req,res) => {
        try {
            const post = await Publication.deleteOne({_id: req.params.postId});
            res.json(post);
        } catch(err) {
            res.json({ message: err});
        }
    }

}