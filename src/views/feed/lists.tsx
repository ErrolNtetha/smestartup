/* eslint-disable no-nested-ternary */

import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { Create } from 'components/create';
import { useSelector } from 'react-redux';
// import { ScaleLoader } from 'react-spinners';
import { useFetchData } from 'hoc/useFetchData';
import { SkeletonPosts } from 'components/skeleton';
import { Button } from 'components/button';

export const Lists = () => {
    const toggleState = useSelector((state: RootState) => state.isToggleOn);
    const { data, loading, errorMessage } = useFetchData('/feed');

 return (
    <div className='feed__feedWrapper'>
        {toggleState ? <PostField /> : null}
        { loading
                ? <SkeletonPosts cards={10} />
                : errorMessage
                ? (
                    <section className='supplier__responseContainer'>
                        <p style={{ padding: '.8em 0' }}> {errorMessage} </p>
                        <Button className='supplier__retryButton' onClick={() => window.location.reload()}> Retry </Button>
                    </section>
                )
                : data?.posts?.map(({
                    post, postImage, author, _id, createdAt, stars
                }) => (
              <List
                post={post}
                image={postImage}
                isVerified={author?.isVerified}
                name={author?.name}
                key={_id}
                date={createdAt}
                id={_id}
                occupation={author?.occupation}
                authorID={author?._id}
                avatar={author?.avatar}
                stars={stars}
              />
              ))}
        {!toggleState
        ? <Create />
        : null}
    </div>
  );
};
