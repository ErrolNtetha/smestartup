const passport = require('passport');
const FacebookStrategy = require('passport-facebook-token');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use('facebook-token', new FacebookStrategy({
    clientID: '1523191688145598',
    clientSecret: 'f97c46b548c611df58310f520eaf0e03',
    callbackURL: 'http://localhost:3000/login/callback',
}, async function(accessToken, refreshToken, profile, done) {
    try {
        const user = {};
        user.provider = profile.provider;
        user.facebook_id = profile.id;
        user.name = { 
            firstName: `${profile.name.givenName} ${profile.name.middleName}`,
            lastName: `${profile.name.familyName}`
        }
        user.email = profile?.emails[0].value;
        user.loaction = profile?.user_hometown;
        user.gender = profile?.gender;
        user.avatar = profile?.profile_picture;
        return done(null, user);
    } catch (error) {
        console.log('An error occurred: ', error);
    }
}));


passport.use('google', new GoogleStrategy({
    clientID: '520348034592-4s4e3ch2ohfdt0hnm2uv6s5jai2umpce.apps.googleusercontent.com',
    clientSecret: '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',
}, async function(accessToken, refreshToken, profile, done) {
    try {
        console.log('google');
        const user = {};
        console.log(profile);
        return done(null, user);
    } catch (error) {
        console.log('An error occurred: ', error);
    }
}));
