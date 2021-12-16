const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                res.json({
                    isLogged: false,
                    message: "Aunthetication failed",
                });
                console.log('Aunthentication failed');
            }

            // create an empty abject 
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            console.log('Token validated ', token);

            console.log(req.user.id);
            console.log(req.user.email);
            next();
        });
    }
    else {
        res.json({ message: 'Invalid token.', isLogged: false });
        console.log('invalid token');
    }
}

module.exports = verifyJWT;