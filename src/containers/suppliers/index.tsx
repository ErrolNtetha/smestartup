import React from 'react';
import { Header } from 'views/header';
import { SupplierContainer } from 'views/suppliers';

export const Suppliers = () => {
    return (
        <>
            <Header />
            <section className='supplier'>
                <SupplierContainer />
            </section>
        </>
    );
};
