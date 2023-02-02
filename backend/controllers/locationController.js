/* eslint-disable prefer-arrow-callback */

const geocoder = require('../utils/geocode');

exports.getLocation = async (req, res) => {
    const { address } = req.body;
    console.log(address);

    await geocoder.geocode(address, function (error, response) {
        if (error) {
            res.status(500).json({ success: false, error });
        }
        const location = response[0];
        res.status(200).json({ success: true, location });
    });
};
