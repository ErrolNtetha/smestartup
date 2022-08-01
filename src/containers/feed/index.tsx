/* eslint-disable no-unused-expressions */
// import axios from 'axios';
import React from 'react';
import { Logo } from 'components/header/logo';
import { FeedContainer } from '../../views/feed';
import { Header } from '../../views/header';

    export const Feed = () => {
       return (
        <>
            <Header>
                <Logo />
            </Header>
            <section className='feed__feedContainer'>
               <FeedContainer />
            </section>
        </>
    );
};
