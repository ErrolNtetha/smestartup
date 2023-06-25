const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');

// create a new access token and send it to the client
exports.refreshToken = async (req, res) => {
    console.log('user id: ', req.user.id);
    const user = await Users.find({ email: req.user.email });

    const payload = {
        id: user._id,
        email: user.email
    };

    try {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15s' });
        res.status(200).json({ accessToken: `Bearer ${accessToken}` });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
