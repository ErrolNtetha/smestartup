import React from 'react';
import { Followers } from './followers';
import { Sidebar } from './sidebar';
import { Lists } from './lists';

export const FeedContainer = () => {
  return (
    <section className='feed'>
        <Sidebar />
        <Lists />
        <Followers />
    </section>
  );
};
