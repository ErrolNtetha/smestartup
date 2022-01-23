import React from 'react';
import Post from './Post';


export default function Feed() {

    const posts = ['post 1', 'post 2', 'post 1', 'post 2', 'post 1', 'post 2'];

    return (
        <section className='feedContainer'>
            <aside>
                this is the left content
            </aside>   
            <main>
                {posts.map(post => <Post post={post} /> )}
            </main>
            <aside>
                this is the right content
            </aside>
        </section>
    )
}
