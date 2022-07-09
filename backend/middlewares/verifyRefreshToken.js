const jwt = require('jsonwebtoken');

function verifyRefreshToken(req, res, next) {
    const token = req.headers['x-refresh-token'];

    if (token) {
        jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
            if (err) {
                console.log('Token has expired, or is invalid...');
                return res.status(403).json({
                    isLoggedIn: false,
                    message: 'Your refresh token has expired or is invalid...',
                });
            }

            // create an empty abject
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            next();
        });
    } else {
        res.status(401).json({ message: 'Invalid token.', isLoggedIn: false });
        console.log('There is no token');
    }
}

module.exports = verifyRefreshToken;
