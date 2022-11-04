const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');

const validateLogin = async (req, res) => {
    // catch the user from the front end fields
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    // Check on the database if we have the details
    // the user entered on login
    await User.findOne({ email: userEmail })
        .then((user) => {
            if (!user) {
                res.status(200).json({
                    message: 'Invalid email or password.',
                    isLoggedIn: false,
                });
            } else {
                bcrypt.compare(userPassword, user.password)
                    .then((isMatching) => {
                        const payload = {
                            id: user._id,
                            email: user.email,
                        };

                        // if password matches, sign the user with the token
                        if (isMatching) {
                            const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '5d' });
                            const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
                            res.status(200).json({
                                isLoggedIn: true,
                                accessToken: `Bearer ${accessToken}`,
                                refreshToken,
                                user
                            });
                        } else {
                            res.status(200).json({ message: 'Invalid email or password.', isLoggedIn: false });
                        }
                    })
                    .catch((err) => res.status(500).json({ error: err.message }));
            }
        })
        .catch((err) => res.status(500).json({
            error: err.message,
            message: 'There was a problem with the server. Try again later.'
        }));
};

module.exports = validateLogin;
