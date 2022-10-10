import React from 'react';

export const AboutUs = () => {
    return (
        <section className='about__intro'>
            <section className='about__innerIntro container'>
                <span className='about__left'>
                <h2> Who we are, <br /> And why us...</h2>
                <p>
                    We are a start-up company based in <b style={{ borderBottom: '2px solid black' }}>South Africa </b>
                    aiming to bring together business-minded people and promote SMMEs within the country and beyond.
                </p>
                </span>
            <section className='about__screenshot' />
            </section>
        </section>
    );
};
