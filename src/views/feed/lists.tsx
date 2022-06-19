import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { Create } from 'components/create';
// import { useFetchData } from 'hooks/useFetchData';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { useFetchData } from 'hoc/useFetchData';

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
    const response = useFetchData('/feed');

    const { posts } = response.data;
    console.log(response.data.posts);

 return (
    <div className='feed__feedWrapper'>
        {toggleState ? <PostField /> : null}
        { response.loading ? <section className='feed__loader'> <ScaleLoader color='white' /> </section>
          : posts?.map((item) => (
              <List
                post={item.post}
                image={item.encodedImage}
                isVerified={item.user.isVerified}
                name={item.user.name}
                key={item._id}
                date={item.createdAt}
                id={item._id}
                occupation={item.user.occupation}
                author={item.user._id}
              />
              ))}
        {!toggleState
        ? <Create />
        : null}
    </div>
  );
};
