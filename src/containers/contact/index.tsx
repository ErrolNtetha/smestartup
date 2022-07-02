import React from 'react';
import { ContactForm } from 'views/contact';
import { Header } from '../../views/header';

export const Contact = () => {
  return (
    <>
      <Header />
      <section className='contact__wrapper'>
        <ContactForm />
      </section>
    </>
  );
};
