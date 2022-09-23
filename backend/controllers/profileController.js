const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {
    const { email } = req.user;

    await User.findOne({ email })
        .then((result) => {
            res.json(result);
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        avatar,
        occupation,
        bio
    } = req.body;

    await User.findByIdAndUpdate({ _id: id }, {
        name: {
                firstName,
                lastName,
            },
        avatar,
        occupation,
        bio
    })
    .then(async () => {
        const updatedProfile = await User.findOne({ _id: id });
        res.status(201).json({ user: updatedProfile });
    })
    .catch((err) => res.status(500).json({ err }));
};
