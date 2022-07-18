const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const SubscribersSchema = require('../models/newsletter.model');
require('dotenv').config();

exports.getSubscribers = async (req, res) => {
    await SubscribersSchema.find()
        .then((subscribers) => res.status(200).json({ success: true, subscribers }))
        .catch((error) => res.status(500).json({ error: error.message }));
};

exports.deleteSubscriber = async (req, res) => {
    const { email } = req.query;

    await SubscribersSchema.findOneAndRemove({ email })
        .then(() => res.status(200).json({ success: true, message: 'You have successfully unsubscribed from our mailing list.' }))
        .catch((error) => res.status(500).json({ error: error.message }));
};

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
                fullNames,
                lastName,
                email
            }
        };

                // send an email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({ message: 'There was an error subscribing.' });
                console.log('There was an error ', error.message);
                return;
            }
            res.json({ success: true, message: info.response });
    });

    const newSubscriber = new SubscribersSchema({
        fullNames,
        lastName,
        email
    });

    await newSubscriber.save()
    .then(() => {
        res.status(250).json({ success: true, message: 'You have sucessfully subscribed to receive newsletters!' });
    })
    .catch((error) => {
        res.staus(500).json({ success: false, error });
    });
};
