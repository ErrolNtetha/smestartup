const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyJWT');

const verify = require('../controllers/verifyController');

router.get('/verify', verifyToken, verify.verifyUser);

module.exports = router;
