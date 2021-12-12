const Post = require('../models/post.model');

exports.userPosts = (req, res) => {
    const author = 'Mphumeleli Ntetha';
    const post = "Hey there, i am the post";

    const userPost = new Post({
        author,
        post,
    });
    
    // save post on the database
    userPost.save()
        .then(res => console.log('Post saved successfully'))
        .catch(err => console.log('There was an error saving the post. ', err))
}

exports.getUserPost = (req, res) => {
    // get all the posts from the database
    Post.find({ post: 'Mphumeleli Ntetha'  })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
