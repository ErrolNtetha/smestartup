import React from 'react';
import { Head } from 'views/profile/head';
import { Header } from 'views/header';

export const Profile = () => {
  return (
    <>
      <Header />
      <section className='profile__container'>
          <Head />
      </section>
    </>
  );
};
