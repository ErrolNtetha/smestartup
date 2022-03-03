import React from 'react';
import { Hero } from '../../views/hero';
import { Header } from '../../views/header';
import { Features } from '../../views/features';
import { Footer } from '../../views/footer';

// interface Props extends RouteComponentProps {}

export const Home: React.FC = () => {
    return (
        <section className='home'>
            <Header />
            <section className='home__asideLeft'>
                <Hero />
                <Features />
                <Footer />
            </section>
        </section>
    );
};