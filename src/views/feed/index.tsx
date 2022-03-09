import React from 'react';
import { Create } from 'components/create';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { Followers } from './followers';
import { Sidebar } from './sidebar';
import { Lists } from './lists';

export const FeedContainer = () => {
const toggleState = useSelector((state: RootState) => state.isToggleOn);

  return (
    <section className='feed'>
        <Sidebar />
        <Lists />
        <Followers />
        {!toggleState
        ? <Create />
        : null}
    </section>
  );
};