const Users = require('../models/user.model');

exports.getUsers = async (req, res) => {
    await Users
        .find({})
        .then((users) => {
            if (!users) {
                res.status(200).json({ message: 'No users found.' });
                return;
            }
            res.status(200).json({ users });
        });
};
