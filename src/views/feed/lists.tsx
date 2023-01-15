/* eslint-disable no-nested-ternary */

import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
// import { RootState } from 'store';
import { Create } from 'components/create';
// import { useSelector } from 'react-redux';
import { useFetchData } from 'hoc/useFetchData';
import { SkeletonPosts } from 'components/skeleton';
import { Button } from 'components/button';

interface Props {
    isOpen: boolean;
    isToggled: Function;
}

export const Lists = ({ isOpen, isToggled }: Props) => {
    const { data, loading, errorMessage } = useFetchData('/feed');

 return (
    <div className='feed__feedWrapper'>
        { loading
                ? <SkeletonPosts cards={4} />
                : errorMessage
                ? (
                    <section className='supplier__responseContainer'>
                        <p style={{ padding: '.8em 0' }}> {errorMessage} </p>
                        <Button className='supplier__retryButton' onClick={() => window.location.reload()}> Retry </Button>
                    </section>
                )
                : data?.posts?.map(({
                    post, image, author, _id, createdAt, stars
                }) => {
                    if (!data?.posts?.length) {
                         return 'empty';
                    }
                return (
                    <List
                      post={post}
                      image={image?.url}
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
                );
            })}
            {isOpen
                ? (
                    <section className='feed__modalPost'>
                        <PostField toggleField={isToggled} />
                    </section>
                )
                : <Create toggleField={isToggled} />}
    </div>
  );
};
