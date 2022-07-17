const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
    const { email } = req.user;

    await User.findOne({ email })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => console.error('An error occured while fetching profile data.', err));
};

exports.deleteProfile = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndRemove({ _id: id })
        .then(() => {
            res.status(200).json({ success: true, message: 'Account delete successfully.' });
        })
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};

exports.updateProfile = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndUpdate({ _id: id }, req.body)
        .then(() => {
            User.findOne({ _id: id }).then((user) => res.status(200).json({ user }));
        })
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};
