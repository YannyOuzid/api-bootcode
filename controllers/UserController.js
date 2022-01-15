const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        const token = jwt.sign(
         { 
          _id: user._id,
          username: user.username,
          email: user.email,
        },
        'secret123'
        )
        return res.json({ status: 'ok', user:token })
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
    },

    register: async (req, res) => {
        let user = new User({email: req.body.email, username: req.body.username, password: req.body.password, role: req.body.role});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        try {
            const savedUser = await user.save();
            res.json(savedUser);
        } catch(err){
            res.json({message: err});
        }
    },
    getOne: async (req,res) => {
      try {
          const user = await Publication.findById(req.params.userId);
          res.json(user);
      } catch (err) {
          res.json({message: err});
      }
  },
}