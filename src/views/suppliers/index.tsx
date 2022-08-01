/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Filter } from './filter';
import { Results } from './results';
import { Preview } from './preview';

export const SupplierContainer = () => {
    return (
        <section className='supplier__container'>
            <Filter />
            <section className='supplier__bodyContainer'>
                <Results />
                <Preview />
            </section>
        </section>
    );
};
