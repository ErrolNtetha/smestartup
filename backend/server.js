/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app, {
    origin: ['https://blendot.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
const io = require('./socket.js').init(server);

const loginRoute = require('./routes/user.routes');
const postRoutes = require('./routes/posts.routes');
const subsriberRoutes = require('./routes/subscriber.routes');
const verify = require('./routes/verify.route');
const suppliers = require('./routes/suppliers.routes');
const refresh = require('./routes/refresh.router');
const founders = require('./routes/founder.routes');
const users = require('./routes/user.routes');

// Middlewares
require('dotenv').config();
// const verifyToken = require('./middlewares/verifyJWT');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.static('./views/assets'));
app.use(loginRoute);
app.use(postRoutes);
app.use(subsriberRoutes);
app.use(verify);
app.use(suppliers);
app.use(refresh);
app.use(founders);
app.use(users);

// Connecting to socket.io
io.on('connection', (socket) => {
    console.log('User conencted: ', socket.id);

    socket.on('sendPost', (post) => {
        socket.broadcast.emit('receivePost', post);
        console.log(post);
    });

    // disconnect from server
    socket.on('disconnect', (data) => console.log('User disconnected: ', data));
});

app.get('/', (req, res, next) => {
    res.send('<h2> Server running successfully. </h2>');
});

// Connecting to the database;
let database;

if (app.get('env') === 'development') database = process.env.URL_DEVELOPMENT;
else database = process.env.URL_PRODUCTION;

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', (err) => {
    if (err) console.log('Error connecting to the database...');
    return console.log('Connection to MongoDB successfully established... ✓');
});

const port = process.env.PORT || 5000;

server.listen(port, (err) => {
    if (err) {
        console.log('An error has occured, ', err);
    }
    return console.log(`The ${app.get('env')} server is running on PORT:${port}`);
});
