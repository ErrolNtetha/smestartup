import React from 'react';
import { Create } from 'components/create';
import { Followers } from './followers';
import { Sidebar } from './sidebar';
import { Lists } from './lists';

export const FeedContainer = () => {
  return (
    <section className='feed'>
        <Sidebar />
        <Lists />
        <Followers />
        <Create />
    </section>
  );
};