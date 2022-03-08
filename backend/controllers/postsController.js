const Post = require('../models/post.model');

exports.userPosts = async (req, res) => {
    const post = req.body.post;
 
    const userPost = new Post({
        post,
    }); 
    
    // save post on the database
    await userPost.save()
        .then(() => res.json({ message: 'Post saved successfully' }))
        .catch(err => console.log('There was an error saving the post. ', err))
}
 
exports.getUserPost = async (req, res) => {
 	
    // get all the posts from the database
    await Post.find({ user: req.user.email })
        .then(response => {	
            if(!response) { 
                console.log('No post found')
            }

            res.json({
            	posts: response,
            	user: req.user
            });
        })
        .catch(err => console.log(err))
}
