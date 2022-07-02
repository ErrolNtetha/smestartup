const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
            if (err) {
                console.log('Token has expired, or is invalid...');
                return res.status(403).json({
                    isLoggedIn: false,
                    message: 'Token has expired or is invalid...',
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

module.exports = verifyJWT;
