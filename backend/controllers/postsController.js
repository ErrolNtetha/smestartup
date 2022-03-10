const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
	// populate the user::: Get their first name, store in a variable
	// and pass variable to the save method
	const { name: { firstName, lastName }, avatar } = await User.findOne({ email: req.user.email })
	console.log(avatar);
		
    const post = req.body.post;
 
    const userPost = new Post({
    	user: `${firstName} ${lastName}`,
        post
    }); 
    
   
    
    // save post on the database
    await userPost.save()
        .then(() => res.json({ message: 'Post saved successfully' }))
        .catch(err => console.log('There was an error saving the post. ', err))
}
 
exports.getUserPost = async (req, res) => {

    // get all the posts from the database
    await Post.find({ })
        .then(response => {	
            if(!response) { 
                console.log('No post found')
            }

            res.json({
            	posts: response,
            });
        })
        .catch(err => console.log(err))
}
