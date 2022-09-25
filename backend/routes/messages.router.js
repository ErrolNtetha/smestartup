const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyJWT');
const messages = require('../controllers/messages.controller');

// Get the list of all messages, queries and requests
router.route('/messages')
    .get(verifyToken, messages.getMessagesList)
    .post(verifyToken, messages.replyMessage);
router.route('/messages/queries').get(verifyToken, messages.getQueriesList);
router.route('/messages/requests').get(verifyToken, messages.getRequestsList);

// Retrieve conversation, query and request
router.route('/messages/:id')
    .get(verifyToken, messages.getMessage)
    .post(verifyToken, messages.replyMessage);
router.route('/messages/queries/:id')
    .get(verifyToken, messages.getQuery)
    .post(verifyToken, messages.replyQuery);
router.route('/messages/requests/:id')
    .get(verifyToken, messages.getRequest)
    .post(verifyToken, messages.replyRequest);

module.exports = router;
