import React from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { BASE_URL } from 'config/baseURL';
import { Helmet } from 'react-helmet-async';
import home from 'assets/home.png';
import { Hero } from '../../views/hero';
import { Header } from '../../views/header';
import { Features } from '../../views/features';
import { Footer } from '../../views/footer';

// interface Props extends RouteComponentProps {}

export const Home: React.FC = () => {
    return (
        <section className='home'>
            <Helmet>
                <title> Find Investors and Enterpreneurs In One Platform | Blendot </title>
                <meta name='description' content='A platform to meet entrepreneurs and investors, share ideas and create connections. ' />
                <meta property='og:title' content='A friendly community space for entrepreneurs to collaborate and share amazing insights and ideas.' />
                <meta property='og:type' content='article' />
                <meta property='og:image' content={home} />
                <meta property='og:url' content='http://blendot.com' />
            </Helmet>
            <Header />
            <section className='home__asideLeft'>
                <Hero />
                <Features />
                <Footer />
            </section>
        </section>
    );
};
