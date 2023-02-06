import React from 'react';
import sc from 'assets/veges.jpg';
import coffee from 'assets/stirCoffee.jpg';

export const AboutDetails = () => {
    return (
        <section className='about__wrapper'>
            <section className='container'>
                <section className='about__missionContainer'>
                    <section className='about__mission'>
                        <article>
                            <h4 style={{ opacity: '.5', marginBottom: '0' }}> What is Blendot? </h4>
                            <h2 style={{ marginTop: '0' }}> A B2B marketplace. </h2>
                            <p className='about__visionText'>
                                Blendot is a company that aims to provide a comprehensive and reliable
                                platform for businesses to find and connect with trusted suppliers of
                                products and services. As a B2B marketplace, we understand the importance
                                of finding the right suppliers for your business needs.
                            </p>
                            <p className='about__visionText'>
                                Our company name stems from <strong>&quot;Blend the dots.&quot;</strong>,
                                which enforces the idea of connecting or uniting dots together to form something
                                more meaningful, in our case, businesses. The &quot;dot&quot; being the individual person
                                who has a business idea and wants to start a business and connect with other people.
                            </p>
                        </article>
                        <article>
                            <h4 style={{ opacity: '.5', marginBottom: '0' }}> But why Blendot, and not others? </h4>
                            <h2 style={{ marginTop: '0' }}> Innovative and trusted platform. </h2>
                            <p className='about__visionText'>
                                We are committed to providing our users with the best possible experience
                                and to building long-lasting relationships based on trust and mutual
                                benefit. We believe in transparency and custormer service, which is why we
                                carefully vet and verify all of our suppliers to ensure that you can find
                                the right fit for your business needs with confidence.
                            </p>
                        </article>
                    </section>
                </section>
                <section className='about__missionWrapper'>
                    <section className='about__innerContainer'>
                        <section className='about__mission'>
                            <h4 style={{ opacity: '.5', marginBottom: '0' }}> Our Mission </h4>
                            <h2 style={{ marginTop: '0' }}> Helping businesses to find suppliers, hustle-free. </h2>
                            <article className='about__visionText'>
                                Our company exists to fill the gaps and improve how we do business
                                in South Africa. We are making it possible for businesses to discover
                                reputable suppliers accross the country.
                            </article>
                            <article className='about__visionText'>
                                We understand that it can be hard and daunting to find the right suppliers at
                                the right time when you plan on opening a new business or when you want
                                to switch to a new supplier for different reason, so our platform is there to
                                make it easy for you.
                            </article>
                        </section>
                        <img src={coffee} className='about__veges' alt='Vegetables' />
                    </section>
                </section>
                <section className='about__missionWrapper'>
                    <section className='about__innerContainer'>
                        <section className='about__vision'>
                            <h4 style={{ opacity: '.5', marginBottom: '0' }}> Our Vision </h4>
                            <h2 style={{ marginTop: '0' }}> Bringing entrepreneurs together. </h2>
                            <article className='about__visionText'>
                                The aim is to be the brigde between businesses that strive to
                                create and do businesses in the grounds of fairness and opening opportunities
                                for other entrepreneurs in South Africa. Our goal is to make
                                it possible for businesses to access and discover reputable and trusted suppliers accross the
                                country in a single platform.
                            </article>
                            <article className='about__visionText' />
                        </section>
                        <img src={sc} className='about__veges' alt='Vegetables' />
                    </section>
                </section>
            </section>
        </section>
    );
};
