/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
    console.log('Request: ', req.body);

    const {
        pf_payment_id,
        payment_status,
        item_name,
        amount_gross,
        amount_fee,
        amount_net,
        custom_str1,
        custom_str2,
        name_first,
        name_last,
        email_address,
        merchant_id,
        signature
    } = req.body;

    const newOrder = new Order({
        author: custom_str2,
        paymentPlan: custom_str1,
        paymentId: pf_payment_id,
        merchantId: merchant_id,
        firstName: name_first,
        lastName: name_last,
        emailAddress: email_address,
        itemName: item_name,
        transaction: {
            amountGross: amount_gross,
            amountFee: amount_fee,
            amountNet: amount_net,
            status: payment_status
        }

    });

    await newOrder.save();
};
