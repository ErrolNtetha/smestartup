const express = require('express');
const passport = require('passport');
const app = express();
const router = express.Router();

// Controller imports
const registerUser = require('../controllers/registerController');
const loginUser = require('../controllers/loginController');
const profile = require('../controllers/profileController');
const verifyJWT = require('../middlewares/verifyJWT');
const allUsers = require('../controllers/getAllUsers');
const postRoutes = require('../controllers/postsController');

app.use(verifyJWT);

router.get('/auth/facebook/token?:accessToken&:googleId', passport.authenticate('facebook-token', { session: false }), loginUser);
router.get('/auth/google/token?:accessToken&:googleId', registerUser);
router.get('/auth/google/token?:accessToken&:googleId', loginUser);
router.get('/profile', verifyJWT, profile.getUserProfile);
router.get('/profile/posts', verifyJWT, postRoutes.getAllUserPosts);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/contact', allUsers.getUsers);
router.route('/profile/:id/update').put(verifyJWT, profile.updateProfile);

module.exports = router;
