import React from 'react';
import { Footer } from 'views/footer';
import { AboutUs } from './aboutus';
import { AboutDetails } from './aboutDetails';
// import screenshot from 'assets/feed1.png';

export const AboutWrapper = () => {
    return (
        <section className='about'>
            <section className='about__container'>
                <AboutUs />
                <AboutDetails />
            </section>
            <Footer />
        </section>
    );
};
