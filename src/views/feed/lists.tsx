import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// these are the lists of all posts
// call the useEffect hook to fetch all posts from the database

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();

  React.useEffect(() => {
    axios.get('/feed', {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
      .then((res) => {
        if (res.data.isLoggedIn === 'false') {
          // i want to check for the response and if returns false, redirect to login screen
          history.push('/login');
          return;
        }

        setLoading(false);
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <section className='feed__postFieldContainer'>
        {toggleState ? <PostField /> : null}
      </section>
      { loading ? <section className='feed__loader'> <ScaleLoader color='white' /> </section> : posts.map((post) => <List post={post} name={post} key={post._id} date={post.createdAt} id={post._id} />)}
    </div>
  );
};