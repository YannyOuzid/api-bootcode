const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
    login: async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ username: body.username });
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
    },

    register: async (req, res) => {
        let user = new User({email: req.body.email, username: req.body.username, password: req.body.password, validPassword: req.body.validPassword, role: req.body.role});

        if (req.body.password !== req.body.validPassword) {
            return res.status(400).send({ error: "Not equal" });
          }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        try {
            const savedUser = await user.save();
            res.json(savedUser);
        } catch(err){
            res.json({message: err});
        }
    },
}