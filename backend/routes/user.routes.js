const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

const corsOption = {
    origin: 'http://localhost:3000'
};

// Controller imports
const registerUser = require('../controllers/registerController');
const loginUser = require('../controllers/loginController');
const profile = require('../controllers/profileController');
const verifyJWT = require('../middlewares/verifyJWT');
const allUsers = require('../controllers/getAllUsers');
const postRoutes = require('../controllers/postsController');

app.use(verifyJWT);

// Handle routes
router.get('/login', loginUser);
router.get('/profile', cors(corsOption), verifyJWT, profile.getUserProfile);
router.get('/profile/posts', verifyJWT, postRoutes.getAllUserPosts);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/contact', allUsers.getUsers);
router.get('/users', allUsers.getUsers);
router.route('/profile/:id/update').put(verifyJWT, profile.updateProfile);

module.exports = router;
