const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {
	console.log(req.user);

	await User.find({ email: req.user.email })
		.then((result => {
			res.json(result);
		}))
		.catch((err) => console.error(err))
}
