const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (token) => {
    // @params 'Options'
    // @params 'Callback'
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    }, response);
}

function response(error, result) {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Success: ', result);
    return result;
}

module.exports = googleAuth;
