import React from 'react';
import { Header } from 'views/header';
import { Logo } from 'components/header/logo';
import { RegisterSupplier } from './registerSupplier';

export const RegisterWrapper = () => {
    return (
        <>
            <Header>
                <Logo />
            </Header>
            <section>
                <RegisterSupplier />
            </section>
        </>
    );
};
