import React from 'react';
import { Hero } from '../../views/hero';
import { Header } from '../../views/header';

// interface Props extends RouteComponentProps {}

export const Home: React.FC = () => {
    return (
        <section className='home'>
            <Header />
            <section className='home__asideLeft'>
                <Hero />
            </section>
        </section>
    );
};