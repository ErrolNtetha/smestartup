const express = require('express');
const router = express.Router();

const subscribers = require('../controllers/newsletterController');

router.route('/')
    .get(subscribers.getSubscribers)
    .post(subscribers.getSubscriber);

// Delete subscriber
router.route('/api/v1/unsubscribe').delete(subscribers.deleteSubscriber);

module.exports = router;
