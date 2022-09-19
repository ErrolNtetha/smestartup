import React from 'react';
import { Logo } from 'components/header/logo';
import { Header } from 'views/header';
import { Container } from 'views/faq';

export const FAQ = () => {
  return (
    <>
        <Header>
            <Logo />
        </Header>
        <section className='faq__container'>
            <Container />
        </section>
    </>
  );
};
