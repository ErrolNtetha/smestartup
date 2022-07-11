const express = require('express');
const router = express.Router();

const newSubscriber = require('../controllers/newsletterController');

router.post('/', newSubscriber.getSubscriber);

module.exports = router;
