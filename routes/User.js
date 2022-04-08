const express = require('express');

const router = express.Router();
const controller = require('../controllers/UserController');
const security = require('../middlewares/security');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/:userId', security.checkJWT, controller.getOne);

module.exports = router;
