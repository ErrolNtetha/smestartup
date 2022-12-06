const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res, next) => {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (token) {
     const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        }, function(error, result) {
            if (error) console.log(error);
            console.log(result);
        });

        next();
   } else console.log('No token');
}

module.exports = googleAuth;
