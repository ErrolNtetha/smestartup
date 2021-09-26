const express = require('express');
const app = express();
app.use(express.json())


const port = process.env.PORT || 5000;

const users = [
    { name: "user1", age: 27, id: 1 },
    { name: "user2", age: 31, id: 2 },
    { name: "user3", age: 26, id: 3 },
]

// Greet the user
app.get('/', (req, res) => {
    res.send("Hello world! I am a backend...")
})

// Create the post request and add the user to the database
app.post('/users', (req, res) => {
    const user = [
        { name: "user4", age: 35, id: users.id + 1 }
    ]

    // append new user to existing user and display all of them
    // and display them 
    const addUser = users.push(...users, user)
    console.log(users)
    res.send("User is being added: ", addUser)
})

// List all the users in the database
app.get('/users', (req, res) => {
    res.send(users)
})


app.listen(port, (err) => {
    if(err) {
        console.log("An error has occured, ", err)
    }
    return console.log(`Sever is running on http://localhost:${port}`)
})