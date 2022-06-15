import React from 'react';
// import { useFetchData } from '../../hooks/useFetchData';
import { Post } from './post';

export const Body = () => {
    // const posts = useFetchData(`${NODE_ENV()}/posts`);
    //  console.log(posts);

    return (
        <section className='profile__bodyContainer'>
            <Post />
        </section>
    );
};
