import React from 'react';
import { Button } from 'components/button';
import notFound from 'assets/svg/NotFound.svg';
import { useHistory } from 'react-router-dom';
import { Header } from 'views/header';

export const NotFound = () => {
    const history = useHistory();

  return (
    <>
        <Header />
        <section className='feed__notFoundWrapper'>
        <div className='feed__notFound'>
            <img src={notFound} alt='Page not found' className='feed__notFoundSVG' />
            <p style={{ fontSize: '2.8rem', margin: '.5em 0' }}> Ooopps! </p>
            <br />
            <p style={{ textAlign: 'center' }}> Looks like you are trying to access a page that does not exist. </p>
        </div>
        <Button onClick={() => history.goBack()} className='feed__goBack'> Go Back </Button>
        </section>
    </>
  );
};
