exports.createOrder = (req, res) => {
    console.log('Request: ', req.body);
    res.status(200).json({ success: true, message: 'Payment successful.' });
};
