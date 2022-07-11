const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {
    const { email } = req.user;

    await User.findOne({ email })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.error('An error occured while fetching profile data.', err));
};
