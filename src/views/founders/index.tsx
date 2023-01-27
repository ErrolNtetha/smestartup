import { Logo } from 'components/header/logo';
import React from 'react';
import { Header } from 'views/header';
import { HelmetTags } from 'components/helmet';
import { ComingSoon } from './comingSoon';

export const Founder = () => {
    return (
        <section className='founder'>
            <Header>
                <Logo />
            </Header>
            <HelmetTags
              title='Coming Soon | Blendot'
              ogTitle='This is page is coming soon!'
              ogUrl='https://blendot.com/founders'
              ogType='article'
              ogSiteName='Blendot'
              ogDescription='Meet entrepreneurs who aspires to be great with unique skills required for your business. | Blendot'
            />
            <ComingSoon />
        </section>
    );
};
