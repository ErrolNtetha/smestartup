const express = require('express');
const router = express.Router();

// import routes
const postRoutes = require('../controllers/postsController');

// Handle routes
router.get('/feed', postRoutes.getUserPost); 
router.post('/feed', postRoutes.userPosts);

module.exports = router;
 