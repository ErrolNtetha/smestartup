import React from 'react';
// import { Followers } from './followers';
import { Sidebar } from './sidebar';
import { Lists } from './lists';

export const FeedContainer = () => {
  return (
    <section className='feed'>
        <section className='feed__mainContent container'>
            <Sidebar />
            <Lists />
            <section className='feed__rightColumn' />
        </section>
    </section>
  );
};
