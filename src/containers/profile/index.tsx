import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Head } from 'views/profile/head';
import { Header } from 'views/header';

export const Profile = () => {
    const history = useHistory();

  return (
    <>
        <Header>
            <FiArrowLeft className='header__arrowLeft' onClick={() => history.goBack()} />
        </Header>
        <section className='profile__container'>
            <Head />
        </section>
    </>
  );
};
