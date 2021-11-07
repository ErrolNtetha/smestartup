const express = require('express');
const router = express.Router();

// Controller imports
const register_user = require('../controllers/registerController');
const login_user = require('../controllers/registerController');


router.get('/login', login_user);
router.post('/login', register_user); 
router.post('/signup', register_user);

module.exports = router;