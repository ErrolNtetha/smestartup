const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullNames: String,
    email: { type: String, lowercase: true },
    question: { type: String, require: [true, 'The question is required.'], max: 1000 }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
