const express = require("express");
const router = express.Router();
const controller = require("../controllers/PublicationController");

router.post('/post', controller.post);
router.get('/', controller.getAll);
router.get('/:postId', controller.getOne);
router.patch('/:postId', controller.update);
router.delete('/:postId', controller.delete);

module.exports = router;