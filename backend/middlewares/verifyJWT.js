const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
            if (err) res.status(401).json({ isLoggedIn: false });

            // create an empty abject
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            next();
        });
    } else res.status(403).json({ isLoggedIn: false });
}

module.exports = verifyJWT;
