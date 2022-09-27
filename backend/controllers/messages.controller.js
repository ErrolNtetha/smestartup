const User = require('../models/user.model');
const io = require('../socket.js').get();

exports.getMessagesList = async (req, res) => {
};

exports.getQueriesList = async (req, res) => {
    console.log(res.body);
};

exports.getRequestsList = async (req, res) => {
    console.log(res.body);
};

exports.getMessage = async (req, res) => {
    console.log(res.body);
};

exports.replyMessage = async (req, res) => {
    const { name } = await User.findOne({ email: req.user.email });
    io.on('send-message', (data) => {
        console.log('You said: ', data);
    });
    io.emit('receive_message', name);
};

exports.getQuery = async (req, res) => {
    console.log(res.body);
};

exports.replyQuery = async (req, res) => {
    console.log(res.body);
};

exports.getRequest = async (req, res) => {
    console.log(res.body);
};

exports.replyRequest = async (req, res) => {
    console.log(res.body);
};
