import React from 'react';
import sc from 'assets/veges.jpg';
import coffee from 'assets/stirCoffee.jpg';

export const AboutDetails = () => {
    return (
    <section className='about__wrapper'>
        <section className='about__missionContainer'>
            <section className='about__mission'>
                <h4 style={{ opacity: '.5', marginBottom: '0' }}> Our Mission </h4>
                <h2 style={{ marginTop: '0' }}> Helping you find your next supplier with just few clicks away. </h2>
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
    );
};
