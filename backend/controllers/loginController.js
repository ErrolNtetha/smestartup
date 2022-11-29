const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateLogin = async (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if (req?.user?.provider) {
        const { provider, facebook_id } = req.user;
        console.log('ID: ', facebook_id);
        const user = await User.findOne({ facebook_id });
        try {
            if (user) {
                res.status(200).json({ success: true, user });
                console.log('User already registered: ', user);
                return;
            }

            return res.status(200).json({ message: 'No social login for this account. Did you register with email maybe?.', success: false });
        } catch (error) {
                res.status(500).json({ success: false, error: error.message });
        }
    }


    // Check on the database if we have the details
    // the user entered on login
    await User.findOne({ email: userEmail })
        .then((user) => {
            if (!user) res.status(200).json({ message: 'Invalid email or password.', success: false });
            else {
                bcrypt.compare(userPassword, user.password)
                    .then((isMatching) => {
                        const payload = {
                            id: user._id,
                            email: user.email,
                        };

                        // if password matches, sign the user with the payload
                        if (isMatching) {
                            const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '5d' });
                            const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
                            res.status(200).json({
                                success: true,
                                accessToken: `Bearer ${accessToken}`,
                                refreshToken,
                                user
                            });
                        } else res.status(200).json({ message: 'Invalid email or password.', success: false });
                    })
                    .catch((err) => res.status(500).json({ error: err.message }));
            }
        })
        .catch((err) => res.status(500).json({
            error: err.message,
            success: false,
            message: 'There was a problem with the server. Try again later.'
        }));
};

module.exports = validateLogin;
