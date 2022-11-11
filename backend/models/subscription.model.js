const mongoose = require('mongoose');

const suppliersSubscription = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subscriptionType: {
        type: String,
        enum: ['free', 'pro', 'premium'],
        default: 'free'
    },
    productName: String,
    startDate: Date,
    endDate: Date,
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', suppliersSubscription);
module.exports = Subscription;
