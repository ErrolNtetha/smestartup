const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'Author cannot be empty.'],
        ref: 'User',
    },
    seeking: Boolean,
    investmentType: [String],
    investment: String,
    description: String,
    photos: [String],
    tags: [String],
    reports: {
        count: Number,
        reportType: String,
        users: [mongoose.SchemaTypes.ObjectId]
    }
});

module.exports = mongoose.model('Investment', investmentSchema);
