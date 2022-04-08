const express = require('express');

const router = express.Router();
const controller = require('../controllers/PublicationController');
const security = require('../middlewares/security');

router.post('/:userId/post', security.checkJWT, controller.post);
router.post('/:userId/:postId/like', security.checkJWT, controller.like);
router.get('/all', controller.getAll);
router.get('/:userId/post', security.checkJWT, controller.getUserPublication);
router.get('/:postId', controller.getOne);
router.patch('/:postId', security.checkJWT, controller.update);
router.delete('/:postId', security.checkJWT, controller.delete);

module.exports = router;
