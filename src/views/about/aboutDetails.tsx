import React from 'react';
import sc from 'assets/veges.jpg';
import coffee from 'assets/stirCoffee.jpg';

export const AboutDetails = () => {
    return (
        <section className='about__wrapper'>
            <section className='container'>
                <section className='about__missionContainer'>
                    <section className='about__mission'>
                        <h4 style={{ opacity: '.5', marginBottom: '0' }}> Our Mission </h4>
                        <h2 style={{ marginTop: '0' }}> Helping businesses to find suppliers in just few clicks away. </h2>
                        <article className='about__visionText'>
                            Our company exists to fill the gaps and improve how we do business
                            in South Africa. We are making
                            it possible for businesses to discover reputable suppliers accross the
                            country.
                        </article>
                        <article className='about__visionText'>
                            We understand that it can be hard and daunting to find the right suppliers at
                            the right time when you plan on opening a new business or when you want
                            to switch to a new supplier for different reason.
                        </article>
                    </section>
                    <img src={coffee} className='about__veges' alt='Vegetables' />
                </section>
                <hr className='global' style={{ borderStyle: 'dashed' }} />
                <section className='about__visionContainer'>
                    <section className='about__vision'>
                        <h4 style={{ opacity: '.5', marginBottom: '0' }}> Our Vision </h4>
                        <h2 style={{ marginTop: '0' }}> Bringing entrepreneurs together. </h2>
                        <article className='about__visionText'>
                            The aim is to be the brigde between the business who strive to
                            do transactions in exchange for goods and services. We are making
                            it possible for business to discover reputable suppliers accross the
                            country.
                        </article>
                        <article className='about__visionText'>
                            The aim is to be the brigde between the business who strive to
                            do transactions in exchange for goods and services. We are making
                            it possible for business to discover reputable suppliers accross the
                            country.
                        </article>
                    </section> <img src={sc} className='about__veges' alt='Vegetables' />
                </section>
            </section>
        </section>
    );
};
