const express = require('express');

const router = express.Router();
const controller = require('../controllers/CommentController');
const security = require('../middlewares/security');

router.post('/:userId/:publicationId/post', security.checkJWT, controller.post);

module.exports = router;
