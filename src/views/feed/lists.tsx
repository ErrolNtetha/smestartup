import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { Create } from 'components/create';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { useFetchData } from 'hoc/useFetchData';

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
    const response = useFetchData('/feed');
    const { posts } = response.data;

 return (
    <div className='feed__feedWrapper'>
        {toggleState ? <PostField /> : null}
        { response.loading ? <section className='feed__loader'> <ScaleLoader color='white' /> </section>
                : posts?.sort((a: string, b: string) => b.createdAt > a.createdAt).map(({
                    post, encodedImage, author, _id, createdAt
                }) => (
              <List
                post={post}
                image={encodedImage}
                isVerified={author?.isVerified}
                name={author?.name}
                key={_id}
                date={createdAt}
                id={_id}
                occupation={author?.occupation}
                avatar={author?.avatar}
              />
              ))}
        {!toggleState
        ? <Create />
        : null}
    </div>
  );
};
