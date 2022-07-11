const Users = require('../models/user.model');

exports.getUsers = async (req, res) => {
    await Users.find({})
        .then((users) => {
            if (!users) {
                res.json({ message: 'No users currently exist.' });
            }
            res.json({ users });
        });
};
