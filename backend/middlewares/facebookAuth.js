const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

const facebookAuth = (req, res, next) => {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (token) {
        console.log('Triggered');
        passport.use('facebook-token', new FacebookTokenStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
        }, async function(accessToken, refreshToken, profile, done) {
            try {
                const user = {};
                user.facebook_id = profile.id;
                user.name.firstName = `${profile.name.givenName} ${profile.name.middleName}`;
                user.namelastName = `${profile.name.familyName}`;
                user.name.lastName = `${profile.name.familyName}`;
                user.email = profile.emails[0].values;
                user.location = profile.hometown;
                user.provider = profile.provider;

                return done(null, profile)
            }
            catch (error) {
                console.log(error);
            }
            }));
        next();
    } else console.log('No token');
}

module.exports = facebookAuth;
