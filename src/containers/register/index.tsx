/* eslint-disable no-nested-ternary */
import React from 'react';
import { Header } from 'views/header';
import { Personal } from './personal';

export const Register = () => {
    return (
        <>
            <Header />
            <section className='register__formContainer'>
                <Personal />
            </section>
        </>
    );
};
