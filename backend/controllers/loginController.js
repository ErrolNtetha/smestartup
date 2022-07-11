const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');

const validateLogin = async (req, res) => {
    // catch the user from the front end fields
    const user_email = req.body.email;
    const user_password = req.body.password;

    // Check on the database if we have the details
    // the user entered on login
    await User.findOne({ email: user_email })
        .then((user) => {
            if (!user) {
                res.json({
                    message: 'Invalid email or password.',
                    isLoggedIn: false,
                })
            } else {
                bcrypt.compare(user_password, user.password)
                    .then((isMatching) => {
                        const payload = {
                            id: user._id,
                            email: user.email,
                        };

                        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '1d' });
                        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '15s' });

                        // if password matches, sign the user with the token
                        if (isMatching) {
                            res.json({
                                isLoggedIn: true,
                                accessToken: `Bearer ${accessToken}`,
                                refreshToken,
                                user
                            })
                        } else {
                            // send to client
                            res.json({ message: 'Invalid email or password.', isLoggedIn: false });
                        }
                    })
                    .catch((err) => console.log(err))
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err.message, message: 'There was a problem with the server. Try again later.' })
        })
}

module.exports = validateLogin;
