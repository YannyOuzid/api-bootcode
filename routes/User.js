const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/:userId', controller.getOne);

module.exports = router;