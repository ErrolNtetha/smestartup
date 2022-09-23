const express = require('express');
const router = express.Router();

const { getFounders, addFounder } = require('../controllers/foundersController');
const verifyToken = require('../middlewares/verifyJWT');

router.route('/founders')
    .get(getFounders)
    .post(verifyToken, addFounder);

module.exports = router;
