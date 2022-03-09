import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import axios from 'axios';

// these are the lists of the all posts
// call the useEffect hook to fetch all posts from the database

export const Lists = () => {
const toggleState = useSelector((state: RootState) => state.isToggleOn);
const [posts, setPosts] = React.useState([]);

React.useEffect(() => {
  axios.get('/feed', {
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  })
    .then((res) => {
      setPosts(res.data.posts);
    })
    .catch((err) => console.error(err));
}, []);

console.log(posts);

    return (
        <div>
            { toggleState ? <PostField /> : null }
            {posts.map((post) => {
                return <List post={post} name={post} key={post._id} />;
            })}
        </div>
    );
};