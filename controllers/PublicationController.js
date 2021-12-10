const bcrypt = require("bcrypt");
const Publication = require("../models/Publication");

module.exports = {
    post: async (req, res) => {
        let publi = new Publication({title: req.body.title, html: req.body.html, css: req.body.css, javascripti: req.body.javascript});

        try {
            const post = await publi.save();
            res.json(post);
        } catch(err){
            res.json({message: err});
        }
    },
}