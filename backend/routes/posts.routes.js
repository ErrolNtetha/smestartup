const express = require('express');

const router = express.Router();

// import routes
const postRoutes = require('../controllers/postsController');
const verifyToken = require('../middlewares/verifyJWT');
const deletePost = require('../controllers/deletePostController');

// Handle routes
router.get('/feed', verifyToken, postRoutes.getUserPost);
router.post('/feed', verifyToken, postRoutes.userPosts);
router.put('/feed/:id', verifyToken, postRoutes.incrimementLikes);
router.get('/feed/p/:id', verifyToken, postRoutes.getSpecificUserPost);
router.delete('/feed/:id', verifyToken, deletePost);
router.get('/feed', verifyToken, postRoutes.getAllUserPosts);

module.exports = router;
