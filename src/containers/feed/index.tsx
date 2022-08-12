/* eslint-disable no-unused-expressions */
// import axios from 'axios';
import React from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { RootState } from 'store';
// import logged from 'store/actions/logged';
// import loggout from 'store/actions/loggout';
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
