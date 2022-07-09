const express = require('express');
const router = express.Router();
const refresh = require('../controllers/refreshController');
const refreshToken = require('../middlewares/verifyRefreshToken');

router.get('/refresh', refreshToken, refresh.refreshToken);

module.exports = router;
