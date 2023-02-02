const express = require('express');

const router = express.Router();

const { getLocation } = require('../controllers/locationController');

router.route('/location').post(getLocation);

module.exports = router;
