const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {

	let userInfo = '';

	const user = await User.find({ email: req.user.email })
		.then((result => {
			const { firstName } = result[0].name;
			userInfo = firstName;
			console.log('Test ', userInfo);
		}))
		.catch((err) => console.error(err))
		
    const post = req.body.post;
 
    const userPost = new Post({
    	user: userInfo,
        post,
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
