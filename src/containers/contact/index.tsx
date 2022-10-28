import React from 'react';
import { Logo } from 'components/header/logo';
import { ContactPage } from 'views/contact';
import { Helmet } from 'react-helmet-async';
import og from 'assets/og.png';
import { Header } from '../../views/header';

export const Contact = () => {
    return (
    <section className='contact'>
        <Header>
            <Logo />
        </Header>
        <Helmet>
            <title> Get in touch with us | Blendot </title>
            <meta property='og:title' content='Send us an enquiry | Bledot' />
            <meta property='og:image' content={og} />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />
            <meta property='og:type' content='article' />
            <meta property='og:url' content='https://blendot.com/contact' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta property='og:description' content='You are welcomed to ask us an question you might have about us.' />
            <meta property='og:site_name' content='Blendot' />
        </Helmet>
        <section className='contact__contactContainer container'>
          <ContactPage />
        </section>
    </section>
  );
};
