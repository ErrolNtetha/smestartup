const express = require('express');

const router = express.Router();

// import routes
const postRoutes = require('../controllers/postsController');
const verifyToken = require('../middlewares/verifyJWT');
const deletePost = require('../controllers/deletePostController');

// Handle routes
router.get('/feed', verifyToken, postRoutes.getUserPost);
router.post('/feed', verifyToken, postRoutes.userPosts);
router.delete('/feed/:id', verifyToken, deletePost);

module.exports = router;
