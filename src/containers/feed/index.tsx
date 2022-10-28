/* eslint-disable no-unused-expressions */
// import axios from 'axios';
import React from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { RootState } from 'store';
// import logged from 'store/actions/logged';
// import loggout from 'store/actions/loggout';
import og from 'assets/og.png';
import { Logo } from 'components/header/logo';
import { Helmet } from 'react-helmet-async';
import { FeedContainer } from '../../views/feed';
import { Header } from '../../views/header';

    export const Feed = () => {
    return (
        <>
            <Helmet>
                <title> Feed | Blendot </title>
                <meta property='og:title' content='Newsfeed' />
                <meta property='og:image' content={og} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:type' content='article' />
                <meta property='og:url' content='https://blendot.com/feed' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='og:description' content='Connect and share your thoughts and inspirations with the world of like minded people.' />
                <meta property='og:site_name' content='Blendot' />
            </Helmet>
            <Header>
                <Logo />
            </Header>
            <section className='feed__feedContainer'>
               <FeedContainer />
            </section>
        </>
    );
};
