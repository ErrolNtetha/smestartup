const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const registerUser = async (req, res) => {
   try {
    // store the data coming from the fontend to constants
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
                    res.json({ success: true, user });
                })
                .catch((error) => console.error(error));
            }
        });
   } catch (e) {
       console.log('An error occurred when registration: ', e.message);
   }
};

module.exports = registerUser;
