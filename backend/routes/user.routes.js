const express = require('express');
const router = express.Router();

// Controller imports
const register_user = require('../controllers/userController');
const login_user = require('../controllers/userController');


router.get('/login', login_user);
router.post('/login', register_user);

module.exports = router;