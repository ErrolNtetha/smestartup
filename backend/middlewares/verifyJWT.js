const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
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
    } else res.status(401).json({ message: 'Invalid token.', isLoggedIn: false });
}

module.exports = verifyJWT;
