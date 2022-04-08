const express = require('express');

const router = express.Router();
const controller = require('../controllers/PublicationController');

router.post('/:userId/post', controller.post);
router.post('/:userId/:postId/like', controller.like);
router.get('/all', controller.getAll);
router.get('/:userId/post', controller.getUserPublication);
router.get('/:postId', controller.getOne);
router.patch('/:postId', controller.update);
router.delete('/:postId', controller.delete);

module.exports = router;
