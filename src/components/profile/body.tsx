import React from 'react';
import { NODE_ENV } from 'config/baseURL';
import { useFetchData } from '../../hooks/useFetchData';

export const Body = () => {
    const posts = useFetchData(`${NODE_ENV()}/posts`);
    console.log(posts);

    return (
        <section>
            posts
        </section>
    );
}
