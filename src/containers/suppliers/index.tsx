import React from 'react';
import { Header } from 'views/header';
import { SupplierContainer } from 'views/suppliers';
import { Logo } from 'components/header/logo';

export const Suppliers = () => {
    return (
        <>
            <Header>
                <Logo />
            </Header>
            <section className='supplier'>
                <SupplierContainer />
            </section>
        </>
    );
};
