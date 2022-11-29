const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const registerUser = async (req, res) => {
    const { accessToken, googleId } = req.query;

    if (accessToken) {
        const ticket = await client.verifyIdToken({
            idToken: accessToken,
            audience: process.env.GOOGLE_CLIENT_ID
        }, async function(error, result) {
            if (error) {
                console.log(error);
                return;
            }

            const {
                family_name,
                given_name,
                picture,
                email
            } = result.payload;
            const user = await UserInfo.findOne({ googleId, email });

            if (user) {
                console.log('User already exist');
                res.status(200).json({ message: 'User already exist.' });
            } else {
                const newUser = new UserInfo({
                    googleId,
                    name: {
                        firstName: given_name,
                        lastName: family_name,
                    },
                    avatar: picture,
                    email
                });

                console.log(newUser);

                await newUser.save()
                    .then((user) => res.status(201).json({ success: true, message: 'User created.', user }))
                    .catch((error) => res.status(500).json({ success: false, error: error.message }));
            }
        });
        return;
   } else res.status(400).json({ success: false, message: 'Invalid token.' });

    const {
        provider,
        facebook_id,
        name,
        gender,
        avatar,
        location,
        email
    } = req?.user;

    if (provider) {
        const user = await UserInfo.findOne({ facebook_id });
        const { firstName, lastName } = name;

        try {
            if (user) {
                res.status(200).json({ success: true, user });
                console.log('User already registered: ', user);
                return;
            }

            const facebookUser = new UserInfo({
                name: {
                    firstName,
                    lastName,
                },
                email: email.toLowerCase(),
                facebook_id,
                gender,
                avatar,
                location
            });


            facebookUser.save((error, user) => {
                if (error) return res.status(500).json({ success: false, error: error.message });
                return res.status(201).json({ success: true, user });
            })
        } catch (error) {
                res.status(200).json({ success: false, error: error.message });
        }
    }

   try {
    const {
        firstName,
        lastName,
        email,
        password,
        occupation,
        gender,
        avatar
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserInfo.findOne({ email })
        .then((e) => {
            if (e) res.status(200).json({ success: false, message: 'Email already exist.' });

            // if no email exist, add user
            else {
                const userData = new UserInfo({
                    name: {
                        firstName,
                        lastName,
                    },
                    email: email.toLowerCase(),
                    password: hashedPassword,
                    occupation,
                    gender,
                    avatar
                });

                // Send am email to the user
                // create a transporter for sending mails
                const transporter = nodemailer.createTransport({
                    host: 'premium111.web-hosting.com',
                    auth: {
                        user: process.env.MAIL_USERNAME,
                        pass: process.env.MAIL_PASSWORD,
                    }
                });

                transporter.use('compile', hbs({
                    viewEngine: {
                        partialsDir: '../views/partials',
                        layoutsDir: '../views/layouts',
                    },
                    viewPath: 'views'
                }));

                const mailOptions = {
                    from: 'no-reply@blendot.com',
                    to: email,
                    subject: 'Welcome to Blendot.',
                    text: `Welcome, ${firstName} ${lastName}!`,
                    template: 'index'
                };

                // send an email
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) console.log('There was error ', err);
                    return console.log('Email sent, ', info);
                });

                // save to the database
                userData.save()
                .then((user) => {
                    res.status(201).json({ success: true, user });
                })
                .catch((error) => console.error(error));
            }
        });
   } catch (e) {
        res.status(500).json({ message: 'An error occurred when registration: ' });
   }
};
module.exports = registerUser;
