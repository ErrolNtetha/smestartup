const jwt = require('jsonwebtoken');

function verifyRefreshToken(req, res, next) {
    const token = req.headers['x-refresh-token'];

    if (token) {
        jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    isLoggedIn: false,
                    message: 'Aunthetication failed',
                });
            }

            // create an empty abject
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            next();
        });
    } else {
        res.status(403).json({ message: 'Forbidden request.', isLoggedIn: false });
    }
}

module.exports = verifyRefreshToken;
