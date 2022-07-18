import React from 'react';
import { Filter } from './filter';
import { Results } from './results';

export const SupplierContainer = () => {
    return (
        <section className='supplier__container'>
            <Filter />
            <Results />
        </section>
    );
};
