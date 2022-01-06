const Post = require('../models/post.model');

exports.userPosts = (req, res) => {
   
    console.log(req.body);
 
    // const userPost = new Post({
    //     post,
    // }); 
    
    // // save post on the database
    // userPost.save()
    //     .then(res => console.log('Post saved successfully'))
    //     .catch(err => console.log('There was an error saving the post. ', err))
}
 
exports.getUserPost = async (req, res) => {
    
    // get all the posts from the database
    await Post.find({ author: 'Mphumeleli Ntetha' })
        .then(res => {
            if(!res) {
                console.log('No post found')
            }

            else console.log(res)
        })
        .catch(err => console.log(err))
}
