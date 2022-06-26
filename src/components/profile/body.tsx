/* eslint-disable no-nested-ternary */
import React from 'react';
import { SyncLoader } from 'react-spinners';
import { Button } from 'components/button';
import { UserPosts } from './post';
import { useFetchPosts } from '../../hoc/useFetchPosts';
// import { Tabs } from './tabs';

export const Body = () => {
    const { posts, error, loading } = useFetchPosts();

    return (
        <section className='profile__bodyContainer'>
            {
                loading
                ? <section className='profile__loadingContainer'> <SyncLoader color='white' /> </section>
                : error === 'ECONNABORTED'
                ? <section className='profile__errorContainer'> Connection is taking taking longer than expected. Check your internet connection and retry. <Button className='profile__retry'> Retry </Button> </section>
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
