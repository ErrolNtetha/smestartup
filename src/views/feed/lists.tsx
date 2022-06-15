import React from 'react';
import { PostField } from 'components/postField';
import axios from 'axios';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { Create } from 'components/create';
// import { useFetchData } from 'hooks/useFetchData';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
// import { SERVER_URL } from 'config/baseURL';
// import { useHistory } from 'react-router-dom';
// import { axiosInstance } from 'config/axiosInstance';

// these are the lists of all posts
// call the useEffect hook to fetch all posts from the database

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

    //    const feed = useFetchData(`${SERVER_URL}/feed`);

  React.useEffect(() => {
    const fetchPosts = async () => {
        await axios.get('http://localhost:5000/feed', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('accessToken')
            }
        })
      .then((res) => {
        setLoading(false);
          setPosts(res.data.posts.sort((a: string, b: string) => b.createdAt > a.createdAt));
          console.log(res.data.posts);
      })
      .catch((err) => console.error(err));
      };
      return fetchPosts();
  }, []);

  return (
    <div className='feed__feedWrapper'>
        {toggleState ? <PostField /> : null}
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
                title={post}
                author={post}
              />
              ))}
        {!toggleState
        ? <Create />
        : null}
    </div>
  );
};
