const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {

	await User.findOne({ email: 'mphumier@gmail.com' })
		.then((result => {
			res.json(result);
		}))
		.catch((err) => console.error(err))				
}
