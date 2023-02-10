/* eslint-disable func-names */

const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    paymentPlan: {
        type: String,
        enum: ['starter', 'pro', 'premium'],
        required: [true, 'Plan type is required.']
    },
    paymentId: {
        type: String,
        required: [true, 'Payfast transaction ID is required.']
    },
    nextPaymentDate: {
        type: Date,
        required: [true, 'Next payment date is required.']
    },
    orderHistory: []
}, { timestamps: true });

const order = mongoose.model('Order', orderSchema);
module.exports = order;

orderSchema.pre('save', function () {
    const s = this;
    if (s.paymentId && s.paymentPlan) {
        s.orderHistory.push({
            author: s.author,
            paymetntPlan: s.paymentPlan,
            paymentId: s.pf_payment_id,
            merchantId: s.merchant_id,
            firstName: s.name_first,
            lastName: s.name_last,
            emailAddress: s.email_address,
            itemName: s.item_name,
            transaction: {
                amountGross: s.amount_gross,
                amountFee: s.amount_fee,
                amountNet: s.amount_net,
                status: s.payment_status
            }
        });
    }
});
