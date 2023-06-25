/* eslint-disable no-unused-vars */

const jwt = require('jsonwebtoken');

function verifyRefreshToken(req, res, next) {
    const token = req.headers['x-refresh-token'];

    if (token) {
        jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, _) => {
            if (err) {
                res.status(401).json({
                    isLoggedIn: false,
                    message: 'Aunthetication failed.',
                });
            }
            next();
        });
    } else {
        res.status(403).json({ message: 'Forbidden request.', isLoggedIn: false });
    }
}

module.exports = verifyRefreshToken;
