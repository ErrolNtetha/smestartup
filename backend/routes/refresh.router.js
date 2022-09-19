const express = require('express');
const router = express.Router();
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

const refreshController = require('../controllers/refreshController');

router.get('/refresh', verifyRefreshToken, refreshController.refreshToken);

module.exports = router;
