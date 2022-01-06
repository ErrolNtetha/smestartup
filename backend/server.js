const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const app = express();


const loginRoute = require('./routes/user.routes');
const postRoutes = require('./routes/posts.routes');

// Middlewares
require('dotenv').config();
app.use(express.json());
app.use(cors());

app.use(loginRoute);
app.use(postRoutes);


const port = process.env.PORT || 5000;
const server = http.createServer(app);

// set up the cors
const io = new Server(server, {  
    cors: {    
        origin: "http://localhost:8080",    
        methods: ["GET", "POST"],  
    }
});

// Connecting to socket.io
io.on('connection', socket => {
    console.log("User conencted: ", socket.id)

    // disconnect from server
    socket.on('disconneect', data => console.log("User disconnected from server: ", data.id))
})


app.get('/', (req, res) => {
    res.send("<h2> Hello world!</h2>")
});







// Connecting to the database;
const url = process.env.URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', err => {
    if(err) console.log('Error connecting to the database...')
    return console.log('Connection to MongoDB successfully established...')
});

app.listen(port, (err) => {
    if(err) {
        console.log("An error has occured, ", err)
    }
    return console.log(`Sever is running on http://localhost:${port}`);
})