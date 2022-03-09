const express = require('express');
const app = express();
const router = express.Router();

// Controller imports
const register_user = require('../controllers/registerController');
const login_user = require('../controllers/loginController');
const getProfile = require('../controllers/getProfile');
const verifyToken = require('../middlewares/verifyJWT');

app.use(verifyToken);

// Handle routes
router.get('/login', login_user);
router.post('/login', login_user); 
router.post('/signup', register_user);

module.exports = router;
