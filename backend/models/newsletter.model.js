const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    fullNames: String,
    lastName: String,
    email: String,
});

const Subscribers = mongoose.model('Newsletter', NewsletterSchema);

module.exports = Subscribers;
