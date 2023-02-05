const express = require('express');
const auth = require('../middlewares/verifyJWT.js');

const router = express.Router();

const { getComments, postComment, deleteComment } = require('../controllers/commentController');

router.route('/api/v1/comments/get/:id').get(auth, getComments);
router.route('/api/v1/comment/post/:postId').post(auth, postComment);
router.route('/api/v1/comment/delete/:id').delete(auth, deleteComment);

module.exports = router;
