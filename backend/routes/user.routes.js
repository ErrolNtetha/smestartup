const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

const corsOption = {
    origin: 'http://localhost:3000'
}

// Controller imports
const register_user = require('../controllers/registerController');
const login_user = require('../controllers/loginController');
const { getProfile, deleteProfile, updateProfile } = require('../controllers/getProfile');
const verifyJWT = require('../middlewares/verifyJWT');
const allUsers = require('../controllers/getAllUsers');
const postRoutes = require('../controllers/postsController');

app.use(verifyJWT);

// Handle routes
router.get('/login', login_user);
router.get('/profile', cors(corsOption), verifyJWT, getProfile);
router.get('/p/posts', verifyJWT, postRoutes.getAllUserPosts);
router.post('/login', login_user);
router.post('/register', register_user);
router.get('/contact', allUsers.getUsers);
router.route('/profile/delete/:id').delete(deleteProfile);
router.route('/profile/update/:id').put(updateProfile);

module.exports = router;
