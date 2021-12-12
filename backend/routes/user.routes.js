const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/verifyJWT');


// Controller imports
const register_user = require('../controllers/registerController');
const login_user = require('../controllers/loginController');

// middleware import


// Handle routes
router.get('/login', login_user);
router.post('/login', login_user); 
router.post('/signup', register_user);

module.exports = router;