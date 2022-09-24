import { Logo } from 'components/header/logo';
import React from 'react';
import { Header } from 'views/header';
// import { Helmet } from 'react-helmet-async';
import { HelmetTags } from 'components/helmet';
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
            <HelmetTags
              title='Browse Co-founders for your business idea | Blendot'
              ogTitle='Find Co-founders with just few clicks'
              ogUrl='https://blendot.com/founders'
              ogType='article'
              ogSiteName='Blendot'
              ogDescription='Meet entrepreneurs who aspires to be great with unique skills required for your business. | Blendot'
            />
            {loading
            ? <span className='founder__loader'><ScaleLoader color='#fff' /></span>
            : data?.founders?.map((founder) => (
                <Home user={founder} />
            ))}
        </section>
    );
};
