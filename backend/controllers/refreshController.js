const jwt = require('jsonwebtoken');

// create a new access token and send it to the client
exports.refreshToken = (req, res, next) => {
    const { id, email } = req.user;

    const payload = {
        id,
        email
    };

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '5d' });
    try {
        res.status(200).json({ accessToken: `Bearer ${accessToken}` });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
    next();
};
