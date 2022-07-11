const SubscribersSchema = require('../models/newsletter.model');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

require('dotenv').config();

exports.getSubscriber = async (req, res) => {
    const { fullNames, lastName, email } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'premium111.web-hosting.com',
        auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        });

        transporter.use('compile', hbs({
            viewEngine: {
                extName: '.handlebars',
                layoutsDir: 'views/layouts'
            },
            viewPath: 'views/'
        }));

        const mailOptions = {
            from: 'no-reply@blendot.com',
            to: email,
            subject: 'You have successfully subscribed!',
            template: 'index',
            context: {
                name: fullNames,
                lastName,
                email
            }
        };

                // send an email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                res.json({ message: 'There was an error subscribing.' });
                console.log('There was an error ', err.message);
                return;
            }
            console.log('Email sent, ', info.response);
    });

    const newSubscriber = new SubscribersSchema({
        fullNames,
        lastName,
        email
    });

    await newSubscriber.save()
    .then(() => {
        res.json({ message: 'Sucessfully subscribed to receive news' });
    })
    .catch((err) => {
        console.log(err);
    })
};
