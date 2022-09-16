import { Logo } from 'components/header/logo';
import React from 'react';
import { Header } from 'views/header';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from 'hoc/useFetchData';
import { ScaleLoader } from 'react-spinners';
import { Home } from './home';

export const Founder = () => {
    const { data, loading } = useFetchData('/founders');

    return (
        <section className='founder'>
            <Header>
                <Logo />
            </Header>
            <Helmet>
                <title> Browse Co-founders for your business idea | Blendot </title>
                <meta property='og:title' content='Find Co-founders with just few clicks' />
                <meta property='og:type' content='article' />
                <meta property='og:url' content='https://blendot.com/suppliers' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='og:description' content='Finding suppliers for your business has never been easy. Search thousands of suppliers by location and settle your deals.' />
                <meta property='og:site_name' content='Blendot' />
            </Helmet>
        {loading
            ? <span className='founder__loader'><ScaleLoader color='#fff' /></span>
            : data?.founders?.map((founder) => (
                <Home author={founder} />
            ))}
        </section>
    );
};
