const Users = require('../models/user.model');

exports.getUsers = async (req, res) => {
    await Users
        .find({}, 'name occupation isPremium _id type avatar')
        .then((users) => {
            if (!users) {
                res.status(200).json({ message: 'No users found.' });
                return;
            }
            res.status(200).json({ users });
        })
        .catch((error) => res.status(500).json({ success: false, error }));
};
