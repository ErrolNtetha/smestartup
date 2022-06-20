/* eslint-disable no-nested-ternary */
import React from 'react';
import { UserPosts } from './post';
import { useFetchPosts } from '../../hoc/useFetchPosts';
// import { Tabs } from './tabs';

export const Body = () => {
    const { posts, error } = useFetchPosts();
    console.log(posts);
    console.log(error);

    return (
        <section className='profile__bodyContainer'>
            {
                !posts.length
                ? 'loading'
                : posts.map(({ post, createdAt, _id }) => (
                    <UserPosts
                      post={post}
                      date={createdAt}
                      id={_id}
                    />
                    ))
                ? error === 'ECONNABORTED'
                : 'There was a problem with your connection.'
            }
        </section>
    );
};
