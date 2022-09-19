const User = require('../models/user.model');

exports.verifyUser = async (req, res) => {
    const { email } = req.user;

    await User.findOne({ email })
        .then((user) => {
            if (!user) return res.status(404).json({ message: 'No user found.' });
            return res.status(200).json({ userId: user._id });
        })
        .catch((error) => res.status(500).json({ error }));
};
