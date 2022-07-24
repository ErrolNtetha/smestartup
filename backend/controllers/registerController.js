const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const register_user = async (req, res) => {
const {
        firstName,
        lastName,
        email,
        password,
        occupation,
        gender,
        avatar
    } = req.body;

    console.log(req.body);

   try {
    // store the data coming from the fontend to constants
    // Check if email has already been taken or not
    // then hash the password and save it

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserInfo.findOne({ email })
        .then((user) => {
            if(user) {
            	res.json({ success: false, message: 'Email already exist.' });
            	console.log('The email already exist.', user.createdAt);
            }
  
            // if no email exist, add user
            else {
                // hash the password before saving
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
                        partialsDir: "../views/partials",
                        layoutsDir: "../views/layouts",
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
   } catch (error) {
       console.log('An error occurred when registering: ', error.message);
       res.status(500).json({ error: error.message })
   }
};

module.exports = register_user;
