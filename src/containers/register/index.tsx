/* eslint-disable no-nested-ternary */
import React from 'react';
import { Header } from 'views/header';
import { Logo } from 'components/header/logo';
import { Personal } from './personal';

export const Register = () => {
    return (
        <>
            <Header>
                <Logo />
            </Header>
            <section className='register__formContainer'>
                <Personal />
            </section>
        </>
    );
};
