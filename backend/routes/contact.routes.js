const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyJWT');

const { getContact } = require('../controllers/contactController');

router.route('/contact').post(verifyToken, getContact);

module.exports = router;
