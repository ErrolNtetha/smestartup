const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    date: new Date.now(),
});

const Blogs = mongoose.model('blogs', blogSchema);

module.exports = Blogs;