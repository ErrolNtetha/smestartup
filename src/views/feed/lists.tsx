import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
// import { useFetchData } from 'hooks/useFetchData';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
// import { useHistory } from 'react-router-dom';
// import { SERVER_URL } from 'config/baseURL';
import axios from 'axios';

// these are the lists of all posts
// call the useEffect hook to fetch all posts from the database

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

    //    const feed = useFetchData(`${SERVER_URL}/feed`);

  React.useEffect(() => {
    const fetchPosts = async () => {
        await axios.get('https://backend-sme.herokuapp.com/feed', {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
      .then((res) => {
        setLoading(false);
        setPosts(res.data.posts.sort((a: string, b: string) => a.createdAt < b.createdAt));
          console.log(res.data.posts);
      })
      .catch((err) => console.error(err));
      };
      return fetchPosts();
  }, []);

  return (
    <div>
      <section className='feed__postFieldContainer'>
        {toggleState ? <PostField /> : null}
      </section>
      { loading ? <section className='feed__loader'> <ScaleLoader color='white' /> </section>
          : posts.map((post) => (
              <List
                post={post}
                image={post}
                isVerified={post}
                name={post}
                key={post._id}
                date={post}
                id={post}
              />
              ))}
    </div>
  );
};
