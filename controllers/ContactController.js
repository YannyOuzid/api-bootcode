const Contact = require("../models/Contact");

module.exports = {
    post: async (req, res) => {
        let post = new Contact({mail: req.body.mail, object: req.body.object, message: req.body.message});

        try {
            const saved = await post.save();
            res.json(saved);
        } catch(err){
            res.json({message: err});
        }
    }
};