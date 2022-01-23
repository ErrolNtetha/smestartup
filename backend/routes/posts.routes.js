const express = require('express');
const app = require('express');
const router = express.Router();

// import routes
const postRoutes = require('../controllers/postsController'); 
const verifyToken = require('../middlewares/verifyJWT');

// Handle routes
router.get('/feed', postRoutes.getUserPost);
router.post('/feed', postRoutes.userPosts);
 
module.exports = router;
 