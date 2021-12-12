const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateLogin = async (req, res) => {
    // catch the user from the front end fields
    const user_email = req.body.email;
    const user_password = req.body.password;

    // Check on the database if we have the details 
    // the user entered on login 
    await User.findOne({ email: user_email })
        .then(user => {
            if(!user) {
                console.log('Invalid email or password. ');
                console.log(user);
            }

            else {
                
                console.log('User granted entry.');
                console.log(req.headers);

                bcrypt.compare(user_password, user.password)
                    .then(isMatching => {
                        // if password matches, sign the user with the token
                        const payload = {
                            id: user._id,
                            email: user.email,
                        }

                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET, // where to get the secret??
                            {expiresIn: 86400},
                            (err, token) => {
                                if(err) console.log(err);
                                return console.log('Bearer ', token);
                            });
                    });
            }
        });
}

module.exports = validateLogin;