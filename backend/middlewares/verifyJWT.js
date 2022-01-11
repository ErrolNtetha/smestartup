const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]; 
 
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.json({
                    isLoggedIn: false,
                    message: "Aunthetication failed",
                });
            }
 
            // create an empty abject  
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            console.log('Token validated ');

            console.log(req.user.id);
            console.log(req.user.email);
            res.json({ isLoggedIn: true });
            next();
        });
    }
    else {
        res.json({ message: 'Invalid token.', isLogged: false });
        console.log('invalid token');
    }
}

module.exports = verifyJWT;