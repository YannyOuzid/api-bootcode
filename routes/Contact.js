const express = require('express');

const router = express.Router();
const controller = require('../controllers/ContactController');

router.post('/post', controller.post);

module.exports = router;
