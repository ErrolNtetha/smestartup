import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { formatDistance, subDays } from 'date-fns';
import axios from 'axios';

// these are the lists of the all posts
// call the useEffect hook to fetch all posts from the database

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    console.log(formatDistance(subDays(new Date(), 4), new Date(), { addSuffix: true }));

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

  return (
    <div>
      {toggleState ? <PostField /> : null}
      {posts.map((post) => <List post={post} name={post} key={post._id} />)}
    </div>
  );
};