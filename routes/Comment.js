const express = require('express');

const router = express.Router();
const controller = require('../controllers/CommentController');

router.post('/:userId/:publicationId/post', controller.post);

module.exports = router;
