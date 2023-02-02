const express = require('express');

const router = express.Router();

const { createOrder } = require('../controllers/ordersController.js');

router.route('/api/v1/payments').post(createOrder);

module.exports = router;
