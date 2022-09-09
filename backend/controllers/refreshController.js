const jwt = require('jsonwebtoken');

// create a new access token and send it to the client
exports.refreshToken = (req, res, next) => {
    const { _id, email } = req.user;

    const payload = {
        id: _id,
        email
    };

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '10d' });
    res.status(200).json({ accessToken });
    next();
};
