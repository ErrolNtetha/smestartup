/* eslint-disable no-nested-ternary */
import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { Button } from 'components/button';
import { UserPosts } from './post';
import { useFetchPosts } from '../../hoc/useFetchPosts';

export const Body = () => {
    const { posts, error, loading } = useFetchPosts();

    return (
        <section className='profile__bodyContainer'>
            {
                loading
                ? <section className='profile__loadingContainer'> <ScaleLoader color='white' /> </section>
                : error === 'ECONNABORTED'
                ? <section className='profile__errorContainer'> Connection is taking longer than expected. Check your internet connection and try again. <Button className='profile__retry'> Retry </Button> </section>
                : posts.map(({ post, createdAt, _id }) => (
                    <UserPosts
                      post={post}
                      date={createdAt}
                      id={_id}
                    />
                    ))
            }
        </section>
    );
};
