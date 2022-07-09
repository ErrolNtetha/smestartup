const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.refreshToken = async (req, res, next) => {
    const { _id, email } = req.user;
    console.log(req.user);

    await User.findOne({ email })
    .then((user) => {
        if (!user) {
            res.status(404).json({ message: 'No user found', success: false });
            return;
        }

        const payload = {
            id: _id,
            email,
        };

        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '2m' });
        res.status(200).json({ accessToken });
    });
    next();
};
