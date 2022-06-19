import React from 'react';
import { PostField } from 'components/postField';
import { axiosPrivate } from 'config/axiosInstance';
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

  React.useEffect(() => {
    const fetchPosts = async () => {
        await axiosPrivate.get('/feed')
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
